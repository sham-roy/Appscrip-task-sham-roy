// app/(site)/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn more about the story and mission of Mettā Muse.',
};

const pageStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    textAlign: 'center',
    padding: '40px',
};

const headingStyles: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 700,
};

export default function AboutPage() {
    return (
        <div style={pageStyles}>
            <h1 style={headingStyles}>About Us Page</h1>
        </div>
    );
}