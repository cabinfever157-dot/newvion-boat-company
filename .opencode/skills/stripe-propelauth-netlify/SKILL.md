---
name: stripe-propelauth-netlify
description: Complete guide for setting up and troubleshooting Stripe payment processing with PropelAuth user management on Netlify. Use when implementing subscription payments, fixing webhook issues, or diagnosing metadata update failures in Stripe+PropelAuth integrations.
---

# Stripe + PropelAuth + Netlify Integration

Complete, battle-tested workflow for implementing Stripe subscription payments with PropelAuth user authentication on Netlify serverless functions.

## Architecture Overview

```
User → Frontend (React) → Netlify Function → Stripe Checkout
                                ↓
                          PropelAuth (user metadata)
                                ↑
                          Stripe Webhook
```

## Complete Setup Checklist

### 1. Stripe Configuration
1. Create products and prices in Stripe Dashboard
2. Create webhook endpoint: `https://yourdomain.com/.netlify/functions/stripe-webhook`
3. Subscribe to: `checkout.session.completed`, `customer.subscription.created/updated/deleted`
4. Copy webhook signing secret (`whsec_`)

**Environment Variables (Netlify):**
```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

> **Critical**: All Stripe keys must be from the same mode (all live or all test).

### 2. PropelAuth Configuration
1. Settings → API Keys → Create key with **write access** (uncheck "Read-only")
2. Settings → User Properties → Verify `metadata` property exists (type: JSON)

**Environment Variables:**
```
PROPELAUTH_API_KEY=...
VITE_PROPELAUTH_AUTH_URL=https://auth.yourdomain.org
VITE_PROPELAUTH_PUBLIC_KEY=-----BEGIN PUBLIC KEY-----...
```

### 3. Netlify Function: create-checkout-session

```typescript
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-12-18.acacia' });

export const handler = async (event) => {
  const { priceId, userId, email } = JSON.parse(event.body);
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.URL}/checkout`,
    customer_email: email,
    metadata: { userId },  // CRITICAL: Pass userId for webhook
  });
  return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
};
```

### 4. Netlify Function: stripe-webhook

```typescript
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-12-18.acacia' });

async function updatePropelAuthMetadata(userId: string, subscriptionStatus: string) {
  await fetch(`${process.env.VITE_PROPELAUTH_AUTH_URL}/api/backend/v1/user/${userId}`, {
    method: "PUT",
    headers: { "Authorization": `Bearer ${process.env.PROPELAUTH_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ properties: { metadata: { subscription_status: subscriptionStatus } } }),
  });
}

export const handler = async (event) => {
  const stripeEvent = stripe.webhooks.constructEvent(event.body, event.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET!);
  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object;
    if (session.metadata.userId) await updatePropelAuthMetadata(session.metadata.userId, 'Premium');
  }
  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};
```

## Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| 401 Unauthorized | Read-only API key | Create write-access key in PropelAuth |
| 400 "Unknown field" | Wrong body structure | Use `properties.metadata.subscription_status` (not top-level) |
| 200 OK but no update | Missing userId in metadata | Ensure frontend passes `userId` to create-checkout-session |
| Webhook not firing | Test/Live mode mismatch | Ensure all keys are from same mode |
