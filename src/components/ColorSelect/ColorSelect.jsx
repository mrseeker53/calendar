import React, { useState, useEffect } from "react";
import Select from "react-select";

const colors = [
	{ value: "red", label: "Red", color: "#F44336" },
	{ value: "blue", label: "Blue", color: "#2196F3" },
	{ value: "green", label: "Green", color: "#4CAF50" },
	{ value: "yellow", label: "Yellow", color: "#FFEB3B" },
	{ value: "purple", label: "Purple", color: "#9C27B0" },
];

const Circle = ({ color }) => (
	<span className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
);

const ColorSelect = ({ selectedColor, setSelectedColor }) => {
	const [selectedOption, setSelectedOption] = useState(
		colors.find((color) => color.value === selectedColor) || colors[1]
	);

	useEffect(() => {
		setSelectedColor(selectedOption.value);
	}, [selectedOption, setSelectedColor]);

	const handleChange = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className="w-10">
			<Select
				value={selectedOption}
				onChange={handleChange}
				options={colors}
				getOptionLabel={(e) => <Circle color={e.color} />}
				classNamePrefix="react-select"
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
						padding: "4px",
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
