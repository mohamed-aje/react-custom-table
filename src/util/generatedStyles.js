const generateSelectStyles = (withBorder = false) => {
  const borderStyle = withBorder ? `1px solid #dfe3eb` : "none";

  return {
    control: (provided, state) => ({
      ...provided,
      border: borderStyle,
      fontSize: "14px",
      borderRadius: "8px",
      width: "100%",
      "&:hover": {
        border: borderStyle,
      },
      borderColor: state.isFocused
        ? withBorder
          ? "#dfe3eb"
          : "transparent"
        : provided.borderColor,
      boxShadow: state.isFocused
        ? "0 0 0 1px #ff2a52 !important"
        : "none !important",
      outline: "none !important",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "gray" : "white",
      "&:hover": {
        backgroundColor: "#ff2a52",
      },
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
      minWidth: "100%",
      maxWidth: "none",
      maxHeight: "150px",
      overflowY: "auto",
      zIndex: 1000,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "150px",
      overflowY: "auto",
    }),
    singleValue: (provided) => ({
      ...provided,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#7F7F7F",
    }),
  };
};

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "40px",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
    overflow: "hidden",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
    maxHeight: "200px",
    overflowY: "auto",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    padding: "0 6px",
    margin: "2px",
    overflow: "hidden",
    maxWidth: "100px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    border: "none",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#333",
    fontSize: "12px",
    padding: "0",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ff6666",
      color: "#fff",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    display: "flex",
    flexWrap: "wrap",
    maxHeight: "100px",
    overflowY: "auto",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#aaa",
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    backgroundColor: state.isSelected ? "#e0e0e0" : "#fff",
    color: "#333",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
    border: "none",
  }),
};

export { generateSelectStyles, customSelectStyles };
