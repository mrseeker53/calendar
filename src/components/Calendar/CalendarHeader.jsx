/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { format } from "date-fns";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CalendarHeader = ({ currentMonth, prevMonth, nextMonth }) => {
	

	return (
		<div className="flex justify-between items-center mb-4 px-2">
			<span className="text-lg font-semibold text-stone-900 pl-2">
				{format(currentMonth, "MMMM yyyy")}
			</span>
			<div className="flex items-center space-x-4">
				<button
					onClick={prevMonth}
					className="p-1.5 bg-white text-gray-700 hover:bg-slate-100 border-none focus:outline-none focus:bg-slate-200 rounded-full"
				>
					<FiChevronLeft />
				</button>
				<button
					onClick={nextMonth}
					className="p-1.5 bg-white text-gray-700 hover:bg-slate-100 border-none focus:outline-none focus:bg-slate-200 rounded-full"
				>
					<FiChevronRight />
				</button>
			</div>
		</div>
	);
};

export default CalendarHeader;
