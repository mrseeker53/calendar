/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	addDays,
	format,
	isSameMonth,
	isSameDay,
} from "date-fns";
import { useSelector } from "react-redux";

const CalendarDays = ({ currentMonth, selectedDate, onDateClick }) => {
	const monthStart = startOfMonth(currentMonth);
	const monthEnd = endOfMonth(monthStart);
	const startDate = startOfWeek(monthStart);
	// Ensures a 6-row grid
	const endDate = endOfWeek(addDays(startDate, 41));
	const tasks = useSelector((state) => state.tasks);

	const rows = [];
	let days = [];
	let day = startDate;
	let formattedDate = "";

	while (day <= endDate) {
		for (let i = 0; i < 7; i++) {
			formattedDate = format(day, "d");
			const cloneDay = day;
			const formattedCloneDay = format(cloneDay, "yyyy-MM-dd");
			days.push(
				<div
					className="p-1.5 flex justify-center items-center"
					key={day}
					onClick={() => onDateClick(cloneDay)}
				>
					<span
						className={`flex justify-center items-center w-8 h-8 text-center rounded-full cursor-pointer transition-all duration-200 ${
							!isSameMonth(day, monthStart)
								? "text-gray-400 hover:bg-slate-200"
								: isSameDay(day, selectedDate)
								? "bg-blue-600 text-white hover:bg-blue-800"
								: "text-gray-800 hover:bg-slate-200"
						}`}
					>
						{formattedDate}
					</span>
					<div className="text-xs mt-1">
						{tasks[formattedCloneDay] &&
							tasks[formattedCloneDay].map((task, index) => (
								<div
									key={index}
									className="bg-blue-200 rounded p-1 mt-1 text-xs"
								>
									{task}
								</div>
							))}
					</div>
				</div>
			);
			day = addDays(day, 1);
		}
		rows.push(
			<div className="grid grid-cols-7" key={day}>
				{days}
			</div>
		);
		days = [];
	}

	return <div>{rows}</div>;
};

export default CalendarDays;
