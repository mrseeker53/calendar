// TaskModal.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/tasksSlice";
import { format } from "date-fns";
import TimeSlotSelector from "./TimeSlotSelector";

const TaskModal = ({ selectedDate, onClose, onAddTask }) => {
	const [task, setTask] = useState("");
	const [time, setTime] = useState(null);
	const dispatch = useDispatch();

	const handleSave = () => {
		if (time) {
			dispatch(
				addTask({
					date: format(selectedDate, "yyyy-MM-dd"),
					task,
					time: time.value,
				})
			);
			onClose();
		} else {
			alert("Please select a time for the task.");
		}
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="bg-white rounded-lg drop-shadow-2xl p-4">
				<h2 className="text-gray-800 text-xl mb-4">Add Task</h2>
				<input
					type="text"
					className="bg-slate-200 text-gray-800 border p-2 w-full mb-4"
					placeholder="Task"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
				<TimeSlotSelector selectedTime={time} onTimeChange={setTime} />
				<div className="flex justify-end">
					<button
						className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded border-none focus:outline-none mr-2"
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none focus:outline-none"
						onClick={handleSave}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default TaskModal;
