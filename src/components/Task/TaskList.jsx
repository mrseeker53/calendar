import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const TaskList = ({ selectedDate, onAddTasksClick }) => {
	const tasks = useSelector((state) => state.tasks);
	const formattedDate = format(selectedDate, "yyyy-MM-dd");
	const dayTasks = tasks[formattedDate] || [];

	return (
		<div className="">
			<div className="flex justify-between items-baseline pb-6">
                <span className="text-2xl font-bold">Tasks:</span>
				<button
					onClick={onAddTasksClick}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
				>
					ADD
				</button>
			</div>
			{dayTasks.length === 0 ? (
				<p>No tasks for today!</p>
			) : (
				dayTasks.map((task, index) => (
					<div key={index} className="py-2 rounded">
						{task}
					</div>
				))
			)}
		</div>
	);
};

export default TaskList;
