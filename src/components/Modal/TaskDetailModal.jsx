import { format } from "date-fns";

const TaskDetailModal = ({ selectedTask, onClose }) => {
	if (!selectedTask) return null;

	const { task, time, date, description, color } = selectedTask;
	const formattedDate = format(new Date(date), "eeee, MMMM d");

	// Debugging log to check the color value
	console.log("Color value:", color);

	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="bg-white rounded-lg drop-shadow-2xl p-4 w-80">
				<div className="flex justify-between items-center mb-4 ml-6">
					<h2 className="text-gray-800 text-xl">Task Details</h2>
					<button
						onClick={onClose}
						className="bg-slate-200 text-gray-500 hover:text-gray-700 text-2xl border-none focus:outline-none rounded-full px-3.5 py-1.5"
					>
						&times;
					</button>
				</div>
				<div className="mb-4">
					<div className="flex items-baseline">
						<span
							className="w-3 h-3 rounded mr-3"
							style={{ backgroundColor: color }}
							title={color}
						></span>
						<div>
							<h3 className="text-gray-800 font-semibold text-2xl">{task}</h3>
							<div className="flex items-center text-gray-500">
								<span>{formattedDate}</span>
								<span className="mx-3 text-xs">•</span>
								<span>{time}</span>
							</div>
						</div>
					</div>
					<p className="text-gray-700 whitespace-pre-line pt-10 ml-6">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TaskDetailModal;
