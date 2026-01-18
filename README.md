# SATYAH Corporate Website

A modern, premium, highly aesthetic, animated corporate website for SATYAH - a research-driven consulting organization.

## Features

- 🎨 **Modern Design**: Clean, minimal, premium aesthetic
- ✨ **Smooth Animations**: Powered by Framer Motion
- 📱 **Fully Responsive**: Works seamlessly across all devices
- 🚀 **Fast Performance**: Built with Vite and React
- ♿ **Accessible**: Following best practices for accessibility

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Framer Motion** - Animations
- **CSS3** - Styling with custom properties

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Logo.jsx
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Partners.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── Team.jsx
│   └── Contact.jsx
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Pages

- **Home**: Hero section, services overview, and partner showcase
- **About Us**: Mission, values, and approach
- **Services**: Detailed service offerings
- **Projects**: Partner and client projects with interactive modals
- **Meet the Team**: Team member profiles
- **Contact Us**: Contact form and information

## Design System

### Colors
- Primary: `#2C5F4F` (Deep green)
- Secondary: `#4A90A4` (Teal blue)
- Accent: `#7FB3A8` (Light green)
- Background: `#FAFAF9` (Warm white)
- Text: `#1A1A1A` (Near black)

### Typography
- Display: Playfair Display (headings)
- Body: Inter (body text)

## Customization

All design tokens are defined in `src/index.css` using CSS custom properties. You can easily customize:
- Colors
- Spacing
- Typography
- Shadows
- Transitions

## License

© 2024 SATYAH. All rights reserved.
