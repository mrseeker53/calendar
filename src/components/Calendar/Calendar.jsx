import React, { useState } from "react";
import {
	addMonths,
	eachDayOfInterval,
	endOfMonth,
	format,
	startOfMonth,
	subMonths,
} from "date-fns";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Calendar = () => {
	// State to manage current month
	const [currentMonth, setCurrentMonth] = useState(new Date());

	// Function to navigate to previous month
	const prevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	// Function to navigate to next month
	const nextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	// Function to generate array of days for current month
	const generateCalendarDays = () => {
		const start = startOfMonth(currentMonth);
		const end = endOfMonth(currentMonth);
		return eachDayOfInterval({ start, end });
	};

	const calendarDays = generateCalendarDays();

	return (
		<div className="calendar bg-white p-4 rounded shadow-md ">
			{/* Calendar Header - Month & Year with navigation buttons */}
			<div className="header flex justify-between items-center bg-white text-stone-900 mb-4">
				<h2 className="text-xl font-semibold">
					{format(currentMonth, "MMMM yyyy")}
				</h2>
				<button
					onClick={prevMonth}
					className="bg-white text-gray-500 hover:text-gray-900 border-none rounded-full"
				>
					<FiChevronLeft />
				</button>
				<button
					onClick={nextMonth}
					className="bg-white text-gray-500 hover:text-gray-900 border-none rounded-full"
				>
					<FiChevronRight />
				</button>
			</div>
			{/* Calendar Days */}
			<div className="grid grid-cols-7 gap-2">
				{calendarDays.map((day) => (
					<div key={day} className="day flex items-center justify-center h-12 text-gray-800">
						{format(day, "d")}
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;
