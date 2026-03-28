# Archon Cheatsheet & Command Reference

> **Auto-Updated via `update_commands.js`**: This file dynamically tracks all available MCPs, Local Skills, and Global AI Skills.
> **Natural Language Support**: You do NOT need to type strict `/` commands. Simply tell the AI what you want to do (e.g., "start an agent team") and the AI will automatically invoke the corresponding skill.

## 🛠️ MCP Tools (Built-in Superpowers)

| Tool | Trigger | Description |
|---|---|---|
| **Neon** | `@neon` / "Check database" | Query Postgres DB schema and data. |
| **Memory** | `@memory` / "Remember this" | Store user preferences and key decisions. |
| **Ralph Loop** | `@ralph_loop` / "Think step-by-step" | Re-evaluate complex logic loops. |
| **Web Search** | `@web_search` / "Google it" | Live internet access for docs/errors. |
| **Stitch** | `@stitch` / "Design UI" | UI/UX generation via `stitch-mcp`. |
| **Magic UI** | `@magic_ui` / "Make it pop" | Premium animated components for landing/marketing pages. |
| **Browser** | `@browser` / "Open local" | View `localhost` to verify UI changes. |
| **NotebookLM** | `@notebooklm` / "Create notebook" | AI-powered research notebooks and content generation. |

## 🧠 Global AI Skills (System-Wide capabilities)
*These skills are installed globally and fire automatically based on natural language keywords in your prompt.*

| Skill | Natural Language Triggers | Purpose |
|---|---|---|
| **background-video** | Natural Language Context | Embed a silent, looping, fullscreen YouTube background video with no controls or branding. Used for hero sections or full-page fixed backgrounds. |
| **cinematic-intro** | Natural Language Context | Create cinematic intro sequences for web applications. Includes both a full version (aurora background, animated text, video fade-in) and a simple version (direct video fade-in). Use when user requests "Number 7", cinematic intro, or dramatic page load animation with video background. |
| **content-rewriter** | Natural Language Context | Automated workflow to ingest content from NotebookLM or local files, reword it to be 100% unique while preserving statistics, numbers, and government mentions, and removing original authors. Saves the output to the project's content directory (.mdx) and/or uploads to a new NotebookLM notebook. |
| **email-parser** | Natural Language Context |  |
| **manus-import** | 'manus zip', 'manus import', 'import manus', 'round robin import'. | "AI instructions for handling Manus imports. " |
| **netlify-deploy-lessons** | Natural Language Context |  |
| **nextra4-docs-hub** | Natural Language Context |  |
| **nlm-skill** | mentions of \"nlm\", \"notebooklm\", \"notebook lm\", \"podcast generation\", \"audio overview\", or any NotebookLM-related automation task. | "Expert guide for the NotebookLM CLI (`nlm`) and MCP server - interfaces for Google NotebookLM. Use this skill when users want to interact with NotebookLM programmatically, including: creating/managing notebooks, adding sources (URLs, YouTube, text, Google Drive), generating content (podcasts, reports, quizzes, flashcards, mind maps, slides, infographics, videos, data tables), conducting research, chatting with sources, or automating NotebookLM workflows. " |
| **skill-777** | Natural Language Context | Mandatory GPT-5.4 architect consultation protocol for the OZ Explorer project. Use before every implementation, when encountering any error, and when planning any non-trivial change. Defines reasoning effort levels, pre-prompt structure, multi-turn dialogue rules, and post-implementation debrief requirements. |
| **vimeo-hero-panel** | phrases like "vimeo hero". | Embeds a 2-column Vimeo video panel exactly like the Oz2.org hero section, utilizing Framer Motion. |

## ⚡ Local Workspace Skills (Project-Specific)
*These skills define specific coding protocols. The AI will engage these workflows automatically if you naturally request the overarching goal.*

| Skill | Trigger Command / Natural language | Purpose |
|---|---|---|
| **Agent Teams** | User types /agent team [Objective] | Orchestrates a multi-phase workflow where YOU (the current model) simulate a team of specialized roles. Each phase is a mental mode switch — NOT an agent type command, NOT a model switch. You remain the active model throughout. |
| **Architect Planner** | "plan [Feature/Request]" or /plan [Feature/Request] | Breaks down a complex user request into a model-segmented action plan, assigning specific roles (`architect`, `builder`, `coder`) to each step with precise instructions. |
| **Blast** | "blast new [Automation Name]" or /blast new [Automation Name] | A rigorous, 5-phase protocol for building deterministic, self-healing automation tools. |
| **Site Planning Protocol** | "site new [Project Name] or /site design" or /site new [Project Name] or /site design | Comprehensive workflow for building premium websites using proven design principles and technical standards. |
| **Stitch Mcp Setup** | "stitch mcp setup" or /stitch-mcp-setup | Local workspace skill. |

## 📐 Sovereignty Rules (Key Directives)

- **Delivery Gate**: Must visually verify UI in `@browser` before finishing.
- **Routing**: `architect` (Plan) -> `builder` (Site Build) -> `coder` (Code) -> `fast` (Quick).
- **Credentials**: Ask for keys if missing; use placeholders if not provided.
- **Ralph Loop**: 3-strike rule for error fixing before stopping to think.
- **Global Sync**: You must **ASK PERMISSION** before syncing "Golden" files to other projects.
