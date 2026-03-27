# Agent Teams Skill

> **Trigger**: User types `/agent team [Objective]`
> **Description**: Orchestrates a multi-phase workflow where YOU (the current model) simulate a team of specialized roles. Each phase is a mental mode switch — NOT an agent type command, NOT a model switch. You remain the active model throughout.
> **Integrations**: Uses `ralph_loop` (Sequential Thinking), `memory`, `neon`, `web_search`, `stitch`, `browser` MCPs.

---

> [!IMPORTANT]
> **CRITICAL RULE — READ FIRST**: The roles listed in each phase (e.g., "Architect Hat", "Tech Lead Hat") are **PERSONAS** — not OpenCode agent types, not `/models` commands, and not any kind of tool call. Do NOT attempt to switch agent types. Do NOT call any "set_agent" or "agent_type" function. Simply adopt the described mindset and responsibilities for that phase, then proceed.

---

## 🏗️ The Agent Team Protocol (Hardened Mode)

When this skill is active, you are the **Orchestrator** of a virtual team. You wear different hats per phase. Every inter-agent handoff MUST use the defined structured schema. **Natural language specs are expressly forbidden.**

---

### 🧠 Phase 0: Context Load (🎩 Hat: **Context Loader**)
**Responsibility**: Load the collective intelligence *before* any planning begins.
1. **Memory Check**: Search `memory` for project preferences, style guides, or past decisions.
2. **Schema Check**: If the request involves data, query `neon` to get the *actual* database schema. **Do not guess.**
3. **Knowledge Check**: If the request involves new libraries, use `web_search` to find the latest API docs.

---

### 🛑 Phase 1: The Ralph Loop (🎩 Hat: **Strategic Thinker**)
**Responsibility**: The strategic pause. No planning begins until this completes.
1. **Trigger**: Call `ralph_loop`.
2. **Think**: Simulate the execution end-to-end. Identify risks. Adjust intent based on Phase 0 findings.

---

### 👤 Phase 2: The Architect (🎩 Hat: **System Designer**)
**Responsibility**: Produce a machine-readable **MANIFEST**. This is a structured JSON contract, not a prose document.

> ⚠️ **HARD RULE**: The output of this phase MUST be a valid JSON block. If prose is produced instead of JSON, STOP and loop back. Do not proceed to Phase 3 with a malformed manifest.

**Output format**:
```json
{
  "objective": "Brief, one-sentence description of the task",
  "user_story": "As a [user], I want [action] so that [outcome].",
  "schema_changes": [
    { "table": "users", "action": "add_column", "column": "avatar_url", "type": "text" }
  ],
  "file_manifest": [
    {
      "action": "CREATE | MODIFY | DELETE",
      "path": "app/dashboard/page.tsx",
      "exports": ["DashboardPage"],
      "dependencies": ["@/components/ui/data-table", "@/lib/db/users"]
    }
  ],
  "constraints": [
    "Must use the existing Card component from shadcn/ui",
    "No new npm packages without approval"
  ]
}
```

**Schema Validation Rules**:
- `action` must be one of: `CREATE`, `MODIFY`, `DELETE`. No other values are permitted.
- `path` must be a valid relative file path from the project root.
- `dependencies` must only reference packages that already exist in `package.json` OR were explicitly approved in `constraints`.
- If any field is ambiguous or missing, **STOP** and surface the ambiguity to the user before proceeding.

---

### 👷 Phase 3: The Tech Lead (🎩 Hat: **Scaffolder**)
**Responsibility**: Scaffold the structure by consuming the Phase 2 MANIFEST JSON. Do not interpret — execute.
1. **Parse**: Read the `file_manifest` array from the MANIFEST JSON.
2. **Validate**: Confirm every `path` in the manifest is reachable given the current project structure.
3. **Scaffold**: Create directories and empty files as defined. Do not write logic yet.
4. **Delegate**: Emit an explicit task list for the Developer phase based strictly on the manifest entries.

