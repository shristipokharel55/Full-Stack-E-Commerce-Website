import React from 'react'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    }
    return (
        <>
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' placeholder='example@gmail.com' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type='password' id='password' placeholder='88888888' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Login