# DE-SYLS HOTELS & SUITES Website

A luxury hotel booking website built with Next.js, featuring WhatsApp integration, admin dashboard, and comprehensive hotel management system.

## Features

- **Fully Responsive Design**: Mobile-first approach with luxury white & gold theme
- **15+ Pages**: Home, Rooms, Offers, Dining, Events, Gallery, About, Contact, FAQ, Policies, Blog, Careers, Testimonials, and more
- **WhatsApp Booking Integration**: Direct booking through WhatsApp with pre-filled messages
- **Admin Dashboard**: CRUD operations for rooms, offers, blog posts, and booking management
- **SEO Optimized**: Sitemap, robots.txt, schema.org structured data, meta tags
- **Accessibility**: WCAG 2.1 Level AA compliance with proper heading hierarchy and ARIA labels
- **Analytics Ready**: Google Analytics integration
- **Image Gallery**: Lightbox gallery with 20+ images
- **Contact Forms**: Email and WhatsApp contact options
- **Booking System**: Advanced booking widget with form validation

## Getting Started

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Visit `http://localhost:3000` to see the website.

## Admin Dashboard

Access the admin dashboard at `/admin`

**Default Password**: `desyls2025`

### Admin Features

- View and manage bookings
- CRUD operations for rooms
- Manage special offers
- Blog post management
- Export bookings as CSV
- WhatsApp integration for guest communication

## WhatsApp Integration

All booking and contact forms use WhatsApp for communication:

- **WhatsApp Number**: +234 80 8098 7422
- **Booking Message Template**: Pre-filled with guest details
- **Contact Message Template**: Pre-filled with contact information

## Environment Variables

Create a `.env.local` file with:

\`\`\`
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`

## Deployment

### Deploy to Vercel

\`\`\`bash
npm run build
vercel deploy
\`\`\`

### Update GA4 ID

Replace `G-XXXXXXXXXX` in:
- `app/layout.tsx`
- `.env.local`

## SEO

- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- Schema.org structured data for Hotel and Rooms
- Meta tags on all pages
- Canonical URLs

## Accessibility

- WCAG 2.1 Level AA compliant
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- ARIA labels and roles
- Color contrast compliance

## File Structure

\`\`\`
app/
├── page.tsx                 # Homepage
├── rooms/                   # Rooms listing and details
├── offers/                  # Special offers
├── dining/                  # Dining & facilities
├── events/                  # Events & meetings
├── gallery/                 # Image gallery
├── about/                   # About us
├── contact/                 # Contact page
├── faq/                     # FAQ
├── blog/                    # Blog posts
├── careers/                 # Job listings
├── testimonials/            # Guest reviews
├── policies/                # Terms & policies
├── accessibility/           # Accessibility statement
├── admin/                   # Admin dashboard
├── api/                     # API routes
└── layout.tsx               # Root layout

components/
├── header.tsx               # Navigation header
├── footer.tsx               # Footer
├── booking-widget.tsx       # Booking form
├── floating-whatsapp.tsx    # WhatsApp button
└── admin/                   # Admin components
\`\`\`

## Customization

### Update Hotel Information

Edit `components/footer.tsx` and `app/page.tsx` to update:
- Hotel name and contact details
- WhatsApp number
- Address and hours
- Social media links

### Update Room Data

Edit `app/rooms/page.tsx` and `app/rooms/[id]/page.tsx` to modify:
- Room names and prices
- Descriptions and amenities
- Images and gallery

### Update Colors

Edit `app/globals.css` to change:
- Primary color (gold): `#d4af37`
- Secondary color (dark): `#2c2c2c`
- Background: `#ffffff`

## Support

For issues or questions, contact: desylshotelandsuites@gmail.com

## License

All rights reserved © 2025 DE-SYLS HOTELS & SUITES
