// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Mettā Muse',
    default: 'Mettā Muse - Curated Fashion and Lifestyle Products',
  },
  description: 'Discover a curated collection of fashion, accessories, and lifestyle products at Mettā Muse.',
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
