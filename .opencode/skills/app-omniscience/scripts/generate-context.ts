import fs from "fs";
import path from "path";
import { glob } from "glob";

async function generateContext() {
    const projectRoot = process.cwd();
    const contextFile = path.join(projectRoot, "server", "system-context.md");

    console.log("Generating system context...");

    let context = "# System Context\n\n";
    context += "You are an AI assistant embedded within this specific application. Your goal is to help END USERS understand and use the app.\n\n";

    // 1. Read package.json for basic info
    if (fs.existsSync(path.join(projectRoot, "package.json"))) {
        const pub = JSON.parse(fs.readFileSync(path.join(projectRoot, "package.json"), "utf-8"));
        context += `## App Info\n- Name: ${pub.name}\n- Description: ${pub.description || "N/A"}\n\n`;
    }

    // 2. Scan Pages (Client)
    context += "## Application Pages\n";
    const pages = await glob("client/src/pages/**/*.{tsx,jsx}", { cwd: projectRoot });
    for (const page of pages) {
        const content = fs.readFileSync(path.join(projectRoot, page), "utf-8");
        // Simple heuristic: extract the first comment block or the component name
        context += `- **${path.basename(page)}**: Exists in the app.\n`;
    }

    // 3. Scan Rules (Business Logic)
    // Check for rules.md or similar documentation
    if (fs.existsSync(path.join(projectRoot, "rules.md"))) {
        context += "\n## Business Rules\n";
        context += fs.readFileSync(path.join(projectRoot, "rules.md"), "utf-8");
    }

    // 4. Scan Server Routes
    context += "\n## API Capabilities\n";
    const serverFiles = await glob("server/**/*.ts", { cwd: projectRoot });
    for (const file of serverFiles) {
        // logic to extract routes could go here
        context += `- Server logic found in: ${file}\n`;
    }

    fs.writeFileSync(contextFile, context);
    console.log(`Context generated at ${contextFile}`);
}

generateContext();
