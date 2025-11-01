import React, { useState, useMemo } from 'react';
import { Table, TableColumn, ActionConfig } from '../src';
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  startDate: string;
  status: 'active' | 'inactive' | 'on-leave';
}

const generateSampleData = (count: number): Employee[] => {
  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];
  const positions = ['Manager', 'Senior', 'Junior', 'Intern', 'Director'];
  const names = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'David Brown'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `${names[i % names.length]} ${i + 1}`,
    email: `employee${i + 1}@company.com`,
    department: departments[i % departments.length],
    position: positions[i % positions.length],
    salary: Math.floor(Math.random() * 100000) + 50000,
    startDate: new Date(2020 + Math.floor(Math.random() * 4), 
                       Math.floor(Math.random() * 12), 
                       Math.floor(Math.random() * 28) + 1)
                       .toISOString().split('T')[0],
    status: ['active', 'inactive', 'on-leave'][i % 3] as any,
  }));
};

export const AdvancedTableExample: React.FC = () => {
  const [data] = useState(() => generateSampleData(1000));
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const columns: TableColumn<Employee>[] = useMemo(() => [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      sortable: true,
      align: 'center',
    },
    {
      key: 'name',
      title: 'Employee Name',
      dataIndex: 'name',
      sortable: true,
      filterable: true,
      copyable: true,
      width: 200,
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      filterable: true,
      copyable: true,
      width: 250,
    },
    {
      key: 'department',
      title: 'Department',
      dataIndex: 'department',
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { label: 'Engineering', value: 'Engineering' },
        { label: 'Marketing', value: 'Marketing' },
        { label: 'Sales', value: 'Sales' },
        { label: 'HR', value: 'HR' },
        { label: 'Finance', value: 'Finance' },
      ],
      width: 150,
    },
    {
      key: 'position',
      title: 'Position',
      dataIndex: 'position',
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { label: 'Manager', value: 'Manager' },
        { label: 'Senior', value: 'Senior' },
        { label: 'Junior', value: 'Junior' },
        { label: 'Intern', value: 'Intern' },
        { label: 'Director', value: 'Director' },
      ],
      width: 120,
    },
    {
      key: 'salary',
      title: 'Salary',
      dataIndex: 'salary',
      sortable: true,
      filterable: true,
      filterType: 'number',
      align: 'right',
      width: 120,
      render: (value: number) => (
        <span>${value.toLocaleString()}</span>
      ),
    },
    {
      key: 'startDate',
      title: 'Start Date',
      dataIndex: 'startDate',
      sortable: true,
      filterable: true,
      filterType: 'dateRange',
      width: 130,
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'On Leave', value: 'on-leave' },
      ],
      width: 120,
      render: (value: string) => (
        <span 
          className={`status-badge status-${value}`}
          style={{
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backgroundColor: value === 'active' ? '#10b981' : 
                           value === 'inactive' ? '#ef4444' : '#f59e0b',
            color: 'white',
          }}
        >
          {value.replace('-', ' ')}
        </span>
      ),
    },
  ], []);

  const actions: ActionConfig<Employee>[] = useMemo(() => [
    {
      key: 'view',
      label: 'View',
      icon: <MdVisibility />,
      onClick: (record) => {
        console.log('Viewing employee:', record);
        alert(`Viewing ${record.name}`);
      },
      tooltip: 'View employee details',
    },
    {
      key: 'edit',
      label: 'Edit',
      icon: <MdEdit />,
      onClick: (record) => {
        console.log('Editing employee:', record);
        alert(`Editing ${record.name}`);
      },
      type: 'primary',
      tooltip: 'Edit employee information',
    },
    {
      key: 'delete',
      label: 'Delete',
      icon: <MdDelete />,
      onClick: (record) => {
        console.log('Deleting employee:', record);
        if (window.confirm(`Are you sure you want to delete ${record.name}?`)) {
          alert(`Deleted ${record.name}`);
        }
      },
      type: 'danger',
      tooltip: 'Delete employee',
      disabled: (record) => record.status === 'active', // Can't delete active employees
    },
  ], []);

  const handleExport = (exportData: Employee[]) => {
    console.log('Exporting data:', exportData);
    alert(`Exporting ${exportData.length} employees`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Advanced Employee Management Table</h1>
      
      <Table<Employee>
        columns={columns}
        data={data}
        title="Employee Directory"
        loading={false}
        
        // Pagination
        pagination={{
          pageSize: 25,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) => (
            <span>
              Showing {range[0]}-{range[1]} of {total} employees
            </span>
          ),
        }}
        
        // Sorting
        multiSort={true}
        sortConfig={[
          { key: 'name', direction: 'asc' },
        ]}
        
        // Row Selection
        rowSelection={{
          type: 'checkbox',
          selectedKeys: selectedRows,
          onChange: (keys, rows) => {
            setSelectedRows(keys as number[]);
            console.log('Selected employees:', rows);
          },
          getCheckboxProps: (record) => ({
            disabled: record.status === 'inactive',
          }),
        }}
        
        // Actions
        actions={actions}
        
        // Export
        exportConfig={{
          filename: 'employees.csv',
          columns: ['name', 'email', 'department', 'position', 'salary'],
        }}
        onExport={handleExport}
        
        // Virtualization for performance
        virtualization={{
          enabled: true,
          threshold: 100,
          estimatedRowHeight: 60,
        }}
        
        // Theming
        theme={{
          primaryColor: '#3b82f6',
          borderColor: '#e5e7eb',
          headerBg: '#f9fafb',
          rowHoverBg: '#f3f4f6',
          selectedRowBg: '#dbeafe',
        }}
        
        // Responsive design
        responsive={{
          xs: 480,
          sm: 768,
          md: 1024,
          lg: 1280,
          xl: 1536,
        }}
        mobileCardView={true}
        
        // Event handlers
        onRowClick={(record, index, event) => {
          if (!event.ctrlKey && !event.metaKey) {
            console.log('Row clicked:', record);
          }
        }}
        
        onRowDoubleClick={(record) => {
          console.log('Row double-clicked:', record);
          alert(`Opening details for ${record.name}`);
        }}
        
        // Accessibility
        aria-label="Employee management table"
        aria-describedby="employee-table-description"
        
        // Test ID for testing
        data-testid="employee-table"
      />
      
      <div id="employee-table-description" style={{ display: 'none' }}>
        Interactive table showing employee information with sorting, filtering, and actions
      </div>
      
      {selectedRows.length > 0 && (
        <div 
          style={{ 
            marginTop: '16px', 
            padding: '12px', 
            backgroundColor: '#dbeafe', 
            borderRadius: '8px',
            border: '1px solid #3b82f6',
          }}
        >
          <strong>Selected Employees:</strong> {selectedRows.length}
          <button 
            style={{ 
              marginLeft: '12px', 
              padding: '6px 12px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => {
              alert(`Performing bulk action on ${selectedRows.length} employees`);
            }}
          >
            Bulk Action
          </button>
        </div>
      )}
    </div>
  );
};