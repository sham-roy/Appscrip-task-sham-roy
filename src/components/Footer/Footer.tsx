// components/Footer/Footer.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
    InstagramIcon,
    LinkedInIcon,
    GooglePayIcon,
    MastercardIcon,
    PayPalIcon,
    AmexIcon,
    ApplePayIcon,
    PurplePayIcon,
    USFlagIcon,
    StarIcon
} from '../icons/Icons'; import './Footer.css';

const AccordionSection = ({ title, children, isOpen, onClick }: any) => (
    <div className="footer-accordion-section">
        <button onClick={onClick} className="footer-accordion-header">
            <h4 className="footer-heading">{title}</h4>
            <span className={`footer-accordion-arrow ${isOpen ? 'is-open' : ''}`}></span>
        </button>
        {isOpen && <div className="footer-accordion-content">{children}</div>}
    </div>
);


export default function Footer() {


    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    const footerLinks = {
        "mettà muse": ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"],
        "QUICK LINKS": ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"],
    };

    return (
        <footer className="footer-section">
            <div className="footer-main-content">
                <div className="footer-layout-container">

                    {/* 1. TOP SECTION */}
                    <div className="footer-top-section">
                        <div className="footer-column">

                            <h4 className="footer-heading">BE THE FIRST TO KNOW</h4>
                            <p className="footer-description">Sign up for updates from mettà muse.</p>

                            <div className="footer-subscribe-form">
                                <input
                                    className="footer-input"
                                    type="email"
                                    placeholder="Enter your e-mail..."
                                />
                                <button className="footer-subscribe-button" type="button">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>

                        <div className="footer-column">

                            <h4 className="footer-heading">CONTACT US</h4>

                            <p className="footer-contact-number">+44 221 133 5360</p>
                            <p className="footer-contact-email">customercare@mettamuse.com</p>

                            <h4 className="footer-heading currency-heading">CURRENCY</h4>
                            <p className="currency-display">
                                <USFlagIcon />
                                <StarIcon />
                                USD
                            </p>

                            <p className="currency-note">
                                Transactions will be completed in Euros and a currency reference is available on hover.
                            </p>
                        </div>
                    </div>


                    <hr className="footer-divider" />

                    {/* 2. BOTTOM SECTION */}
                    <div className="footer-bottom-section">

                        <div className="footer-column footer-links-desktop">

                            <h4 className="footer-heading">mettà muse</h4>

                            <ul >
                                {
                                    footerLinks["mettà muse"].map(link => (
                                        <li key={link}>
                                            <Link href="#">{link}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="footer-column footer-links-desktop">

                            <h4 className="footer-heading">QUICK LINKS</h4>
                            <ul>{footerLinks["QUICK LINKS"].map(link => <li key={link}><Link href="#">{link}</Link></li>)}</ul>

                        </div>

                        <div className="footer-column footer-links-desktop">

                            <h4 className="footer-heading">FOLLOW US</h4>

                            <div className="footer-social-icons">
                                <InstagramIcon />
                                <LinkedInIcon />
                            </div>

                            <h4 className="footer-heading accepts-heading">mettā muse ACCEPTS</h4>

                            <div className="payment-icons-container">
                                <GooglePayIcon />
                                <MastercardIcon />
                                <PayPalIcon />
                                <AmexIcon />
                                <ApplePayIcon />
                                <PurplePayIcon />
                            </div>
                        </div>

                        <div className="footer-links-mobile">

                            <AccordionSection title="mettà muse" isOpen={openAccordion === "mettà muse"} onClick={() => toggleAccordion("mettà muse")}>
                                <ul>{footerLinks["mettà muse"].map(link => <li key={link}><Link href="#">{link}</Link></li>)}</ul>
                            </AccordionSection>

                            <AccordionSection title="QUICK LINKS" isOpen={openAccordion === "QUICK LINKS"} onClick={() => toggleAccordion("QUICK LINKS")}>
                                <ul>{footerLinks["QUICK LINKS"].map(link => <li key={link}><Link href="#">{link}</Link></li>)}</ul>
                            </AccordionSection>

                            <AccordionSection title="FOLLOW US" isOpen={openAccordion === "FOLLOW US"} onClick={() => toggleAccordion("FOLLOW US")}>

                                <div className="footer-social-icons">
                                    <InstagramIcon />
                                    <LinkedInIcon />
                                </div>

                                <h4 className="footer-heading accepts-heading">mettā muse ACCEPTS</h4>

                                <div className="payment-icons-container">
                                    <GooglePayIcon />
                                    <MastercardIcon />
                                    <PayPalIcon />
                                    <AmexIcon />
                                    <ApplePayIcon />
                                    <PurplePayIcon />
                                </div>

                            </AccordionSection>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    );
}