import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import Logo from "../Elements/Logo.jsx";
import Anchor from "../Elements/Anchor.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Certificates",
      link: "/certificates",
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    // },
  ];

  const sosmeds = [
    {
      name: "Whatsapp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      link: "https://api.whatsapp.com/send/?phone=6285876878126&text&type=phone_number&app_absent=0",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      link: "https://www.instagram.com/benditandayusaputra_/",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
      link: "https://github.com/benditandayusaputra",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-6 h-6" />,
      link: "mailto:benditandayusaputra@gmail.com",
    },
  ];

  const renderMenus = () => {
    return menus.map((menu) => (
      <Link key={menu.name} to={menu.link}>
        {menu.name}
      </Link>
    ));
  };

  const renderSosmeds = () => {
    return sosmeds.map((sosmed) => (
      <Anchor key={sosmed.name} to={sosmed.link} target="_blank">
        {sosmed.icon}
      </Anchor>
    ));
  };

  return (
    <nav className="text-light font-bold p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Logo />
        </div>
        <div className="hidden md:flex space-x-5 items-center">
          {renderMenus()}
          <div className="flex items-center px-6">
            <div className="h-6 border-l border-light"></div>
          </div>
          <div className="flex space-x-5 ml-4">{renderSosmeds()}</div>
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
          {renderMenus()}
          <div className="flex space-x-4 pt-4">{renderSosmeds()}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
