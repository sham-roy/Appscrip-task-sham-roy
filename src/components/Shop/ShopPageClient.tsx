// components/Shop/ShopPageClient.tsx
"use client";

import { useState } from 'react';
import { Product, Filter } from '@/types';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import ProductCard from '../ProductCard/ProductCard';
import { ChevronDownIcon, CheckmarkIcon } from '../icons/Icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import './ShopPageClient.css';

interface ShopPageClientProps {
    products: Product[];
    filters: Filter[];
    initialProductCount: number;
}

// This component is self-contained and manages its own state.
const CustomSortDropdown = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('RECOMMENDED');

    // Custom hook to close the dropdown when clicking outside
    const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
        setIsDropdownOpen(false);
    });

    const options = [
        'RECOMMENDED',
        'NEWEST FIRST',
        'POPULAR',
        'PRICE : HIGH TO LOW',
        'PRICE : LOW TO HIGH',
    ];

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    return (
        // Attach the ref to the wrapper div to detect outside clicks
        <div className="custom-sort-dropdown-wrapper" ref={dropdownRef}>
            <button
                className="shop-sort-toggle"
                onClick={() => setIsDropdownOpen(prev => !prev)}
            >
                <span>{selectedOption}</span>
                <ChevronDownIcon rotated={isDropdownOpen} />
            </button>

            {isDropdownOpen && (
                <ul className="custom-sort-dropdown-menu">
                    {options.map(option => (
                        <li
                            key={option}
                            className={selectedOption === option ? 'selected' : ''}
                            onClick={() => handleSelect(option)}
                        >
                            {selectedOption === option && <CheckmarkIcon />}
                            <span>{option}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default function ShopPageClient({
    products,
    filters,
    initialProductCount,
}: ShopPageClientProps) {

    // State for DESKTOP filter visibility
    const [isFilterVisible, setIsFilterVisible] = useState<boolean>(true);
    const toggleDesktopFilterVisibility = () => setIsFilterVisible(p => !p);

    // === NEW: State specifically for the MOBILE filter panel ===
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
    const toggleMobileFilter = () => setIsMobileFilterOpen(p => !p);

    // Dynamic class names for desktop
    const contentClassName = `shop-content ${!isFilterVisible ? 'shop-content--filters-hidden' : ''}`;

    return (
        <main className='shop-page-component'>
            <div className="shop-page-container">

                <section className="shop-hero">
                    <h1>DISCOVER OUR PRODUCTS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                </section>

                <div className="shop-controls-bar">

                    <div className="shop-controls-bar__left">

                        <span className="shop-item-count hide-on-mobile">{initialProductCount} ITEMS</span>

                        <button onClick={toggleDesktopFilterVisibility} className="shop-filter-toggle">
                            <span className='hide-on-mobile'>
                                <ChevronDownIcon left={isFilterVisible} right={!isFilterVisible} />
                                {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
                            </span>
                            <span className='hide-on-desktop' onClick={toggleMobileFilter}>FILTER</span>
                        </button>

                    </div>

                    <div className="shop-controls-bar__right">
                        <CustomSortDropdown />
                    </div>
                </div>

                <div className={contentClassName}>

                    {isFilterVisible && (
                        <aside className="shop-sidebar">
                            <FilterSidebar filters={filters} />
                        </aside>
                    )}

                    <section className="shop-product-grid">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </section>

                </div>

                {/* The overlay to darken the background */}
                <div className={`mobile-filter-overlay ${isMobileFilterOpen ? 'is-open' : ''}`} onClick={toggleMobileFilter}></div>

                {/* The mobile sidebar */}
                <aside className={`mobile-filter-panel ${isMobileFilterOpen ? 'is-open' : ''}`}>
                    <div className="mobile-filter-panel__header">
                        <h3>Filter</h3>
                        <button onClick={toggleMobileFilter} className="mobile-filter-panel__close-btn">X</button>
                    </div>
                    <div className="mobile-filter-panel__content">
                        <FilterSidebar filters={filters} />
                    </div>
                </aside>


            </div>
        </main>
    );
}