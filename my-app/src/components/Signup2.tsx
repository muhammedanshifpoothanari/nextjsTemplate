"use client"
import React, { useState } from 'react';

const Signup2 = () => {
    const [formData, setFormData] = useState({
        userType: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [passwordError, setPasswordError] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
        // Clear password error message when typing in the password fields
        if (e.target.id === 'password' || e.target.id === 'confirmPassword') {
            setPasswordError('');
        }
    };

    const validatePassword = () => {
        const { password } = formData;

        if (password.length < 8) {
            return 'Password should be at least 8 characters long.';
        }
        if (!/[A-Z]/.test(password)) {
            return 'Password should contain at least one uppercase letter.';
        }
        if (!/[a-z]/.test(password)) {
            return 'Password should contain at least one lowercase letter.';
        }
        if (!/\d/.test(password)) {
            return 'Password should contain at least one number.';
        }
        if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password)) {
            return 'Password should contain at least one special character.';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset any previous alerts
        setAlertMessage('');

        // Perform form validation
        if (!formData.userType) {
            setAlertMessage('Please select a user type.');
            return;
        }

        if (!formData.username) {
            setAlertMessage('Please enter your email id.');
            return;
        }

        const passwordError = validatePassword();
        if (passwordError) {
            setPasswordError(passwordError);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setAlertMessage('Passwords do not match.');
            return;
        }

        // If all validations pass, you can proceed with form submission
        console.log('Form submitted:', formData);

        // Reset the form after submission (optional)
        setFormData({
            userType: '',
            username: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-200" style={{backgroundImage: "url('./ajmalaju.jpg')"}}>
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-md p-8 rounded-lg shadow-xl w-full sm:w-96">
                <h2 className="text-2xl font-bold mb-8 text-center">Register</h2>
                {alertMessage && (
                    <div className="bg-red-200 text-red-700 px-4 py-2 rounded mb-4">
                        {alertMessage}
                    </div>
                )}
                <form id="signupForm" className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="userType" className="block mb-1 text-left">User Type:</label>
                        <select
                            id="userType"
                            className="form-control border border-gray-300 rounded-lg px-3 py-2"
                            value={formData.userType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select User Type</option>
                            <option value="admin">Admin</option>
                            <option value="hr">HR</option>
                            <option value="guest">Guest</option>
                            <option value="junior">Junior Developer</option>
                            <option value="senior">Senior Developer</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="username" className="block mb-1 text-left">Email id:</label>
                        <input
                            type="email"
                            id="username"
                            className="form-control border border-gray-300 rounded-lg px-3 py-2"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="block mb-1 text-left">Create Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control border border-gray-300 rounded-lg px-3 py-2"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword" className="block mb-1 text-left">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-control border border-gray-300 rounded-lg px-3 py-2"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}
                    <div className="flex justify-center space-x-4">
                        <button type="submit" className="btn-login w-1/3 h-11 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Signup</button>
                        <a href="/login" className="btn-signup w-1/3 h-11 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup2;
