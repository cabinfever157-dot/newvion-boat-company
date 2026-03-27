# �️ ARCHON CORE V2.23 — SOVEREIGN POWERHOUSE MANUAL

> **Your setup at a glance**: OpenCode + 6 MCPs + 6 Ollama Models + Antigravity IDE + Netlify→GitHub auto-deploy.
> This manual tells you *exactly* how to talk to each tool, when they fire automatically, and how to chain them for maximum power.

---

## � TABLE OF CONTENTS

1. [Your Actual Setup (What You Have)](#-i-your-actual-setup)
2. [Daily Ignition (Cold Start)](#-ii-daily-ignition)
3. [Deep Dive: Every MCP & How to Talk to It](#-iii-deep-dive-every-mcp)
4. [Your 6 Models & When to Use Each](#-iv-your-6-models)
5. [Auto-Triggers: What Fires Without You Asking](#-v-auto-triggers)
6. [Power Combos: Chaining MCPs Together](#-vi-power-combos)
7. [The Skill System (ui-ux-pro-max)](#-vii-the-skill-system)
8. [Project Lifecycle (New → Build → Deploy)](#-viii-project-lifecycle)
9. [Scenarios & Exact Phrases](#-ix-scenarios--exact-phrases)
10. [Troubleshooting](#-x-troubleshooting)
11. [File Structure Reference](#-xi-file-structure-reference)

---

## � I. YOUR ACTUAL SETUP

### The 5 MCPs (in `opencode.json`)

| MCP Name | Package | What It Actually Does |
|----------|---------|----------------------|
| **neon** | `@modelcontextprotocol/server-postgres` | Direct SQL access to your Neon Postgres database |
| **memory** | `mcp-memory-service` (via `uvx`) | Persistent memory that survives between sessions (SQLite-backed) |
| **ralph_loop** | `@modelcontextprotocol/server-sequential-thinking` | Step-by-step reasoning engine — breaks complex tasks into sequential steps |
| **web_search** | `@modelcontextprotocol/server-brave-search` | Live web search via Brave Search API |
| **stitch** | `@_davideast/stitch-mcp` | AI-powered UI generation and design system extraction |
| **browser** | `@playwright/mcp` | AI can see, click, and interact with your running app in a real browser |

### The 6 Ollama Models (in `opencode.json` → provider)

| Slot | Model | Best For |
|------|-------|----------|
| `swarm_lead` | kimi-k2.5:cloud | Orchestrating multi-step plans, leading swarm workflows |
| `architect` | glm-5 | System design, schema planning, architecture decisions |
| `coder` | qwen3-coder:480b-cloud | Writing production code, implementing features |
| `vision` | qwen3-vl:235b-cloud | Analyzing screenshots, reading images, visual tasks |
| `fast` | minimax-m2:cloud | Quick questions, simple edits, rapid iteration |
| `local` | qwen3-coder-next:latest | Offline coding when you don't need cloud power |
| `builder` | qwen3-coder:480b-cloud | **Site Builder** — Multi-file editing, web engineering (Cloud) |
| `agent_team` | [Defined in opencode.json] | **The Team Simulator** — best for running `/agent team` |

### The Pipeline
```
Your Code → GitHub (via `gh repo create` / `git push`) → Netlify (auto-deploys on push)
```
Netlify watches your GitHub repos. Every `git push` triggers an automatic build and deploy. No manual deploy step needed.

---

## � II. DAILY IGNITION

*Do this every morning to ensure all systems are green.*

1. **Ollama**: Check the Llama icon is in your system tray (bottom-right).
2. **Launch**:
   - Open your project folder in **Antigravity**.
   - Open Terminal (`Ctrl + ~`) and type: `opencode`
3. **Status Check**:
   - Type **`/mcps`** in the Zen Bar.
   - Verify all 6 MCPs are **Green/Connected**: `neon`, `memory`, `ralph_loop`, `web_search`, `stitch`, `browser`.

> **If something is red**: See the [Troubleshooting](#-x-troubleshooting) section at the bottom.

---

## � III. DEEP DIVE: EVERY MCP

### MCP 1: `memory` (Persistent Memory)

**What it is**: A local, SQLite-backed memory store that persists facts, preferences, and project context *across sessions*. It replaces the old SimpleMem — same idea, better engine.

**How to talk to it — Exact phrases:**

| What You Want | What to Say |
|---------------|-------------|
| **Save a fact** | `"Remember that the client wants dark mode with indigo accents."` |
| **Save a preference** | `"Remember: I prefer Prisma over Drizzle for ORMs."` |
| **Recall project context** | `"What do you remember about the OZ Explorer database schema?"` |
| **Search all memories** | `"Search your memory for everything related to authentication."` |
| **Delete a memory** | `"Forget the old API endpoint for the tax calculator."` |

**When it fires automatically**:
- Per your `rules.md`: If you state a preference ("I hate blue," "Use this API"), the AI *should* ask: *"Should I save that to memory?"*
- Per your `rules.md`: Before complex tasks, the AI *should* search memory for relevant context.

**Pro tips**:
- Be specific when saving: `"Remember that the Neon DB for OZ Explorer uses the tax_calculations table with columns: id, amount, date, status."` — this saves better than vague statements.
- Before starting a new coding session on an existing project, say: `"What do you remember about this project?"` — this loads context fast.
- After a big design decision, always say: `"Remember this decision: we chose X over Y because Z."` — future-you will thank you.

---

### MCP 2: `neon` (Database Access)

**What it is**: A direct SQL connection to your Neon Postgres database. The AI can read tables, run queries, check schemas, and insert/modify data — all live.

**⚙️ Setup (REQUIRED before first use):**

The Neon connection string in `opencode.json` is set to a **placeholder** by default:
```json
"@modelcontextprotocol/server-postgres",
"YOUR_NEON_CONNECTION_STRING_HERE"
```
To activate it for your current project:
1. Go to your [Neon Dashboard](https://console.neon.tech) → select your project → **Connection Details**.
2. Copy the connection string (starts with `postgresql://...`).
3. Open `opencode.json` → find the `neon` MCP block → replace `YOUR_NEON_CONNECTION_STRING_HERE` with your connection string.
4. **Keep the surrounding quotes** — it should look like: `"postgresql://user:pass@host/dbname?sslmode=require"`
5. Restart `opencode` for the change to take effect.

> ⚠️ **Each project should use its own Neon database.** Don't reuse connection strings across projects — swap in the correct one for whichever project you're working in.

**How to talk to it — Exact phrases:**

| What You Want | What to Say |
|---------------|-------------|
| **See all tables** | `"Show me all the tables in the database."` |
| **Describe a table** | `"What columns does the users table have?"` |
| **Run a query** | `"Query the database: SELECT * FROM properties WHERE state = 'FL' LIMIT 10."` |
| **Check for data** | `"Are there any records in the transactions table?"` |
| **Create a table** | `"Create a table called leads with columns: id serial primary key, name text, email text, created_at timestamp default now()."` |

**When it fires automatically**:
- When you ask about data that sounds like it lives in a database.
- When you're debugging and the AI needs to verify what's actually stored.

**Safety rails** (from your `rules.md`):
- ⚠️ The AI will **never** run `DROP TABLE` without your explicit permission.
- Always use Prisma or Drizzle for schema management when building features (raw SQL for quick checks is fine).

**Pro tips**:
- Start a new project with: `"Show me the current database schema so we know what we're working with."` — gives the AI full context.
- If you're unsure whether a migration ran: `"Check if the users table has a phone_number column."` — faster than opening Neon's dashboard.

---

### MCP 3: `ralph_loop` (Sequential Thinking / The Unstuck Button)

**What it is**: A step-by-step reasoning engine. It forces the AI to break complex problems into sequential, verifiable steps instead of trying to do everything at once. This is your secret weapon for avoiding hallucinated code.

**How to talk to it — Exact phrases:**

| What You Want | What to Say |
|---------------|-------------|
| **Debug a stubborn error** | `"Use sequential thinking to figure out why the login form isn't submitting."` |
| **Plan before coding** | `"Think through step-by-step how we should implement the payment flow."` |
| **Verify complex logic** | `"Walk me through the logic of this tax calculation step by step."` |
| **Force careful work** | `"Take this slow. Think through each step before writing any code."` |

**Alternative invocations** (these all trigger it):
- `"Break this down step by step."`
- `"Think carefully about this before coding."`
- `"Use your reasoning engine for this."`
- `"Don't rush — plan this out first."`

**When it fires automatically**:
- Per your `rules.md` (Error Recovery / 3-Strike Rule): After 3 failed fix attempts, the AI should use sequential thinking to research and present findings.
- When the AI detects a multi-step task that could go wrong.

**Pro tips**:
- Use Ralph Loop **before** coding complex features, not after. Say: `"Before you write any code, use sequential thinking to plan the implementation of [feature]."` — you'll get better code on the first try.
- Combine with memory: `"Think through step by step how to build the dashboard, then remember the plan."` — saves the plan for next session.

---

### MCP 4: `web_search` (Brave Search)

**What it is**: Live web search powered by Brave. The AI can look up documentation, current data, competitors, API references — anything on the public web.

**How to talk to it — Exact phrases:**

| What You Want | What to Say |
|---------------|-------------|
| **Look up docs** | `"Search the web for the latest Prisma migration guide."` |
| **Get current data** | `"Search the web for current Florida Opportunity Zone census tracts."` |
| **Find examples** | `"Search the web for examples of Next.js 14 server actions with forms."` |
| **Research competitors** | `"Search the web for the top 5 real estate investment analysis tools."` |
| **Verify an API** | `"Search for the Neon Postgres serverless driver documentation."` |

**When it fires automatically**:
- Per your `rules.md`: The AI should **never use mock data** if web_search can find real values.
- When the AI encounters an unfamiliar API or library.
- During the 3-Strike Rule: After 3 failed fixes, the AI researches the error online.

**Pro tips**:
- Be specific: `"Search for 'Next.js 14 app router middleware redirect examples'"` gets better results than `"Search for Next.js help"`.
- Chain with memory: `"Search for the Stripe webhook verification docs, then remember the key steps."` — saves research for later.

---

### MCP 5: `stitch` (UI Generation & Design)

**What it is**: An AI-powered UI design and generation tool. It can analyze screenshots, extract design systems, and generate full UI components.

**How to talk to it — Exact phrases:**

| What You Want | What to Say |
|---------------|-------------|
| **Build a component** | `"Build a modern dark-mode sidebar navigation with dashboard, settings, and profile links."` |
| **Clone a design** | *(Drag screenshot into chat first)* `"Analyze this design and build a similar component."` |
| **Extract a design system** | *(Drag screenshot into chat first)* `"Extract the design DNA from this screenshot — colors, fonts, spacing, and save it."` |
| **Build from design system** | `"Build the login page using the design system we extracted."` |
| **Full page generation** | `"Build a complete dashboard page with a stat cards row, a chart area, and a recent activity table."` |

**When it fires automatically**:
- Per your `rules.md`: Before building any UI, the AI *should* ask: *"Do you have a screenshot to model?"*
- When you mention anything visual: "make it look like," "design a page," "build a UI."

**Pro tips**:
- Always start with a screenshot if you have one. The AI will reverse-engineer the exact color palette, spacing, and typography.
- Your `rules.md` locks the stack to: **React/Next.js (App Router) + Tailwind CSS + ShadCN UI + Lucide Icons**. If you want something different for a specific project, say so explicitly.

---

### MCP 6: `browser` (Playwright — Live Browser Eyes)

**What it is**: A real browser that the AI can control. It can navigate to your running app, take screenshots, click buttons, fill forms, and verify that your UI looks and works correctly — all without you lifting a finger.

**How to talk to it — Exact phrases:**

| What You Want | What to Say |
|---------------|-------------|
| **See the current state** | `"Open the browser to localhost:3000 and show me what the homepage looks like."` |
| **Verify a change** | `"Take a screenshot of the dashboard page — does the new sidebar look right?"` |
| **Test interaction** | `"Open the browser, click the login button, and tell me what happens."` |
| **Debug a visual bug** | `"The cards are overlapping — open the browser and show me what's going on."` |
| **Navigate and check** | `"Go to /settings in the browser and make sure the form renders correctly."` |

**When it fires automatically** (per your `rules.md`):
- After UI changes: the AI screenshots the page to verify the result.
- When you say "show me" or "what does it look like."
- When debugging visual bugs: the AI looks at the actual page before guessing.

**Pro tips**:
- Make sure `npm run dev` is running in a terminal first — the browser needs a live server to visit.
- Combine with Stitch: *"Build a hero section with Stitch, then open it in the browser to verify."*
- Use for end-to-end testing: *"Open the browser, fill out the signup form, submit it, and tell me if it works."*

---

## �️ IV. YOUR 6 MODELS

Switch models in OpenCode by typing `/models` in the Zen Bar.

### When to use each:

| Situation | Choose This Model | Why |
|-----------|-------------------|-----|
| Starting a brand new feature from scratch | **architect** (glm-5) | Best at planning schemas, APIs, and system design |
| Writing actual code / implementing | **coder** (qwen3-coder) | Purpose-built for writing and editing code |
| Multi-file, multi-step project orchestration | **swarm_lead** (kimi-k2.5) | Best at coordinating complex cross-cutting tasks |
| Analyzing a screenshot or image | **vision** (qwen3-vl) | Only model that can "see" images |
| Quick question / simple edit / fast feedback | **fast** (minimax-m2) | Blazing fast, saves time on small tasks |
| Working offline / no internet | **local** (qwen3-coder-next) | Runs 100% on your machine via Ollama |

### The Architect → Coder Workflow
This is your bread-and-butter pattern:
1. **Switch to Architect**: `/models` → `architect`
2. **Plan**: `"Create a step-by-step implementation plan for the user authentication system."`
3. **Switch to Coder**: `/models` → `coder`
4. **Execute**: `"Execute Step 1 of the plan. Use sequential thinking to verify it works before moving to Step 2."`

---

## ⚡ V. AUTO-TRIGGERS

Your `rules.md` (Section 7) now contains **mandatory auto-engagement rules**. These tell the AI to use MCPs proactively without you asking. Here's what happens automatically:

### memory — Always On
| Trigger | What Happens |
|---------|-------------|
| Session starts | AI searches memory for project context **before doing anything else** |
| You state a preference or make a decision | AI saves it to memory **immediately** (no longer asks permission) |
| Feature or milestone completed | AI saves a progress summary to memory |
| Tricky bug solved | AI saves the root cause and fix to memory |
| Architecture/schema decision made | AI saves the decision and reasoning |

### neon — Auto-Query
| Trigger | What Happens |
|---------|-------------|
| Any SQL or database code needed | AI checks the current schema **before writing** |
| Data-related UI work | AI queries what data actually exists |
| Debugging data issues | AI verifies actual database state before guessing |

### ralph_loop — Auto-Think
| Trigger | What Happens |
|---------|-------------|
| Task has more than 2 logical steps | AI plans with sequential thinking **before coding** |
| First fix attempt fails | AI switches to sequential thinking immediately |
| Architecture or design task | AI thinks step-by-step before proposing anything |

### web_search — Auto-Research
| Trigger | What Happens |
|---------|-------------|
| Unknown API or library encountered | AI searches for latest docs |
| Unrecognized error message | AI searches the web instead of guessing |
| Real-world data needed | AI searches (never fabricates data) |
| Version-specific question | AI searches for current behavior |

### stitch — Auto-Design
| Trigger | What Happens |
|---------|-------------|
| Any UI task + `design-system/MASTER.md` exists | AI loads the design system first |
| Visual component request | AI uses Stitch instead of hand-writing UI |
| Screenshot provided | AI automatically extracts design DNA |

### browser — Auto-Verify
| Trigger | What Happens |
|---------|-------------|
| UI code was just changed | AI opens the browser to screenshot and verify the result |
| "Show me" or "what does it look like" | AI navigates to the page and screenshots it |
| Visual bug reported | AI opens the browser to see the actual state |
| Interactive testing needed | AI clicks through forms, buttons, and navigation |

### Chaining
When a task naturally involves multiple MCPs, the AI chains them without being asked.
Example: *"Build a dashboard"* → neon (check schema) → ralph_loop (plan layout) → stitch (build UI) → browser (verify result) → memory (save what was built).

### Where This Lives
All of these rules are defined in **`rules.md`**. You can edit that file to add, remove, or adjust any auto-trigger.

> **The bottom line**: You shouldn't need to name MCPs anymore for most tasks. Just describe what you want and the AI will engage the right tools.


---

## � VI. POWER COMBOS

These are proven multi-MCP recipes for common situations:

### Combo 1: "The Research & Remember"
> **Use when**: You need information that you'll reference later.
```
"Search the web for the latest Tailwind v4 migration guide. 
 Summarize the key breaking changes, then remember them."
```
*Fires: web_search → memory*

### Combo 2: "The Smart Build"
> **Use when**: Building a new feature from scratch.
```
"Check the database schema first. Then think step-by-step through 
 how to add a user profiles feature. Build the UI when the plan is solid."
```
*Fires: neon → ralph_loop → stitch*

### Combo 3: "The Debug Nuke"
> **Use when**: Something is broken and you don't know why.
```
"This feature is broken. Use sequential thinking to investigate. 
 Check the database for bad data. Search the web if you hit a 
 framework issue. Tell me what you find before making changes."
```
*Fires: ralph_loop → neon → web_search*

### Combo 4: "The Full Design Pipeline"
> **Use when**: Building UI from a reference image.
```
"Here's a screenshot of the design I want. Extract the design DNA —
 colors, fonts, spacing. Build the login page using that system. 
 Remember the design system for the rest of the project."
```
*Fires: stitch → memory*

### Combo 5: "The Data Dashboard"
> **Use when**: Building a UI that shows real database data.
```
"Query the database for all properties in Florida. Think through the 
 best way to display this data. Build a dashboard table with filters, 
 using our design system."
```
*Fires: neon → ralph_loop → stitch*

---

## � VII. THE SKILL SYSTEM

### What Skills Are
Skills are pre-loaded instruction sets that give the AI specialized capabilities. They live in `.opencode/skills/`.

### Your Installed Skill: `ui-ux-pro-max`
This is a **UI/UX design intelligence engine** with a searchable database of design patterns.

**How to invoke it** (from within OpenCode):
```bash
# Generate a full design system for a project
python3 skills/ui-ux-pro-max/scripts/search.py "real estate dashboard" --design-system

# Generate with a project name
python3 skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system -p "OZ Explorer"

# Search for specific design patterns
python3 skills/ui-ux-pro-max/scripts/search.py "glassmorphism dark mode premium"
```

**What it produces**:
- A `design-system/MASTER.md` file with colors, typography, spacing, component styles.
- Per-page overrides in `design-system/pages/`.
- Searchable across 5 domains: product, style, color, landing, typography.

**How it connects to Stitch**: Generate the design system with `ui-ux-pro-max` first, then tell Stitch to build using it:
```
"Build the dashboard page using the design system in design-system/MASTER.md."
```

### Global Skills (from `rules.md`)
Your rules reference these additional skills. Use them by name:
- `stitch-loop` — Continuous Stitch generation across multiple pages
- `shadcn-ui` — ShadCN component generation
- `design-md` — Design system markdown extraction from screenshots
- `email-parser` — Parses Outlook .msg files and prepares them for NotebookLM via local `uv run` python scripting.

### 🤖 The Agent Team Skill (New)
**Trigger**: `/agent team [objective]`
**Prerequisite**: Switch to `/models` → `agent_team` first for best results.
**What it does**: Activates a multi-agent relay to simulate a full product team.
- **Context**: Checks Memory + Neon DB + Web Search first.
- **Ralph Loop**: Thinks through the plan.
- **PM**: Specs the feature.
- **Tech Lead**: Scaffolds the files.
- **Developer**: Writes code (using Stitch for UI).
- **Reviewer**: Audits the code quality.
- **QA**: Verifies with Browser.
- **Memory**: Saves the result.

**Use this for**: Complex features that require planning, database awareness, and rigorous verification (e.g., "Build a full auth flow", "Create a dashboard").

### 🧠 App Omniscience (End-User Copilot)
**Trigger**: `/skill install app-omniscience`
**What it does**: Installs an "Help / Ask AI" feature for your end users.
- **Context**: It runs a script to scan your pages, rules, and backend to build a "System Context".
- **Interaction**: Users can ask "How do I use X?" and get an answer based on your actual code logic.
- **Privacy**: The context is local to your app.

### 🏗️ The Site Builder Skill (The 10k Protocol)
**Trigger**: `/site new [Project Name]`
**What it does**: Enforces your "Beautiful $10,000 Website" design philosophy.
- It **STOPS** the AI from coding immediately.
- It interviews you on the **5 Design Dimensions**:
  1. **Pattern** (SaaS, Portfolio, etc.)
  2. **Aesthetic** (Glassmorphism, Linear, Bento)
  3. **Color** (Trust, Vibrant, Luxury)
  4. **Typography** (Modern, Elegant, Mono)
  5. **Animation** (Micro-interactions, Scroll)
- It generates a `design-system/MASTER.md` based on your answers.
- It builds the site using **Stitch** + **Netlify** (Vercel is banned).

---

## � VIII. PROJECT LIFECYCLE

### Starting a New Project

#### Step 1: Clone the Template
```
Copy & paste the _ARCHON_GOLD_TEMPLATE folder → Rename to your project name.
```

#### Step 2: Create a Fresh Neon Database
1. Go to [Neon Dashboard](https://console.neon.tech) → **New Project**.
2. Copy the connection string (`postgres://...`).
3. In your new project folder: rename `.env.example` → `.env`.
4. Paste the connection string into `DATABASE_URL=""`.

> 🚨 **CRITICAL**: Your `opencode.json` uses `${DATABASE_URL}` to connect. If you skip this step or don't create the `.env` file, the AI cannot see your database. **Never** hardcode the URL in `opencode.json`.

#### Step 3: Create a GitHub Repo
```bash
gh repo create
# Select: "Push an existing local repository" → Yes
# Name it uniquely (e.g., "oz-explorer")
# Visibility: Private
```

#### Step 4: Connect Netlify
1. Go to [Netlify Dashboard](https://app.netlify.com) → **Add new site** → **Import from Git**.
2. Select the GitHub repo you just created.
3. Set build settings (usually `npm run build`, publish `dist` or `.next`).
4. Add environment variables (copy from your `.env` — especially `DATABASE_URL`).

> From this point on, every `git push` auto-deploys to Netlify. No manual steps.

#### Step 5: Launch & Init
```bash
opencode        # Start the AI engine
/init           # Create mission logs (AGENTS.md)
```

Then immediately say:
```
"What do you remember about this project?" 
```
If it's brand new, say:
```
"Remember: This project is [name]. It's a [description]. 
 The tech stack is [React/Next.js/etc]. The database is on Neon."
```

---

### The Manus Migration Protocol

*Bringing a project from Manus (or any external AI) into your Archon setup:*

#### Step 1: The Export Prompt
Before exporting from Manus, give it this exact prompt:
> *"Please export the entire project as a ZIP file. Ensure the architecture strictly follows the standard Next.js App Router structure (all routes in the `app/` directory, components in `components/` and `components/ui/`, and utilities in `lib/`). Do NOT include `node_modules`, `.git`, or any environment-specific files like `.env`. I only need the clean source code, `package.json`, and UI configuration files ready to drop into an existing external environment."*

#### Step 2: The Action
**If this is a First-Time Import (Brand New Project):**
1. **Create folder**: New folder on Desktop with the project name.
2. **Paste files**: Unzip and move all project files into the new folder.
3. **Archon-ify**: Copy `.antigravity` folder + `opencode.json` from your Gold Template into the new project.
4. **Set up database**: New Neon project → copy connection string → create `.env` file. Paste it as `DATABASE_URL`. (Required for `opencode.json` to work).
5. **Install**: `npm install` in terminal.
6. **Lock to GitHub**: `gh repo create` → push.
7. **Connect Netlify**: Dashboard → Add new site → Import the new repo → Set build settings & env vars.
8. **Launch**: `opencode` → `/init`.

**If this is a Round-Robin Import (Updating an Existing Project):**
1. **Trigger the Skill**: In Antigravity, say *"I have a Manus zip"* or *"Import from Manus"*. The AI will take over.
2. **The Override**: The AI will extract the zip, surgically inject *only* the source-code updates (`app/`, `components/`, etc.) into your current project, and explicitly preserve your `.antigravity/` brain, `opencode.json`, `.env`, and `.git/` history.
3. **DO NOT** create a fresh copy of a copy, as it destroys your `.git` history, Netlify link, and AI memory. Always overwrite the existing files.

#### Step 3: The Export Protocol (Sending Back to Manus)
If you need to send the project back to Manus for further development, you MUST use the `manus-export` skill to ensure the "Archon Shield" is active. Manus doesn't need our AI configuration files and they will only confuse it and waste its context window.

1. **Trigger the Skill**: Say *"Export to Manus"* or *"Zip for Manus"*.
2. **The Archon Shield**: The AI will automatically compress your project into a `.zip` file on your Desktop. It will **INCLUDE**:
   - `app/`, `components/`, `lib/`, `hooks/`, `public/`, `types/`
   - Configs: `package.json`, `components.json`, `tailwind.config.*`, `next.config.*`, `tsconfig.json`, `middleware.ts`, your database configs (`prisma`/`drizzle`), and your linting rules. 
3. **The Exclusion List**: It will strictly **EXCLUDE**:
   - `.antigravity/` & `opencode.json` (Local AI memory/context)
   - `.env` (Security)
   - `node_modules/`, `.git/`, `.next/`, `dist/` (Bloat/Local history)
4. **The Handoff Document**: The script will also auto-generate a `HANDOFF.md` file in the root of the ZIP. This is identical to a PR description and gives Manus key decisions, TODOs, and context needed to hit the ground running. You should briefly fill this out before sending.

---

## � IX. SCENARIOS & EXACT PHRASES

### "I need to build a new feature"
```
1. /models → architect
2. "Create a detailed implementation plan for [feature]. 
    Check the database schema first so you know what tables exist."
3. /models → coder  
4. "Execute Step 1 of the plan. Think through it step-by-step. 
    Don't move to Step 2 until Step 1 is verified working."
```

### "I need a beautiful UI page"
```
1. Drag a screenshot into the chat (optional but recommended)
2. "Extract the design DNA from this screenshot and save the design system."
3. "Build the [page name] page using the design system you just extracted. 
    Use ShadCN components and Lucide icons."
```

### "I need to research something"
```
"Search the web for [topic]. Summarize what you find in a clear table. 
 Then remember the key findings for later."
```

### "Something is broken and I don't know why"
```
"This is broken: [describe symptom]. Use sequential thinking to investigate. 
 Check the database if relevant. Search the web for this error. 
 Tell me what you find BEFORE making any changes."
```

### "I want to deploy this to production"
```
1. "Run a build and make sure there are no errors."
2. "Check that all environment variables in .env have corresponding 
    values set in the Netlify dashboard."
3. git add -A && git commit -m "ready for deploy" && git push
   (Netlify auto-deploys from here)
```

### "Start my day / Load context for an existing project"
```
"What do you remember about this project? 
 Show me the database schema. 
 What was the last thing we were working on?"
```

### "I want to save my progress / end for the day"
```
"Remember where we left off: we finished [X], next session we need to [Y]. 
 The current blockers are [Z]."
```

---

## �️ X. TROUBLESHOOTING

### MCP Status Checks
Type `/mcps` in the Zen Bar. Everything should be green.

| MCP | If Red/Failed | Fix |
|-----|---------------|-----|
| **neon** | Database connection issue | Check `opencode.json` → the Neon connection string may still be the placeholder (`YOUR_NEON_CONNECTION_STRING_HERE`). Replace it with your real Postgres URL from the [Neon Dashboard](https://console.neon.tech). |
| **memory** | Memory service won't start | Run in terminal: `uvx --from mcp-memory-service --with onnxruntime memory server` to test. Check Python/uv is installed. |
| **ralph_loop** | NPX package issue | Run: `npx -y @modelcontextprotocol/server-sequential-thinking` in terminal to test. |
| **web_search** | Brave API issue | Verify Brave Search API key is configured. Run the npx command manually to see error. |
| **stitch** | Google Cloud auth expired | Close Antigravity → Open terminal → `gcloud auth application-default login` → Restart. |

### Common Issues

| Problem | Fix |
|---------|-----|
| "Invalid Input" error in OpenCode | Your `opencode.json` might be malformed. Compare against `opencode.json.backup`. |
| AI gives wrong/old context | Type `/new` to clear short-term memory. Then reload with memory: `"What do you remember about this project?"` |
| AI won't use an MCP | Be explicit: name the MCP or describe its capability directly. Say "search the web" not "look it up." |
| Stitch builds wrong style | Generate or re-load the design system first. Say: `"Load the design system from design-system/MASTER.md before building."` |
| Netlify deploy fails | Check build logs on Netlify dashboard. Usually a missing env var or build command mismatch. |
| Loop stuck / infinite | Type `/new` to break the loop. Start a fresh context. |
| Model seems slow | Switch to `fast` for quick tasks: `/models` → `fast`. |

### The Nuclear Reset
If everything is broken:
1. Close Antigravity completely.
2. Open a regular terminal in your project folder.
3. Compare `opencode.json` against `opencode.json.backup` — revert if needed.
4. Run `gcloud auth application-default login`.
5. Restart Antigravity → `opencode` → `/mcps` to verify.

---

## � XI. FILE STRUCTURE REFERENCE

```
Your Project/
├── .antigravity/
│   └── rules/
│       └── rules.md          ← The AI's brain. Sovereign rules live here.
├── .opencode/
│   └── skills/
│       └── ui-ux-pro-max/    ← Design intelligence skill
│           ├── SKILL.md
│           ├── data/          ← Design pattern database
│           └── scripts/       ← Search & generation scripts
├── .env                       ← Your secrets (DATABASE_URL, API keys). NEVER push to git.
├── .env.example               ← Template for .env (safe to push)
├── .gitignore                 ← Blocks .env, node_modules, .antigravity from git
├── opencode.json              ← MCP + Model configuration (THE control center)
├── opencode.json.backup       ← Safety backup of working config
└── ARCHON_MANUAL.md           ← This file
```

### What Each Config Controls

| File | Controls | When to Edit |
|------|----------|-------------|
| `opencode.json` | Which MCPs load, which models are available, Ollama connection | Adding/removing MCPs, changing models |
| `rules.md` | AI behavior rules, auto-triggers, tech stack preferences | Changing how the AI behaves by default |
| `.env` | Database URLs, API keys, secrets | New project setup, rotating credentials |
| `.opencode/skills/` | Installable capabilities (design, components, etc.) | Adding new AI skills |

---

## � QUICK REFERENCE CARD

### Essential Zen Bar Commands
| Command | What It Does |
|---------|-------------|
| `/mcps` | Check MCP connection status |
| `/models` | Switch AI model |
| `/init` | Create mission logs for a new project |
| `/new` | Clear AI short-term memory (fresh start) |

### Magic Phrases That Activate MCPs

| Say This... | ...And This MCP Fires |
|-------------|----------------------|
| "Remember that..." / "Save this..." | **memory** |
| "What do you remember about..." | **memory** |
| "Search the web for..." | **web_search** |
| "Check the database..." / "Query..." / "Show me the tables..." | **neon** |
| "Think step by step..." / "Break this down..." | **ralph_loop** |
| "Build a [UI component]..." / "Design a page..." | **stitch** |
| "Use sequential thinking to..." | **ralph_loop** (explicit) |

### The Golden Rule
> **Be specific, name what you want, and stack your MCPs.** The more explicit you are, the more powerful your setup becomes. Don't just say "fix this" — say "think through this step by step, check the database, search the web, and remember what you find."

---

**PRO TIP**: If you switch projects, always run `/new` in the Zen Bar to clear the AI's short-term memory. Then immediately load context: `"What do you remember about this project?"`

---

##  XII. GLOBAL SYNC PROTOCOL (Permission Required)

**This is the only way to propagate changes to other projects.**

> [!IMPORTANT]
> **Golden Source**: `Archon Core V2.23` is the canonical master folder. All global rule upgrades should originate here and sync outward.

1.  **Source of Truth**: The **Current Active Project** (typically `Archon Core V2.23`) is the "Source". All other parallel projects are "Targets".
2.  **The Trigger**: "Do you want to sync these files to all other projects?"
3.  **The Rule**:
    -   You MUST ask for explicit permission.
    -   Example: *"I updated rules.md. Do you want to sync it to Newvion, OZ Eligibility, and TravHat?"*
    -   **WAIT for "Yes"**. Do not copy anything until approved.
4.  **What to Sync**:
    -   ✅ **Safe to sync**: `opencode.json`, `COMMANDS.md`, `ARCHON_MANUAL.md`, `.gitignore`, **Sections 1–13** of `rules.md`, `.opencode/skills/`
    -   🚫 **NEVER sync**: The **Project Identity banner** (lines 1–2 of `rules.md`). Each project has its own.
    -   🚫 **NEVER sync**: `rules.md` **Section 14** (Project-Specific Visual Rules). Each project defines its own.
    -   🚫 **NEVER sync**: Project assets — `app/`, `components/`, `images/`, `public/`
5.  **Verification**:
    -   **Fully-synced files** (`opencode.json`, `COMMANDS.md`, `ARCHON_MANUAL.md`, `.gitignore`): Sizes MUST match exactly across all projects.
    -   **`rules.md`**: Sizes will intentionally differ (unique identity banner + Section 14). Verify only that the file was updated (check timestamp).
    -   Report: *"Sync Complete & Verified: [List of Files]"*
