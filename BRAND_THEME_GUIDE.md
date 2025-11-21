# Toddler Kingdom Pre-Loved Market - Brand Theme Guide

## Brand Identity
**Name:** Toddler Kingdom Pre-Loved Market  
**Tagline:** Quality Pre-Loved Items for Your Little Ones

## Color Palette

### Primary Colors
- **Primary Blue** (`#4A90E2`) - `primary-blue`
  - Usage: Trust elements, CTA buttons, links, security badges, verified sellers, payment sections
  - Represents: Trust, reliability, safety

- **Peachy Pink** (`#FFB6C1`) - `peachy-pink`
  - Usage: Nurturing elements, user profiles, favorites, baby-specific categories, seller highlights
  - Represents: Care, warmth, nurturing

### Supporting Colors
- **Accent Cream** (`#FFF8E7`) - `accent-cream`
  - Usage: Background highlights, selected states, form backgrounds
  - Represents: Softness, comfort

- **Soft Lavender** (`#E6E6FA`) - `soft-lavender`
  - Usage: Categories, tags, pending status badges
  - Represents: Calm, gentle

- **Success Green** (`#10B981`) - `success-green`
  - Usage: Success states, completed purchases, available items, positive reviews, approved status
  - Represents: Success, availability, approval

### Neutral Colors
- **Off White** (`#FAFAFA`) - `off-white`
  - Usage: Page backgrounds, card backgrounds
  - Keeps focus on product photos

- **Medium Grey** (`#6B7280`) - `medium-grey`
  - Usage: Body text, secondary information
  - Ensures readability

## Typography
- **Headings:** Bold, clear, friendly
- **Body Text:** Medium grey for easy reading
- **Links:** Primary blue with peachy pink hover state

## Component Styling Guidelines

### Buttons
#### Primary CTA Buttons
```css
bg-primary-blue hover:bg-blue-600 text-white rounded-lg shadow-md
```
- Used for: Login, Sign Up, Submit, Upload, Primary actions

#### Secondary Buttons
```css
bg-peachy-pink hover:bg-pink-400 text-white rounded-lg
```
- Used for: Seller-specific actions, profile updates

#### Tertiary Buttons
```css
bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg
```
- Used for: Cancel, Back, Secondary actions

### Cards & Containers
#### Product Cards
```css
bg-white border border-gray-200 rounded-lg hover:shadow-lg
```
- White backgrounds to highlight product photos
- Subtle borders for definition
- Hover effects for interactivity

#### Selection Cards (Buyer/Seller)
```css
Selected: border-primary-blue bg-accent-cream shadow-md
Unselected: border-gray-300 hover:border-peachy-pink hover:bg-accent-cream
```

#### Upload/Form Areas
```css
bg-accent-cream border-2 border-dashed border-peachy-pink rounded-lg
```

### Status Badges
#### Pending Verification
```css
bg-soft-lavender text-purple-800 rounded-full px-3 py-1
```

#### Approved
```css
bg-green-100 text-success-green rounded-full px-3 py-1
```

#### Rejected
```css
bg-red-100 text-red-800 rounded-full px-3 py-1
```

### Navigation
#### Active Tab
```css
border-b-2 border-primary-blue text-primary-blue
```

#### Inactive Tab
```css
text-medium-grey hover:text-peachy-pink
```

### Links
```css
text-primary-blue hover:text-peachy-pink transition-colors
```

## Layout Principles

### White Space
- Generous padding and margins
- Clean, uncluttered layouts
- Breathing room around elements
- Creates a safe, calm feeling

### Backgrounds
- Primary background: Off-white (`#FAFAFA`)
- Content areas: White
- Highlighted sections: Accent cream
- Special areas: Soft lavender

### Borders & Shadows
- Subtle borders: `border-gray-200`
- Hover shadows: `hover:shadow-lg`
- Active shadows: `shadow-md`
- Dashed borders for upload areas

## Page-Specific Applications

### Login/Signup Pages
- **Background:** Off-white
- **Form container:** White with subtle border
- **Heading underline:** Peachy pink wave
- **Brand subtitle:** Medium grey
- **CTA button:** Primary blue
- **Links:** Primary blue → Peachy pink on hover

### Seller Dashboard
- **Tab navigation:** Primary blue active, medium grey inactive
- **Upload button:** Primary blue with shadow
- **Upload form area:** Accent cream with peachy pink dashed border
- **Status badges:** Soft lavender (pending), green (approved), red (rejected)
- **Analytics cards:** Bordered with brand colors

### Product Listings
- **Category tags:** Soft lavender background
- **Product cards:** White with hover shadow
- **Verified seller badge:** Primary blue
- **Favorite icon:** Peachy pink
- **Add to cart button:** Primary blue

### User Profile
- **Profile sections:** Peachy pink accents
- **Favorites:** Peachy pink highlights
- **Orders:** Primary blue for tracking
- **Settings:** Neutral with blue CTAs

## Accessibility Considerations
- **Color Contrast:** All text meets WCAG AA standards
- **Focus States:** Clear blue outline on interactive elements
- **Hover States:** Smooth transitions for all interactive elements
- **Status Indicators:** Icons + color for colorblind users

## Brand Voice & Messaging
- **Tone:** Warm, trustworthy, caring
- **Language:** Simple, clear, parent-friendly
- **Messaging:** Focus on quality, safety, sustainability
- **Headlines:** 
  - "Welcome Back" (Login)
  - "Join Our Community" (Signup)
  - "Seller Dashboard - Toddler Kingdom" (Dashboard)

## Implementation Notes

### Tailwind Config
All brand colors are defined in `tailwind.config.js`:
```javascript
colors: {
  'primary-blue': '#4A90E2',
  'peachy-pink': '#FFB6C1',
  'accent-cream': '#FFF8E7',
  'soft-lavender': '#E6E6FA',
  'off-white': '#FAFAFA',
  'medium-grey': '#6B7280',
  'success-green': '#10B981',
}
```

### Legacy Colors
Legacy color names (customBlue, qblack, etc.) have been updated to use the new brand colors for backward compatibility.

## Future Enhancements
- [ ] Add brand logo/icon
- [ ] Create loading animations with brand colors
- [ ] Design custom illustrations for empty states
- [ ] Develop icon set with brand personality
- [ ] Create email templates with brand theme
- [ ] Design mobile app splash screens
- [ ] Develop social media assets

## Resources
- Color palette: Saved in design system
- Typography: System fonts with fallbacks
- Icons: SVG icons with brand colors
- Images: High-quality product photos on white backgrounds
