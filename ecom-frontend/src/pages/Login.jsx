import React, { useState, useEffect } from 'react';
import TextField from '../components/TextField';
import PasswordField from '../components/PasswordField';
import handlePostOperation from '../config/handlePostOperation';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const initialValue = {
        email: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialValue);
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        // Check localStorage for remembered email
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            setFormData(prev => ({ ...prev, email: rememberedEmail }));
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await handlePostOperation('auth/login', formData);

        if (response.status === 200) {
            alert(response.data.message || "Login Successful");

            // Save or remove email from localStorage
            if (rememberMe) {
                localStorage.setItem('rememberedEmail', formData.email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }

            setFormData(initialValue);

            setTimeout(() => {
                navigate("/");
            });
        } else {
            alert(response.response.message || "Login Failed");
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleCheckboxChange = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back 👋</h2>
                <form onSubmit={handleSubmit} className="space-y-5">

                    <TextField
                        id="email"
                        placeholder="example@gmail.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        required={true}
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <PasswordField
                        id="password"
                        placeholder="********"
                        required={true}
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-pink-600"
                        />
                        <label htmlFor="rememberMe" className="text-gray-600 text-sm">
                            Remember Me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition duration-300"
                    >
                        Login
                    </button>

                    <div className="text-sm text-center text-gray-500 mt-4">
                        Forgot your password? <span className="text-pink-600 hover:underline cursor-pointer">Reset here</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
