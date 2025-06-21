// types/index.ts

export interface Product {
    id: number;
    name: string;
    description: string;
    slug: string;
    imageUrl: string;
    altText: string;
    isNew: boolean;
    inStock: boolean;
    isLiked: boolean;
}

export type FilterType = 'checkbox' | 'accordion';

export interface Filter {
    id: string;
    title: string;
    type: FilterType;
    options?: string[];
    defaultOpen?: boolean;
}