> ⚠️ **HARD RULE**: If the `file_manifest` JSON is malformed or a `path` is invalid, **LOOP BACK** to Phase 2. Do not improvise.

---

### 👨‍💻 Phase 4: The Developer (🎩 Hat: **Builder**)
**Responsibility**: Implement strictly within the boundaries of the Phase 2 MANIFEST.
1. **UI Tasks**: If an entry has a UI component, use `stitch` to generate it.
2. **Logic Tasks**: Write the TypeScript/React code manually.
3. **Standards**: Strict adherence to `rules.md`. No new patterns unless defined in `constraints`.
4. **Scope Lock**: MUST NOT create, modify, or delete any file not listed in the `file_manifest`. If a gap is discovered, **STOP** and surface it before proceeding.

---

### 🕵️ Phase 5: The Code Reviewer (🎩 Hat: **Auditor**)
**Responsibility**: Audit against the MANIFEST JSON schema — not general impressions.
1. **Manifest Parity Check**: Verify every `file_manifest` entry was actioned (correct `action`, correct `path`).
2. **Dependency Audit**: Verify every `dependency` listed is correctly imported and used.
3. **Constraint Audit**: Verify every item in `constraints` was honored.
4. **Verdict**: Output one of three explicit actions:
   - `{ "verdict": "PASS" }` — Proceed to Phase 6.
   - `{ "verdict": "FAIL", "reason": "...", "loop_back_to": 4 }` — Loop back to Developer with specific diff.
   - `{ "verdict": "FAIL", "reason": "...", "loop_back_to": 2 }` — MANIFEST was flawed; re-architect.

> ⚠️ **HARD RULE**: A `PASS` / `FAIL` string without the full JSON action schema is an invalid verdict. Loop again.

---

### 🧪 Phase 6: The QA Engineer (🎩 Hat: **Verifier**)
**Responsibility**: Visual and functional proof-of-work.
1. **Verify**: Use `browser` to visit `localhost` and screenshot the rendered result.
2. **Checklist**: Confirm each UI component listed in `file_manifest` is visible and functional.

---

### 💾 Phase 7: Team Memory (🎩 Hat: **Archivist**)
**Responsibility**: Save the win as a reusable pattern.
1. **Commit**: Save the MANIFEST JSON, the final file list, and any new patterns to `memory`.
2. **Tag**: Tag the memory entry with the objective keywords for future retrieval.

---

## 📝 Example Usage

**User**: `/agent team Build a user dashboard with a data table.`

**Agent (Orchestrator)**:
```
Phase 0 — Context Loader Hat: Checked memory (dark mode preferred). Checked neon (found `users` table with id, email, plan columns).
Phase 1 — Strategic Thinker Hat: Simulated. Risk identified: no existing table component. Constraint added: use shadcn/ui DataTable.
Phase 2 — System Designer Hat: MANIFEST produced:
{
  "objective": "Build a user dashboard displaying a table of all users.",
  "user_story": "As an admin, I want a dashboard page so I can see all registered users.",
  "schema_changes": [],
  "file_manifest": [
    { "action": "CREATE", "path": "app/dashboard/page.tsx", "exports": ["DashboardPage"], "dependencies": ["@/components/ui/data-table", "@/lib/db/users"] },
    { "action": "CREATE", "path": "components/ui/data-table.tsx", "exports": ["DataTable"], "dependencies": ["@tanstack/react-table"] }
  ],
  "constraints": ["Use shadcn/ui DataTable primitive", "No new npm packages"]
}
Phase 3 — Scaffolder Hat: Created app/dashboard/ and components/ui/data-table.tsx.
Phase 4 — Builder Hat: Built DataTable UI via stitch. Wrote data fetching in page.tsx. Scope locked to manifest.
Phase 5 — Auditor Hat: { "verdict": "PASS" }
Phase 6 — Verifier Hat: Confirmed on localhost:3000. Dashboard renders with user data.
Phase 7 — Archivist Hat: Saved 'User Dashboard + DataTable pattern' with schema context.
```
