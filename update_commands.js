const fs = require('fs');
const path = require('path');

const GLOBAL_SKILLS_DIR = 'C:\\Users\\info\\.gemini\\antigravity\\skills';
const LOCAL_SKILLS_DIR = path.join(__dirname, '.opencode', 'skills');
const COMMANDS_FILE = path.join(__dirname, 'COMMANDS.md');

function extractYamlFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};
    const yaml = match[1];
    const data = {};
    yaml.split('\n').forEach(line => {
        const [key, ...values] = line.split(':');
        if (key && values.length) {
            data[key.trim()] = values.join(':').trim();
        }
    });
    return data;
}

function parseGlobalSkills() {
    const skills = [];
    if (!fs.existsSync(GLOBAL_SKILLS_DIR)) return skills;
    
    function findSkillMd(dir, depth) {
        if (depth > 2) return null;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.isFile() && entry.name === 'SKILL.md') {
                return path.join(dir, entry.name);
            }
            if (entry.isDirectory()) {
                const found = findSkillMd(path.join(dir, entry.name), depth + 1);
                if (found) return found;
            }
        }
        return null;
    }

    const entries = fs.readdirSync(GLOBAL_SKILLS_DIR, { withFileTypes: true });
    
    for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        const skillMdPath = findSkillMd(path.join(GLOBAL_SKILLS_DIR, entry.name), 1);
        
        if (skillMdPath) {
            const content = fs.readFileSync(skillMdPath, 'utf8');
            const meta = extractYamlFrontmatter(content);
            const desc = meta.description || '';
            
            let triggers = "Natural Language Context";
            let cleanDesc = desc;
            
            // Look for sentences containing 'trigger'
            const triggerMatch = desc.match(/Triggers on.*?(?:\.|$)/i);
            if (triggerMatch) {
                triggers = triggerMatch[0].replace(/Triggers on:? /i, '').trim();
                cleanDesc = desc.replace(triggerMatch[0], '').trim();
            }
            
            skills.push({
                name: meta.name || entry.name,
                trigger: triggers,
                description: cleanDesc
            });
        }
    }
    return skills;
}

function parseLocalSkills() {
    const skills = [];
    if (!fs.existsSync(LOCAL_SKILLS_DIR)) return skills;
    const entries = fs.readdirSync(LOCAL_SKILLS_DIR, { withFileTypes: true });
    
    for (const entry of entries) {
        let content = '';
        let skillName = entry.name.replace('.md', '');
        
        if (entry.isFile() && entry.name.endsWith('.md')) {
            content = fs.readFileSync(path.join(LOCAL_SKILLS_DIR, entry.name), 'utf8');
        } else if (entry.isDirectory()) {
            const readmePath = path.join(LOCAL_SKILLS_DIR, entry.name, 'README.md');
            if (fs.existsSync(readmePath)) content = fs.readFileSync(readmePath, 'utf8');
        }
        
        if (content) {
            // Extract Trigger from blockquote
            const triggerMatch = content.match(/> \*\*Trigger\*\*: (.*)/);
            const descMatch = content.match(/> \*\*Description\*\*: (.*)/);
            
            const rawTrigger = triggerMatch ? triggerMatch[1].trim() : `/${skillName}`;
            // Convert slash command to natural language suggestion
            const cleanTrigger = rawTrigger.replace(/`/g, '');
            const nlTrigger = cleanTrigger.startsWith('/') ? 
                `"${cleanTrigger.substring(1).replace(/-/g, ' ')}" or ${cleanTrigger}` : cleanTrigger;

            skills.push({
                name: skillName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                trigger: nlTrigger,
                description: descMatch ? descMatch[1].trim() : "Local workspace skill."
            });
        }
    }
    return skills;
}

function generateCommandsMd() {
    const globalSkills = parseGlobalSkills();
    const localSkills = parseLocalSkills();

    let md = `# Archon Cheatsheet & Command Reference

> **Auto-Updated via \`update_commands.js\`**: This file dynamically tracks all available MCPs, Local Skills, and Global AI Skills.
> **Natural Language Support**: You do NOT need to type strict \`/\` commands. Simply tell the AI what you want to do (e.g., "start an agent team") and the AI will automatically invoke the corresponding skill.

## 🛠️ MCP Tools (Built-in Superpowers)

| Tool | Trigger | Description |
|---|---|---|
| **Neon** | \`@neon\` / "Check database" | Query Postgres DB schema and data. |
| **Memory** | \`@memory\` / "Remember this" | Store user preferences and key decisions. |
| **Ralph Loop** | \`@ralph_loop\` / "Think step-by-step" | Re-evaluate complex logic loops. |
| **Web Search** | \`@web_search\` / "Google it" | Live internet access for docs/errors. |
| **Stitch** | \`@stitch\` / "Design UI" | UI/UX generation via \`stitch-mcp\`. |
| **Magic UI** | \`@magic_ui\` / "Make it pop" | Premium animated components for landing/marketing pages. |
| **Browser** | \`@browser\` / "Open local" | View \`localhost\` to verify UI changes. |
| **NotebookLM** | \`@notebooklm\` / "Create notebook" | AI-powered research notebooks and content generation. |

## 🧠 Global AI Skills (System-Wide capabilities)
*These skills are installed globally and fire automatically based on natural language keywords in your prompt.*

| Skill | Natural Language Triggers | Purpose |
|---|---|---|
${globalSkills.map(s => `| **${s.name}** | ${s.trigger} | ${s.description} |`).join('\n')}

## ⚡ Local Workspace Skills (Project-Specific)
*These skills define specific coding protocols. The AI will engage these workflows automatically if you naturally request the overarching goal.*

| Skill | Trigger Command / Natural language | Purpose |
|---|---|---|
${localSkills.map(s => `| **${s.name}** | ${s.trigger} | ${s.description} |`).join('\n')}

## 📐 Sovereignty Rules (Key Directives)

- **Delivery Gate**: Must visually verify UI in \`@browser\` before finishing.
- **Routing**: \`architect\` (Plan) -> \`builder\` (Site Build) -> \`coder\` (Code) -> \`fast\` (Quick).
- **Credentials**: Ask for keys if missing; use placeholders if not provided.
- **Ralph Loop**: 3-strike rule for error fixing before stopping to think.
- **Global Sync**: You must **ASK PERMISSION** before syncing "Golden" files to other projects.
`;

    fs.writeFileSync(COMMANDS_FILE, md, 'utf8');
    console.log('✅ COMMANDS.md successfully updated with all Global and Local Skills.');
}

generateCommandsMd();
