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
		<div className="bg-white rounded-xl w-full my-6">
			<div className="rounded-lg px-4 py-6">
				<CalendarHeader
					currentMonth={currentMonth}
					prevMonth={prevMonth}
					nextMonth={nextMonth}
				/>
			</div>
			<div className="bg-white p-4 drop-shadow-2xl rounded-xl">
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
