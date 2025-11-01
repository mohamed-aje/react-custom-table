import { useMemo, useState, useCallback, useEffect } from 'react';
import { TableRowData, FilterConfig, SortConfig } from '../types';

/**
 * Custom hook for table sorting
 */
export function useTableSort<T extends TableRowData>(
  data: T[],
  initialSort?: SortConfig<T>[]
) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>[]>(initialSort || []);

  const sortedData = useMemo(() => {
    if (sortConfig.length === 0) return data;

    return [...data].sort((a, b) => {
      for (const config of sortConfig) {
        const { key, direction, sorter } = config;
        
        let comparison = 0;
        
        if (sorter) {
          comparison = sorter(a, b);
        } else {
          const aValue = getNestedValue(a, key);
          const bValue = getNestedValue(b, key);
          
          if (aValue < bValue) comparison = -1;
          else if (aValue > bValue) comparison = 1;
        }
        
        if (comparison !== 0) {
          return direction === 'asc' ? comparison : -comparison;
        }
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = useCallback((key: string, multiSort = false) => {
    setSortConfig(prevConfig => {
      const existingIndex = prevConfig.findIndex(config => config.key === key);
      
      if (!multiSort) {
        // Single column sort
        if (existingIndex >= 0) {
          const existing = prevConfig[existingIndex];
          if (existing.direction === 'asc') {
            return [{ ...existing, direction: 'desc' }];
          } else {
            return [];
          }
        } else {
          return [{ key, direction: 'asc' }];
        }
      } else {
        // Multi-column sort
        const newConfig = [...prevConfig];
        
        if (existingIndex >= 0) {
          const existing = newConfig[existingIndex];
          if (existing.direction === 'asc') {
            newConfig[existingIndex] = { ...existing, direction: 'desc' };
          } else {
            newConfig.splice(existingIndex, 1);
          }
        } else {
          newConfig.push({ key, direction: 'asc' });
        }
        
        return newConfig;
      }
    });
  }, []);

  const resetSort = useCallback(() => {
    setSortConfig([]);
  }, []);

  return {
    sortedData,
    sortConfig,
    handleSort,
    resetSort,
    setSortConfig,
  };
}

/**
 * Custom hook for table filtering
 */
export function useTableFilter<T extends TableRowData>(
  data: T[],
  initialFilters?: FilterConfig[]
) {
  const [filterConfig, setFilterConfig] = useState<FilterConfig[]>(initialFilters || []);
  const [globalSearchTerm, setGlobalSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    let filtered = data;

    // Apply column filters
    if (filterConfig.length > 0) {
      filtered = filtered.filter(record => {
        return filterConfig.every(filter => {
          const { key, value, type, filterFn } = filter;
          
          if (!value && value !== 0) return true;
          
          if (filterFn) {
            return filterFn(value, record);
          }
          
          const recordValue = getNestedValue(record, key);
          
          switch (type) {
            case 'text':
              return String(recordValue).toLowerCase().includes(String(value).toLowerCase());
            case 'select':
              return recordValue === value;
            case 'number':
              return Number(recordValue) === Number(value);
            case 'dateRange':
              if (Array.isArray(value) && value.length === 2) {
                const recordDate = new Date(recordValue);
                const [start, end] = value.map(d => new Date(d));
                return recordDate >= start && recordDate <= end;
              }
              return true;
            default:
              return true;
          }
        });
      });
    }

    // Apply global search
    if (globalSearchTerm) {
      const searchTerm = globalSearchTerm.toLowerCase();
      filtered = filtered.filter(record =>
        Object.values(record).some(value =>
          String(value).toLowerCase().includes(searchTerm)
        )
      );
    }

    return filtered;
  }, [data, filterConfig, globalSearchTerm]);

  const handleFilter = useCallback((key: string, value: any, type: FilterConfig['type'] = 'text') => {
    setFilterConfig(prevConfig => {
      const existingIndex = prevConfig.findIndex(config => config.key === key);
      
      if (!value && value !== 0) {
        // Remove filter
        if (existingIndex >= 0) {
          return prevConfig.filter((_, index) => index !== existingIndex);
        }
        return prevConfig;
      }
      
      const newFilter: FilterConfig = { key, value, type };
      
      if (existingIndex >= 0) {
        // Update existing filter
        const newConfig = [...prevConfig];
        newConfig[existingIndex] = newFilter;
        return newConfig;
      } else {
        // Add new filter
        return [...prevConfig, newFilter];
      }
    });
  }, []);

  const clearFilter = useCallback((key?: string) => {
    if (key) {
      setFilterConfig(prevConfig => prevConfig.filter(config => config.key !== key));
    } else {
      setFilterConfig([]);
      setGlobalSearchTerm('');
    }
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilterConfig([]);
    setGlobalSearchTerm('');
  }, []);

  return {
    filteredData,
    filterConfig,
    globalSearchTerm,
    handleFilter,
    clearFilter,
    clearAllFilters,
    setGlobalSearchTerm,
    setFilterConfig,
  };
}

/**
 * Custom hook for table pagination
 */
export function useTablePagination<T extends TableRowData>(
  data: T[],
  initialPageSize = 10
) {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const paginatedData = useMemo(() => {
    const startIndex = (current - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, current, pageSize]);

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / pageSize);
  }, [data.length, pageSize]);

  const handlePageChange = useCallback((page: number) => {
    setCurrent(page);
  }, []);

  const handlePageSizeChange = useCallback((newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrent(1); // Reset to first page
  }, []);

  const resetPagination = useCallback(() => {
    setCurrent(1);
  }, []);

  // Reset to first page when data changes
  useEffect(() => {
    setCurrent(1);
  }, [data.length]);

  return {
    paginatedData,
    current,
    pageSize,
    totalPages,
    total: data.length,
    handlePageChange,
    handlePageSizeChange,
    resetPagination,
  };
}

/**
 * Custom hook for table selection
 */
export function useTableSelection<T extends TableRowData>(
  data: T[],
  rowKey: string | ((record: T, index: number) => string | number) = 'id',
  type: 'checkbox' | 'radio' = 'checkbox'
) {
  const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);

  const getRowKey = useCallback((record: T, index: number): string | number => {
    return typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey] || index;
  }, [rowKey]);

  const selectedRows = useMemo(() => {
    return data.filter((record, index) => {
      const key = getRowKey(record, index);
      return selectedKeys.includes(key);
    });
  }, [data, selectedKeys, getRowKey]);

  const handleSelect = useCallback((record: T, index: number, selected: boolean) => {
    const key = getRowKey(record, index);
    
    if (type === 'radio') {
      setSelectedKeys(selected ? [key] : []);
    } else {
      setSelectedKeys(prev =>
        selected
          ? [...prev, key]
          : prev.filter(k => k !== key)
      );
    }
  }, [getRowKey, type]);

  const handleSelectAll = useCallback((selected: boolean) => {
    if (type === 'checkbox') {
      setSelectedKeys(
        selected
          ? data.map((record, index) => getRowKey(record, index))
          : []
      );
    }
  }, [data, getRowKey, type]);

  const isSelected = useCallback((record: T, index: number): boolean => {
    const key = getRowKey(record, index);
    return selectedKeys.includes(key);
  }, [selectedKeys, getRowKey]);

  const isAllSelected = useMemo(() => {
    return data.length > 0 && selectedKeys.length === data.length;
  }, [data.length, selectedKeys.length]);

  const isIndeterminate = useMemo(() => {
    return selectedKeys.length > 0 && selectedKeys.length < data.length;
  }, [data.length, selectedKeys.length]);

  const clearSelection = useCallback(() => {
    setSelectedKeys([]);
  }, []);

  return {
    selectedKeys,
    selectedRows,
    handleSelect,
    handleSelectAll,
    isSelected,
    isAllSelected,
    isIndeterminate,
    clearSelection,
    setSelectedKeys,
  };
}

/**
 * Utility function to get nested object values
 */
export function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Utility function to debounce function calls
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook for localStorage persistence
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

/**
 * Export utilities
 */
export const exportUtils = {
  /**
   * Convert data to CSV format
   */
  toCSV: <T extends TableRowData>(
    data: T[],
    columns: string[],
    headers: string[] = columns
  ): string => {
    const csvHeaders = headers.join(',');
    const csvRows = data.map(row =>
      columns.map(col => {
        const value = getNestedValue(row, col);
        // Escape commas and quotes in CSV
        const stringValue = String(value ?? '');
        return stringValue.includes(',') || stringValue.includes('"')
          ? `"${stringValue.replace(/"/g, '""')}"`
          : stringValue;
      }).join(',')
    );
    
    return [csvHeaders, ...csvRows].join('\n');
  },

  /**
   * Download CSV file
   */
  downloadCSV: (csvContent: string, filename: string = 'table-data.csv') => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  },
};