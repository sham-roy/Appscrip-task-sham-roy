// components/FilterSidebar/FilterSidebar.tsx
"use client";

import { useState } from 'react';
import { Filter } from '@/types';
import { ChevronDownIcon } from '../icons/Icons';
import './FilterSidebar.css';

interface FilterSidebarProps {
  filters: Filter[];
}

export default function FilterSidebar({ filters }: FilterSidebarProps) {

  const [openAccordion, setOpenAccordion] = useState<string | null>(
    filters.find(f => f.defaultOpen)?.id || null
  );

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <aside className="filter-sidebar">
      {filters.map(filter => (
        <div key={filter.id} className="filter-section">

          {filter.type === 'checkbox' && (
            <label className="filter-customizable-label">
              <input type="checkbox" className="filter-customizable-checkbox" />
              <span className="filter-title">{filter.title}</span>
            </label>
          )}

          {/* accordion filters */}
          {filter.type === 'accordion' && (
            <div>
              <button
                onClick={() => toggleAccordion(filter.id)}
                className="filter-accordion-header"
              >
                <div className="filter-accordion-header__text">
                  <span className="filter-title">{filter.title}</span>
                  <span className="filter-all-text">All</span>
                </div>
                
                <ChevronDownIcon rotated={openAccordion === filter.id} />
              </button>


              {openAccordion === filter.id && (
                <div className="filter-accordion-content">
                  <button className="filter-unselect-all">Unselect all</button>
                  <ul className="filter-options-list">
                    {filter.options?.map(option => (
                      <li key={option}>
                        <label className="filter-option-item">
                          {/* inner checkbox */}
                          <input type="checkbox" className="filter-inner-checkbox" />
                          <span>{option}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          <hr className="filter-separator" />
        </div>
      ))}
    </aside>
  );
}