---
name: generative-ui
description: Installs and configures CopilotKit for Generative UI. Use when the user wants to add "AI building UI" or "Copilot" features to a React app.
---

# Generative UI (CopilotKit) Integration

## When to use this skill
- User wants to add "Generative UI" or "AI Widgets".
- User mentions "CopilotKit" or "Co-pilot".
- User wants the app to build its own dashboard/components on the fly.

## Workflow
- [ ] Check `package.json` for React 19 (requires `--legacy-peer-deps`).
- [ ] Install dependencies: `@copilotkit/react-core`, `@copilotkit/react-ui`, `@copilotkit/runtime`.
- [ ] Backend: Create `server/copilot.ts` with `OpenAIAdapter` (using Ollama/Kimi).
- [ ] Frontend: Wrap `App.tsx` with `<CopilotKit>` and `<CopilotSidebar>`.

## Instructions

### 1. Backend Setup (`server/copilot.ts`)

For production-ready deployment, always prefer **OpenAI** or **Gemini** providers unless local processing is specifically requested.

```typescript
import { CopilotRuntime, OpenAIAdapter, copilotRuntimeNodeExpressEndpoint } from "@copilotkit/runtime";
import { Router } from "express";
import OpenAI from "openai";

export const copilotRouter = Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const runtime = new CopilotRuntime();

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

> [!TIP]
> **Deployment Note**: 99%+ of projects are intended for public internet deployment. Avoid `ExperimentalOllamaAdapter` unless specifically asked for local testing.

### 2. Frontend Setup (`client/src/App.tsx`)

```tsx
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

// in your App component return:
<CopilotKit runtimeUrl="/api/copilotkit">
  <CopilotSidebar>
    {/* Your existing Layout/Router */}
  </CopilotSidebar>
</CopilotKit>
```
