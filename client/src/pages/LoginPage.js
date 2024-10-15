// /pages/LoginPage.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { loginUser } from '../redux/authSlice';
import Login from '../components/auth/Login';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize navigate
    const { loading, error, user } = useSelector(state => state.auth); // Get user state

    const handleLogin = (credentials) => {
        dispatch(loginUser(credentials));
    };

    useEffect(() => {
        if (user) {
            navigate('/dashboard'); // Redirect to dashboard if user is logged in
        }
    }, [user, navigate]); // Add navigate to dependencies

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <Login onLogin={handleLogin} />
                {loading && <p className="text-blue-500 text-center mt-4">Logging in...</p>}
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                <p className="text-center mt-4">
                    Don't have an account?{' '}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Register here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
