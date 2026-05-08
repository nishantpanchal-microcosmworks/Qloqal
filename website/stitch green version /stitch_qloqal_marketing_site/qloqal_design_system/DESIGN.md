---
name: Qloqal Design System
colors:
  surface: '#f3fced'
  surface-dim: '#d3ddce'
  surface-bright: '#f3fced'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf7e7'
  surface-container: '#e7f1e2'
  surface-container-high: '#e1ebdc'
  surface-container-highest: '#dce5d7'
  on-surface: '#151e15'
  on-surface-variant: '#3d4a3b'
  inverse-surface: '#2a3329'
  inverse-on-surface: '#eaf4e5'
  outline: '#6c7b69'
  outline-variant: '#bbcbb7'
  surface-tint: '#006e23'
  primary: '#006e23'
  on-primary: '#ffffff'
  primary-container: '#47e865'
  on-primary-container: '#006420'
  inverse-primary: '#40e360'
  secondary: '#3c4dcd'
  on-secondary: '#ffffff'
  secondary-container: '#5767e8'
  on-secondary-container: '#fffbff'
  tertiary: '#845332'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffbd95'
  on-tertiary-container: '#7a4a2a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6dff7f'
  primary-fixed-dim: '#40e360'
  on-primary-fixed: '#002106'
  on-primary-fixed-variant: '#005319'
  secondary-fixed: '#dfe0ff'
  secondary-fixed-dim: '#bcc2ff'
  on-secondary-fixed: '#000b63'
  on-secondary-fixed-variant: '#2234b8'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#fab891'
  on-tertiary-fixed: '#321300'
  on-tertiary-fixed-variant: '#683c1d'
  background: '#f3fced'
  on-background: '#151e15'
  surface-variant: '#dce5d7'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
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
    fontWeight: '500'
    lineHeight: '1.4'
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  desktop-padding: 96px
  container-max-width: 1280px
  gutter: 24px
  scale: '{''xs'': ''4px'', ''sm'': ''8px'', ''md'': ''16px'', ''lg'': ''24px'', ''xl'':
    ''32px'', ''xxl'': ''48px'', ''huge'': ''96px''}'
---

## Brand & Style
The design system is anchored in a **Confident SaaS** aesthetic, blending the reliability of a high-end enterprise platform with the vibrant energy of hyperlocal commerce. It aims to evoke a sense of trust and local vitality.

The visual style utilizes a modern, clean approach characterized by:
- **Generous Whitespace:** Promoting clarity and focus on commerce items.
- **Card-Driven Architecture:** Organizing information into distinct, tactile containers that feel interactive.
- **Vibrant Professionalism:** Using a high-contrast palette and energetic gradients to differentiate from standard utilitarian tools.
- **Precision:** Fine strokes and geometric alignment that suggest a high-performance, scalable platform.

## Colors
This design system uses a high-energy primary green to signal growth and local freshness, balanced by a deep secondary blue for institutional stability.

- **Primary & Secondary:** Use the Primary Green for main actions and the Secondary Blue for navigation or secondary brand touchpoints.
- **Tints:** Use the light tints for background sections, subtle hover states, or category labeling to maintain color association without overwhelming the user.
- **Neutrals:** "Ink" is the primary color for all typography to ensure maximum legibility against "Pure White" surfaces. "Muted" is reserved for helper text and inactive states.
- **Glow Gradient:** Apply the 135-degree linear gradient for high-impact moments such as primary CTAs, premium badges, or feature highlights.

## Typography
The typography strategy pairings prioritize character in headings and utility in body text.

- **Headings:** Plus Jakarta Sans provides a friendly, geometric personality. Use the 800 weight for hero sections and 700 for standard page headers.
- **Body:** Inter is used for all functional text to ensure cross-platform readability. Use the 500 weight for emphasized body text or interface labels.
- **Spacing:** Tighten letter spacing on larger headings to maintain the "Confident SaaS" look, while keeping body text at default for optimal flow.

## Layout & Spacing
The layout follows a **fixed-width container model** on desktop to maintain the premium SaaS feel, transitioning to a fluid model on smaller devices.

- **Desktop Margins:** A signature 96px padding is applied to the main viewport edges to create an expansive, high-end look.
- **Grid System:** Utilize a 12-column grid with 24px gutters for internal card layouts.
- **Rhythm:** All vertical spacing should follow an 8px baseline grid to ensure mathematical harmony between components.

## Elevation & Depth
Depth in this design system is achieved through **ambient shadows** and tonal layering rather than harsh borders.

- **Surface Strategy:** The base background is "Surface" (#F6F8FA). All primary content cards sit on "Pure White" (#FFFFFF).
- **Shadow Profile:** Use a soft, multi-layered shadow for cards: `0px 4px 20px rgba(14, 19, 48, 0.05)`. For interactive hover states, increase the blur and slightly increase opacity.
- **Glow Effects:** Use the glow gradient as a subtle outer glow (drop shadow with color) for active states of primary buttons or featured merchant cards.

## Shapes
The shape language is approachable and modern, utilizing significant rounding to soften the SaaS structure.

- **Cards:** Use a large 24px radius for main containers and product cards to emphasize the "hyperlocal" friendliness.
- **Buttons:** A 12px radius provides a professional yet soft touch.
- **Icons:** All iconography must use a 1.5px stroke weight with rounded caps and corners. Use the "outline" style exclusively to maintain a light, airy feel.

## Components
- **Buttons:** Primary buttons use the Glow Gradient with white text. Secondary buttons use a 1.5px Ink outline or the Light Blue Tint background with Secondary Blue text.
- **Cards:** Every card must have a 24px corner radius and the defined soft shadow. Internal padding for cards should be 24px (lg spacing).
- **Input Fields:** Use a 1.5px border in "Muted" color. On focus, the border shifts to the "Secondary Blue" or "Primary Green" with a subtle 4px glow in the same color.
- **Chips/Badges:** Use the "Light Green" or "Light Blue" tints for categories. Text should be the corresponding dark shade (Primary Green or Secondary Blue) in the Label typography style.
- **Hyperlocal Map Elements:** Map pins should utilize the Primary Green with a small white dot in the center, using a simplified version of the card shadow for depth.
- **Lists:** Use 16px vertical padding between list items, separated by a 1px line in the "Surface" color.