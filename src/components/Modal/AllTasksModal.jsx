import React from "react";
import { format } from "date-fns";

const AllTasksModal = ({ selectedDate, tasks, onClose }) => {
	if (!selectedDate) return null;

	const formattedDate = format(selectedDate, "yyyy-MM-dd");
	const dayName = format(selectedDate, "EEE");
	const date = format(selectedDate, "d");

	console.log("Tasks:", tasks);

	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="bg-white text-gray-800 rounded-lg drop-shadow-2xl p-3 w-64">
				<div className="flex items-center justify-between mb-4">
					<div className="text-center pl-24 pt-2">
						<span className="text-gray-500 text-xs">
							{dayName.toUpperCase()}
						</span>
						<h3 className="text-gray-500 hover:bg-slate-100 text-2xl rounded-full cursor-pointer px-1.5 py-1">
							{date}
						</h3>
					</div>
					<button
						onClick={onClose}
						className="bg-white text-gray-500 hover:bg-slate-100 text-3xl border-none focus:outline-none rounded-full px-3.5 py-1.5"
					>
						&times;
					</button>
				</div>
				<div className="flex flex-col space-y-2 mb-3">
					{tasks.map((taskObj, index) => (
						<div key={index} className="flex items-center text-xs">
							{/* <span className="mr-2">•</span> */}
							<span
								className="w-2 h-2 rounded mr-2"
								style={{ backgroundColor: taskObj.color }}
								title={taskObj.color}
							></span>
							<span className="text-gray-600">{taskObj.time} </span>
							<span className="text-gray-600 font-semibold pl-1">{taskObj.task}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllTasksModal;
