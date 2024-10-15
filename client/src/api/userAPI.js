// /api/userAPI.js

import axios from 'axios';

export const API_URL = 'http://localhost:5000/api/users'; // Base API URL for user authentication

// Register a new user
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data; // Return the response data
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};

// Login user
export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        localStorage.setItem('token', response.data.token);
        return response.data; // Return the response data
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};
