// data/filters.ts
import { Filter } from '@/types';

export const getFilterData = (): Filter[] => {
    return [
        {
            id: 'customizable',
            title: 'CUSTOMIZABLE',
            type: 'checkbox'
        },
        {
            id: 'idealFor',
            title: 'IDEAL FOR',
            type: 'accordion',
            options: ['Men', 'Women', 'Baby & Kids'],
            defaultOpen: true, // This will make it open by default
        },
        {
            id: 'occasion',
            title: 'OCCASION',
            type: 'accordion',
            options: ['Casual', 'Formal', 'Party', 'Wedding']
        },
        {
            id: 'work',
            title: 'WORK',
            type: 'accordion',
            options: [] // Empty options will just show "All"
        },
        {
            id: 'fabric',
            title: 'FABRIC',
            type: 'accordion',
            options: ['Cotton', 'Linen', 'Silk', 'Denim']
        },
        {
            id: 'segment',
            title: 'SEGMENT',
            type: 'accordion',
            options: []
        },
        {
            id: 'suitableFor',
            title: 'SUITABLE FOR',
            type: 'accordion',
            options: ['Spring', 'Summer', 'Winter']
        },
        {
            id: 'rawMaterials',
            title: 'RAW MATERIALS',
            type: 'accordion',
            options: []
        },
        {
            id: 'pattern',
            title: 'PATTERN',
            type: 'accordion',
            options: ['Solid', 'Striped', 'Floral']
        },
    ];
};