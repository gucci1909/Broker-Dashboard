# Broker Dashboard System

![AmanaDesk Logo](./public/AmanaDeskLogo.svg)

A modern real estate broker management dashboard with RTL (Right-to-Left) Arabic language support and comprehensive analytics.

## Key Features

- 📊 **Multi-language Support**: Fully localized for English and Arabic
- ↔️ **RTL Layout**: Complete right-to-left interface for Arabic users
- 📈 **Performance Analytics**: Sales tracking, lead conversion, and deal performance
- 🔔 **Real-time Updates**: Market news ticker and activity stream
- 📱 **Responsive Design**: Works on all device sizes

## Language Support

This system features complete bilingual support:

- **English (LTR)**: Default left-to-right layout
- **العربية (RTL)**: Automatic right-to-left layout switching with:
  - Mirrored UI elements
  - Arabic font rendering
  - Hijri date options
  - Eastern Arabic numerals (١٢٣)

## Technology Stack

- React 18 + Vite
- Tailwind CSS with RTL plugin
- i18next for internationalization
- Framer Motion for animations
- Chart.js for data visualization

## Deployment Guide

### Prerequisites

- Node.js v18+
- npm v9+
- Netlify/Vercel account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gucci1909/Broker-Dashboard.git
   cd broker-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` folder.

### Deployment Options

#### Option 1: Netlify

- Drag and drop the `dist` folder to Netlify's dashboard.

Or connect your GitHub repository and set these build settings:

- **Build command**: `npm run build`
- **Publish directory**: `dist`

#### Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel --prod
   ```
3. Configure settings:
   - **Framework**: Vite
   - **Output Directory**: `dist`

### Post-Deployment

- Set up a custom domain (optional).
- Configure HTTPS (automatically enabled).
- Add environment variables in your hosting provider's dashboard.

## Development

Start the local development server:

```bash
npm run dev
```

## Configuration

Edit `src/i18n.js` to:

- Add new languages.
- Modify translation strings.
- Configure language detection.