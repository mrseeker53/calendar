import React, { useState } from "react";
import {
	addMonths,
	eachDayOfInterval,
	endOfMonth,
	format,
	startOfMonth,
	subMonths,
} from "date-fns";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

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
		<div className="calendar">
			{/* Calendar Header - Month & Year with navigation buttons */}
			<div className="header">
				<button onClick={prevMonth}>
					<RiArrowLeftSLine />
				</button>
				<h2>{format(currentMonth, "MMMM yyyy")}</h2>
				<button onClick={nextMonth}>
					<RiArrowRightSLine />
				</button>
			</div>
			{/* Calendar Days */}
			<div className="days">
				{calendarDays.map((day) => (
					<div className="day" key={day}>
						{format(day, "d")}
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;
