"use client";

import React from "react";
import { useState } from "react";

const Registration = () => {
    const [formData, setFormData] = useState<any>({
        role: "admin",
        name: "",
        mail: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState<any>({});

    const validateForm = () => {
        const newErrors: any = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.mail) {
            newErrors.mail = "Mail ID is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
            newErrors.mail = "Mail ID is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = "Password must contain at least one capital letter";
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData:any) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted", formData);
            // Proceed with form submission (e.g., API call)
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center" style={{ backgroundImage: "url('./al.jpg')", backgroundSize: 'cover' }}>
            <div className="bg-slate-200 w-96 p-10 rounded-lg shadow-lg flex flex-col items-center">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
                    <div>
                        <h1 className="text-4xl font-bold">Sign Up</h1>
                    </div>
                    <div>
                        <label htmlFor="role" className="block mb-2">Role</label>
                        <select id="role" name="role" value={formData.role} onChange={handleChange} className="p-2 border border-gray-300 rounded w-full">
                            <option value="admin">Admin</option>
                            <option value="superadmin">Super Admin</option>
                        </select>
                    </div>
                    <div>
                        <input id="name" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border border-gray-300 rounded w-full" />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <input type="email" name="mail" placeholder="Mail ID" value={formData.mail} onChange={handleChange} className="p-2 border border-gray-300 rounded w-full" />
                        {errors.mail && <p className="text-red-500 text-sm">{errors.mail}</p>}
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="p-2 border border-gray-300 rounded w-full" />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    <div>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="p-2 border border-gray-300 rounded w-full" />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>
                    <div>
                        <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full">Submit</button>
                    </div>
                    <div className="text-center">
                        Already have an account? <span className="text-blue-500 cursor-pointer">Sign in</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
