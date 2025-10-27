# Tailwind Theme Setup Documentation

This document describes the custom Tailwind CSS theme configuration, glassmorphism effects, and animations implemented in this project.

## Overview

The project uses **Tailwind CSS v4** with custom theme extensions, glassmorphism effects, and reusable animations. The theme supports dark mode with a class-based toggle system.

## Configuration Files

### 1. `tailwind.config.js`

The Tailwind configuration includes:

#### Dark Mode
- Strategy: `class` (toggle by adding/removing `dark` or `light` class on `<body>`)

#### Custom Colors
- **Dark shades**: `dark-700`, `dark-800`, `dark-900` (for dark backgrounds)
- **Accent colors**: `accent-indigo`, `accent-purple`, `accent-pink` (each with light/default/dark variants)

#### Background Gradients
- `bg-gradient-dark` - Dark gradient (used for dark mode background)
- `bg-gradient-light` - Light gradient (used for light mode background)
- `bg-gradient-indigo-purple` - Indigo to purple gradient
- `bg-gradient-purple-pink` - Purple to pink gradient
- `bg-gradient-indigo-pink` - Indigo to pink gradient

#### Font Families
- `font-sans`: Inter + system fonts
- `font-mono`: Fira Code + Monaco + Consolas
- `font-display`: Poppins + Inter (for headings)

#### Box Shadows
- `shadow-glass` - Standard glass effect shadow
- `shadow-glass-lg` - Larger glass effect shadow
- `shadow-glow-indigo/purple/pink` - Colored glow effects
- `shadow-inner-glass` - Inner glass shadow

## CSS Files

### 2. `src/styles/index.css`

Main stylesheet that includes:

#### Base Styles
- Global box-sizing, smooth scrolling
- Body background gradients (dark/light mode)
- Typography defaults for headings
- Smooth transitions on links and buttons

#### Component Classes
- `.gradient-text` - Base class for gradient text effects
- `.gradient-text-indigo-purple` - Indigo to purple gradient text
- `.gradient-text-purple-pink` - Purple to pink gradient text
- `.gradient-text-indigo-pink` - Indigo to pink gradient text

#### Utility Classes
- `.scrollbar-hide` - Hides scrollbars
- `.text-shadow` - Subtle text shadow
- `.text-shadow-lg` - Larger text shadow

### 3. `src/styles/glass.css`

Glassmorphism effect classes:

#### `.glass-frosted`
- Frosted glass effect with backdrop blur
- Hover animations (lift + enhanced glow)
- Variants: `.glass-frosted.dark`, `.glass-frosted.light`
- **Properties**: Semi-transparent background, 12px blur, border, shadow

#### `.glass-border`
- Glass effect with animated gradient border
- Uses pseudo-elements for gradient border effect
- Radial glow on hover
- **Properties**: Backdrop blur, gradient border (indigo/purple/pink), hover animations

#### Pre-styled Components
- `.glass-card` - Card with glass effect (rounded, padded)
- `.glass-panel` - Panel with gradient border (larger padding)
- `.glass-button` - Button with glass effect and hover animations

#### Responsive Adjustments
- Reduced blur on mobile devices (768px and below)
- Disabled transform animations on touch devices for better performance

### 4. `src/styles/animations.css`

Reusable animations and keyframes:

#### Keyframes
- `gradient-shift` - Animated gradient background position
- `float` - Floating animation (20px vertical movement)
- `float-subtle` - Subtle floating (10px vertical movement)
- `shimmer` - Shimmer effect for highlights
- `pulse-glow` - Pulsing glow effect
- `fade-in-up` - Fade in from bottom
- `fade-in-down` - Fade in from top
- `scale-in` - Scale up fade in
- `rotate-360` - Continuous rotation
- `bounce-subtle` - Subtle bounce effect

#### Utility Classes
- `.animate-gradient-shift` - Apply gradient shift animation
- `.animate-float` - Apply floating animation (6s duration)
- `.animate-float-subtle` - Apply subtle float (4s duration)
- `.animate-shimmer` - Apply shimmer effect
- `.animate-pulse-glow` - Apply pulsing glow
- `.animate-fade-in-up` - Fade in from bottom
- `.animate-fade-in-down` - Fade in from top
- `.animate-scale-in` - Scale in animation
- `.animate-rotate-360` - Continuous rotation
- `.animate-bounce-subtle` - Subtle bounce

#### Special Components
- `.scroll-indicator` - Animated scroll down indicator
- `.button-hover-lift` - Button with lift effect on hover
- `.button-hover-glow` - Button with gradient glow on hover
- `.stagger-children` - Stagger animation for child elements (up to 8 children)

## Usage Examples

### Dark Mode Toggle
```jsx
const toggleTheme = () => {
  document.body.classList.toggle('dark')
  document.body.classList.toggle('light')
}
```

### Glass Effects
```jsx
// Frosted glass card
<div className="glass-frosted p-6 rounded-xl">
  <h3>Glass Card</h3>
  <p>Content here</p>
</div>

// Card with gradient border
<div className="glass-border p-8 rounded-2xl">
  <h3>Bordered Card</h3>
  <p>Content here</p>
</div>

// Pre-styled components
<div className="glass-card">Card content</div>
<div className="glass-panel">Panel content</div>
<button className="glass-button">Click me</button>
```

### Gradient Text
```jsx
<h1 className="gradient-text-indigo-purple">
  Gradient Heading
</h1>

<h2 className="gradient-text-purple-pink">
  Another Gradient
</h2>
```

### Animations
```jsx
// Floating card
<div className="glass-card animate-float">
  Floating content
</div>

// Button with glow
<button className="glass-button button-hover-glow">
  Hover me
</button>

// Fade in animation
<div className="animate-fade-in-up">
  This fades in from bottom
</div>

// Staggered children
<div className="stagger-children">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Custom Colors
```jsx
<div className="bg-dark-800 text-white">Dark background</div>
<div className="bg-gradient-indigo-purple">Gradient background</div>
<div className="shadow-glow-purple">Glowing element</div>
```

## Testing

A test component is available at `src/components/ThemeTest.jsx` that demonstrates:
- Dark/light mode toggle
- All glass effect variants
- Animation effects
- Custom colors and gradients
- Button hover effects
- Scroll indicators

To view the test page, ensure `ThemeTest` is rendered in `App.jsx`.

## Browser Compatibility

- Modern browsers with backdrop-filter support
- Fallbacks provided for older browsers
- Responsive adjustments for mobile devices
- Hardware acceleration for animations

## Performance Considerations

- Backdrop blur reduced on mobile for better performance
- Transform animations disabled on small screens
- CSS animations use GPU acceleration
- Minimal repaints with will-change properties (where needed)
