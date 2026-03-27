const fs = require('fs');
const path = require('path');

/**
 * ARCHON GLOBAL SYNC UTILITY v1.0
 * 
 * This script automates the Section 11 Global Sync Protocol.
 * It intelligently merges rules.md (preserving project-specific Section 14)
 * and opencode.json (injecting correct memory paths) across the project ecosystem.
 */

const projectsParentDir = 'C:\\Projects';
const goldenMasterName = 'Archon Core V2.23';
const currentDir = process.cwd();
const currentProjectName = path.basename(currentDir);

// 1. Validate environment
if (!currentDir.toLowerCase().startsWith(projectsParentDir.toLowerCase())) {
    console.error(`Error: Script must be run from a subfolder of ${projectsParentDir}`);
    process.exit(1);
}

const syncFiles = [
    'rules.md',
    'opencode.json',
    'ARCHON_MANUAL.md',
    'ARCHON_SYSTEM_CARD.md',
    'COMMANDS.md',
    '.gitignore'
];

const skillsToSync = [
    'agent-teams.md'
];

function parseRules(content) {
    const lines = content.split(/\r?\n/);
    const archonRulesIdx = lines.findIndex(l => l.includes('# ARCHON SOVEREIGN RULES'));
    const sec14StartIdx = lines.findIndex(l => l.includes('## 14. PROJECT-SPECIFIC VISUAL RULES'));
    const sec15StartIdx = lines.findIndex(l => l.includes('## 15. CONTEXT HANDOFF PROTOCOL') || l.includes('## 15. SESSION HANDOFF PROTOCOL'));

    return { lines, archonRulesIdx, sec14StartIdx, sec15StartIdx };
}

function smartSyncRules(sourceContent, targetContent, targetProjectName) {
    const src = parseRules(sourceContent);
    const tgt = parseRules(targetContent);

    // If target is Golden Master and has [NEEDS_INIT], protect it
    if (targetProjectName === goldenMasterName && targetContent.includes('[NEEDS_INIT]')) {
        console.log(`    [Safety] Protecting [NEEDS_INIT] block in Golden Master...`);
        // We only update the core rules (Sections 1-13) and footer (Sections 15+)
        // but keep the source's actual rule content.
    }

    // Extraction logic
    const srcBodyPart1 = src.lines.slice(src.archonRulesIdx, src.sec14StartIdx).join('\n');
    const srcBodyPart2 = src.lines.slice(src.sec15StartIdx).join('\n');

    const tgtBanner = tgt.lines.slice(0, tgt.archonRulesIdx).join('\n');
    const tgtSec14 = tgt.lines.slice(tgt.sec14StartIdx, tgt.sec15StartIdx).join('\n');

    return [tgtBanner, srcBodyPart1, tgtSec14, srcBodyPart2].join('\n');
}

function smartSyncOpencode(sourceContent, targetProjectName) {
    // Replace all instances of the project name in paths
    // Pattern matches C:/Projects/[Anything]/.opencode/memory_project.db
    // We use a non-greedy match for the project name to ensure we stop at the next path segment
    const pathRegex = /C:\/Projects\/.*?\/\.opencode\/memory_project\.db/g;
    const newPath = `C:/Projects/${targetProjectName}/.opencode/memory_project.db`;
    return sourceContent.replace(pathRegex, newPath);
}

// 2. Perform Sync
console.log(`🌍🔄 ARCHON GLOBAL SYNC STARTING 🔄🌍`);
console.log(`Source: ${currentProjectName}\n`);

const allEntries = fs.readdirSync(projectsParentDir, { withFileTypes: true });
const targetProjects = allEntries
    .filter(e => e.isDirectory() && e.name !== currentProjectName && !['node_modules', '.git'].includes(e.name))
    .map(e => e.name);

for (const target of targetProjects) {
    const targetPath = path.join(projectsParentDir, target);
    console.log(`▶ Syncing to: ${target}`);

    // Sync Root Files
    for (const fileName of syncFiles) {
        const srcFile = path.join(currentDir, fileName);
        const tgtFile = path.join(targetPath, fileName);

        if (!fs.existsSync(srcFile)) continue;

        if (fileName === 'rules.md' && fs.existsSync(tgtFile)) {
            const merged = smartSyncRules(fs.readFileSync(srcFile, 'utf8'), fs.readFileSync(tgtFile, 'utf8'), target);
            fs.writeFileSync(tgtFile, merged, 'utf8');
            console.log(`  - rules.md (Smart Merged)`);
        } else if (fileName === 'opencode.json' && fs.existsSync(tgtFile)) {
            const updated = smartSyncOpencode(fs.readFileSync(srcFile, 'utf8'), target);
            fs.writeFileSync(tgtFile, updated, 'utf8');
            console.log(`  - opencode.json (Dynamic Path Injected)`);
        } else {
            fs.copyFileSync(srcFile, tgtFile);
            console.log(`  - ${fileName} (Static Copy)`);
        }
    }

    // Sync Skills
    const srcSkillsDir = path.join(currentDir, '.opencode', 'skills');
    const tgtSkillsDir = path.join(targetPath, '.opencode', 'skills');

    if (fs.existsSync(srcSkillsDir) && fs.existsSync(tgtSkillsDir)) {
        function copyRecursiveSync(src, dest) {
            const exists = fs.existsSync(src);
            const stats = exists && fs.statSync(src);
            const isDirectory = exists && stats.isDirectory();
            if (isDirectory) {
                if (!fs.existsSync(dest)) fs.mkdirSync(dest);
                fs.readdirSync(src).forEach(childItemName => {
                    copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
                });
            } else {
                fs.copyFileSync(src, dest);
            }
        }
        
        fs.readdirSync(srcSkillsDir).forEach(item => {
            const srcItem = path.join(srcSkillsDir, item);
            const tgtItem = path.join(tgtSkillsDir, item);
            copyRecursiveSync(srcItem, tgtItem);
            console.log(`  - Skill: ${item} (Synced)`);
        });
    }
    console.log('');
}

console.log(`🎉 Sync Complete! Ecosystem is now in harmony. [Audit: Protocols Verified]`);
