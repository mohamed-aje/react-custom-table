import { TableRowData, FilterConfig, SortConfig } from '../types';
/**
 * Custom hook for table sorting
 */
export declare function useTableSort<T extends TableRowData>(data: T[], initialSort?: SortConfig<T>[]): {
    sortedData: T[];
    sortConfig: SortConfig<T>[];
    handleSort: (key: string, multiSort?: boolean) => void;
    resetSort: () => void;
    setSortConfig: import("react").Dispatch<import("react").SetStateAction<SortConfig<T>[]>>;
};
/**
 * Custom hook for table filtering
 */
export declare function useTableFilter<T extends TableRowData>(data: T[], initialFilters?: FilterConfig[]): {
    filteredData: T[];
    filterConfig: FilterConfig[];
    globalSearchTerm: string;
    handleFilter: (key: string, value: any, type?: FilterConfig["type"]) => void;
    clearFilter: (key?: string) => void;
    clearAllFilters: () => void;
    setGlobalSearchTerm: import("react").Dispatch<import("react").SetStateAction<string>>;
    setFilterConfig: import("react").Dispatch<import("react").SetStateAction<FilterConfig[]>>;
};
/**
 * Custom hook for table pagination
 */
export declare function useTablePagination<T extends TableRowData>(data: T[], initialPageSize?: number): {
    paginatedData: T[];
    current: number;
    pageSize: number;
    totalPages: number;
    total: number;
    handlePageChange: (page: number) => void;
    handlePageSizeChange: (newPageSize: number) => void;
    resetPagination: () => void;
};
/**
 * Custom hook for table selection
 */
export declare function useTableSelection<T extends TableRowData>(data: T[], rowKey?: string | ((record: T, index: number) => string | number), type?: 'checkbox' | 'radio'): {
    selectedKeys: (string | number)[];
    selectedRows: T[];
    handleSelect: (record: T, index: number, selected: boolean) => void;
    handleSelectAll: (selected: boolean) => void;
    isSelected: (record: T, index: number) => boolean;
    isAllSelected: boolean;
    isIndeterminate: boolean;
    clearSelection: () => void;
    setSelectedKeys: import("react").Dispatch<import("react").SetStateAction<(string | number)[]>>;
};
/**
 * Utility function to get nested object values
 */
export declare function getNestedValue(obj: any, path: string): any;
/**
 * Utility function to debounce function calls
 */
export declare function useDebounce<T>(value: T, delay: number): T;
/**
 * Custom hook for localStorage persistence
 */
export declare function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void];
/**
 * Export utilities
 */
export declare const exportUtils: {
    /**
     * Convert data to CSV format
     */
    toCSV: <T extends TableRowData>(data: T[], columns: string[], headers?: string[]) => string;
    /**
     * Download CSV file
     */
    downloadCSV: (csvContent: string, filename?: string) => void;
};
//# sourceMappingURL=index.d.ts.map