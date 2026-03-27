# 🏗️ Site Planning Protocol

> **Trigger**: `/site new [Project Name]` or `/site design`
> **Description**: Comprehensive workflow for building premium websites using proven design principles and technical standards.
> **Source**: Combined ARCHON rules and "How I build Beautiful $10,000 Websites" methodology.

---

## 🔧 Core Technical Requirements (ARCHON Rules)

### ⚙️ Framework Stack
- **Primary**: React / Next.js (App Router)
- **Styling**: Tailwind CSS (Mandatory)
- **Components**: ShadCN UI + Lucide Icons
- **Execution Tool**: `@stitch build` for component generation

### 🗺️ Map/Geospatial Logic
- **Performance Optimization**: Defer marker rendering until geographic filter (City/State) selection
- **Default Visibility**: Polygons visible by default

### 🛡️ Validation Protocols
- **Design DNA Inquiry**: "Do you have a screenshot to model?"
- **Anti-Pattern Check**: Verify no scroll hijacking, low contrast, or layout shift issues
- **Accessibility Compliance**: 60-30-10 color rule + WCAG AA standards

---

## 🛤️ Execution Tracks

### Track A: Interactive Co-Pilot (Standard)
> **Trigger**: `/site new [Project Name]`
> **Use Case**: You have a specific vision and want to control the design details.

**Protocol**: Follow the **5-Dimension Design Protocol** below interactively.

### Track B: Autonomous Architect (God Mode)
> **Trigger**: `/architect [Brief Description]`
> **Use Case**: You want a premium result immediately and trust the agent to make all decisions.

**Protocol**:

#### 🧠 Phase 1: Autonomous Strategic Alignment (Zero User Input)
*   **Industry Context Engine**: Immediately analyze the `[Brief Description]`. Autonomously determine the psychological trust markers and layout patterns required for this specific niche.
*   **Stack Enforcement**: Strictly adhere to React/Next.js (App Router), Tailwind CSS, and ShadCN UI.
*   **Infrastructure Awareness**: Pre-configure all routing, headers, and authentication components optimized for Netlify Pro deployment.

#### 👁️ Phase 2: Live Aesthetic Sourcing (`browser` & `web_search`)
*   **Do not ask the user for a screenshot.**
*   Autonomously use the `browser` tool to search for the top 3 award-winning, modern sites in the target industry (targeting Awwwards, UI8, or Godly).
*   Extract the "Design DNA" (Typography pairings, 60-30-10 color hexes, and padding rhythm) directly from these live references.

#### 🪄 Phase 3: Component Fetching (`magic_ui`)
*   **Do not manually hallucinate or write complex animations.**
*   Query the `magic_ui` MCP to fetch the highest-converting, premium components that map to your extracted Design DNA.

#### 🏗️ Phase 4: Assembly & Execution (`stitch`)
*   Generate the `design-system/MASTER.md` silently in the background.
*   Scaffold the Next.js directories.
*   Use `@stitch build` to weave the base layout, ShadCN components, and `magic_ui` interactive elements together.

#### 🔄 Phase 5: Self-Verification (`ralph_loop`)
*   Execute an autonomous self-review against the Anti-Pattern Protocol.
*   **Do not pause for user review.** Refine the UI internally until it meets $10k production standards.
*   **Final Output**: Present the finished, live-ready interface and a concise summary of architectural and aesthetic decisions.

---

## 🎨 The 5-Dimension Design Protocol (For Track A)

### 📐 Dimension 1: Pattern & Layout (The Skeleton)
- **SaaS**: Hero + Features + Social Proof + CTA?
- **Micro SaaS**: Minimal + Live Demo?
- **E-commerce**: Feature-rich Showcase?
- **Fintech**: Trust Signals + Data Visualization?
- **Portfolio**: Storytelling + Case Studies?

### 💄 Dimension 2: Style & Aesthetic (The Skin)
- **Glassmorphism**: Frosted glass, layered depth?
- **Aurora UI**: Vibrant, moving gradients?
- **Linear Style**: Dark mode, subtle borders, technical feel?
- **Bento Grid**: Modular, organized, information-dense?
- **Minimalist Luxury**: Ample whitespace, serif typography?

### 🎨 Dimension 3: Color & Theme (The Palette)
- **Trust (Navy/Blue)**: Finance/Enterprise.
- **Vibrant (Indigo/Emerald)**: Startups and growth brands.
- **Luxury (Stone/Gold)**: High-end and premium offerings.
- **Dark Mode Excellence**: True black with Zinc accent palette.

### ✍️ Dimension 4: Typography (The Voice)
- **Modern/Tech**: Inter + JetBrains Mono
- **Elegant**: Playfair Display + Montserrat
- **Friendly**: Poppins + Open Sans
- **Brutalist**: Space Grotesk

### ✨ Dimension 5: Animations (The Soul)
- **Micro-Interactions**: Hover lifts, glow borders, button ripples
- **Scroll Effects**: Parallax, fade-up reveals, sticky headers
- **Transitions**: Smooth page loads (eliminate layout shifts)

---

## 🚀 Execution Workflow (Standard)

1.  **Interview Phase**: Establish all 5 design dimensions
2.  **System Creation**: Generate `design-system/MASTER.md` with specific choices
3.  **Directory Scaffolding**: Create project structure
4.  **Component Assembly**: Use **Stitch** to generate UI components with exact CSS variables and animations
5.  **Verification**: Cross-check against all protocols and anti-patterns