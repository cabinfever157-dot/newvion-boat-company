---
name: app-omniscience
description: Installs an "End-User Copilot" that can answer questions about the app itself.
---

# App Omniscience (End-User Copilot) Integration

## When to use this skill
- User wants to add a "Help" or "Ask AI" feature for *end users*.
- User wants the app to be "Self-Documenting".
- User wants to query the app's business logic or rules from within the UI.

## Instructions

### 1. Backend Setup (`server/copilot.ts`)

Create `server/copilot.ts` with the "System Context" injection:

```typescript
import { CopilotRuntime, OpenAIAdapter, copilotRuntimeNodeExpressEndpoint } from "@copilotkit/runtime";
import { Router } from "express";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

export const copilotRouter = Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const runtime = new CopilotRuntime();

// Read the generated system context
const systemContextPath = path.join(__dirname, "system-context.md");
let systemContext = "You are a helpful assistant.";
if (fs.existsSync(systemContextPath)) {
  systemContext = fs.readFileSync(systemContextPath, "utf-8");
}

copilotRouter.all("/copilotkit", (req, res, next) => {
  const serviceAdapter = new OpenAIAdapter({
    openai,
    model: "gpt-4o",
  });

  const handler = copilotRuntimeNodeExpressEndpoint({
    endpoint: "/api/copilotkit",
    runtime,
    serviceAdapter,
  });

  return handler(req, res, next);
});
```

### 2. Context Generation Script

Run this script to generate `server/system-context.md` based on the current codebase.

```bash
npx tsx .opencode/skills/app-omniscience/scripts/generate-context.ts
```

### 3. Frontend Setup

Wrap `App.tsx`:

```tsx
<CopilotKit runtimeUrl="/api/copilotkit">
  <CopilotPopup
    instructions={"You are a helpful assistant for this specific application. Answer questions based on the system context."}
    labels={{
      title: "App Assistant",
      initial: "Hi! I know everything about this app. Ask me anything.",
    }}
  />
  {/* Rest of App */}
</CopilotKit>
```
