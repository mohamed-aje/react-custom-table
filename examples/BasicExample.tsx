import React, { useState } from 'react';
import { Table, TableColumn } from '../src';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const sampleData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@company.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@company.com', role: 'User', status: 'active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@company.com', role: 'Manager', status: 'inactive' },
  { id: 4, name: 'Sarah Wilson', email: 'sarah@company.com', role: 'User', status: 'active' },
  { id: 5, name: 'David Brown', email: 'david@company.com', role: 'Admin', status: 'active' },
];

export const BasicExample: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<number[]>([]);

  const columns: TableColumn<User>[] = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      sortable: true,
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      sortable: true,
      filterable: true,
      copyable: true,
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      filterable: true,
      copyable: true,
    },
    {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      filterable: true,
      filterType: 'select',
      filterOptions: [
        { label: 'Admin', value: 'Admin' },
        { label: 'User', value: 'User' },
        { label: 'Manager', value: 'Manager' },
      ],
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      render: (value: string) => (
        <span style={{
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 'bold',
          backgroundColor: value === 'active' ? '#10b981' : '#ef4444',
          color: 'white',
        }}>
          {value.toUpperCase()}
        </span>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Basic Table Example</h1>
      
      <Table<User>
        columns={columns}
        data={sampleData}
        title="User Management"
        
        pagination={{
          pageSize: 3,
          showSizeChanger: true,
        }}
        
        rowSelection={{
          type: 'checkbox',
          selectedKeys,
          onChange: (keys) => {
            setSelectedKeys(keys as number[]);
            console.log('Selected:', keys);
          },
        }}
        
        actions={[
          {
            key: 'edit',
            label: 'Edit',
            onClick: (record) => alert(`Editing ${record.name}`),
            type: 'primary',
          },
          {
            key: 'delete',
            label: 'Delete',
            onClick: (record) => {
              if (confirm(`Delete ${record.name}?`)) {
                alert(`Deleted ${record.name}`);
              }
            },
            type: 'danger',
          },
        ]}
        
        exportConfig={{
          filename: 'users.csv',
        }}
        
        data-testid="basic-table"
      />
    </div>
  );
};