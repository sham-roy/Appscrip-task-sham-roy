// app/(site)/stories/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Stories',
    description: 'Read the stories from our community and artisans.',
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

export default function StoriesPage() {
    return (
        <div style={pageStyles}>
            <h1 style={headingStyles}>Stories Page</h1>
        </div>
    );
}