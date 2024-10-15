import React from 'react';

const TaskItem = ({ task, onDelete }) => {
    return (
        <li className="bg-white shadow-md rounded-lg p-6 mb-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{task.description}</p>
                </div>
                <button 
                    onClick={() => onDelete(task._id)} 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
