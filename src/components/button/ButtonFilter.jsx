import React from "react";
import useSelect from "../../hooks/useSelect";
import { useDispatch } from "react-redux";
import { setSelectKeyword } from "../../sagas/laptop/laptopSlice";
const ButtonFilter = () => {
  const options = [
    { value: "ascending", label: "Giá tăng dần" },
    { value: "increasing", label: "Giá giảm dần" },
    { value: "hot", label: "Sản phẩm HOT" },
  ];
  const { selectedValue, handleChange } = useSelect(options[0].value, options);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setSelectKeyword(selectedValue));
  }, [dispatch, selectedValue]);
  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="px-3 py-2 text-sm font-medium border border-gray-300 rounded"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            <span>{option.label}</span>
          </option>
        ))}
      </select>
    </div>
  );
};

export default ButtonFilter;
