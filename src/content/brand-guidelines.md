# Newvion Brand Guidelines

> **Design Direction**: Editorial Coastal Luxury
> **Inspired by**: Mediterranean lifestyle, "La Dolce Vita", Social Collective aesthetic

---

## 1. Design Philosophy

### Direction: Editorial Coastal Luxury

**Feel**: Calm, airy, Mediterranean-coastal, understated luxury. A place that encourages you to indulge in simple pleasures, stay active, have fun, but also recognize that rest is essential.

**Core Principles**:
- **Mediterranean Soul**: Rustic elegance, rich textures, warm tones
- **Sustainability Meets Luxury**: Premium without pretension
- **Intuitive Technology**: Seamless digital experiences
- **Social Spaces**: Designed for human connection
- **Purpose-Built**: Every element serves the experience
- **Shared Knowledge**: Learning and discovery at the heart

### Brand Personality (Visual)

| We Are | We Are Not |
|--------|------------|
| Understated | Flashy |
| Refined | Loud |
| Welcoming | Exclusive |
| Warm | Cold |
| Grounded | Pretentious |
| Soulful | Trendy |

---

## 2. Color System

### Primary Palette

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `cream` | Cream Surface | `#FAF7F2` | Primary background |
| `ivory` | Warm Ivory | `#F5F1EB` | Secondary background, cards |
| `sand` | Soft Sand | `#EDE8E0` | Tertiary surfaces, dividers |
| `stone` | Warm Stone | `#D4CFC6` | Borders, subtle accents |

### Text Colors

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `charcoal` | Near Black | `#1A1A1A` | Primary text |
| `slate` | Warm Slate | `#4A4A4A` | Secondary text, body |
| `muted` | Muted Gray | `#6B6B6B` | Captions, helper text |
| `soft` | Soft Gray | `#8B8B8B` | Disabled, placeholders |

### Accent Colors

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `forest` | Deep Forest Green | `#2D5A4A` | Primary accent, CTAs |
| `forest-light` | Forest Light | `#3D7A6A` | Hover states |
| `forest-dark` | Forest Dark | `#1D4A3A` | Active states |
| `gold` | Muted Gold | `#B8956B` | Highlights, premium elements |
| `gold-light` | Gold Light | `#C8A57B` | Hover highlights |
| `terracotta` | Warm Terracotta | `#C4725A` | Secondary accent, alerts |
| `terracotta-light` | Terracotta Light | `#D4826A` | Hover states |

### Semantic Colors

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `success` | Sage Green | `#5A8A6A` | Success states |
| `warning` | Warm Amber | `#D4A03A` | Warning states |
| `error` | Soft Coral | `#C45A4A` | Error states |
| `info` | Soft Teal | `#4A8A9A` | Info states |

### Gradient Presets

```css
/* Hero gradient - subtle warmth */
gradient-hero: linear-gradient(180deg, #FAF7F2 0%, #F5F1EB 100%)

/* Card hover - gentle lift */
gradient-card: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(250,247,242,1) 100%)

/* Premium accent - gold shimmer */
gradient-premium: linear-gradient(135deg, #B8956B 0%, #C8A57B 50%, #B8956B 100%)

/* Coastal mist - atmospheric */
gradient-mist: linear-gradient(180deg, rgba(45,90,74,0.05) 0%, transparent 100%)
```

---

## 3. Typography

### Font Stack

| Role | Font | Source | Usage |
|------|------|--------|-------|
| Display (Headings) | **Playfair Display** | Google Fonts | H1-H3, hero headlines, feature titles |
| Body (Text) | **Inter** | Google Fonts | Body copy, UI elements, buttons |
| Accent (Optional) | **Cormorant Garamond** | Google Fonts | Pull quotes, captions, labels |

### Type Scale

| Token | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `display-xl` | 72px / 4.5rem | 1.0 | -0.02em | Hero headlines |
| `display-lg` | 60px / 3.75rem | 1.1 | -0.02em | Section heroes |
| `display-md` | 48px / 3rem | 1.15 | -0.01em | Feature headings |
| `heading-xl` | 36px / 2.25rem | 1.2 | -0.01em | H1 equivalent |
| `heading-lg` | 30px / 1.875rem | 1.25 | 0 | H2 equivalent |
| `heading-md` | 24px / 1.5rem | 1.3 | 0 | H3 equivalent |
| `heading-sm` | 20px / 1.25rem | 1.35 | 0 | H4 equivalent |
| `body-lg` | 18px / 1.125rem | 1.6 | 0 | Lead paragraphs |
| `body-md` | 16px / 1rem | 1.65 | 0 | Body copy |
| `body-sm` | 14px / 0.875rem | 1.5 | 0.01em | Small text, meta |
| `caption` | 12px / 0.75rem | 1.4 | 0.02em | Captions, labels |
| `overline` | 11px / 0.6875rem | 1.3 | 0.1em | Overlines, tags |

