/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { format } from "date-fns";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CalendarHeader = ({ currentMonth, prevMonth, nextMonth }) => {
	return (
		<div className="flex items-center mb-4 px-2">
			<div className="flex items-center justify-between">
				<h3 className="text-gray-800 text-3xl font-semibold cursor-pointer drop-shadow-xl pr-36">Calendar</h3>
				<span className="text-xl font-semibold text-gray-800 pt-1">
					{format(currentMonth, "MMMM yyyy")}
				</span>
			</div>
			<div className="flex items-center space-x-4 pl-6 pt-1">
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
