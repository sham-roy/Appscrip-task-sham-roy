// components/ProductDisplaySection/ProductDisplaySection.tsx
import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ProductDisplaySection.css'; // Standard CSS import

// Sample data for the 3 cards
const sampleProducts = [
    { id: 1, imageUrl: '/images/dark-gray-backpack.jpg', altText: 'A stylish dark gray roll-top backpack.' },
    { id: 2, imageUrl: '/images/yellow-dino-plush.jpg', altText: 'A cute yellow and blue knitted dinosaur plush toy.' },
    { id: 3, imageUrl: '/images/orange-leather-tag.jpg', altText: 'An orange leather luggage tag with a strap.' },
];

const ProductDisplaySection = () => {
    return (
        // This is the main container with the specified absolute positioning and dimensions.
        <div className="total-card-holding-section">

            {/* 1. Side Filter Panel (Left) */}
            <aside className="side-filter-panel">
                <p>Filter Panel Content Goes Here</p>
            </aside>

            {/* 2. Card Container (Right) */}
            <div className="card-container">
                {sampleProducts.map(product => (
                    <ImageCard
                        key={product.id}
                        imageUrl={product.imageUrl}
                        altText={product.altText}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductDisplaySection;