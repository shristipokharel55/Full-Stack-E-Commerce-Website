import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white text-purple-700 shadow-md px-6 py-3 flex flex-wrap items-center justify-center gap-4 rounded-b-xl border-b border-purple-200">
      <Link to="/" className="hover:text-pink-500 transition-colors duration-300 font-semibold">Home</Link>
      <Link to="/login" className="hover:text-pink-500 transition-colors duration-300 font-semibold">Login</Link>
      <Link to="/register" className="hover:text-pink-500 transition-colors duration-300 font-semibold">Register</Link>
      <Link to="/verify-otp" className="hover:text-pink-500 transition-colors duration-300 font-semibold">Verify OTP</Link>
      <Link to="/forgot-password" className="hover:text-pink-500 transition-colors duration-300 font-semibold">Forgot Password</Link>
      <Link to="/reset-password" className="hover:text-pink-500 transition-colors duration-300 font-semibold">Reset Password</Link>
    </nav>
  );
};

export default Navbar;
