/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarWeek from "./CalendarWeek";
import CalendarDays from "./CalendarDays";
import TaskModal from "../Task/TaskModal";
import TaskList from "../Task/TaskList";

const Calendar = () => {
	// State to manage current month
	const [currentMonth, setCurrentMonth] = useState(new Date());
	// State to manage select date
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [showModal, setShowModal] = useState(false);

	// Function to navigate months
	const nextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};
	const prevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	const openModal = () => {
		setShowModal(true);
	};

	return (
		<div className="flex flex-col md:flex-row justify-between bg-white w-full rounded-xl my-20">
			<div className="bg-white rounded-xl shadow-xl p-10 mb-12 md:mb-0">
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
					onDateClick={(day) => setSelectedDate(day)}
				/>
				{showModal && (
					<TaskModal
						selectedDate={selectedDate}
						onClose={() => setShowModal(false)}
					/>
				)}
			</div>
			<div className="bg-slate-600 p-5 shadow-2xl rounded-xl overflow-y-auto ml-0 md:ml-10 w-full md:w-3/5">
				<TaskList selectedDate={selectedDate} onAddTasksClick={openModal} />
			</div>
		</div>
	);
};

export default Calendar;
