import React, { useState, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  MdEdit, 
  MdDelete, 
  MdVisibility, 
  MdFileDownload,
  MdRefresh 
} from 'react-icons/md';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  startDate: string;
  status: 'active' | 'inactive' | 'on-leave';
  performance: number;
}

const TableDemo: React.FC<{
  data: Employee[];
  title?: string;
  onRefresh?: () => void;
}> = ({ data, title, onRefresh }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Employee>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [filterDepartment, setFilterDepartment] = useState('');

  // Process data
  const processedData = useMemo(() => {
    let filtered = data;

    // Global search
    if (searchTerm) {
      filtered = filtered.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Department filter
    if (filterDepartment) {
      filtered = filtered.filter(item => item.department === filterDepartment);
    }

    // Sorting
    filtered.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      
      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [data, searchTerm, filterDepartment, sortField, sortDirection]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return processedData.slice(startIndex, startIndex + pageSize);
  }, [processedData, currentPage, pageSize]);

  const totalPages = Math.ceil(processedData.length / pageSize);
  const departments = [...new Set(data.map(emp => emp.department))];

  const handleSort = (field: keyof Employee) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleRowSelect = (id: number) => {
    setSelectedRows(prev =>
      prev.includes(id)
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map(row => row.id));
    }
  };

  const exportCSV = () => {
    const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Department', 'Position', 'Salary', 'Start Date', 'Status', 'Performance'];
    const csvContent = [
      headers.join(','),
      ...processedData.map(row => [
        row.id,
        row.firstName,
        row.lastName,
        row.email,
        row.department,
        row.position,
        row.salary,
        row.startDate,
        row.status,
        row.performance
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title?.toLowerCase().replace(/\s+/g, '-') || 'table'}-export.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getSortIcon = (field: keyof Employee) => {
    if (sortField !== field) return '↕️';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      active: { bg: '#10b981', color: 'white' },
      inactive: { bg: '#ef4444', color: 'white' },
      'on-leave': { bg: '#f59e0b', color: 'white' }
    };
    
    const style = colors[status as keyof typeof colors] || colors.inactive;
    
    return (
      <span style={{
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '11px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        backgroundColor: style.bg,
        color: style.color,
        whiteSpace: 'nowrap',
        display: 'inline-block'
      }}>
        {status.replace('-', ' ')}
      </span>
    );
  };

  const getPerformanceStars = (rating: number) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          {title && (
            <h2 style={{
              margin: 0,
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1f2937',
              borderLeft: '4px solid #3b82f6',
              paddingLeft: '12px'
            }}>
              {title}
            </h2>
          )}
        </div>
        
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {onRefresh && (
            <button
              onClick={onRefresh}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                background: 'white',
                color: '#374151',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              <MdRefresh /> Refresh
            </button>
          )}
          
          <button
            onClick={exportCSV}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '6px',
              background: '#3b82f6',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            <MdFileDownload /> Export CSV
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '20px',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <input
          type="text"
          placeholder="🔍 Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px 14px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            minWidth: '200px',
            flex: '1'
          }}
        />
        
        <select
          value={filterDepartment}
          onChange={(e) => setFilterDepartment(e.target.value)}
          style={{
            padding: '10px 14px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            minWidth: '150px'
          }}
        >
          <option value="">All Departments</option>
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>

        {selectedRows.length > 0 && (
          <div style={{
            padding: '8px 12px',
            background: '#dbeafe',
            borderRadius: '6px',
            fontSize: '14px',
            color: '#1e40af',
            fontWeight: '500'
          }}>
            {selectedRows.length} selected
          </div>
        )}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '12px', borderBottom: '2px solid #e5e7eb' }}>
                <input
                  type="checkbox"
                  checked={selectedRows.length === paginatedData.length && paginatedData.length > 0}
                  onChange={handleSelectAll}
                  style={{ cursor: 'pointer' }}
                />
              </th>
              {[
                { key: 'id', label: 'ID' },
                { key: 'firstName', label: 'First Name' },
                { key: 'lastName', label: 'Last Name' },
                { key: 'email', label: 'Email' },
                { key: 'department', label: 'Department' },
                { key: 'position', label: 'Position' },
                { key: 'salary', label: 'Salary' },
                { key: 'startDate', label: 'Start Date' },
                { key: 'status', label: 'Status' },
                { key: 'performance', label: 'Performance' }
              ].map(({ key, label }) => (
                <th
                  key={key}
                  onClick={() => handleSort(key as keyof Employee)}
                  style={{
                    padding: '12px',
                    borderBottom: '2px solid #e5e7eb',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: '#374151',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  {label} <span style={{ marginLeft: '4px' }}>{getSortIcon(key as keyof Employee)}</span>
                </th>
              ))}
              <th style={{
                padding: '12px',
                borderBottom: '2px solid #e5e7eb',
                textAlign: 'center',
                fontWeight: '600',
                color: '#374151'
              }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={row.id}
                style={{
                  background: selectedRows.includes(row.id) 
                    ? '#dbeafe' 
                    : index % 2 === 0 ? 'white' : '#f9fafb',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!selectedRows.includes(row.id)) {
                    (e.currentTarget as HTMLElement).style.background = '#f3f4f6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!selectedRows.includes(row.id)) {
                    (e.currentTarget as HTMLElement).style.background = 
                      index % 2 === 0 ? 'white' : '#f9fafb';
                  }
                }}
              >
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelect(row.id)}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6', fontWeight: '500' }}>
                  {row.id}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  {row.firstName}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  {row.lastName}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6', color: '#3b82f6' }}>
                  {row.email}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  <span style={{
                    padding: '4px 8px',
                    background: '#e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {row.department}
                  </span>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  {row.position}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6', fontWeight: '600', color: '#059669' }}>
                  ${row.salary.toLocaleString()}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  {row.startDate}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  {getStatusBadge(row.status)}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  <span title={`${row.performance}/5 stars`}>
                    {getPerformanceStars(row.performance)}
                  </span>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                    <button
                      onClick={() => alert(`Viewing ${row.firstName} ${row.lastName}`)}
                      style={{
                        padding: '6px',
                        border: 'none',
                        borderRadius: '4px',
                        background: '#3b82f6',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      title="View"
                    >
                      <MdVisibility size={14} />
                    </button>
                    <button
                      onClick={() => alert(`Editing ${row.firstName} ${row.lastName}`)}
                      style={{
                        padding: '6px',
                        border: 'none',
                        borderRadius: '4px',
                        background: '#10b981',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      title="Edit"
                    >
                      <MdEdit size={14} />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete ${row.firstName} ${row.lastName}?`)) {
                          alert(`Deleted ${row.firstName} ${row.lastName}`);
                        }
                      }}
                      style={{
                        padding: '6px',
                        border: 'none',
                        borderRadius: '4px',
                        background: '#ef4444',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      title="Delete"
                    >
                      <MdDelete size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ fontSize: '14px', color: '#6b7280' }}>
          Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.length)} of{' '}
          {processedData.length} entries
          {data.length !== processedData.length && (
            <span> (filtered from {data.length} total)</span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            style={{
              padding: '6px 8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            <option value={10}>10 per page</option>
            <option value={15}>15 per page</option>
            <option value={25}>25 per page</option>
            <option value={50}>50 per page</option>
          </select>

          <div style={{ display: 'flex', gap: '4px' }}>
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              style={{
                padding: '6px 10px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                background: currentPage === 1 ? '#f3f4f6' : 'white',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                fontSize: '14px'
              }}
            >
              First
            </button>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              style={{
                padding: '6px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                background: currentPage === 1 ? '#f3f4f6' : 'white',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                fontSize: '14px'
              }}
            >
              Previous
            </button>

            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const pageNum = Math.max(1, currentPage - 2) + i;
              if (pageNum > totalPages) return null;
              
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    background: currentPage === pageNum ? '#3b82f6' : 'white',
                    color: currentPage === pageNum ? 'white' : '#374151',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: currentPage === pageNum ? '600' : '400'
                  }}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              style={{
                padding: '6px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                background: currentPage === totalPages ? '#f3f4f6' : 'white',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                fontSize: '14px'
              }}
            >
              Next
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              style={{
                padding: '6px 10px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                background: currentPage === totalPages ? '#f3f4f6' : 'white',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                fontSize: '14px'
              }}
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Generate sample data
const generateEmployees = (count: number): Employee[] => {
  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 'Legal', 'Design'];
  const positions = ['Manager', 'Senior', 'Junior', 'Lead', 'Director', 'VP', 'Intern', 'Coordinator'];
  const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Chris', 'Emma', 'Alex', 'Maria', 'James', 'Anna', 'Robert', 'Emily'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez'];
  const statuses: Employee['status'][] = ['active', 'inactive', 'on-leave'];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    email: `employee${i + 1}@company.com`,
    department: departments[Math.floor(Math.random() * departments.length)],
    position: positions[Math.floor(Math.random() * positions.length)],
    salary: Math.floor(Math.random() * 120000) + 40000,
    startDate: new Date(2020 + Math.floor(Math.random() * 4), 
                       Math.floor(Math.random() * 12), 
                       Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    performance: Math.floor(Math.random() * 5) + 1
  }));
};

// Main App
const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>(() => generateEmployees(250));
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setEmployees(generateEmployees(250));
    setRefreshKey(prev => prev + 1);
  };

  const stats = useMemo(() => ({
    total: employees.length,
    active: employees.filter(emp => emp.status === 'active').length,
    departments: new Set(employees.map(emp => emp.department)).size,
    avgSalary: Math.round(employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length)
  }), [employees]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '40px 30px',
          borderRadius: '12px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            margin: '0 0 16px 0', 
            fontSize: '2.5rem', 
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            🚀 React Pro Table Demo
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            opacity: 0.95,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Professional-grade table component with advanced features including sorting, filtering, 
            pagination, row selection, and CSV export capabilities.
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {[
            { label: 'Total Employees', value: stats.total.toLocaleString(), color: '#3b82f6' },
            { label: 'Active Employees', value: stats.active.toLocaleString(), color: '#10b981' },
            { label: 'Departments', value: stats.departments.toString(), color: '#f59e0b' },
            { label: 'Average Salary', value: `$${stats.avgSalary.toLocaleString()}`, color: '#ef4444' }
          ].map(({ label, value, color }) => (
            <div key={label} style={{
              background: 'white',
              padding: '24px',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color,
                marginBottom: '8px'
              }}>
                {value}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <TableDemo
          key={refreshKey}
          data={employees}
          title="Employee Management System"
          onRefresh={handleRefresh}
        />

        {/* Footer */}
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          marginTop: '30px',
          textAlign: 'center',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#1f2937' }}>
            🌟 Key Features Demonstrated
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center'
          }}>
            {[
              'TypeScript Support', 'Advanced Sorting', 'Real-time Filtering', 
              'Pagination Controls', 'Row Selection', 'CSV Export',
              'Responsive Design', 'Performance Optimized', 'Accessible'
            ].map(feature => (
              <span key={feature} style={{
                padding: '6px 12px',
                background: '#dbeafe',
                color: '#1e40af',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                ✨ {feature}
              </span>
            ))}
          </div>
          
          <p style={{ 
            margin: '20px 0 0 0', 
            color: '#6b7280',
            fontSize: '14px'
          }}>
            Built with ❤️ using React Pro Table • Ready for Production • Enterprise Grade
          </p>
        </div>
      </div>
    </div>
  );
};

// Render the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}