import React from "react";
import { format } from "date-fns";
import Select from "react-select";

const generateTimeSlots = () => {
	const times = [];
	for (let hour = 0; hour < 24; hour++) {
		for (let minute = 0; minute < 60; minute += 15) {
			const time = new Date();
			time.setHours(hour);
			time.setMinutes(minute);
			const formattedTime = format(time, "hh:mmaaa"); // Adjust the format here
			times.push({ value: formattedTime, label: formattedTime });
		}
	}
	return times;
};

const TimeSlotSelector = ({ selectedTime, onTimeChange }) => {
	const timeSlots = generateTimeSlots();

	return (
		<Select
			className="mb-4 w-full text-gray-800"
			placeholder="Select Time"
			options={timeSlots}
			value={selectedTime}
			onChange={onTimeChange}
		/>
	);
};

export default TimeSlotSelector;
