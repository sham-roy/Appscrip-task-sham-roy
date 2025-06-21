// components/ProductCard/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import './ProductCard.css';
import { HeartIcon, HeartRedIcon } from '../icons/Icons';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card">
      <Link href={`/products/${product.slug}`}>
        <div className="imageContainer">
          <Image
            src={product.imageUrl}
            alt={product.altText} // SEO: Important for accessibility and image search
            fill
            sizes="(max-width: 767px) 50vw, 33vw"
            className="image"
          />

          {product.isNew &&
            <span className="label">NEW PRODUCT</span>
          }

          {!product.inStock &&
            <div className="outOfStockOverlay">
              <p className='out-of-stock'> OUT OF STOCK</p>
            </div>
          }

        </div>

        <div className="cardContent">
          <h2 className="title">{product.name}</h2>
          <p className="priceText">
            <span className="signInLink">Sign in</span> or Create an account to see pricing
          </p>
        </div>

      </Link>

      <button className="wishlistButton">
        {
          product?.isLiked ? <HeartRedIcon /> : <HeartIcon />
        }
      </button>

    </div>
  );

}