### Mobile Type Scale (Responsive)

| Token | Mobile Size | Desktop Size |
|-------|-------------|--------------|
| `display-xl` | 40px | 72px |
| `display-lg` | 36px | 60px |
| `display-md` | 30px | 48px |
| `heading-xl` | 28px | 36px |
| `heading-lg` | 24px | 30px |
| `heading-md` | 20px | 24px |

### Typography Rules

1. **Headings**: Always use Playfair Display. Maximum visual impact. Generous spacing above.
2. **Body**: Inter for readability. Never go below 14px for body text.
3. **Line Length**: Maximum 65-75 characters for optimal readability.
4. **Contrast**: Minimum 4.5:1 for body text, 3:1 for large text.

---

## 4. Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `space-0` | 0 | Reset |
| `space-1` | 4px | Tight spacing, icon gaps |
| `space-2` | 8px | Component internal padding |
| `space-3` | 12px | Small gaps |
| `space-4` | 16px | Standard padding |
| `space-5` | 20px | Medium gaps |
| `space-6` | 24px | Section internal padding |
| `space-8` | 32px | Large gaps |
| `space-10` | 40px | Section padding (mobile) |
| `space-12` | 48px | Section padding |
| `space-16` | 64px | Section padding (desktop) |
| `space-20` | 80px | Large section padding |
| `space-24` | 96px | Hero section padding |
| `space-32` | 128px | Maximum section padding |

### Section Padding

```css
/* Mobile first */
.section-padding: padding-top: 48px; padding-bottom: 48px;

/* Tablet (md) */
@media (min-width: 768px) {
  .section-padding: padding-top: 80px; padding-bottom: 80px;
}

/* Desktop (lg) */
@media (min-width: 1024px) {
  .section-padding: padding-top: 96px; padding-bottom: 96px;
}
```

---

## 5. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Small elements, tags |
| `radius-md` | 8px | Buttons, inputs |
| `radius-lg` | 12px | Cards (small) |
| `radius-xl` | 16px | Cards (medium) |
| `radius-2xl` | 24px | Cards (large), primary radius |
| `radius-3xl` | 32px | Hero elements, feature cards |
| `radius-full` | 9999px | Pills, avatars, circular elements |

### Arch/Oval Image Masks

```css
/* Oval portrait mask */
.mask-oval: border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

/* Arch window mask */
.mask-arch: border-radius: 50% 50% 0 0 / 30% 30% 0 0;

/* Soft arch */
.mask-soft-arch: border-radius: 24px 24px 0 0;
```

---

## 6. Shadows & Depth

