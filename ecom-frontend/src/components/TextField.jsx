import React from 'react'

const TextField = ({ id, value, onChange, placeholder, required = false }) => {
    return (
        <>
            {/*  textfield for email */}
            <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id={id}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    required={required}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default TextField