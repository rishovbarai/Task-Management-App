import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/authSlice';
import Register from '../components/auth/Register';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const handleRegister = (userData) => {
        dispatch(registerUser(userData));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <Register onRegister={handleRegister} />
                {loading && <p className="text-blue-500 text-center mt-4">Registering...</p>}
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </div>
        </div>
    );
};

export default RegisterPage;
