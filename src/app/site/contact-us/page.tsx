// app/(site)/contact-us/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with the Mettā Muse team.',
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

export default function ContactUsPage() {
    return (
        <div style={pageStyles}>
            <h1 style={headingStyles}>Contact Us Page</h1>
        </div>
    );
}