import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/tasksSlice";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TimeSlotSelector from "./TimeSlotSelector";

const TaskModal = ({ selectedDate, onClose }) => {
	const [task, setTask] = useState("");
	const [description, setDescription] = useState("");
	const [time, setTime] = useState(null);
	const dispatch = useDispatch();

	const handleSave = () => {
		if (task.trim() === "") {
			toast.warning("Add a task title.");
			return;
		}

		if (!time) {
			toast.warning("Please select a time for the task.");
			return;
		}

		if (time) {
			dispatch(
				addTask({
					date: format(selectedDate, "yyyy-MM-dd"),
					task,
					description,
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
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-gray-800 text-xl">Add Task</h2>
					<button
						onClick={onClose}
						className="bg-slate-200 text-gray-500 hover:text-gray-700 text-2xl border-none focus:outline-none rounded-full px-3.5 py-1.5"
					>
						&times;
					</button>
				</div>
				<input
					type="text"
					className="bg-slate-100 text-gray-800 border p-2 w-full rounded mb-4"
					placeholder="Title"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					required=""
				/>
				<TimeSlotSelector selectedTime={time} onTimeChange={setTime} />
				<textarea
					className="bg-slate-100 text-gray-800 border p-2 w-full rounded mb-4"
					placeholder="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<div className="text-end">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none focus:outline-none"
						onClick={handleSave}
					>
						Save
					</button>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default TaskModal;
