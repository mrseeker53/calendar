import React from "react";
import { format } from "date-fns";

const TaskDetailModal = ({ selectedTask, onClose }) => {
	if (!selectedTask) return null;

	const { task, time, date } = selectedTask;
	const formattedDate = format(new Date(date), "eeee, MMMM d");

	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="bg-white rounded-lg drop-shadow-2xl p-4 w-80">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-gray-800 text-xl">Task Details</h2>
					<button
						onClick={onClose}
						className="bg-slate-200 text-gray-500 hover:text-gray-700 text-2xl border-none focus:outline-none rounded-full px-3.5 py-1.5"
					>
						&times;
					</button>
				</div>
				<div className="mb-4">
					<h3 className="text-gray-800 font-semibold text-2xl mb-1">{task}</h3>
					<div className="flex items-center text-gray-600">
						<span>{formattedDate}</span>
						<span className="mx-3 text-xs">•</span>
						<span>{time}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskDetailModal;
