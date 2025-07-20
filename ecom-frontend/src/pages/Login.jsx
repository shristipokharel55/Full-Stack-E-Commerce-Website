import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import TextField from '../components/TextField';
import PasswordField from '../components/PasswordField';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("email", email);
        console.log("password", password);
        // Later: Send email & password to backend
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <PasswordField
                    id="password"
                    placeholder="********"
                    required={true}
                    value= {password}
                    onChange ={(e) => setPassword(e.target.value)}
                    />

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
