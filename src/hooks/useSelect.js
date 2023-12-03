import { useState } from "react";
const useSelect = (initialValue, options) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const resetSelect = () => {
    setSelectedValue(initialValue);
  };

  return {
    selectedValue,
    handleChange,
    resetSelect,
    options,
  };
};

export default useSelect;
