---
name: Lumina Hyperlocal
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#bbcbb7'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#869582'
  outline-variant: '#3d4a3b'
  surface-tint: '#40e360'
  primary: '#96ff9a'
  on-primary: '#00390e'
  primary-container: '#47e865'
  on-primary-container: '#006420'
  inverse-primary: '#006e23'
  secondary: '#bcc2ff'
  on-secondary: '#00179c'
  secondary-container: '#2234b8'
  on-secondary-container: '#a6afff'
  tertiary: '#e8e6f2'
  on-tertiary: '#2f3038'
  tertiary-container: '#cbcad5'
  on-tertiary-container: '#54555e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6dff7f'
  primary-fixed-dim: '#40e360'
  on-primary-fixed: '#002106'
  on-primary-fixed-variant: '#005319'
  secondary-fixed: '#dfe0ff'
  secondary-fixed-dim: '#bcc2ff'
  on-secondary-fixed: '#000b63'
  on-secondary-fixed-variant: '#2234b8'
  tertiary-fixed: '#e3e1ed'
  tertiary-fixed-dim: '#c6c5d0'
  on-tertiary-fixed: '#1a1b23'
  on-tertiary-fixed-variant: '#45464f'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style

The design system is engineered to bridge the gap between institutional reliability and cutting-edge tech innovation. It targets B2B stakeholders who demand the precision of high-end financial tools (Stripe) and the immersive, focused environment of modern engineering interfaces (Linear).

The visual style is **Modern-Tech**, characterized by a dark-mode-first hierarchy that utilizes depth through light. It employs a "Deep Surface" philosophy: high-contrast dark backgrounds are punctuated by vibrant, glowing accents and glassmorphic overlays. The "hyperlocal" aspect is represented through high-density information layouts that remain legible and approachable, ensuring that complex data feels grounded and actionable.

## Colors

The palette is anchored by **Primary Green (#47E865)**, used strategically for primary actions, success states, and rhythmic "pings" of light. **Deep Blue (#2C3DBF)** provides a sophisticated structural secondary tone, often used in subtle gradients to add depth to dark surfaces.

The system utilizes a "Glow-Logic" hierarchy:
- **Base:** Deep, near-black neutrals for maximum contrast.
- **Surfaces:** Translucent layers that adopt the tint of the colors beneath them.
- **Accents:** High-vibrancy green for interaction points.
- **Borders:** Subtle 1px strokes using semi-transparent versions of the primary and secondary colors to create a "etched" look.

## Typography

Typography in this design system balances personality with utility. **Plus Jakarta Sans** is reserved for headings and display elements to provide a friendly, modern, and distinctive brand voice. Its soft curves contrast beautifully against the dark, technical background.

**Inter** is the workhorse for all functional UI, data entry, and body copy. It ensures maximum legibility at small sizes and maintains a professional, systematic feel. Use tighter letter spacing for headlines to achieve the "Linear-style" premium look, and standard spacing for body copy to ensure readability in data-heavy B2B contexts.

## Layout & Spacing

The system utilizes a **12-column fluid grid** with generous margins to evoke a premium, spacious feel. A 4px baseline grid governs all internal component spacing, ensuring mathematical harmony across the UI.

- **Layout Model:** Fixed-width centered containers for dashboards (1440px max), with fluid internal layouts.
- **Padding:** Use "Airy Density." While the information is dense, the use of large padding (xl/xxl) between major sections prevents cognitive overload.
- **Margins:** 24px standard gutter between cards to allow "glow" effects and shadows room to breathe without overlapping adjacent elements.

## Elevation & Depth

Depth is conveyed through a combination of **Glassmorphism** and **Ambient Glows**. 

1.  **Level 0 (Base):** Deep Blue-Black (#0B0C10).
2.  **Level 1 (Cards/Sections):** Slightly lighter neutral with a 1px inner stroke (border-white 10%).
3.  **Level 2 (Floating Elements/Modals):** Glassmorphic surfaces with a `backdrop-filter: blur(20px)` and a soft, green-tinted drop shadow (`0 20px 40px rgba(0,0,0,0.4)`).
4.  **Interaction:** When hovered, primary elements should emit a subtle outer glow using the Primary Green at 15% opacity to simulate light emitting from the component.

## Shapes

The shape language is defined by **pronounced roundness**, moving away from the sharp corners of traditional enterprise software to appear more "tech-forward" and approachable.

- **Standard Components:** 8px (0.5rem) for buttons and inputs.
- **Cards/Containers:** 16px (1rem) for most dashboard cards.
- **Large Modals/Feature Sections:** 24px (1.5rem) for high-impact floating containers.

All rounded corners should use **squircle (continuous) smoothing** where possible to maintain the premium aesthetic found in modern OS interfaces.

## Components

### Buttons
- **Primary:** Solid Primary Green (#47E865) with black text. On hover, add a subtle green box-shadow glow.
- **Secondary:** Ghost style with a 1px Deep Blue border and translucent blue background on hover.

### Cards
- Cards must feature a 1px border. On dark backgrounds, use a gradient border (top-left to bottom-right) from white (10% opacity) to white (0% opacity).
- Ensure `overflow: hidden` to maintain the integrity of the large border-radius.

### Inputs
- Backgrounds should be darker than the card surface.
- Focus state: The border transitions to Primary Green with a 2px outer glow.

### Chips/Badges
- Use pill-shapes (rounded-full).
- Backgrounds should be highly desaturated versions of the status color (e.g., Success = Green at 10% opacity) with high-vibrancy text.

### Floating UI
- Navigation rails and toolbars should appear "detached" from the edges of the screen, utilizing the 1.5rem border-radius and backdrop-blur to float over the content.