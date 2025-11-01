import React from 'react';
import { TableColumn, TableRowData, LocaleConfig, ThemeConfig } from '../types';
export interface VirtualizedTableProps<T extends TableRowData = TableRowData> {
    data: T[];
    columns: TableColumn<T>[];
    rowHeight: number;
    height: number;
    locale: LocaleConfig;
    theme: ThemeConfig;
    testId?: string;
}
export declare const VirtualizedTable: React.FC<VirtualizedTableProps>;
//# sourceMappingURL=VirtualizedTable.d.ts.map