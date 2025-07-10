import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="QuizApp Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl sm:text-2xl font-extrabold tracking-wide">
              Quiz<span className="text-yellow-400">App</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/" className="hover:text-yellow-400 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-400 transition duration-300">
              About
            </Link>
            <Link to="/contact" className="hover:text-yellow-400 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 bg-gray-800 space-y-2">
          <Link
            to="/"
            className="block hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
