import React from "react";
import "./SearchInput.scss";

const SearchInput = ({ placeholder, value, onChange, type = "text" }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="input-wrapper"
      type={type}
    />
  );
};

export default SearchInput;
