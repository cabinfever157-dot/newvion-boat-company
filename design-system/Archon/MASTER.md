# Design System Master File (Archon Core)

> **LOGIC:** Start here for all UI generation.
> **Philosophy:** "System Sovereign, Dark Mode, Terminal"

---

## 🎨 Global Rules

### Color Palette (System Dark)
| Role | Hex | Tailwind Class |
|------|-----|----------------|
| **Void Black** (Bg) | `#09090b` | `bg-background` |
| **Zinc** (Surface) | `#18181b` | `bg-card` |
| **Neon Green** (Accent) | `#22c55e` | `text-green-500` |
| **Error Red** | `#ef4444` | `text-destructive` |

### Typography
- **Headings**: `JetBrains Mono` — Code-like, technical.
- **Body**: `Inter` — Clean UI text.

---

## 🚫 Anti-Patterns
- ❌ No Light Mode (Default to Dark).
- ❌ No "Friendly" rounded buttons (Use sharp/technical).
