import { ReactNode, CSSProperties } from 'react';

/**
 * Generic data type for table rows
 */
export type TableRowData = Record<string, any>;

/**
 * Column definition with advanced configuration
 */
export interface TableColumn<T = TableRowData> {
  /** Unique identifier for the column */
  key: string;
  /** Display name for the column header */
  title: string;
  /** Data accessor - can be a string key or a function */
  dataIndex?: string | ((record: T, index: number) => any);
  /** Custom render function for cell content */
  render?: (value: any, record: T, index: number) => ReactNode;
  /** Column width (CSS value) */
  width?: string | number;
  /** Minimum width for resizing */
  minWidth?: number;
  /** Maximum width for resizing */
  maxWidth?: number;
  /** Whether the column is sortable */
  sortable?: boolean;
  /** Custom sort function */
  sorter?: (a: T, b: T) => number;
  /** Whether the column is filterable */
  filterable?: boolean;
  /** Filter type for the column */
  filterType?: 'text' | 'select' | 'dateRange' | 'number' | 'custom';
  /** Filter options for select type */
  filterOptions?: Array<{ label: string; value: any }>;
  /** Custom filter function */
  filterFn?: (value: any, record: T) => boolean;
  /** Whether the column is resizable */
  resizable?: boolean;
  /** Whether the column content is copyable */
  copyable?: boolean;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Whether the column is fixed */
  fixed?: 'left' | 'right';
  /** Column header style */
  headerStyle?: CSSProperties;
  /** Column cell style */
  cellStyle?: CSSProperties;
  /** Whether the column is hidden */
  hidden?: boolean;
}

/**
 * Sort configuration
 */
export interface SortConfig<T = TableRowData> {
  /** Column key to sort by */
  key: string;
  /** Sort direction */
  direction: 'asc' | 'desc';
  /** Custom sort function */
  sorter?: (a: T, b: T) => number;
}

/**
 * Filter configuration
 */
export interface FilterConfig {
  /** Column key to filter */
  key: string;
  /** Filter value */
  value: any;
  /** Filter type */
  type: 'text' | 'select' | 'dateRange' | 'number' | 'custom';
  /** Custom filter function */
  filterFn?: (value: any, record: TableRowData) => boolean;
}

/**
 * Pagination configuration
 */
export interface PaginationConfig {
  /** Current page (0-based) */
  current: number;
  /** Items per page */
  pageSize: number;
  /** Total number of items */
  total: number;
  /** Available page size options */
  pageSizeOptions: number[];
  /** Whether to show size changer */
  showSizeChanger: boolean;
  /** Whether to show quick jumper */
  showQuickJumper: boolean;
  /** Whether to show total count */
  showTotal: boolean | ((total: number, range: [number, number]) => ReactNode);
}

/**
 * Action button configuration
 */
export interface ActionConfig<T = TableRowData> {
  /** Action key */
  key: string;
  /** Button label */
  label: string;
  /** Icon component */
  icon?: ReactNode;
  /** Click handler */
  onClick: (record: T, index: number) => void;
  /** Whether the action is disabled */
  disabled?: boolean | ((record: T, index: number) => boolean);
  /** Button type */
  type?: 'primary' | 'default' | 'danger' | 'link';
  /** Tooltip text */
  tooltip?: string;
  /** Permission required for this action */
  permission?: string;
}

/**
 * Theme configuration
 */
export interface ThemeConfig {
  /** Primary color */
  primaryColor: string;
  /** Border color */
  borderColor: string;
  /** Header background */
  headerBg: string;
  /** Row hover color */
  rowHoverBg: string;
  /** Selected row color */
  selectedRowBg: string;
  /** Font family */
  fontFamily: string;
  /** Border radius */
  borderRadius: string;
  /** Box shadow */
  boxShadow: string;
}

/**
 * Locale configuration for internationalization
 */
export interface LocaleConfig {
  /** Filter input placeholder */
  filterPlaceholder: string;
  /** Clear filter button text */
  clearFilter: string;
  /** No data message */
  noData: string;
  /** No permission message */
  noPermission: string;
  /** Loading message */
  loading: string;
  /** Items per page label */
  itemsPerPage: string;
  /** Export button text */
  exportCSV: string;
  /** Copy tooltip text */
  copyTooltip: string;
  /** Copied message */
  copied: string;
  /** Pagination labels */
  pagination: {
    previous: string;
    next: string;
    page: string;
    total: string;
  };
  /** Sort labels */
  sort: {
    sortAsc: string;
    sortDesc: string;
    cancelSort: string;
  };
  /** Action labels */
  actions: {
    view: string;
    edit: string;
    delete: string;
    resetPassword: string;
  };
}

/**
 * Export configuration
 */
