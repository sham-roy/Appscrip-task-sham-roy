

File Structure Overview

metta-muse-store-ts/
├── app/
│   ├── (site)/                  # Route group for static pages
│   │   ├── about/page.tsx
│   │   ├── contact-us/page.tsx
│   │   ├── skills/page.tsx
│   │   └── stories/page.tsx
│   ├── shop/
│   │   ├── page.tsx             # The main Product Listing Server Component
│   │   └── loading.tsx          # Loading UI (Skeleton) for better UX
│   ├── layout.tsx               # Root Layout (TSX)
│   ├── page.tsx                 # Root page to redirect to /shop
│   └── globals.css              # Global styles (unchanged)
│
├── components/
│   ├── Shop/
│   │   ├── ShopPageClient.tsx   # The "use client" component for interactivity
│   │   └── ShopPageClient.css
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── FilterSidebar/
│   │   ├── FilterSidebar.tsx
│   │   └── FilterSidebar.css
│   ├── ProductCard/
│   │   ├── ProductCard.tsx
│   │   └── ProductCard.css
│   └── icons/
│       └── Icons.tsx            # SVG Icons as React components
│
├── data/
│   ├── products.ts
│   └── filters.ts
│
├── public/
│   └── ... (images, svgs)
│
└── types/
    └── index.ts                 # Centralized type definitions