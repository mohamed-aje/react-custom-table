import React, { useEffect, useMemo, useState } from "react";
import {
  MdLockReset,
  MdOutlineDelete,
  MdOutlineModeEditOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import styles from "../styles/Table.module.css";
import { generateSelectStyles } from "../util/generatedStyles";
import { Tooltip as ReactTooltip } from "react-tooltip";


const Table = ({
  columns = [],
  columnDisplayNames = [],
  data = [],
  title = "",
  tableStyle = {},
  hasActionColumn = false,
  hasViewColumn = false,
  onViewClick,
  onEditClick,
  enablePagination = false,
  currentPaginationPage = 0,
  paginationCallback,
  hasNextPage = false,
  readPermission = true,
  writePermission = false,
  passwordWritePermission = false,
  columnHeaderStyle = {},
  tableRowStyle = {},
  onDeleteClick,
  hasResetPasswordColumn = false,
  onResetPasswordClick,
  defaultItemsPerPage = 10,
  itemsPerPageOptions = [10, 50, 100],
  onItemsPerPageChange,
  component,
  enableFilter = false,
  onExport,
  enableExport = false,
  tableId = "defaultTableId",
  copyableColumns = [
    "id",
    "booking_id",
    "email",
    "pnr",
    "country",
    "email_address",
    "full_name",
    "phone_number",
    "passenger_name",
    "phone",
  ],
  locale = {
    filterLabel: "Filter",
    noRecords: "There are no records to display at this time.",
    noPermission: "You don't have permission to view this content.",
    previous: "Previous",
    next: "Next",
    itemsPerPageLabel: "Show Items",
    exportButtonLabel: "Export CSV",
  },
}) => {
  const [currentPage, setCurrentPage] = useState(currentPaginationPage);
  const [filterText, setFilterText] = useState("");
  const [itemsPerPageSelected, setItemsPerPageSelected] =
    useState(defaultItemsPerPage);
  const [copied, setCopied] = useState(false);

  const totalItems = data.length;

  const pageCount = () => {
    const dataLength = filterText ? filteredData.length : totalItems;
    return hasNextPage
      ? Math.ceil(dataLength / itemsPerPageSelected) + 1
      : Math.ceil(dataLength / itemsPerPageSelected);
  };

  const handleEditClick = (row) => {
    if (writePermission && onEditClick) {
      onEditClick(row);
    }
  };

  const handleViewClick = (row) => {
    if (onViewClick) {
      onViewClick(row);
    }
  };

  const handleDeleteClick = (row) => {
    if (writePermission && onDeleteClick) {
      onDeleteClick(row);
    }
  };

  const handleResetPasswordClick = (row) => {
    if (passwordWritePermission && onResetPasswordClick) {
      onResetPasswordClick(row);
    }
  };

  useEffect(() => {
    if (!paginationCallback && !onItemsPerPageChange) {
      localStorage.setItem(`itemsPerPage-${tableId}`, itemsPerPageSelected);
    }
  }, [itemsPerPageSelected, tableId]);

  useEffect(() => {
    if (!paginationCallback) {
      const savedPage = localStorage.getItem(`currentPage-${tableId}`);
      if (savedPage !== null) {
        setCurrentPage(parseInt(savedPage, 10));
      }
    } else if (currentPaginationPage !== undefined) {
      setCurrentPage(currentPaginationPage);
    }
  }, [currentPaginationPage, paginationCallback, tableId]);

  const getNestedValue = (object, path) => {
    const pathArray = path.split(".");
    return pathArray.reduce((obj, key) => (obj && obj[key]) || null, object);
  };

  const handlePageChange = (selected) => {
    const selectedPage = selected.selected;
    if (paginationCallback) {
      paginationCallback(selectedPage);
    } else {
      setCurrentPage(selectedPage);
      localStorage.setItem(`currentPage-${tableId}`, selectedPage);
    }
  };

  const handleItemsPerPageChange = (selectedOption) => {
    if (onItemsPerPageChange) {
      onItemsPerPageChange(selectedOption.value);
    } else {
      setItemsPerPageSelected(selectedOption.value);
      setCurrentPage(0);
    }
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
    setCurrentPage(0);
  };

  const filteredData = useMemo(() => {
    if (!enableFilter || !filterText) return data;
    return data.filter((row) =>
      columns.some((column) => {
        const cellData = column.includes(".")
          ? getNestedValue(row, column) || "N/A"
          : row[column.toLowerCase()];
        return String(cellData)
          .toLowerCase()
          .includes(filterText.toLowerCase());
      })
    );
  }, [filterText, data, columns, enableFilter]);

  const indexOfLastItem = (currentPage + 1) * itemsPerPageSelected;
  const indexOfFirstItem = indexOfLastItem - itemsPerPageSelected;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleExport = () => {
    if (onExport) {
      onExport(filteredData, columns, columnDisplayNames);
    }
  };

  const renderCellContent = (cellValue, row, column) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      if (!cellValue) return;
      navigator.clipboard
        .writeText(String(cellValue))
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        })
        .catch((err) => console.error("Failed to copy: ", err));
    };
  
    const columnName = column.toLowerCase();
  
    if (copyableColumns.includes(columnName)) {
      return (
        <>
          <span
            className={styles.copyableCell}
            onClick={handleCopy}
            style={{ cursor: "pointer" }}
            data-tooltip-id={`copy-tooltip-${row.id || row[columnName]}`}
            data-tooltip-content={copied ? "Copied!" : "Click to copy"}
          >
            {cellValue}
          </span>
          <ReactTooltip id={`copy-tooltip-${row.id || row[columnName]}`} place="top" effect="solid" />
        </>
      );
    }
  
    return <span>{cellValue}</span>;
  };
  

  return (
    <div className={styles.tableContainer}>
      <div className={styles.titleContainer}>
        {title && <p className={styles.title}>{title}</p>}

        {enableFilter && data.length > 0 && (
          <div className={styles.filterContainer}>
            <label className={styles.filterLabel}>{locale.filterLabel}</label>
            <TextField
              variant="outlined"
              size="small"
              value={filterText}
              onChange={handleFilterChange}
              placeholder="Search content..."
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--primary-color)",
                  },
                },
              }}
              InputProps={{
                endAdornment: filterText ? (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setFilterText("");
                        setCurrentPage(0);
                      }}
                      size="small"
                    >
                      <MdClear size={16} />
                    </IconButton>
                  </InputAdornment>
                ) : null,
              }}
            />
          </div>
        )}
      </div>

      {data.length > 0 && (
        <div className={styles.recordSummaryWrapper}>
          <div className={styles.recordSummary}>
            Displaying {indexOfFirstItem + 1} -{" "}
            {indexOfLastItem > totalItems ? totalItems : indexOfLastItem} of{" "}
            {totalItems} - Total Records: {data.length}
          </div>

          <div className={styles.itemsPerPageContainer}>
            <label className={styles.itemsPerPageLabel}>
              {locale.itemsPerPageLabel}
            </label>
            <Select
              value={{
                value: itemsPerPageSelected,
                label: `${itemsPerPageSelected} items per page`,
              }}
              onChange={handleItemsPerPageChange}
              options={itemsPerPageOptions.map((option) => ({
                value: option,
                label: `${option} items per page`,
              }))}
              isSearchable={false}
              placeholder="Select items per page"
              styles={generateSelectStyles(true)}
            />
          </div>
        </div>
      )}

      {filteredData && filteredData.length > 0 && readPermission ? (
        <table
          style={tableStyle}
          className={`${styles.table} ${tableRowStyle}`}
        >
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`${styles.columnHeader} ${columnHeaderStyle}`}
                >
                  {columnDisplayNames[index]}
                </th>
              ))}
              {hasActionColumn && writePermission && (
                <th className={`${styles.columnHeader} ${columnHeaderStyle}`}>
                  Edit
                </th>
              )}
              {hasViewColumn && (
                <th className={`${styles.columnHeader} ${columnHeaderStyle}`}>
                  View
                </th>
              )}
              {onDeleteClick && writePermission && (
                <th className={`${styles.columnHeader} ${columnHeaderStyle}`}>
                  Delete
                </th>
              )}
              {hasResetPasswordColumn && passwordWritePermission && (
                <th className={`${styles.columnHeader} ${columnHeaderStyle}`}>
                  Reset Password
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${styles.tableRow} ${
                  rowIndex % 2 === 0 ? styles.evenRow : ""
                } ${tableRowStyle}`}
              >
                {columns.map((column, columnIndex) => {
                  const cellData = column.includes(".")
                    ? getNestedValue(row, column) || "N/A"
                    : row[column.toLowerCase()];

                  return (
                    <td key={columnIndex} className={styles.tableCell}>
                      {renderCellContent(cellData, row, column)}
                    </td>
                  );
                })}
                {hasActionColumn && writePermission && (
                  <td className={styles.rightBorderRadius}>
                    <MdOutlineModeEditOutline
                      className={styles.editIcon}
                      onClick={() => handleEditClick(row)}
                    />
                  </td>
                )}
                {hasViewColumn && (
                  <td className={styles.rightBorderRadius}>
                    <MdOutlineRemoveRedEye
                      className={styles.editIcon}
                      onClick={() => handleViewClick(row)}
                    />
                  </td>
                )}
                {onDeleteClick && writePermission && (
                  <td className={styles.rightBorderRadius}>
                    <MdOutlineDelete
                      className={styles.editIcon}
                      onClick={() => handleDeleteClick(row)}
                    />
                  </td>
                )}
                {onResetPasswordClick && passwordWritePermission && (
                  <td className={styles.rightBorderRadius}>
                    <MdLockReset
                      className={styles.editIcon}
                      onClick={() => handleResetPasswordClick(row)}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.warn}>
          {readPermission ? locale.noRecords : locale.noPermission}
        </p>
      )}

      {component && component}
      {enablePagination && data.length > 0 && (
        <div className={styles.paginationContainer}>
          <ReactPaginate
            previousLabel={locale.previous}
            nextLabel={locale.next}
            forcePage={currentPage}
            pageCount={pageCount()}
            onPageChange={handlePageChange}
            containerClassName={styles.pagination}
            activeClassName={styles.active}
            nextLinkClassName={!hasNextPage ? "disabledPagination" : ""}
            disabledClassName={styles.paginationDisabled}
            nextClassName={
              hasNextPage === undefined || hasNextPage === false
                ? "disabled"
                : ""
            }
          />
        </div>
      )}
      {enableExport && data.length > 0 && (
        <div className={styles.exportContainer}>
          <Button
            onClick={handleExport}
            title={locale.exportButtonLabel}
            color="grey"
          />
        </div>
      )}
    </div>
  );
};

export default Table;
