import React, { useEffect, useState } from 'react';
import TextField from '../components/TextField';
import registerField from '../config/registerField.js';
import axios from 'axios';
import Cookies from 'js-cookie';
import handlePostOperation from '../config/handlePostOperation.js';
import { BASE_URL, registerInitialValue } from '../config/constant.js';

const Register = () => {
    
    const [formData, setFormData] = useState(registerInitialValue);

    const [name, setName] = useState(
     ''
    ) 
        

    // localStorage.setItem("name", "Shristi")
    // localStorage.getItem("name")
    // localStorage.removeItem("name")
    // localStorage.clear()

 

  const handleSaveCookie = async () => {

    // Cookies.set('name', 'shristi');
    localStorage.setItem('name', "Shristi");
            // try {
            //     const response = await axios.get('http://localhost:4000/test', {withCredentials: true});
            //     console.log(response.data);
            // } catch (error) {
            //     console.error("Error saving cookie:", error);
            // }
        };
    

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        e.preventDefault();
        console.log(email)
    };


    const handleClearCookie=async(e)=>{

        Cookies.remove('name');
        localStorage.removeItem('name');
        
        // try {
        //     await axios.get(`${BASE_URL}clearCookie`, {withCredentials: true});
        // } catch (error) {
        //     console.log(error)
        // }
    }

    const clearAll=()=>{
        localStorage.clear();
    }

    // const name = Cookies.get('name');

       useEffect(()=>{
       setName(localStorage.getItem('name') || '');
        localStorage.setItem('authToken', 'sdhbvcghsdvf');
        localStorage.setItem('email', 'shristi@gmail.com');
    }, [name, handleSaveCookie, handleClearCookie]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.table(formData); 

        const response = await handlePostOperation('auth/register', formData);

        if(response.status === 201) {
            alert("Registration successful");
            setFormData(registerInitialValue); // Reset form data
        }else{
            alert("Registration failed. Please try again.");
        }
    };


    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                
                {/* {name} */}
                <button onClick={handleClearCookie} className='border'>Clear Cookie</button>
                <button onClick={handleSaveCookie} className='border'>Add Cookie</button>
                <button onClick={clearAll} className='border'>Clear All Cookie</button>
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
