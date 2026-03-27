# Architect Planner Skill (Model Segmentation & Handoff)

> **Trigger**: `/plan [Feature/Request]`
> **Description**: Breaks down a complex user request into a model-segmented action plan, assigning specific roles (`architect`, `builder`, `coder`) to each step with precise instructions.

---

## 🏗️ The Protocol

When triggered, I will analyze your request and generate a **Structured Action Plan** in `implementation_plan.md` that looks like this:

### Phase 1: Architecture & Data (Role: `architect`)
**Goal**: Define the structure.
**Instructions**:
1.  Read `content/content-map.ts`.
2.  Define the schema in `db/schema.ts`.
3.  **Step Completion**: "Zen, please report: 'Step 1 Complete' to the user."

### Phase 2: Heavy Lifting (Role: `builder`)
**Goal**: Build the core files.
**Instructions**:
1.  Scaffold `app/page.tsx`.
2.  Create components.
3.  **Step Completion**: "Zen, please report: 'Step 2 Complete' to the user."

### Phase 3: Polish (Role: `coder`/`vision`)
**Goal**: Refine and verify.
**Instructions**:
1.  Fix lint errors.
2.  Verify in Browser.
3.  **Step Completion**: "Zen, please report: 'Step 3 Complete' to the user."

---

## 🔄 Context Handoff Protocol (The "Save Game")

**Trigger**: Users says "Context high", "End session", or "Prepare for reset".
**Action**:
1.  **Analyze State**: Scan `task.md` for `[/]` (in-progress) and `[ ]` (pending) items.
2.  **Update Handoff File**: Overwrite `SESSION_HANDOFF.md` in the project root with:
    -   **Current Phase**: What exactly are we doing?
    -   **Next Action**: The exact command the user should run next.
    -   **Open Tasks**: List of incomplete items.
    -   **Critical Context**: Any specific decisions/variables to remember.
3.  **Report**: "Session Saved. Run `/new`. checking `SESSION_HANDOFF.md` on resume."

---

## 🚀 Resume Protocol

**Trigger**: User says "Resume" or "I'm back".
**Action**:
1.  **Read**: `SESSION_HANDOFF.md`.
2.  **Restore**: Load the context into short-term memory.
3.  **Execute**: Suggest the "Next Action" immediately.
