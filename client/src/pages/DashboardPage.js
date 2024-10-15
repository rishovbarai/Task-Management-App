import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../components/tasks/TaskList';
import TaskForm from '../components/tasks/TaskForm';
import { loadTasks, addTask, removeTask } from '../redux/taskSlice';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(loadTasks());
    }, [dispatch]);

    const handleAddTask = (taskData) => {
        dispatch(addTask(taskData));
    };

    const handleDeleteTask = (taskId) => {
        dispatch(removeTask(taskId));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Task Dashboard</h1>

                {/* Task Form */}
                <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
                    <TaskForm onAdd={handleAddTask} />
                </div>

                {/* Task List */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    {loading && <p className="text-blue-500 text-center">Loading tasks...</p>}
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <TaskList tasks={tasks} onDelete={handleDeleteTask} />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
