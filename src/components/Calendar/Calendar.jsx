/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarWeek from "./CalendarWeek";
import CalendarDays from "./CalendarDays";
import TaskModal from "./TaskModal";

const Calendar = () => {
	// State to manage current month
	const [currentMonth, setCurrentMonth] = useState(new Date());
	// State to manage select date
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [showModal, setShowModal] = useState(false);

	// Function to navigate to next month
	const nextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	// Function to navigate to previous month
	const prevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	const onDateClick = (day) => {
		setSelectedDate(day);
		setShowModal(true);
	};

	return (
		<div className="container bg-white rounded shadow-md p-10">
			{/* Calendar Header - Month & Year with navigation buttons */}
			<CalendarHeader
				currentMonth={currentMonth}
				prevMonth={prevMonth}
				nextMonth={nextMonth}
			/>
			{/* Calendar Week */}
			<CalendarWeek currentMonth={currentMonth} />
			{/* Calendar Days */}
			<CalendarDays
				currentMonth={currentMonth}
				selectedDate={selectedDate}
				onDateClick={onDateClick}
			/>
			{showModal && (
				<TaskModal
					selectedDate={selectedDate}
					onClose={() => setShowModal(false)}
				/>
			)}
		</div>
	);
};

export default Calendar;
