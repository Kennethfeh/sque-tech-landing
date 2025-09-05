# Sque Landing Page

A modern, Stripe-inspired landing page built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a comprehensive feature set for showcasing digital products and services.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Subtle Framer Motion animations for enhanced UX
- **Performance Optimized**: Fast loading with optimized images and fonts
- **SEO Ready**: Complete meta tags, Open Graph, and Twitter cards
- **Maintenance Mode**: Environment-based maintenance page toggle
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Code Quality**: ESLint, Prettier, and TypeScript for clean, maintainable code

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (inline SVG)
- **Code Quality**: ESLint + Prettier
- **Deployment**: Vercel (recommended)

## 🏗 Project Structure

```
├── app/                        # Next.js 15 App Router
│   ├── globals.css            # Global styles and animations
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Home page
│   ├── maintenance/
│   │   └── page.tsx           # Maintenance mode page
│   ├── robots.txt/
│   │   └── route.ts           # Dynamic robots.txt
│   └── sitemap.xml/
│       └── route.ts           # Dynamic sitemap
├── components/                 # Reusable UI components
│   ├── navbar.tsx             # Navigation header
│   ├── hero.tsx               # Hero section
│   ├── feature.tsx            # Individual feature card
│   ├── features-grid.tsx      # Features overview
│   ├── logo-cloud.tsx         # Company logos
│   ├── pricing.tsx            # Pricing plans
│   ├── testimonials.tsx       # Customer testimonials
│   ├── faq.tsx                # Frequently asked questions
│   ├── cta.tsx                # Call-to-action section
│   ├── footer.tsx             # Site footer
│   ├── gradient-bg.tsx        # Animated background
│   └── video-player.tsx       # Video component
├── lib/                       # Utility functions
│   ├── utils.ts               # Common utilities
│   └── analytics.ts           # Analytics helpers
├── public/
│   └── images/                # Static assets
│       ├── logo.svg           # Site logo
│       └── og-image.svg       # Open Graph image
├── middleware.ts              # Maintenance mode logic
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS config
├── tsconfig.json              # TypeScript config
└── .env.example               # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sque-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   # Edit .env.local as needed
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check Prettier formatting
```

## 🌐 Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
# Maintenance Mode
# Set to "on" to enable maintenance mode, any other value or empty disables it
NEXT_PUBLIC_MAINTENANCE_MODE=

# Optional: Site URL for SEO
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional: Google Analytics
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Maintenance Mode

Toggle maintenance mode by setting the environment variable:

- `NEXT_PUBLIC_MAINTENANCE_MODE=on` - Enables maintenance mode
- `NEXT_PUBLIC_MAINTENANCE_MODE=` or any other value - Disables maintenance mode

When enabled, all visitors (except `/maintenance` route) are redirected to a maintenance page.

## 🚢 Deployment

### Vercel (Recommended)

#### Via Vercel Dashboard
1. Connect your GitHub repository to Vercel
2. Set environment variables in the Vercel dashboard
3. Deploy automatically on every push

#### Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_MAINTENANCE_MODE
```

### Other Platforms

The project can be deployed to any platform supporting Next.js:

- **Netlify**: Use `npm run build` and deploy the `out` directory
- **Railway**: Connect GitHub and deploy with zero config
- **AWS Amplify**: Connect repository and set build command to `npm run build`

## 📱 Testing

### Manual Testing Checklist

- [ ] **Responsive**: Test on mobile, tablet, and desktop
- [ ] **Performance**: Run Lighthouse audit (aim for 90+ scores)
- [ ] **Accessibility**: Test with screen reader and keyboard navigation
- [ ] **Maintenance Mode**: Toggle environment variable and verify redirect
- [ ] **SEO**: Check `/robots.txt` and `/sitemap.xml` routes
- [ ] **Animations**: Verify smooth scrolling and hover effects

### Lighthouse Testing
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Test performance
lighthouse http://localhost:3000 --only-categories=performance,accessibility,best-practices,seo
```

## 🎨 Customization

### Brand Colors
Update the gradient colors in `tailwind.config.ts` and component files:
```typescript
// Current brand colors
from-blue-600 to-purple-600  // Primary gradient
```

### Content
- Update company information in components
- Replace placeholder testimonials and features
- Modify pricing plans in `components/pricing.tsx`
- Update social links in `components/footer.tsx`

### Typography
The project uses Inter font. To change:
1. Update font import in `app/layout.tsx`
2. Modify font family in `app/globals.css`

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check TypeScript issues
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

### Styling Issues
```bash
# Check if Tailwind is working
npm run dev

# Verify Tailwind config
npx tailwindcss --help
```

## 📄 License

This project is created for assessment/demonstration purposes. Feel free to use it as a reference or starting point for your own projects.

---

**Built with ❤️ using Next.js and modern web technologies.**
