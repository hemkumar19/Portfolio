import logo from "../assets/HemLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 mb-20 py-1 sticky top-0">
      <div className="container mx-auto flex items-center justify-between px-2">
        
        <div className="flex items-center">
          <img className="w-32 lg:w-40" src={logo} alt="logo" />
        </div>

        <div className="hidden md:flex ml-auto items-center gap-8 text-white text-xl">
          <Link to="/home" className="hover:text-gray-500">Home</Link>
          <Link to="/about" className="hover:text-gray-500">About</Link>
          <Link to="/education" className="hover:text-gray-500">Education</Link>
          <Link to="/technology" className="hover:text-gray-500">Technology</Link>
          <Link to="/projects" className="hover:text-gray-500">Projects</Link>
          <Link to="/experience" className="hover:text-gray-500">Experience</Link>
          <Link to="/contact" className="hover:text-gray-500">Contact_</Link>
        </div>

        <div className="hidden md:flex items-center gap-4 text-2xl text-white">
          <a href="https://www.linkedin.com/in/hem-kumar-07b846248/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/hemkumar19" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/hemkumar_9r_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Icon for menu (three bars) */}
            <svg className="w-4 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-blue-400 py-4">
          <div className="flex flex-col items-center gap-4 text-white text-xl">
            <Link to="/home" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-500">About</Link>
            <Link to="/education" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Education</Link>
            <Link to="/technology" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Technology</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Projects</Link>
            <Link to="/experience" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Experience</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Contact</Link>
          </div>

          <div className="flex justify-center gap-4 mt-4 text-white">
            <a href="https://www.linkedin.com/in/hem-kumar-07b846248/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/hemkumar19" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/hemkumar_9r_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
