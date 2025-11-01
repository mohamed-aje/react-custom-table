import React from 'react';
import { MdNavigateBefore, MdNavigateNext, MdFirstPage, MdLastPage } from 'react-icons/md';
import { LocaleConfig } from '../types';
import styles from '../styles/Pagination.module.css';

export interface PaginationProps {
  current: number;
  total: number;
  pageSize: number;
  totalPages: number;
  onChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean | ((total: number, range: [number, number]) => React.ReactNode);
  locale: LocaleConfig;
  testId?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  pageSize,
  totalPages,
  onChange,
  onPageSizeChange,
  showSizeChanger = true,
  showQuickJumper = false,
  showTotal = true,
  locale,
  testId = 'pagination',
}) => {
  const startIndex = (current - 1) * pageSize + 1;
  const endIndex = Math.min(current * pageSize, total);

  const renderTotal = () => {
    if (showTotal === false) return null;
    
    if (typeof showTotal === 'function') {
      return showTotal(total, [startIndex, endIndex]);
    }

    return (
      <span className={styles.totalInfo}>
        Showing {startIndex} to {endIndex} of {total} entries
      </span>
    );
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, current - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageNumber} ${i === current ? styles.active : ''}`}
          onClick={() => onChange(i)}
          data-testid={`${testId}-page-${i}`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={styles.paginationContainer} data-testid={testId}>
      {renderTotal()}
      
      <div className={styles.paginationControls}>
        {/* First Page */}
        <button
          className={`${styles.pageButton} ${current === 1 ? styles.disabled : ''}`}
          onClick={() => onChange(1)}
          disabled={current === 1}
          data-testid={`${testId}-first`}
          title="First Page"
        >
          <MdFirstPage />
        </button>

        {/* Previous Page */}
        <button
          className={`${styles.pageButton} ${current === 1 ? styles.disabled : ''}`}
          onClick={() => onChange(current - 1)}
          disabled={current === 1}
          data-testid={`${testId}-previous`}
          title={locale.pagination.previous}
        >
          <MdNavigateBefore />
          {locale.pagination.previous}
        </button>

        {/* Page Numbers */}
        <div className={styles.pageNumbers}>
          {renderPageNumbers()}
        </div>

        {/* Next Page */}
        <button
          className={`${styles.pageButton} ${current === totalPages ? styles.disabled : ''}`}
          onClick={() => onChange(current + 1)}
          disabled={current === totalPages}
          data-testid={`${testId}-next`}
          title={locale.pagination.next}
        >
          {locale.pagination.next}
          <MdNavigateNext />
        </button>

        {/* Last Page */}
        <button
          className={`${styles.pageButton} ${current === totalPages ? styles.disabled : ''}`}
          onClick={() => onChange(totalPages)}
          disabled={current === totalPages}
          data-testid={`${testId}-last`}
          title="Last Page"
        >
          <MdLastPage />
        </button>
      </div>

      {/* Page Size Changer */}
      {showSizeChanger && onPageSizeChange && (
        <div className={styles.pageSizeChanger}>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className={styles.pageSizeSelect}
            data-testid={`${testId}-page-size`}
          >
            {[10, 25, 50, 100].map(size => (
              <option key={size} value={size}>
                {size} / page
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Quick Jumper */}
      {showQuickJumper && (
        <div className={styles.quickJumper}>
          <span>Go to</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            className={styles.jumpInput}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const page = parseInt((e.target as HTMLInputElement).value);
                if (page >= 1 && page <= totalPages) {
                  onChange(page);
                  (e.target as HTMLInputElement).value = '';
                }
              }
            }}
            data-testid={`${testId}-quick-jump`}
          />
        </div>
      )}
    </div>
  );
};