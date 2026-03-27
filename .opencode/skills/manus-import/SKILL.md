---
name: manus-import
description: "AI instructions for handling Manus imports. Triggers on: 'manus zip', 'manus import', 'import manus', 'round robin import'."
---

# Manus Import Protocol (The Ingestion Engine)

**TRIGGER**: When the user says "I have a Manus zip", "Initiate the Manus import skill", or mentions bringing back a project from Manus.

## Step 1: The Intake Question
When triggered, you MUST stop and ask the user exactly one question:
> *"I'm ready for the exact payload Manus generated. Please paste the absolute path to the `.zip` file (e.g., `C:\Projects\Uploads\manus_export.zip`)."*

STOP and wait for the user to provide the path. Do not offer terminal commands or explanations until they answer.

## Step 2: Ingest & Apply (The Archon Shield Override)
Once the user provides the ZIP file path, you must autonomously execute the following sequence:

1. **Unzip to Temp**: Unzip the file into a temporary directory (e.g., inside `C:/tmp`).
2. **Context Read**: Before moving any files, read the `HANDOFF.md` file located in the root of the unzipped folder. 
3. **Report to User**: Briefly summarize the `HANDOFF.md` application state and the last 3 major changes to the user so they know you understand the incoming context.
4. **The Archon Shield (CRITICAL)**: Move the unzipped files into the current project directory, replacing the existing files. **HOWEVER, YOU MUST STRICTLY PREVENT OVERWRITING THESE LOCAL FILES:**
   - `.antigravity/` (Local Brain)
   - `.opencode/` (Skill Database)
   - `opencode.json` & `opencode.json.backup`
   - `.git/` (Local History)
   - `.env` (Never overwrite local secrets, though the incoming zip *should* have them, make sure the local ones win if there's a conflict).
5. **Dependency Check**: Read the `HANDOFF.md` to see if new dependencies were added. If so, autonomously run `npm install` or `pnpm install` in the terminal.
6. **Cleanup**: Delete the temporary unzipped folder.

## Step 3: Final Verification
Conclude by stating: *"The Manus payload has been successfully ingested. The Archon Shield protected your local environment, and all dependencies are up to date. I have fully read the `HANDOFF.md` context and am ready to continue building."*
