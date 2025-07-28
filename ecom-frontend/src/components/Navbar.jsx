import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navbarFields } from "../config/navbarFields";

const Navbar = () => {

  const location = useLocation()
  const pathname = location.pathname;
  return (
    <nav className="bg-white text-purple-700 shadow-md px-6 py-3 flex flex-wrap items-center justify-center gap-4 rounded-b-xl border-b border-purple-200">
      
{
  navbarFields.map(({ name, path }) => (
        <Link
          key={name}
        
          to={path}
          className={`${pathname===path?"font-bold bg-gray-300 p-2 rounded hover:text-blue-500":"hover:text-red-500"}`}        >
          {name}
        </Link>
      )
        )
}
    </nav>
  );
};

export default Navbar;
