import React, { useMemo, useState, useCallback, useEffect } from 'react';
import {
  MdArrowUpward,
  MdArrowDownward,
  MdUnfoldMore,
  MdFilterList,
  MdClear,
  MdContentCopy,
  MdFileDownload,
  MdRefresh,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdIndeterminateCheckBox,
} from 'react-icons/md';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import {
  TableProps,
  TableColumn,
  TableRowData,
  SortConfig,
  FilterConfig,
  defaultLocale,
  defaultTheme,
} from '../types';
import {
  useTableSort,
  useTableFilter,
  useTablePagination,
  useTableSelection,
  useDebounce,
  useLocalStorage,
  exportUtils,
  getNestedValue,
} from '../hooks';
import { Pagination } from './Pagination';
import { ColumnFilter } from './ColumnFilter';
import { MobileCard } from './MobileCard';
import { VirtualizedTable } from './VirtualizedTable';
import styles from '../styles/Table.module.css';

function Table<T extends TableRowData = TableRowData>({
  columns,
  data = [],
  title,
  loading = false,
  loadingComponent,
  pagination = { pageSize: 10, current: 1, showSizeChanger: true },
  sortConfig: initialSortConfig = [],
  multiSort = false,
  filterConfig: initialFilterConfig = [],
  globalSearch = true,
  searchPlaceholder,
  actions = [],
  rowSelection,
  rowKey = 'id',
  rowClassName,
  rowStyle,
  tableStyle,
  containerStyle,
  theme = {},
  locale = {},
  exportConfig,
  virtualization = { enabled: false, threshold: 1000 },
  responsive = { xs: 576, sm: 768, md: 992, lg: 1200, xl: 1400 },
  mobileCardView = true,
  stickyHeader = false,
  stickyColumns = false,
  resizable = false,
  reorderable = false,
  emptyState,
  permissions = { read: true, write: true, delete: true, export: true },
  onSort,
  onFilter,
  onPaginationChange,
  onRowClick,
  onRowDoubleClick,
  onRowContextMenu,
  onColumnResize,
  onColumnReorder,
  onExport,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'data-testid': testId = 'react-pro-table',
  ...legacyProps
}: TableProps<T> & any) {
  // Merge with default configurations
  const mergedLocale = { ...defaultLocale, ...locale };
  const mergedTheme = { ...defaultTheme, ...theme };

  const [columnWidths, setColumnWidths] = useLocalStorage<Record<string, number>>(
    `table-column-widths-${testId}`,
    {}
  );
  const [columnOrder, setColumnOrder] = useLocalStorage<string[]>(
    `table-column-order-${testId}`,
    columns.map(col => col.key)
  );
  const [copiedCell, setCopiedCell] = useState<string | null>(null);
  const [filterVisible, setFilterVisible] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  const {
    sortedData,
    sortConfig,
    handleSort,
    resetSort,
    setSortConfig,
  } = useTableSort(data, initialSortConfig);

  const {
    filteredData,
    filterConfig,
    globalSearchTerm,
    handleFilter,
    clearFilter,
    clearAllFilters,
    setGlobalSearchTerm,
  } = useTableFilter(sortedData, initialFilterConfig);

  const debouncedGlobalSearch = useDebounce(globalSearchTerm, 300);

  const {
    paginatedData,
    current,
    pageSize,
    totalPages,
    total,
    handlePageChange,
    handlePageSizeChange,
    resetPagination,
  } = useTablePagination(
    filteredData,
    pagination === false ? filteredData.length : pagination?.pageSize || 10
  );

  const selection = useTableSelection(
    paginatedData,
    rowKey,
    rowSelection?.type || 'checkbox'
  );

  //Legacy props support for backward compatibility
  useEffect(() => {
    if (legacyProps.columns && legacyProps.columnDisplayNames) {
      console.warn('Using legacy columns prop. Please migrate to new columns format.');
    }
  }, [legacyProps]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < (responsive.sm || 768));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [responsive.sm]);

  //Column management
  const processedColumns = useMemo(() => {
    let processed = columns.map(col => ({
      ...col,
      width: columnWidths[col.key] || col.width,
    }));

    //Apply column order if reorderable
    if (reorderable) {
      processed = columnOrder
        .map(key => processed.find(col => col.key === key))
        .filter(Boolean) as TableColumn<T>[];
    }

    return processed.filter(col => !col.hidden);
  }, [columns, columnWidths, columnOrder, reorderable]);

  const handleSortClick = useCallback((columnKey: string) => {
    handleSort(columnKey, multiSort);
    onSort?.(sortConfig);
  }, [handleSort, multiSort, sortConfig, onSort]);

  const handleFilterChange = useCallback((columnKey: string, value: any, type: FilterConfig['type']) => {
    handleFilter(columnKey, value, type);
    resetPagination();
    onFilter?.(filterConfig);
  }, [handleFilter, resetPagination, filterConfig, onFilter]);

  const handleCellCopy = useCallback(async (value: any, cellKey: string) => {
    if (!value) return;

    try {
      await navigator.clipboard.writeText(String(value));
      setCopiedCell(cellKey);
      setTimeout(() => setCopiedCell(null), 2000);
    } catch (error) {
      console.warn('Failed to copy to clipboard:', error);
    }
  }, []);

  const handleExportData = useCallback(() => {
    if (!onExport && !exportConfig) {
      // Default CSV export
      const exportColumns = exportConfig?.columns || processedColumns.map(col => col.key);
      const exportHeaders = exportColumns.map(key => {
        const column = processedColumns.find(col => col.key === key);
        return column?.title || key;
      });

      const csvContent = exportUtils.toCSV(
        exportConfig?.transformer ? exportConfig.transformer(filteredData) : filteredData,
        exportColumns,
        exportHeaders
      );

      exportUtils.downloadCSV(csvContent, exportConfig?.filename || 'table-data.csv');
    } else {
      onExport?.(filteredData, exportConfig || {});
    }
  }, [onExport, exportConfig, processedColumns, filteredData]);

  const handleColumnResize = useCallback((columnKey: string, width: number) => {
    setColumnWidths(prev => ({ ...prev, [columnKey]: width }));
    onColumnResize?.(columnKey, width);
  }, [setColumnWidths, onColumnResize]);

  // Render helpers
  const renderSortIcon = (column: TableColumn<T>) => {
    if (!column.sortable) return null;

    const sortState = sortConfig.find(config => config.key === column.key);
    
    if (!sortState) {
      return <MdUnfoldMore className={styles.sortIcon} />;
    }

    return sortState.direction === 'asc' 
      ? <MdArrowUpward className={`${styles.sortIcon} ${styles.sortIconActive}`} />
      : <MdArrowDownward className={`${styles.sortIcon} ${styles.sortIconActive}`} />;
  };

  const renderCellContent = (value: any, record: T, column: TableColumn<T>, index: number) => {
    // Custom render function
    if (column.render) {
      return column.render(value, record, index);
    }

    // Copyable cell
    if (column.copyable) {
      const cellKey = `${getRowKey(record, index)}-${column.key}`;
      const isCopied = copiedCell === cellKey;

      return (
        <div className={styles.copyableCell}>
          <span
            onClick={() => handleCellCopy(value, cellKey)}
            className={styles.copyableContent}
            data-tooltip-id={`copy-tooltip-${cellKey}`}
            data-tooltip-content={isCopied ? mergedLocale.copied : mergedLocale.copyTooltip}
          >
            {String(value || '')}
          </span>
          <MdContentCopy 
            className={styles.copyIcon}
            onClick={() => handleCellCopy(value, cellKey)}
          />
          <ReactTooltip id={`copy-tooltip-${cellKey}`} />
        </div>
      );
    }

    return <span>{String(value || '')}</span>;
  };

  const renderHeaderCell = (column: TableColumn<T>) => (
    <th
      key={column.key}
      className={`${styles.tableHeader} ${column.fixed ? styles.stickyColumn : ''}`}
      style={{
        width: column.width,
        minWidth: column.minWidth,
        maxWidth: column.maxWidth,
        textAlign: column.align || 'left',
        ...column.headerStyle,
      }}
      onClick={() => column.sortable && handleSortClick(column.key)}
    >
      <div className={styles.headerContent}>
        <span className={styles.headerTitle}>{column.title}</span>
        {renderSortIcon(column)}
        {column.filterable && (
          <MdFilterList
            className={`${styles.filterIcon} ${filterConfig.some(f => f.key === column.key) ? styles.filterIconActive : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setFilterVisible(prev => ({ ...prev, [column.key]: !prev[column.key] }));
            }}
          />
        )}
      </div>
      {filterVisible[column.key] && (
        <ColumnFilter
          column={column}
          value={filterConfig.find(f => f.key === column.key)?.value}
          onChange={(value) => handleFilterChange(column.key, value, column.filterType || 'text')}
          onClear={() => clearFilter(column.key)}
          locale={mergedLocale}
        />
      )}
    </th>
  );

  const renderBodyCell = (record: T, column: TableColumn<T>, index: number) => {
    const value = column.dataIndex 
      ? (typeof column.dataIndex === 'function' 
          ? column.dataIndex(record, index)
          : getNestedValue(record, column.dataIndex))
      : record[column.key];

    return (
      <td
        key={column.key}
        className={`${styles.tableCell} ${column.fixed ? styles.stickyColumn : ''}`}
        style={{
          textAlign: column.align || 'left',
          ...column.cellStyle,
        }}
      >
        {renderCellContent(value, record, column, index)}
      </td>
    );
  };

  const getRowKey = (record: T, index: number): string | number => {
    return typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey] || index;
  };

  const renderSelectionColumn = () => {
    if (!rowSelection) return null;

    return (
      <th className={styles.tableHeader}>
        {rowSelection.type === 'checkbox' && (
          <div className={styles.checkboxContainer}>
            {selection.isAllSelected ? (
              <MdCheckBox 
                className={styles.checkbox}
                onClick={() => selection.handleSelectAll(false)}
              />
            ) : selection.isIndeterminate ? (
              <MdIndeterminateCheckBox
                className={styles.checkbox}
                onClick={() => selection.handleSelectAll(true)}
              />
            ) : (
              <MdCheckBoxOutlineBlank
                className={styles.checkbox}
                onClick={() => selection.handleSelectAll(true)}
              />
            )}
          </div>
        )}
      </th>
    );
  };

  const renderSelectionCell = (record: T, index: number) => {
    if (!rowSelection) return null;

    const isSelected = selection.isSelected(record, index);
    const checkboxProps = rowSelection.getCheckboxProps?.(record) || {};

    return (
      <td className={styles.tableCell}>
        <div className={styles.checkboxContainer}>
          {isSelected ? (
            <MdCheckBox 
              className={`${styles.checkbox} ${checkboxProps.disabled ? styles.disabled : ''}`}
              onClick={() => !checkboxProps.disabled && selection.handleSelect(record, index, false)}
            />
          ) : (
            <MdCheckBoxOutlineBlank
              className={`${styles.checkbox} ${checkboxProps.disabled ? styles.disabled : ''}`}
              onClick={() => !checkboxProps.disabled && selection.handleSelect(record, index, true)}
            />
          )}
        </div>
      </td>
    );
  };

  // Don't render if no read permission
  if (!permissions.read) {
    return (
      <div className={styles.noPermission} data-testid={`${testId}-no-permission`}>
        {mergedLocale.noPermission}
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className={styles.loadingContainer} data-testid={`${testId}-loading`}>
        {loadingComponent || (
          <div className={styles.loadingSpinner}>
            <MdRefresh className={styles.spinner} />
            <span>{mergedLocale.loading}</span>
          </div>
        )}
      </div>
    );
  }

  // Mobile card view
  if (isMobile && mobileCardView) {
    return (
      <MobileCard
        data={paginatedData}
        columns={processedColumns}
        actions={actions}
        selection={rowSelection ? selection : undefined}
        locale={mergedLocale}
        theme={mergedTheme}
        onRowClick={onRowClick}
        testId={testId}
      />
    );
  }

  // Virtualized table for large datasets
  if (virtualization.enabled && filteredData.length >= (virtualization.threshold || 1000)) {
    return (
      <VirtualizedTable
        data={filteredData}
        columns={processedColumns}
        rowHeight={virtualization.estimatedRowHeight || 50}
        height={600}
        locale={mergedLocale}
        theme={mergedTheme}
        testId={testId}
      />
    );
  }

  const displayData = pagination === false ? filteredData : paginatedData;

  return (
    <div 
      className={styles.tableContainer}
      style={{ ...containerStyle, ...mergedTheme }}
      data-testid={testId}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {/* Header Section */}
      <div className={styles.tableHeader}>
        {title && <h2 className={styles.tableTitle}>{title}</h2>}
        
        <div className={styles.tableControls}>
          {globalSearch && (
            <div className={styles.globalSearch}>
              <input
                type="text"
                placeholder={searchPlaceholder || mergedLocale.filterPlaceholder}
                value={globalSearchTerm}
                onChange={(e) => setGlobalSearchTerm(e.target.value)}
                className={styles.searchInput}
                data-testid={`${testId}-global-search`}
              />
              {globalSearchTerm && (
                <MdClear
                  className={styles.clearSearchButton}
                  onClick={() => setGlobalSearchTerm('')}
                />
              )}
            </div>
          )}

          {(filterConfig.length > 0 || globalSearchTerm) && (
            <button
              className={styles.clearFiltersButton}
              onClick={clearAllFilters}
              data-testid={`${testId}-clear-filters`}
            >
              <MdClear /> Clear Filters
            </button>
          )}

          {permissions.export && (exportConfig || onExport) && (
            <button
              className={styles.exportButton}
              onClick={handleExportData}
              data-testid={`${testId}-export`}
            >
              <MdFileDownload /> {mergedLocale.exportCSV}
            </button>
          )}
        </div>
      </div>

      {/* Table Section */}
      {displayData.length > 0 ? (
        <div className={styles.tableWrapper}>
          <table 
            className={`${styles.table} ${stickyHeader ? styles.stickyHeader : ''}`}
            style={tableStyle}
          >
            <thead>
              <tr>
                {renderSelectionColumn()}
                {processedColumns.map(renderHeaderCell)}
                {actions.length > 0 && (
                  <th className={styles.tableHeader}>Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {displayData.map((record, index) => (
                <tr
                  key={getRowKey(record, index)}
                  className={`${styles.tableRow} ${
                    typeof rowClassName === 'function' 
                      ? rowClassName(record, index)
                      : rowClassName || ''
                  } ${selection?.isSelected(record, index) ? styles.selectedRow : ''}`}
                  style={typeof rowStyle === 'function' ? rowStyle(record, index) : rowStyle}
                  onClick={(e) => onRowClick?.(record, index, e)}
                  onDoubleClick={(e) => onRowDoubleClick?.(record, index, e)}
                  onContextMenu={(e) => onRowContextMenu?.(record, index, e)}
                >
                  {renderSelectionCell(record, index)}
                  {processedColumns.map(column => renderBodyCell(record, column, index))}
                  {actions.length > 0 && (
                    <td className={styles.tableCell}>
                      <div className={styles.actionsContainer}>
                        {actions.map(action => (
                          <button
                            key={action.key}
                            className={`${styles.actionButton} ${styles[`actionButton${action.type || 'default'}`]}`}
                            onClick={() => action.onClick(record, index)}
                            disabled={
                              typeof action.disabled === 'function' 
                                ? action.disabled(record, index)
                                : action.disabled
                            }
                            title={action.tooltip}
                            data-testid={`${testId}-action-${action.key}`}
                          >
                            {action.icon}
                            {action.label}
                          </button>
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles.emptyState} data-testid={`${testId}-empty`}>
          {emptyState || (
            <div className={styles.emptyStateContent}>
              <MdFilterList className={styles.emptyStateIcon} />
              <p>{mergedLocale.noData}</p>
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      {pagination !== false && total > (pagination.pageSize || 10) && (
        <Pagination
          current={current}
          total={total}
          pageSize={pageSize}
          totalPages={totalPages}
          onChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          showSizeChanger={pagination.showSizeChanger}
          showQuickJumper={pagination.showQuickJumper}
          showTotal={pagination.showTotal}
          locale={mergedLocale}
          testId={`${testId}-pagination`}
        />
      )}

      {/* Table Info */}
      <div className={styles.tableInfo}>
        <span>
          {pagination !== false 
            ? `Showing ${((current - 1) * pageSize) + 1} to ${Math.min(current * pageSize, total)} of ${total} entries`
            : `Showing ${total} entries`
          }
          {filterConfig.length > 0 && ` (filtered from ${data.length} total entries)`}
        </span>
      </div>
    </div>
  );
}

export default Table;