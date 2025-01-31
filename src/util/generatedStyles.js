export const generateSelectStyles = (withBorder = false) => {
  const borderStyle = withBorder ? `1px solid #e0e0e0` : "none";

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
          ? "#e0e0e0"
          : "transparent"
        : provided.borderColor,
      boxShadow: state.isFocused
        ? "0 0 0 1px #3498db !important"
        : "none !important",
      outline: "none !important",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "#333333",
      backgroundColor: state.isSelected ? "#3498db" : "white",
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
