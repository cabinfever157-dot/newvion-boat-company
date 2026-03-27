# B.L.A.S.T. Skill (The Automation Protocol)

> **Trigger**: `/blast new [Automation Name]`
> **Description**: A rigorous, 5-phase protocol for building deterministic, self-healing automation tools.
> **Source**: Based on your "B.L.A.S.T. Master System Prompt".

---

##  Protocol 0: Initialization

When you trigger this skill, I will **HALT** execution and require we establish the "Project Constitution" for this specific automation.

1.  **Initialize Memory**: I will create a `blast_plan.md` (instead of `task_plan.md`) to track Phases, Goals, and Findings.
2.  **Halt**: I will NOT write any code until:
    - Discovery Questions are answered.
    - Data Schema is defined.
    - Blueprint is approved.

---

## ️ Phase 1: B - Blueprint (Vision & Logic)

**1. Discovery**: I will ask you:
-   **North Star**: What is the singular desired outcome?
-   **Integrations**: Which external services (Slack, Shopify, etc.)?
-   **Source of Truth**: Where does the primary data live?
-   **Delivery Payload**: How/where should the final result be delivered?
-   **Behavioral Rules**: How should the system "act"?

**2. Data-First Rule**: We must define the JSON Data Schema (Input/Output shapes). Coding only begins once the "Payload" shape is confirmed.

---

## ⚡ Phase 2: L - Link (Connectivity)
1.  **Verification**: Test all API connections and `.env` credentials.
2.  **Handshake**: Build minimal scripts to verify external services are responding.

---

## ⚙️ Phase 3: A - Architect (The 3-Layer Build)
We will separate concerns:
1.  **Layer 1 (SOPs)**: Markdown files defining logic and edge cases.
2.  **Layer 2 (Navigation)**: The AI reasoning layer routing data.
3.  **Layer 3 (Tools)**: Deterministic Python/Node scripts. Atomic and testable.

---

## ✨ Phase 4: S - Stylize (Refinement & UI)
1.  **Payload Refinement**: Format outputs (Slack blocks, Email HTML).
2.  **UI/UX**: Apply clean CSS/HTML if a dashboard is involved.

---

## ️ Phase 5: T - Trigger (Deployment)
1.  **Cloud Transfer**: Move to production.
2.  **Automation**: Set up triggers (Cron, Webhooks).
3.  **Documentation**: Finalize maintenance logs.

---

## 🤖 Operating Principles
-   **Data-First**: Define schema before building tools.
-   **Self-Annealing**: Analyze -> Patch -> Test -> Update Architecture (Documentation).
-   **Deliverables**: A project is only complete when the payload hits the final destination.
