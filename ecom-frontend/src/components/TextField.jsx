import React from 'react'

const TextField = ({ label,id, value, onChange, placeholder, required = false, type="text", autoFocusOn = "email", maxLength=40 , name}) => {
    return (
        <>
            {/*  textfield for email */}
            <div>
                <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
                <input
                    type={type}
                    id={id}
                    name={name}
                    pattern={type === "number" && "d*"}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    required={required}
                    value={value}
                    autoFocus={id === autoFocusOn}
                    onChange={onChange}
                    maxLength={maxLength}
                />
            </div>
        </>
    )
}

export default TextField