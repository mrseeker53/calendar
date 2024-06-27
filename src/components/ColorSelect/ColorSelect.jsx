import React, { useState } from "react";
import Select from "react-select";

const colors = [
  { value: "red", label: "Red", color: "#F44336" },
  { value: "blue", label: "Blue", color: "#2196F3" },
  { value: "green", label: "Green", color: "#4CAF50" },
  { value: "yellow", label: "Yellow", color: "#FFEB3B" },
  { value: "purple", label: "Purple", color: "#9C27B0" },
];

const Circle = ({ color }) => (
  <span
    className="inline-block w-5 h-5 rounded-full"
    style={{ backgroundColor: color }}
  />
);

const ColorSelect = () => {
  const [selectedOption, setSelectedOption] = useState(colors[1]); // Set default color

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="w-10">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={colors}
        getOptionLabel={(e) => <Circle color={e.color} />}
        classNamePrefix="react-select"
        className="w-10"
        styles={{
          control: (base) => ({
            ...base,
            width: "70px",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }),
          option: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? "#f0f0f0" : undefined,
            transform: isFocused ? "scale(1.1)" : undefined,
            display: "flex",
            alignItems: "center",
            padding: "10px",
          }),
          singleValue: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
          }),
          placeholder: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "2px",
          }),
          indicatorSeparator: (base) => ({
            ...base,
            display: "none",
          }),
        }}
      />
    </div>
  );
};

export default ColorSelect;
