# � React Pro Table

A **professional-grade, highly customizable** React table component with advanced features including **TypeScript support, virtualization, sorting, filtering, pagination, mobile responsiveness, and accessibility**.

[![npm version](https://badge.fury.io/js/react-pro-tablex.svg)](https://badge.fury.io/js/react-pro-tablex)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

### 🎯 Core Features
- 📊 **TypeScript Support** - Full type safety with comprehensive interfaces
- ⚡ **Virtualization** - Handle 10,000+ rows with smooth performance
- 🔄 **Advanced Sorting** - Multi-column sorting with custom sort functions
- 🔍 **Advanced Filtering** - Column-specific filters, global search, date ranges
- 📱 **Mobile Responsive** - Card view for mobile, horizontal scroll for tablets
- 🎨 **Theming System** - CSS custom properties, dark mode, custom themes
- ♿ **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation
- 📄 **Pagination** - Server-side or client-side with customizable options

### 🔧 Advanced Features
- 🎛️ **Column Management** - Resizable, reorderable, hideable columns
- ✅ **Row Selection** - Single or multi-select with custom validation
- 🔗 **Action Buttons** - Customizable actions with permissions
- 📋 **Copy to Clipboard** - One-click copying for designated cells
- 📤 **Export** - CSV export with custom formatters
- 💾 **State Persistence** - LocalStorage integration for user preferences
- 🌐 **Internationalization** - Full i18n support with custom locales

---

## � Installation

```bash
npm install react-pro-tablex
# or
yarn add react-pro-tablex
```

---

## � Quick Start

### Basic Usage

```tsx
import React from 'react';
import { Table, TableColumn } from 'react-pro-tablex';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

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
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' },
      { label: 'Guest', value: 'guest' },
    ],
  },
];

const data: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active' },
];

function UserTable() {
  return (
    <Table<User>
      columns={columns}
      data={data}
      title="Users Management"
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
      }}
      actions={[
        {
          key: 'edit',
          label: 'Edit',
          onClick: (record) => console.log('Edit:', record),
          type: 'primary',
        },
      ]}
      exportConfig={{
        filename: 'users.csv',
      }}
    />
  );
}
      title="User List"
      enablePagination={true}
    />
  );
}

export default App;
```

---

## 🎨 Customization Options

### **🛠️ Available Props**
| Prop | Type | Default | Description |
|-------|------|---------|-------------|
| `columns` | `array` | `[]` | List of column keys in the dataset |
| `columnDisplayNames` | `array` | `[]` | User-friendly names for columns |
| `data` | `array` | `[]` | Data to display in the table |
| `title` | `string` | `""` | Title of the table |
| `enablePagination` | `boolean` | `false` | Enables pagination |
| `currentPaginationPage` | `number` | `0` | Controls pagination state |
| `paginationCallback` | `function` | `null` | Custom function for fetching paginated data |
| `hasNextPage` | `boolean` | `false` | Determines if more pages exist |
| `enableFilter` | `boolean` | `false` | Enables search filtering |
| `copyableColumns` | `array` | `["email", "id"]` | Columns that allow copying |
| `onExport` | `function` | `null` | Callback for CSV export |
| `enableExport` | `boolean` | `false` | Shows an export button |
| `locale` | `object` | `{}` | Allows localization of labels |

---

## 🌍 Localization Support

The table supports multiple languages via the `locale` prop:

```jsx
<Table
  locale={{
    filterLabel: "Filtrar",
    noRecords: "No hay registros para mostrar.",
    previous: "Anterior",
    next: "Siguiente",
    itemsPerPageLabel: "Mostrar ítems",
    exportButtonLabel: "Exportar CSV"
  }}
/>
```

---

## 🗃️ Styling & Theming

You can override the default styles via **CSS Modules**:

```css
/* Custom styles in your CSS */
.customTable .tableContainer {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
}
```

Use the `tableStyle`, `columnHeaderStyle`, and `tableRowStyle` props for inline styling.

---

## 📄 Export to CSV

To enable exporting, provide an `onExport` function:

```jsx
const handleExport = (filteredData, columns, columnDisplayNames) => {
  console.log("Exporting data:", filteredData);
};

<Table data={data} onExport={handleExport} enableExport={true} />;
```

---

## 🔥 Advanced Example (With Actions)

```jsx
<Table
  columns={["name", "email", "status"]}
  columnDisplayNames={["Name", "Email", "Status"]}
  data=[
    { name: "Alice", email: "alice@example.com", status: "Active" },
    { name: "Bob", email: "bob@example.com", status: "Inactive" }
  ]
  hasActionColumn={true}
  hasViewColumn={true}
  onEditClick={(row) => console.log("Editing:", row)}
  onDeleteClick={(row) => console.log("Deleting:", row)}
  onViewClick={(row) => console.log("Viewing:", row)}
  enablePagination={true}
/>
```

---

## 💜 License
This project is licensed under the **MIT License**.

---

## 🛠️ Contributing
Pull requests and feature suggestions are welcome!  
Feel free to fork the repository and create a PR.

---

## 📩 Support & Feedback
If you encounter any issues or have questions, open an **issue** on GitHub.

🔗 **GitHub Repository:** [https://github.com/mohamed-aje/react-custom-table](https://github.com/mohamed-aje/react-custom-table)