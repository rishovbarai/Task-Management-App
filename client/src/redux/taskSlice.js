import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTasks, createTask, deleteTask } from '../api/taskAPI';

export const loadTasks = createAsyncThunk('tasks/loadTasks', async () => {
    return await getTasks();
});

export const addTask = createAsyncThunk('tasks/addTask', async (taskData) => {
    return await createTask(taskData);
});

export const removeTask = createAsyncThunk('tasks/removeTask', async (taskId) => {
    return await deleteTask(taskId);
});

const taskSlice = createSlice({
    name: 'tasks',
    initialState: { tasks: [], loading: false, error: null },
    extraReducers: (builder) => {
        builder
            .addCase(loadTasks.pending, (state) => { state.loading = true; })
            .addCase(loadTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = false;
            })
            .addCase(loadTasks.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(addTask.pending, (state) => { state.loading = true; })
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
                state.loading = false;
            })
            .addCase(addTask.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(removeTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task._id !== action.payload);
            });
    },
});

export default taskSlice.reducer;
