// app/(site)/skills/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Skills',
    description: 'Discover the craftsmanship and skills behind our products.',
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

export default function SkillsPage() {
    return (
        <div style={pageStyles}>
            <h1 style={headingStyles}>Skills Page</h1>
        </div>
    );
}