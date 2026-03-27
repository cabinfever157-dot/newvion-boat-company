const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function exportToManus() {
    const projectRoot = process.cwd();
    const projectName = path.basename(projectRoot);
    const exportName = `${projectName}-manus-export-${Date.now()}.zip`;
    const exportPath = path.join(require('os').homedir(), 'Desktop', exportName);
    
    console.log(`\n🚀 Starting Manus Export for ${projectName}...`);

    // 1. Generate HANDOFF.md
    console.log(`📝 Generating HANDOFF.md...`);
    const handoffPath = path.join(projectRoot, 'HANDOFF.md');
    
    // Check if HANDOFF.md already exists, if not generate a template
    if (!fs.existsSync(handoffPath)) {
        const handoffContent = `## Project State
- Current feature being built: [AI to fill or Human to fill]
- Last completed task: [AI to fill or Human to fill]
- Known issues / TODOs: [AI to fill or Human to fill]
- Key decisions made: [AI to fill or Human to fill]
- Env vars needed (names only, no values):
  - DATABASE_URL
  - NEXT_PUBLIC_...

*This file was auto-generated for Manus handoff.*`;
        fs.writeFileSync(handoffPath, handoffContent);
        console.log(`   Created new HANDOFF.md template. Please review it if needed.`);
    } else {
        console.log(`   Found existing HANDOFF.md. Including it in export.`);
    }

    // 2. Define the exact files to include
    console.log(`📦 Zipping files securely (Archon Shield Active)...`);
    
    // We use powershell Compress-Archive or a node library. 
    // For universal compatibility, we'll use a git archive trick or a powershell command.
    // Using powershell since we are on Windows:
    
    const includes = [
        'app',
        'components',
        'lib',
        'hooks',
        'public',
        'types',
        '@types',
        'prisma',
        'database',
        'db',
        'package.json',
        'components.json',
        'tailwind.config.ts',
        'tailwind.config.js',
        'next.config.mjs',
        'next.config.js',
        'tsconfig.json',
        'middleware.ts',
        'drizzle.config.ts',
        '.eslintrc.json',
        '.eslintrc.js',
        'eslint.config.js',
        'eslint.config.mjs',
        'postcss.config.js',
        'postcss.config.mjs',
        'HANDOFF.md'
    ];

    // Filter to only things that actually exist to avoid powershell errors
    const existingIncludes = includes.filter(item => fs.existsSync(path.join(projectRoot, item)));
    
    if (existingIncludes.length === 0) {
        console.error('❌ Error: No exportable files found in this directory.');
        process.exit(1);
    }

    const itemsList = existingIncludes.map(item => `"${item}"`).join(', ');

    try {
        // Run PowerShell Compress-Archive
        const psCommand = `Compress-Archive -Path ${itemsList} -DestinationPath "${exportPath}" -Force`;
        execSync(`powershell -Command "${psCommand}"`, { stdio: 'inherit' });
        
        console.log(`\n✅ Success! Project securely exported for Manus.`);
        console.log(`📂 Saved to: ${exportPath}`);
        console.log(`\nArchon Shield protected: .antigravity, .opencode, .env, and .git were EXCLUDED.`);
    } catch (error) {
        console.error('\n❌ Failed to zip the files. Ensure you have permissions.', error.message);
    }
}

exportToManus();
