import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="QuizApp Logo" className="h-10 w-10 mr-3" />
          <span className="text-white text-2xl font-bold">QuizApp</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
          <ul className="lg:flex lg:justify-end lg:flex-1 lg:items-center">
            <li className="mr-4">
              <Link to="/" className="text-white block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/about" className="text-white block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400">About</Link>
            </li>
            <li className="mr-4">
              <Link to="/contact" className="text-white block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
