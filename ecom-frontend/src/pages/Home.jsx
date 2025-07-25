import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import laptopImage from '../assets/react.svg'; // Replace with your laptop image
import { handleGetOperation } from '../config/handleGetOperation';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // This effect runs once when the component mounts
    const token = localStorage.getItem("authToken")
    if(!token){
    navigate("/login")
    }

    const checkAuth = async()=>{
        const response = await handleGetOperation('auth/verify/1');
        setLoading(true);
        console.log(response)
    }



    }, [])   

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-400 text-white">
            {/* Navigation */}
            <header className="flex items-center justify-between px-6 py-4 bg-white bg-opacity-10 shadow-md">
                <h1 className="text-2xl font-bold">LapStore 💻</h1>
                <nav className="space-x-4">
                    <Link to="/login" className="hover:underline font-semibold">Login</Link>
                    <Link to="/register" className="hover:underline font-semibold">Register</Link>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Manage & Buy <span className="text-yellow-300">Laptops</span> With Ease
                    </h2>
                    <p className="text-lg text-white/90">
                        Discover, track, and purchase the best laptops all in one place. Your perfect machine is just a click away.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-block px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg shadow-md hover:bg-pink-100 transition"
                    >
                        Shop Now
                    </Link>
                </div>

                {/* Image */}
                <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
                    <img src={laptopImage} alt="Laptop Showcase" className="max-w-md w-full rounded-xl shadow-2xl" />
                </div>
            </section>

            {/* Featured Products (Optional Placeholder) */}
            <section className="bg-white bg-opacity-10 p-8 mt-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Top Picks for You</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Placeholder cards */}
                    {[1, 2, 3].map((id) => (
                        <div key={id} className="bg-white text-black rounded-xl p-4 shadow-md hover:scale-105 transition">
                            <h4 className="font-semibold text-lg">Laptop Model {id}</h4>
                            <p className="text-sm text-gray-600">High performance, sleek design, powerful features.</p>
                            <button className="mt-3 px-4 py-1 bg-pink-500 text-white rounded hover:bg-pink-600">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
