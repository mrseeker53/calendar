import { format } from "date-fns";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEmail, MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


const TaskDetailModal = ({ selectedTask, onClose }) => {
	if (!selectedTask) return null;

	const { task, time, date, description, color } = selectedTask;
	const formattedDate = format(new Date(date), "eeee, MMMM d");

	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="bg-white rounded-lg drop-shadow-2xl p-1 w-80">
				<div className="flex justify-end items-center text-gray-500 text-lg mb-4">
					<span className="hover:bg-slate-100 rounded-full px-3 py-3"><MdEdit /></span>
					<span className="hover:bg-slate-100 rounded-full px-3 py-3"><RiDeleteBin6Line />
					</span>
					<span className="hover:bg-slate-100 rounded-full px-3 py-3">
						<MdOutlineEmail />
					</span>
					<span className="hover:bg-slate-100 rounded-full px-3 py-3">
						<BsThreeDotsVertical />
					</span>
					<button
						onClick={onClose}
						className="bg-white text-gray-500 hover:bg-slate-100 text-3xl border-none focus:outline-none rounded-full px-3 py-1"
					>
						&times;
					</button>
				</div>
				<div className="mb-4 px-4">
					<div className="flex items-baseline">
						<span
							className="w-3.5 h-3.5 rounded mr-6"
							style={{ backgroundColor: color }}
							title={color}
						></span>
						<div className="text-gray-700">
							<h3 className="text-2xl">{task}</h3>
							<div className="flex items-center text-sm">
								<span>{formattedDate}</span>
								<span className="mx-3 text-xs">•</span>
								<span>{time}</span>
							</div>
						</div>
					</div>
					<p className="text-gray-700 whitespace-pre-line pt-10 ml-10">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TaskDetailModal;