export interface ExportConfig<T = TableRowData> {
  /** File name */
  filename?: string;
  /** Columns to include in export */
  columns?: string[];
  /** Custom data transformer */
  transformer?: (data: T[]) => any[];
  /** Include header row */
  includeHeader?: boolean;
  /** Export format */
  format?: 'csv' | 'xlsx' | 'json';
}

/**
 * Virtualization configuration
 */
export interface VirtualizationConfig {
  /** Enable virtualization */
  enabled: boolean;
  /** Estimated row height */
  estimatedRowHeight: number;
  /** Number of rows to render outside visible area */
  overscan: number;
  /** Minimum rows to enable virtualization */
  threshold: number;
}

/**
 * Main table props interface
 */
export interface TableProps<T = TableRowData> {
  /** Table columns configuration */
  columns: TableColumn<T>[];
  /** Table data */
  data: T[];
  /** Table title */
  title?: string;
  /** Loading state */
  loading?: boolean;
  /** Custom loading component */
  loadingComponent?: ReactNode;
  /** Pagination configuration */
  pagination?: false | Partial<PaginationConfig>;
  /** Sort configuration */
  sortConfig?: SortConfig<T>[];
  /** Multi-column sorting */
  multiSort?: boolean;
  /** Filter configuration */
  filterConfig?: FilterConfig[];
  /** Global search */
  globalSearch?: boolean;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Actions configuration */
  actions?: ActionConfig<T>[];
  /** Row selection */
  rowSelection?: {
    type: 'checkbox' | 'radio';
    selectedKeys: (string | number)[];
    onChange: (selectedKeys: (string | number)[], selectedRows: T[]) => void;
    getCheckboxProps?: (record: T) => { disabled?: boolean };
  };
  /** Row key extractor */
  rowKey?: string | ((record: T, index: number) => string | number);
  /** Row class name */
  rowClassName?: string | ((record: T, index: number) => string);
  /** Row style */
  rowStyle?: CSSProperties | ((record: T, index: number) => CSSProperties);
  /** Table style */
  tableStyle?: CSSProperties;
  /** Container style */
  containerStyle?: CSSProperties;
  /** Theme configuration */
  theme?: Partial<ThemeConfig>;
  /** Locale configuration */
  locale?: Partial<LocaleConfig>;
  /** Export configuration */
  exportConfig?: ExportConfig<T>;
  /** Virtualization configuration */
  virtualization?: Partial<VirtualizationConfig>;
  /** Responsive breakpoints */
  responsive?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  /** Mobile card view */
  mobileCardView?: boolean;
  /** Sticky header */
  stickyHeader?: boolean;
  /** Sticky columns */
  stickyColumns?: boolean;
  /** Resize columns */
  resizable?: boolean;
  /** Reorder columns */
  reorderable?: boolean;
  /** Custom empty state */
  emptyState?: ReactNode;
  /** Permissions */
  permissions?: {
    read?: boolean;
    write?: boolean;
    delete?: boolean;
    export?: boolean;
  };
  /** Event handlers */
  onSort?: (sortConfig: SortConfig<T>[]) => void;
  onFilter?: (filterConfig: FilterConfig[]) => void;
  onPaginationChange?: (pagination: { current: number; pageSize: number }) => void;
  onRowClick?: (record: T, index: number, event: React.MouseEvent) => void;
  onRowDoubleClick?: (record: T, index: number, event: React.MouseEvent) => void;
  onRowContextMenu?: (record: T, index: number, event: React.MouseEvent) => void;
  onColumnResize?: (columnKey: string, width: number) => void;
  onColumnReorder?: (columns: TableColumn<T>[]) => void;
  onExport?: (data: T[], config: ExportConfig<T>) => void;
  /** Accessibility props */
  'aria-label'?: string;
  'aria-describedby'?: string;
  /** Test props */
  'data-testid'?: string;
}

/**
 * Default locale configuration
 */
export const defaultLocale: LocaleConfig = {
  filterPlaceholder: 'Search...',
  clearFilter: 'Clear',
  noData: 'No data available',
  noPermission: 'No permission to view this data',
  loading: 'Loading...',
  itemsPerPage: 'Items per page',
  exportCSV: 'Export CSV',
  copyTooltip: 'Click to copy',
  copied: 'Copied!',
  pagination: {
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    total: 'Total {total} items',
  },
  sort: {
    sortAsc: 'Sort ascending',
    sortDesc: 'Sort descending',
    cancelSort: 'Cancel sort',
  },
  actions: {
    view: 'View',
    edit: 'Edit',
    delete: 'Delete',
    resetPassword: 'Reset Password',
  },
};

/**
 * Default theme configuration
 */
export const defaultTheme: ThemeConfig = {
  primaryColor: '#3498db',
  borderColor: '#e1e8ed',
  headerBg: '#f8fafc',
  rowHoverBg: '#f1f5f9',
  selectedRowBg: '#e3f2fd',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};