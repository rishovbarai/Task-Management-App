// /api/taskAPI.js

import axios from 'axios';

export const API_URL = 'http://localhost:5000/api/tasks'; // Base API URL for tasks

// Function to get the token from localStorage
const getToken = () => localStorage.getItem('token');

// Create a new task
export const createTask = async (taskData) => {
    try {
        const token = getToken();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
    };
        const response = await axios.post(API_URL, taskData,config);
        return response.data; // Return the response data
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};

// Get all tasks
export const getTasks = async () => {
    try {
        const token = getToken();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
    };
        const response = await axios.get(API_URL,config);
        return response.data; // Return the response data
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};

// Update a task
export const updateTask = async (taskId, taskData) => {
    try {
        const token = getToken();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
    };
        const response = await axios.put(`${API_URL}/${taskId}`, taskData,config);
        return response.data; // Return the response data
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};

// Delete a task
export const deleteTask = async (taskId) => {
    try {
        const token = getToken();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
    };
        const response = await axios.delete(`${API_URL}/${taskId}`,config);
        return response.data; // Return the response data
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};
