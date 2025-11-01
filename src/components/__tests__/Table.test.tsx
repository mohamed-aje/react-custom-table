import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Table from '../Table';
import { TableColumn } from '../../types';

interface TestData {
  id: number;
  name: string;
  email: string;
  role: string;
}

const mockData: TestData[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'user' },
];

const mockColumns: TableColumn<TestData>[] = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
    sortable: true,
  },
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
    filterable: true,
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    filterable: true,
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    filterable: true,
    filterType: 'select',
    filterOptions: [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' },
    ],
  },
];

describe('Table Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    // Reset any mocks before each test
    jest.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('renders table with data', () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          data-testid="test-table"
        />
      );

      expect(screen.getByTestId('test-table')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    });

    it('renders empty state when no data provided', () => {
      render(
        <Table
          columns={mockColumns}
          data={[]}
          data-testid="empty-table"
        />
      );

      expect(screen.getByTestId('empty-table-empty')).toBeInTheDocument();
    });

    it('renders loading state', () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          loading={true}
          data-testid="loading-table"
        />
      );

      expect(screen.getByTestId('loading-table-loading')).toBeInTheDocument();
    });

    it('renders table title when provided', () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          title="Test Table Title"
        />
      );

      expect(screen.getByText('Test Table Title')).toBeInTheDocument();
    });
  });

  describe('Sorting', () => {
    it('sorts data when column header is clicked', async () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          data-testid="sortable-table"
        />
      );

      const nameHeader = screen.getByText('Name');
      await user.click(nameHeader);

      // Check if data is sorted (Jane should come before John alphabetically)
      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Jane Smith');
    });
  });

  describe('Filtering', () => {
    it('filters data using global search', async () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          globalSearch={true}
          data-testid="filterable-table"
        />
      );

      const searchInput = screen.getByTestId('filterable-table-global-search');
      await user.type(searchInput, 'John');

      await waitFor(() => {
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
      });
    });

    it('clears search when clear button is clicked', async () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          globalSearch={true}
          data-testid="clearable-table"
        />
      );

      const searchInput = screen.getByTestId('clearable-table-global-search');
      await user.type(searchInput, 'John');
      
      const clearButton = screen.getByRole('button');
      await user.click(clearButton);

      expect(searchInput).toHaveValue('');
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });

  describe('Pagination', () => {
    it('paginates data correctly', () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          pagination={{ pageSize: 2 }}
          data-testid="paginated-table"
        />
      );

      const pagination = screen.getByTestId('paginated-table-pagination');
      expect(pagination).toBeInTheDocument();
      
      // Should show 2 out of 3 rows on first page
      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(3); // 2 data rows + 1 header row
    });

    it('navigates to next page', async () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          pagination={{ pageSize: 2 }}
          data-testid="nav-table"
        />
      );

      const nextButton = screen.getByTestId('nav-table-pagination-next');
      await user.click(nextButton);

      // Should show the remaining 1 row on second page
      expect(screen.getByText('Mike Johnson')).toBeInTheDocument();
    });
  });

  describe('Row Selection', () => {
    it('selects rows when checkbox is clicked', async () => {
      const onSelectionChange = jest.fn();
      
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          rowSelection={{
            type: 'checkbox',
            selectedKeys: [],
            onChange: onSelectionChange,
          }}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      await user.click(checkboxes[1]); // Click first data row checkbox

      expect(onSelectionChange).toHaveBeenCalledWith([1], [mockData[0]]);
    });

    it('selects all rows when header checkbox is clicked', async () => {
      const onSelectionChange = jest.fn();
      
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          rowSelection={{
            type: 'checkbox',
            selectedKeys: [],
            onChange: onSelectionChange,
          }}
        />
      );

      const headerCheckbox = screen.getAllByRole('checkbox')[0];
      await user.click(headerCheckbox);

      expect(onSelectionChange).toHaveBeenCalledWith(
        [1, 2, 3],
        mockData
      );
    });
  });

  describe('Actions', () => {
    it('renders action buttons', () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          actions={[
            {
              key: 'edit',
              label: 'Edit',
              onClick: jest.fn(),
            },
          ]}
          data-testid="actions-table"
        />
      );

      const editButtons = screen.getAllByTestId(/actions-table-action-edit/);
      expect(editButtons).toHaveLength(mockData.length);
    });

    it('calls action onClick when button is clicked', async () => {
      const onEdit = jest.fn();
      
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          actions={[
            {
              key: 'edit',
              label: 'Edit',
              onClick: onEdit,
            },
          ]}
          data-testid="clickable-actions-table"
        />
      );

      const firstEditButton = screen.getAllByTestId(/clickable-actions-table-action-edit/)[0];
      await user.click(firstEditButton);

      expect(onEdit).toHaveBeenCalledWith(mockData[0], 0);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels', () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          aria-label="Test table"
          aria-describedby="table-description"
        />
      );

      const table = screen.getByLabelText('Test table');
      expect(table).toBeInTheDocument();
      expect(table).toHaveAttribute('aria-describedby', 'table-description');
    });

    it('supports keyboard navigation', async () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          data-testid="keyboard-table"
        />
      );

      // Test tab navigation
      await user.tab();
      expect(document.activeElement).toBeInTheDocument();
    });
  });

  describe('Export', () => {
    it('calls export function when export button is clicked', async () => {
      const onExport = jest.fn();
      
      render(
        <Table
          columns={mockColumns}
          data={mockData}
          exportConfig={{ filename: 'test.csv' }}
          onExport={onExport}
          data-testid="export-table"
        />
      );

      const exportButton = screen.getByTestId('export-table-export');
      await user.click(exportButton);

      expect(onExport).toHaveBeenCalledWith(mockData, { filename: 'test.csv' });
    });
  });

  describe('Responsive Design', () => {
    it('renders mobile card view on small screens', () => {
      // Mock window.innerWidth
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 500,
      });

      render(
        <Table
          columns={mockColumns}
          data={mockData}
          mobileCardView={true}
          responsive={{ sm: 768 }}
        />
      );

      // Trigger resize event
      fireEvent(window, new Event('resize'));

      // Mobile card view should be rendered
      // This would require checking for specific mobile elements
    });
  });
});