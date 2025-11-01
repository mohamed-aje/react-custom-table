import React, { useState } from 'react';
import { MdClose, MdCheck, MdDateRange } from 'react-icons/md';
import { TableColumn, LocaleConfig } from '../types';
import styles from '../styles/ColumnFilter.module.css';

export interface ColumnFilterProps<T = any> {
  column: TableColumn<T>;
  value: any;
  onChange: (value: any) => void;
  onClear: () => void;
  locale: LocaleConfig;
}

export const ColumnFilter: React.FC<ColumnFilterProps> = ({
  column,
  value,
  onChange,
  onClear,
  locale,
}) => {
  const [localValue, setLocalValue] = useState(value || '');
  const [dateRange, setDateRange] = useState<[string, string]>(
    Array.isArray(value) ? value : ['', '']
  );

  const handleApply = () => {
    if (column.filterType === 'dateRange') {
      onChange(dateRange.every(date => date) ? dateRange : null);
    } else {
      onChange(localValue || null);
    }
  };

  const handleClear = () => {
    setLocalValue('');
    setDateRange(['', '']);
    onClear();
  };

  const renderFilterInput = () => {
    switch (column.filterType) {
      case 'select':
        return (
          <select
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All</option>
            {column.filterOptions?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'number':
        return (
          <input
            type="number"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            placeholder="Enter number..."
            className={styles.filterInput}
          />
        );

      case 'dateRange':
        return (
          <div className={styles.dateRangeContainer}>
            <input
              type="date"
              value={dateRange[0]}
              onChange={(e) => setDateRange([e.target.value, dateRange[1]])}
              className={styles.dateInput}
            />
            <span className={styles.dateSeparator}>to</span>
            <input
              type="date"
              value={dateRange[1]}
              onChange={(e) => setDateRange([dateRange[0], e.target.value])}
              className={styles.dateInput}
            />
          </div>
        );

      default:
        return (
          <input
            type="text"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            placeholder={`Filter ${column.title.toLowerCase()}...`}
            className={styles.filterInput}
          />
        );
    }
  };

  return (
    <div className={styles.filterContainer} onClick={(e) => e.stopPropagation()}>
      <div className={styles.filterContent}>
        {renderFilterInput()}
        
        <div className={styles.filterActions}>
          <button
            onClick={handleApply}
            className={styles.applyButton}
            title="Apply Filter"
          >
            <MdCheck />
          </button>
          <button
            onClick={handleClear}
            className={styles.clearButton}
            title="Clear Filter"
          >
            <MdClose />
          </button>
        </div>
      </div>
    </div>
  );
};