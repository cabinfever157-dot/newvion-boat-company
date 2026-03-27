# Design System

This directory contains the design system for OZ Eligibility Compass.

## Structure

- `MASTER.md` — Global Source of Truth with all design rules
- `pages/` — Page-specific overrides

## How to Use

When building a specific page:

1. First check `design-system/pages/[page-name].md`
2. If that file exists, its rules **override** the Master file
3. If not, use `design-system/MASTER.md` exclusively

## Design System Overview

**Project:** OZ Eligibility Compass

**Style:** Glassmorphism

**Color Palette:**
- Primary: Indigo (#6366F1)
- Secondary: Light Indigo (#818CF8)
- CTA: Emerald (#10B981)
- Background: Light Purple (#F5F3FF)
- Text: Dark Indigo (#1E1B4B)

**Typography:**
- Font: Plus Jakarta Sans
- Mood: Friendly, modern, SaaS, clean, approachable, professional

## Key Principles

1. **Glassmorphism**: Use backdrop-blur and semi-transparent backgrounds
2. **Visual Hierarchy**: Highlight important data first
3. **Professional Typography**: Use Plus Jakarta Sans for all text
4. **Responsive**: Design for mobile, tablet, and desktop
5. **Accessibility**: Ensure 4.5:1 contrast ratio
