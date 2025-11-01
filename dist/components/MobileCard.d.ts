import React from 'react';
import { TableColumn, TableRowData, LocaleConfig, ThemeConfig, ActionConfig } from '../types';
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
export declare const MobileCard: React.FC<MobileCardProps>;
//# sourceMappingURL=MobileCard.d.ts.map