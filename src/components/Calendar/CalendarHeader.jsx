/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { format } from "date-fns";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CalendarHeader = ({ currentMonth, prevMonth, nextMonth }) => {
	

	return (
		<div className="flex items-center mb-2 px-16 py-4 bg-white shadow-sm">
			<span className="text-gray-800 font-semibold text-2xl drop-shadow-xl cursor-pointer">Calendar</span>
			<div className="flex items-center space-x-4 pl-40 pr-8">
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

			<span className="text-xl font-semibold text-stone-900">
				{format(currentMonth, "MMMM yyyy")}
			</span>
		</div>
	);
};

export default CalendarHeader;
