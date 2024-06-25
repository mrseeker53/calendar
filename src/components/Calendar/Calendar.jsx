import React, { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import CalendarHeader from "./CalendarHeader";
// import CalendarWeek from "./CalendarWeek";
// import CalendarDays from "./CalendarDays";
import TasksDisplay from "../Task/TasksDisplay";
import { useSelector } from "react-redux";

const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [showModal, setShowModal] = useState(false);
	const tasks = useSelector((state) => state.tasks);

	const nextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	const prevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	const openModal = (date) => {
		setSelectedDate(date);
		setShowModal(true);
	};

	return (
		<div className="bg-white rounded-xl drop-shadow-2xl w-full my-6">
			<div className="rounded-lg px-4 pt-6">
				<CalendarHeader
					currentMonth={currentMonth}
					prevMonth={prevMonth}
					nextMonth={nextMonth}
				/>
			</div>
			<hr className="border-0 bg-gray-300 w-full h-0.5"/>
			<div className="bg-white p-4 pt-0 rounded-xl">
				<TasksDisplay
					currentMonth={currentMonth}
					onAddTasksClick={openModal}
					tasks={tasks}
				/>
			</div>
		</div>
	);
};

export default Calendar;
