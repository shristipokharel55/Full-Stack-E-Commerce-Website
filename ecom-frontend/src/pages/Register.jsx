import React, { useEffect, useState } from 'react';
import TextField from '../components/TextField';
import registerField from '../config/registerField.js';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        const handleSaveCookie = async () => {
            try {
                const response = await axios.get('http://localhost:4000/test', {withCredentials: true});
                console.log(response.data);
            } catch (error) {
                console.error("Error saving cookie:", error);
            }
        };
        handleSaveCookie();
    }, []);
    

    const handlePostOperation = async(url, data) => {
        try {
            const result = await axios.post(url, data);
            //return data
            console.log(result)
            return result;
        } catch (error) {
            //return error
            console.log(error)
            return error;
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        e.preventDefault();
        console.log(email)
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.table(formData);

        const response = await handlePostOperation('http://localhost:4000/api/auth/register', formData);

        if(response.status === 200) {
            alert("Registration successful");
        }else{
            alert("Registration failed. Please try again.");
        }
    };


    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account ✨</h2>
                <form onSubmit={handleSubmit} className="space-y-5">

                {registerField.map(({id, label, placeholder, type, name})=>(
                    <TextField
                        key={name}
                        name={name}
                        id={id}
                        label={label}
                        placeholder={placeholder}
                        type={type}
                        value={formData[name]}
                        onChange={handleChange}
                        />
                ))}               

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
