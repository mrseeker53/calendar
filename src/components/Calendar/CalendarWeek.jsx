/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { addDays, format, startOfWeek } from "date-fns";

const CalendarWeek = ({ currentMonth }) => {
	const days = [];
	const startDate = startOfWeek(currentMonth);

	for (let i = 0; i < 7; i++) {
		const fullDayName = format(addDays(startDate, i), "EEEE");
		const firstLetter = fullDayName.charAt(0).toUpperCase();

		days.push(
			<div
				className="relative group text-gray-600 text-center cursor-default"
				key={i}
			>
				{firstLetter}
				<div className="absolute bottom-full mb-1 w-max left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-500 text-white text-xs rounded py-1 px-2 pointer-events-none z-10">
					{fullDayName}
					<div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-t-4 border-t-gray-800 border-r-4 border-r-transparent border-l-4 border-l-transparent"></div>
				</div>
			</div>
		);
	}

	return <div className="grid grid-cols-7">{days}</div>;
};

export default CalendarWeek;
