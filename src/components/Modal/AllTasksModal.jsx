import React from "react";
import { format } from "date-fns";

const AllTasksModal = ({ selectedDate, tasks, onClose }) => {
	if (!selectedDate) return null;

	const formattedDate = format(selectedDate, "yyyy-MM-dd");
	const dayName = format(selectedDate, "EEE");
	const date = format(selectedDate, "d");

	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="bg-white text-gray-800 rounded-lg drop-shadow-2xl p-4 w-72">
				<div className="flex items-center justify-between mb-4">
					<div className="text-center pl-24">
						<span className="text-gray-500 text-xs">{dayName.toUpperCase()}</span>
						<h3 className="bg-blue-600 text-white hover:bg-blue-500 text-2xl rounded-full px-3 py-1">{date}</h3>
					</div>
					<button
						onClick={onClose}
						className="bg-slate-200 text-gray-500 hover:text-gray-700 text-2xl border-none focus:outline-none rounded-full px-3.5 py-1.5"
					>
						&times;
					</button>
				</div>
				<div className="flex flex-col space-y-2 mb-3">
					{tasks.map((taskObj, index) => (
						<div key={index} className="flex items-center text-sm">
							<span className="mr-2">•</span>
							<span>{taskObj.time} </span>
							<span className="font-semibold pl-1">{taskObj.task}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllTasksModal;
