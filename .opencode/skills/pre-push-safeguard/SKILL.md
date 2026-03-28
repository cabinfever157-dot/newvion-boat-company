# Safeguard: Pre-Push Visual Verification

**Trigger**: Anytime a `git push` command is requested, specifically after scaffolding or auto-generating layout files (e.g., via `create-next-app` or a similar tool).

**Rule**:
1. **NEVER** execute a `git push` to a production or main tracking branch without first running a local build (`npm run build`).
2. **NEVER** push layout modifications without performing a Visual Audit via the browser subagent (`http://localhost:3000`).
3. If the codebase's `layout.tsx` or `page.tsx` was recently reset to generic boilerplate (e.g., standard Next.js templates) when a distinct custom UI ("Editorial Coastal Luxury") previously existed, **HALT** the push and alert the user immediately.

This rule prevents the catastrophic overwrite of custom UI components with generic scaffolding from being pushed to live environments like Netlify.
