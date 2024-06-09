import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import Logo from "../Elements/Logo";
import Link from "../Elements/Link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white font-bold p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Logo />
        </div>
        <div className="hidden md:flex space-x-5 items-center">
          <Link to="#">Home</Link>
          <Link to="#">Projects</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
          <div className="flex items-center px-6">
            <div className="h-6 border-l border-white"></div>
          </div>
          <div className="flex space-x-5 ml-4">
            <Link to="https://api.whatsapp.com/send?phone=6285876878126">
              <FaWhatsapp className="w-6 h-6" />
            </Link>
            <Link to="https://www.instagram.com/benditandayusaputra_/">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link to="https://github.com/benditandayusaputra">
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link to="mailto:benditandayusaputra@gmail.com">
              <FaEnvelope className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-dark flex flex-col items-center space-y-4 mt-6 fixed w-full z-10 pb-8">
          <Link to="#">Home</Link>
          <Link to="#">Projects</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
          <div className="flex space-x-4 pt-4">
            <Link to="#">
              <FaWhatsapp className="w-6 h-6" />
            </Link>
            <Link to="#">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link to="#">
              <FaGithub className="w-6 h-6" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
