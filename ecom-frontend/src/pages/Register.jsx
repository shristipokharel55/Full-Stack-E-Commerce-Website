import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        role: 'Customer',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can send formData to backend here
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account ✨</h2>
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Username */}
                    <div>
                        <label htmlFor="userName" className="block mb-1 text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="9800000000"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            required
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label htmlFor="role" className="block mb-1 text-sm font-medium text-gray-700">Role</label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            required
                        >
                            <option value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    {/* Password with Eye Toggle */}
                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                                required
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
