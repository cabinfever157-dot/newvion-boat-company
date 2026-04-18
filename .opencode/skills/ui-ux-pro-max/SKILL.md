---
name: ui-ux-pro-max
description: UI/UX design intelligence with searchable database
---
# ui-ux-pro-max

Comprehensive design guide for web and mobile applications. Contains 67 styles, 96 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 13 technology stacks. Searchable database with priority-based recommendations.

## Prerequisites

```bash
python3 --version || python --version
```

**Windows:** `winget install Python.Python.3.12`

---

## How to Use This Skill

When user requests UI/UX work, follow this workflow:

### Step 1: Analyze User Requirements
- **Product type**: SaaS, e-commerce, portfolio, dashboard, landing page
- **Style keywords**: minimal, playful, professional, elegant, dark mode
- **Industry**: healthcare, fintech, gaming, education
- **Stack**: React, Vue, Next.js, or default to `html-tailwind`

### Step 2: Generate Design System (REQUIRED)

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "[[product_type]] [[industry]] [[keywords]]" --design-system [-p "Project Name"]
```

### Step 2b: Persist Design System

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "[[query]]" --design-system --persist -p "Project Name"
```

Creates:
- `design-system/MASTER.md` — Global Source of Truth
- `design-system/pages/` — Page-specific overrides

### Step 3: Supplement with Detailed Searches

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "[[keyword]]" --domain [[domain]] [-n [[max_results]]]
```

| Need | Domain |
|------|--------|
| More style options | `style` |
| Chart recommendations | `chart` |
| UX best practices | `ux` |
| Alternative fonts | `typography` |
| Landing structure | `landing` |

### Step 4: Stack Guidelines

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "[[keyword]]" --stack html-tailwind
```

Available: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `shadcn`

---

## Common Rules for Professional UI

| Rule | Do | Don't |
|------|----|-------|
| Icons | Use SVG (Heroicons, Lucide) | Use emojis as UI icons |
| Cursor | `cursor-pointer` on all clickable elements | Leave default cursor |
| Glass cards (light) | `bg-white/80` or higher | `bg-white/10` (too transparent) |
| Text contrast | `#0F172A` (slate-900) for body | `#94A3B8` for body text |
| Navbar | `top-4 left-4 right-4` spacing | `top-0 left-0 right-0` flush |

---

## Pre-Delivery Checklist

- [ ] No emojis used as icons (SVG only)
- [ ] All icons from consistent set (Heroicons/Lucide)
- [ ] All clickable elements have `cursor-pointer`
- [ ] Transitions: 150-300ms
- [ ] Light mode text contrast 4.5:1 minimum
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] `prefers-reduced-motion` respected
