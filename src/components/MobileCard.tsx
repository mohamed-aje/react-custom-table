import React from 'react';
import { TableColumn, TableRowData, LocaleConfig, ThemeConfig, ActionConfig } from '../types';
import { getNestedValue } from '../hooks';
import styles from '../styles/MobileCard.module.css';

export interface MobileCardProps<T extends TableRowData = TableRowData> {
  data: T[];
  columns: TableColumn<T>[];
  actions?: ActionConfig<T>[];
  selection?: {
    isSelected: (record: T, index: number) => boolean;
    handleSelect: (record: T, index: number, selected: boolean) => void;
  };
  locale: LocaleConfig;
  theme: ThemeConfig;
  onRowClick?: (record: T, index: number, event: React.MouseEvent) => void;
  testId?: string;
}

export const MobileCard: React.FC<MobileCardProps> = ({
  data,
  columns,
  actions = [],
  selection,
  locale,
  theme,
  onRowClick,
  testId = 'mobile-card',
}) => {
  const renderCardContent = (record: any, index: number) => (
    <div 
      key={index}
      className={styles.card}
      onClick={(e) => onRowClick?.(record, index, e)}
      data-testid={`${testId}-item-${index}`}
    >
      {selection && (
        <div className={styles.cardSelection}>
          <input
            type="checkbox"
            checked={selection.isSelected(record, index)}
            onChange={(e) => selection.handleSelect(record, index, e.target.checked)}
            className={styles.cardCheckbox}
          />
        </div>
      )}

      <div className={styles.cardBody}>
        {columns.map(column => {
          if (column.hidden) return null;

          const value = column.dataIndex 
            ? (typeof column.dataIndex === 'function' 
                ? column.dataIndex(record, index)
                : getNestedValue(record, column.dataIndex))
            : record[column.key];

          return (
            <div key={column.key} className={styles.cardField}>
              <span className={styles.cardLabel}>{column.title}:</span>
              <span className={styles.cardValue}>
                {column.render ? column.render(value, record, index) : String(value || '')}
              </span>
            </div>
          );
        })}
      </div>

      {actions.length > 0 && (
        <div className={styles.cardActions}>
          {actions.map(action => (
            <button
              key={action.key}
              className={`${styles.cardActionButton} ${styles[`cardActionButton${action.type || 'default'}`]}`}
              onClick={(e) => {
                e.stopPropagation();
                action.onClick(record, index);
              }}
              disabled={
                typeof action.disabled === 'function' 
                  ? action.disabled(record, index)
                  : action.disabled
              }
              title={action.tooltip}
            >
              {action.icon}
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  if (data.length === 0) {
    return (
      <div className={styles.mobileEmptyState} data-testid={`${testId}-empty`}>
        <p>{locale.noData}</p>
      </div>
    );
  }

  return (
    <div className={styles.mobileCardContainer} data-testid={testId}>
      {data.map(renderCardContent)}
    </div>
  );
};