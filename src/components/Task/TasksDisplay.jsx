import React, { useState } from "react";
import {
	format,
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	addDays,
	isSameMonth,
	isSameDay,
} from "date-fns";
import { useSelector } from "react-redux";
import TaskModal from "../Task/TaskModal";

const TasksDisplay = ({ currentMonth }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalDate, setModalDate] = useState(null);
	const tasks = useSelector((state) => state.tasks.tasks); // Use selector to get tasks from the Redux store

	const monthStart = startOfMonth(currentMonth);
	const monthEnd = endOfMonth(currentMonth);
	const startDate = startOfWeek(monthStart);
	const endDate = endOfWeek(monthEnd);

	const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const openModal = (day) => {
		setModalDate(day);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setModalDate(null);
	};

	// Function to render weekdays
	const renderWeekdays = () => (
		<div className="grid grid-cols-7">
			{weekdays.map((day, index) => (
				<div key={index} className="text-gray-400 text-center font-semibold">
					{day}
				</div>
			))}
		</div>
	);

	const rows = [];
	let days = [];
	let day = startDate;

	// Generate calendar days and tasks for each day
	while (day <= endDate) {
		for (let i = 0; i < 7; i++) {
			const cloneDay = day;
			const formattedCloneDay = format(cloneDay, "yyyy-MM-dd");
			const dayTasks = tasks[formattedCloneDay] || [];
			const displayTasks = dayTasks.slice(0, 2);
			const moreTasks = dayTasks.length > 2;

			days.push(
				<div
					className="border border-gray-200 p-1.5 flex flex-col justify-start items-center h-32"
					key={day}
					onClick={() => openModal(cloneDay)}
				>
					<span
						className={`flex justify-center items-center w-8 h-8 text-center rounded-full cursor-pointer transition-all duration-200 ${
							!isSameMonth(day, monthStart)
								? "text-gray-400 hover:bg-slate-200"
								: isSameDay(day, new Date())
								? "bg-blue-600 text-white hover:bg-blue-800"
								: "text-gray-800 hover:bg-slate-200"
						}`}
					>
						{format(day, "d")}
					</span>
					<div className="text-xs mt-1 w-full overflow-hidden">
						{displayTasks.map((taskObj, index) => (
							<div
								key={index}
								className="text-gray-800 rounded px-2 py-1 mt-1 truncate cursor-pointer hover:bg-slate-100"
								title={`${taskObj.time} ${taskObj.task}`}
							>
								<span>{taskObj.time} </span>
								<span className="font-bold">{taskObj.task}</span>
							</div>
						))}
						{moreTasks && (
							<div
								className="text-gray-800 font-bold rounded px-2 py-1 mt-1 truncate cursor-pointer w-full hover:bg-slate-100"
								onClick={(e) => {
									e.stopPropagation();
									openModal(cloneDay);
								}}
							>
								{dayTasks.length - 2} more
							</div>
						)}
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

	return (
		<div>
			{renderWeekdays()}
			{rows}
			{modalOpen && <TaskModal selectedDate={modalDate} onClose={closeModal} />}
		</div>
	);
};

export default TasksDisplay;
