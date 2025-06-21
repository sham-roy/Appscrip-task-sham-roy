// components/Header/Header.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    SearchIcon, HeartIcon, BagIcon,
    UserIcon, MenuIcon, BrandLogo, BannerIcon,
    ChevronDownIcon
} from '../icons/Icons';
import './Header.css';


// A new component for the custom language selector
const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('ENG');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLang = (lang: string) => {
        setSelectedLang(lang);
        setIsOpen(false);
    };

    return (
        <div className="language-selector-wrapper">
            <button onClick={toggleDropdown} className="language-selector">
                <span>{selectedLang}</span>
                <ChevronDownIcon />
            </button>
            {isOpen && (
                <ul className="language-dropdown">
                    <li onClick={() => selectLang('ENG')}>ENG</li>
                    <li onClick={() => selectLang('FR')}>FR</li>
                    <li onClick={() => selectLang('DE')}>DE</li>
                </ul>
            )}
        </div>
    );
};



export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            {/* 1. Animated Banner */}
            <div className="header-top-bar">
                <div className="header-top-bar__content">
                    <div className="header-top-bar__item"><BannerIcon /><span>Lorem ipsum dolor</span></div>
                    <div className="header-top-bar__item"><BannerIcon /><span>Lorem ipsum dolor</span></div>
                    <div className="header-top-bar__item"><BannerIcon /><span>Lorem ipsum dolor</span></div>
                    <div className="header-top-bar__item"><BannerIcon /><span>Lorem ipsum dolor</span></div>
                    <div className="header-top-bar__item"><BannerIcon /><span>Lorem ipsum dolor</span></div>
                </div>
            </div>

            <header className="header-component">
                <section className='header-container'>
                    <Link href="/shop" className="header-logo-icon-link">
                        <BrandLogo />
                    </Link>

                    <h1 className="header-logo-text">LOGO</h1>

                    {/* Hamburger Toggle */}
                    <div onClick={toggleMenu} className="header-mobile-toggle">
                        <MenuIcon />
                    </div>

                    {/* This nav is now the mobile sidebar */}
                    <nav className={`mobile-sidebar ${isMenuOpen ? 'is-open' : ''}`}>
                        <button onClick={toggleMenu} className="mobile-sidebar__close-btn">X</button>
                        <ul>
                            <li><Link href="/shop" onClick={toggleMenu}>SHOP</Link></li>
                            <li><Link href="/skills" onClick={toggleMenu}>SKILLS</Link></li>
                            <li><Link href="/stories" onClick={toggleMenu}>STORIES</Link></li>
                            <li><Link href="/about" onClick={toggleMenu}>ABOUT</Link></li>
                            <li><Link href="/contact-us" onClick={toggleMenu}>CONTACT US</Link></li>
                        </ul>
                    </nav>

                    {/* This nav is for desktop only */}
                    <nav className="desktop-nav">
                        <ul>
                            <li><Link href="/shop">SHOP</Link></li>
                            <li><Link href="/skills">SKILLS</Link></li>
                            <li><Link href="/stories">STORIES</Link></li>
                            <li><Link href="/about">ABOUT</Link></li>
                            <li><Link href="/contact-us">CONTACT US</Link></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <button className="header-icon-button"><SearchIcon /></button>
                        <button className="header-icon-button"><HeartIcon /></button>
                        <button className="header-icon-button"><BagIcon /></button>
                        <button className="header-icon-button header-icon-button--desktop-only">
                            <UserIcon />
                        </button>
                        <div className="header-icon-button--desktop-only">
                            <LanguageSelector />
                        </div>
                    </div>

                </section>
            </header>
        </>
    );
}