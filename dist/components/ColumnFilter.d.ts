import React from 'react';
import { TableColumn, LocaleConfig } from '../types';
export interface ColumnFilterProps<T = any> {
    column: TableColumn<T>;
    value: any;
    onChange: (value: any) => void;
    onClear: () => void;
    locale: LocaleConfig;
}
export declare const ColumnFilter: React.FC<ColumnFilterProps>;
//# sourceMappingURL=ColumnFilter.d.ts.map