---
name: manus-export
description: "AI instructions for exporting to Manus. Triggers on: 'manus export', 'export for manus', 'zip for manus'."
---

# Manus Export Workflow

**TRIGGER**: When the user says they want to "export to Manus", "zip for Manus", or something similar, you MUST engage this skill immediately.

## Step 1: The Archon Shield Check
Before taking ANY action, confirm with the user that you are preparing an export that protects the local environment.

> *"I'll prepare a clean export for Manus. I will include all source code and config files, but I will strictly EXCLUDE your `.antigravity` brain, `.opencode`, `.env`, and local `.git` history using the Archon Shield protocol. Sound good?"*

Wait for their confirmation.

## Step 2: Auto-Generate the Handoff Document & Zip
Once confirmed, directly execute the export script from the terminal. The script will safely zip the allowed files and ignore the protected ones.

**Run this command:**
\`\`\`bash
node ".opencode/skills/manus-export/export.js"
\`\`\`

*Note: The script will automatically generate a `HANDOFF.md` template if one doesn't exist, and place the final `.zip` file on the user's Desktop.*

## Step 3: Prompt for Handoff Details
After the script completes successfully, ask the user if they want to fill out the `HANDOFF.md` file before they send the zip to Manus.

> *"The export is complete and saved to your Desktop! I included a `HANDOFF.md` file inside the zip. Would you like to open `HANDOFF.md` here in the editor to quickly fill in the 'Current feature' or 'TODOs' so Manus knows exactly where to pick up?"*
