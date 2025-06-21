// app/shop/page.tsx
import type { Metadata } from 'next';
import { getProducts } from '@/data/products';
import { getFilterData } from '@/data/filters';
import ShopPageClient from '@/components/Shop/ShopPageClient'; // Ensure this is the component being used

export const metadata: Metadata = {
    title: 'Shop All Products',
    description: 'Explore our full collection of high-quality, curated products. Find your next favorite item at Mettā Muse.',
};

export default async function ShopPage() {
    const products = await getProducts();
    const filters = getFilterData();
    const initialProductCount = 3425;

    // We are passing all the necessary data to our main interactive component
    return (
        <ShopPageClient
            products={products}
            filters={filters}
            initialProductCount={initialProductCount}
        />
    );
}