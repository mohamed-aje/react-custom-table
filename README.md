# 💊 React Custom Table

A **highly customizable and reusable** table component for React applications, featuring **pagination, filtering, sorting, and export functionality**.

## 🚀 Features

✅ Fully **customizable** via props and styles  
✅ **Pagination** with support for dynamic page fetching  
✅ **Search & Filtering** with instant updates  
✅ **Sorting** support for multiple columns  
✅ **Copyable Cells** for selected columns  
✅ **Localization Support** for different languages  
✅ **Export to CSV** functionality  
✅ **Responsive & Accessible** design  

---

## 📺 Installation

Install via **npm** or **yarn**:

```sh
npm install react-custom-table
# or
yarn add react-custom-table
```

---

## 📌 Basic Usage

Import the table component and use it in your project:

```jsx
import React from "react";
import Table from "react-custom-table";

const columns = ["name", "email"];
const columnDisplayNames = ["Name", "Email"];
const data = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Smith", email: "jane@example.com" }
];

function App() {
  return (
    <Table
      columns={columns}
      columnDisplayNames={columnDisplayNames}
      data={data}
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