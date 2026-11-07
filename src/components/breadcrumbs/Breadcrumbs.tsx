import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Navegação Estrutural (Breadcrumb)" className="py-3 px-4 sm:px-0">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#8ea5c8]">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#4FD6F4] transition-colors focus:outline-none focus:ring-1 focus:ring-[#4FD6F4] rounded"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only sm:not-sr-only">Início</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="text-slate-200 font-medium truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-[#4FD6F4] transition-colors truncate max-w-[150px] sm:max-w-xs focus:outline-none focus:ring-1 focus:ring-[#4FD6F4] rounded"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
