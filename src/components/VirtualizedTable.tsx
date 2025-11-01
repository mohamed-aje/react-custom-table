import React, { useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';
import { TableColumn, TableRowData, LocaleConfig, ThemeConfig } from '../types';
import { getNestedValue } from '../hooks';
import styles from '../styles/VirtualizedTable.module.css';

export interface VirtualizedTableProps<T extends TableRowData = TableRowData> {
  data: T[];
  columns: TableColumn<T>[];
  rowHeight: number;
  height: number;
  locale: LocaleConfig;
  theme: ThemeConfig;
  testId?: string;
}

interface RowProps {
  index: number;
  style: React.CSSProperties;
  data: {
    items: any[];
    columns: TableColumn[];
  };
}

const Row: React.FC<RowProps> = ({ index, style, data }) => {
  const { items, columns } = data;
  const record = items[index];

  return (
    <div style={style} className={styles.virtualRow}>
      {columns.map(column => {
        const value = column.dataIndex 
          ? (typeof column.dataIndex === 'function' 
              ? column.dataIndex(record, index)
              : getNestedValue(record, column.dataIndex))
          : record[column.key];

        return (
          <div 
            key={column.key}
            className={styles.virtualCell}
            style={{ 
              width: column.width || 'auto',
              textAlign: column.align || 'left' 
            }}
          >
            {column.render ? column.render(value, record, index) : String(value || '')}
          </div>
        );
      })}
    </div>
  );
};

export const VirtualizedTable: React.FC<VirtualizedTableProps> = ({
  data,
  columns,
  rowHeight,
  height,
  locale,
  theme,
  testId = 'virtualized-table',
}) => {
  const itemData = useMemo(() => ({
    items: data,
    columns: columns.filter(col => !col.hidden),
  }), [data, columns]);

  if (data.length === 0) {
    return (
      <div className={styles.virtualizedEmptyState} data-testid={`${testId}-empty`}>
        <p>{locale.noData}</p>
      </div>
    );
  }

  return (
    <div className={styles.virtualizedContainer} data-testid={testId}>
      {/* Header */}
      <div className={styles.virtualizedHeader}>
        {itemData.columns.map(column => (
          <div
            key={column.key}
            className={styles.virtualHeaderCell}
            style={{ 
              width: column.width || 'auto',
              textAlign: column.align || 'left' 
            }}
          >
            {column.title}
          </div>
        ))}
      </div>

      {/* Virtual List */}
      <List
        height={height}
        itemCount={data.length}
        itemSize={rowHeight}
        itemData={itemData}
        className={styles.virtualizedList}
      >
        {Row}
      </List>
    </div>
  );
};