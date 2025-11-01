import React from 'react';
import { LocaleConfig } from '../types';
export interface PaginationProps {
    current: number;
    total: number;
    pageSize: number;
    totalPages: number;
    onChange: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    showSizeChanger?: boolean;
    showQuickJumper?: boolean;
    showTotal?: boolean | ((total: number, range: [number, number]) => React.ReactNode);
    locale: LocaleConfig;
    testId?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
//# sourceMappingURL=Pagination.d.ts.map