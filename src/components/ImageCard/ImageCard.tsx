// components/ImageCard/ImageCard.tsx
import React from 'react';
import Image from 'next/image';
import './ImageCard.css';

interface ImageCardProps {
    imageUrl: string;
    altText: string;
}

const ImageCard = ({ imageUrl, altText }: ImageCardProps) => {
    return (
        <div className="image-card">
            <Image
                src={imageUrl}
                alt={altText}
                fill
                className="image-card__image"
            />
        </div>
    );
};

export default ImageCard;