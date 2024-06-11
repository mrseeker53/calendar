import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/tasksSlice';

const TaskModal = ({ selectedDate, onClose }) => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addTask({ date: selectedDate, task }));
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-4">
                <h2 className="text-xl mb-4">Add Task</h2>
                <input
                    type="text"
                    className="bg-slate-200 text-gray-800 border p-2 w-full mb-4"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
                <div className="flex justify-end">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded mr-2" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;