### Shadow System

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-xs` | `0 1px 2px rgba(26,26,26,0.04)` | Subtle lift |
| `shadow-sm` | `0 2px 4px rgba(26,26,26,0.06)` | Cards (resting) |
| `shadow-md` | `0 4px 8px rgba(26,26,26,0.08)` | Cards (hover) |
| `shadow-lg` | `0 8px 16px rgba(26,26,26,0.10)` | Dropdowns, modals |
| `shadow-xl` | `0 16px 32px rgba(26,26,26,0.12)` | Hero elements |
| `shadow-2xl` | `0 24px 48px rgba(26,26,26,0.16)` | Floating elements |

### Depth Layers

| Level | Shadow + Border | Usage |
|-------|-----------------|-------|
| `depth-0` | None | Flat backgrounds |
| `depth-1` | shadow-sm + border subtle | Cards resting |
| `depth-2` | shadow-md + border subtle | Cards hover |
| `depth-3` | shadow-lg + no border | Dropdowns, popovers |
| `depth-4` | shadow-xl + no border | Modals, dialogs |

### Border Subtle

```css
border-subtle: 1px solid rgba(26,26,26,0.06);
border-accent: 1px solid rgba(45,90,74,0.15);
```

---

## 7. Motion System

### Timing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entering elements |
| `ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exiting elements |
| `ease-in-out` | `cubic-bezier(0.87, 0, 0.13, 1)` | State changes |
| `spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful bounces |

### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `duration-instant` | 50ms | Immediate feedback |
| `duration-fast` | 150ms | Micro-interactions |
| `duration-normal` | 250ms | Standard transitions |
| `duration-slow` | 400ms | Complex animations |
| `duration-slower` | 600ms | Page transitions |
| `duration-slowest` | 800ms | Cinematic reveals |

### Animation Presets

```css
/* Fade in up */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Scale in */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* Slide in from right */
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(24px); }
  to { opacity: 1; transform: translateX(0); }
}
```

### Motion Rules

1. **Maximum Duration**: Never exceed 450ms for interactive elements
2. **Stagger Children**: 50-100ms delay between staggered animations
3. **Reduced Motion**: All animations must respect `prefers-reduced-motion`
4. **Spring for Movement**: Use spring easing for playful interactions
5. **Ease-out for Entry**: Always ease-out when elements appear

### Reduced Motion Override

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Component Patterns

### Buttons

| Variant | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| Primary | `forest` | `cream` | None | `forest-light` |
| Secondary | `ivory` | `charcoal` | `border-subtle` | `sand` |
| Outline | Transparent | `forest` | `forest` | `forest` bg + `cream` text |
| Ghost | Transparent | `charcoal` | None | `ivory` bg |
| Premium | `gold` | `charcoal` | None | `gold-light` |

### Button Sizes

| Size | Height | Padding | Font | Radius |
|------|--------|---------|------|--------|
| `sm` | 36px | 12px 16px | 14px | `radius-md` |
| `md` | 44px | 14px 24px | 16px | `radius-md` |
| `lg` | 52px | 16px 32px | 18px | `radius-lg` |
| `xl` | 60px | 18px 40px | 20px | `radius-lg` |

### Cards

| Type | Padding | Radius | Shadow | Border |
|------|---------|--------|--------|--------|
| Default | 24px | `radius-2xl` | `shadow-sm` | `border-subtle` |
| Featured | 32px | `radius-3xl` | `shadow-md` | None |
| Compact | 16px | `radius-xl` | `shadow-xs` | `border-subtle` |

### Input Fields

| State | Border | Background | Shadow |
|-------|--------|------------|--------|
| Default | `border-subtle` | `cream` | None |
| Focus | `forest` (2px) | `cream` | `shadow-sm` forest tint |
| Error | `error` (2px) | `cream` | `shadow-sm` error tint |
| Disabled | `stone` | `sand` | None |

---

## 9. Surface Treatments

### Grain Texture (Optional)

```css
.grain-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}
```

### Glass Effect

```css
.glass {
  background: rgba(250, 247, 242, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

### Gradient Overlays

```css
/* Image overlay for text legibility */
.image-overlay {
  background: linear-gradient(180deg, 
    rgba(26,26,26,0) 0%, 
    rgba(26,26,26,0.4) 100%
  );
}
```

---

## 10. Responsive Breakpoints

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Container Widths

| Breakpoint | Max Width | Padding |
|------------|-----------|---------|
| Default | 100% | 16px |
| `sm` | 640px | 24px |
| `md` | 768px | 32px |
| `lg` | 1024px | 48px |
| `xl` | 1280px | 64px |
| `2xl` | 1400px | 64px |

---

## 11. Iconography

### Guidelines

- Use Lucide React icons sparingly
- Prefer typography + spacing over icon overload
- Standard size: 20px (body-aligned)
- Large size: 24px (heading-aligned)
- Small size: 16px (caption-aligned)

### Icon Colors

| Context | Color |
|---------|-------|
| Inline with text | Inherit text color |
| Standalone accent | `forest` |
| Interactive | `charcoal` → `forest` on hover |
| Disabled | `soft` |

---

## 12. Accessibility

### Focus States

```css
:focus-visible {
  outline: 2px solid #2D5A4A;
  outline-offset: 2px;
}
```

### Color Contrast Requirements

| Element | Minimum Ratio |
|---------|---------------|
| Body text | 4.5:1 |
| Large text (18px+) | 3:1 |
| UI components | 3:1 |
| Focus indicators | 3:1 |

### Interactive Element Sizing

- Minimum touch target: 44x44px
- Minimum click target: 24x24px (with spacing)

---

## 13. Design Tokens Summary

### Quick Reference

```typescript
// colors
primary: forest // #2D5A4A
background: cream // #FAF7F2
surface: ivory // #F5F1EB
text: charcoal // #1A1A1A
accent: gold // #B8956B

// typography
display: Playfair Display
body: Inter

// radius
default: 2xl // 24px

// shadow
card: shadow-sm
hover: shadow-md

// motion
default: 250ms ease-out
```

---

*Brand Guidelines v1.0 — Newvion Design System*
