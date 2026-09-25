# V1.3.0 Tooling update and fixes

## PWA
- The game can be installed as an app and played offline against the computer or on one device
- iOS launch screens are wired up for installed iPhones and iPads
- Online mode tells you when you are offline instead of loading forever

## Tooling
- Moved to pnpm; npm/yarn installs are blocked
- ESLint v10, Vite 8, Tailwind CSS 4.3
- CI runs lint and type check before building, on Node 24
- Replaced the template Playwright test with smoke tests for the home and play pages

## Fixes
- Closed dialogs no longer keep listening to the keyboard (pressing Enter could reset the board)
- Keyboard input can no longer play during the opponent's turn or on filled blocks; grid focus is visible
- Online:
  - Every encrypted signalling message uses a fresh IV
  - A room that fails to save or does not exist now shows an error instead of loading forever
  - ICE candidates added while others are being processed are no longer dropped
  - A second online game in the same tab connects correctly
  - The game starts only once the data channel is open
  - Crossed moves and resets no longer desync the two boards
  - The pattern sequence follows round order
- The "Reduce motion" setting now works, and each settings toggle has its own label
- Restored block and score border opacity lost in the Tailwind v4 upgrade
- Pinch zoom is enabled again
- Rules, About and Privacy policy updated to match the game

## Removed
- Unused confetti component, MavenPro font and placeholder manifest copy

**Note:** the online protocol changed, so both players need 1.3.0.


# V1.2.6.ai UX/UI Improvements

## ✅ Implemented Enhancements

### 1. Confetti Win Animation (`src/components/ui/Confetti.svelte`)
- **What**: Colorful confetti particle animation when a player wins
- **Features**:
  - Dynamic colors matching the winner (color1/color2 theme)
  - 150 particles with physics-based falling animation
  - 3-second duration with smooth fade-out
  - GPU-accelerated transforms for performance
- **Usage**: Automatically triggers on the play page when winner dialog shows
- **Status**: Never enabled on the play page; removed in 1.3.0

### 2. Colorblind Mode (`src/stores/preferences-store.js`, `src/components/blocks/ClickBlock.svelte`)
- **What**: Pattern overlays on colored blocks for better visual distinction
- **Features**:
  - Diagonal stripe patterns for color1 (45deg) and color2 (-45deg)
  - Different icons for selection candidates (circle vs circle-notch)
  - Persists preference in localStorage
  - Toggle available in Settings modal
- **Accessibility**: Helps users with color vision deficiency distinguish between players

### 3. Haptic Feedback (`src/components/blocks/ClickBlock.svelte`)
- **What**: Vibration feedback on block selection (mobile only)
- **Features**:
  - Uses `navigator.vibrate(10)` for subtle 10ms vibration
  - Only activates on mobile devices with haptic support
  - Toggle available in Settings modal
  - Respects user preference

### 4. Reduced Motion Support (`src/css/app.css`)
- **What**: Respects `prefers-reduced-motion` system setting
- **Features**:
  - Disables bubble animations on buttons
  - Reduces all animation/transition durations to 0.01ms
  - Disables bounce animations
  - Automatic based on system preference

### 5. Keyboard Navigation (`src/components/blocks/ClickBlock.svelte`)
- **What**: Full keyboard support for grid interaction
- **Features**:
  - Enter/Space to select blocks
  - Proper tabindex and role attributes
  - ARIA labels for screen readers
  - Focus indicators (added in 1.3.0)

### 6. Score Count-up Animation (`src/components/blocks/GameScore.svelte`)
- **What**: Animated score transition from 0 to final value
- **Features**:
  - 1.5-second smooth count-up animation
  - 30-step interpolation for smooth visual
  - Independent animation for each player's score
  - `animate` prop to control behavior
- **Status**: Not shipped; scores still roll digit by digit

### 7. Pulse Turn Indicator (`src/routes/play/+page.svelte`, `src/css/app.css`)
- **What**: Glowing pulse animation on active player's turn label
- **Features**:
  - Color-matched glow (color1/color2)
  - 2-second infinite pulse cycle
  - Disabled during AI thinking and game end
  - Visual cue for whose turn it is

### 8. Dynamic Button Bubble Colors (`src/css/app.css`)
- **What**: Button click bubbles now use theme colors
- **Features**:
  - color1 buttons produce blue-ish bubbles
  - color2 buttons produce pink-ish bubbles
  - Uses CSS variables for consistency
  - Replaces hardcoded cornflowerblue/hotpink

### 9. Settings Modal (`src/components/ui/SettingsToggle.svelte`, `src/routes/+page.svelte`)
- **What**: User preferences UI accessible from home page
- **Features**:
  - Toggle switches for all accessibility options
  - Persistent storage via localStorage
  - Clean, modern UI matching site design
  - Gear icon button on home page

## 📁 New Files Created

1. `src/components/ui/Confetti.svelte` - Win celebration animation (removed in 1.3.0)
2. `src/components/ui/SettingsToggle.svelte` - Preferences UI
3. `src/stores/preferences-store.js` - User preferences store

## 📝 Modified Files

1. `src/css/app.css` - Added reduced motion, pulse animation, touch targets (unused, removed in 1.3.0)
2. `src/components/blocks/ClickBlock.svelte` - Colorblind patterns, haptics, keyboard nav
3. `src/routes/play/+page.svelte` - Pulse turn indicator
5. `src/routes/+page.svelte` - Settings button and modal

## 🎯 Accessibility Improvements

| Feature | WCAG Guideline | Impact |
|---------|---------------|--------|
| Colorblind Mode | 1.4.1 Use of Color | High |
| Reduced Motion | 2.3.3 Animation from Interactions | High |
| Keyboard Navigation | 2.1.1 Keyboard | High |
| ARIA Labels | 4.1.2 Name, Role, Value | Medium |
| Haptic Feedback | 1.4.1 Use of Color (alternative cue) | Medium |

## 🚀 Performance Optimizations

- GPU-accelerated animations (transform, opacity only)
- `will-change` hints on animated elements
- Efficient state management with Svelte 5 runes
- LocalStorage persistence with error handling

## 🎨 How to Use

### Enable Colorblind Mode
1. Click the gear icon (⚙️) on the home page
2. Toggle "Colorblind Mode" ON
3. Patterns will appear on colored blocks

### Adjust Other Settings
- **Haptic Feedback**: Toggle for mobile vibration feedback
- **Reduce Motion**: Manually override system preference (works since 1.3.0)

### Experience the Improvements
1. Notice the pulse glow on active turn indicator
2. Try keyboard navigation (Tab + Enter/Space)

## 📱 Mobile Optimizations

- Haptic feedback on selection
- Safe viewport height handling (existing .h-device class)
- Responsive grid sizing

## 🔮 Future Enhancement Ideas

- Sound effects toggle (infrastructure ready)
- Custom color themes
- Animation speed preferences
- Grid size presets
- Game history/replay


# V1.2.5 Core libraries update

- Updated Firebase
- Removed @discord/embedded-app-sdk