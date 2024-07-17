import React from "react";
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import Logo from "../Elements/Logo.jsx";
import Anchor from "../Elements/Anchor.jsx";
import { Link } from "react-router-dom";

const Footer = () => {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
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

  return (
    <footer className="bg-dark text-light shadow-lg shadow-light py-6 absolute bottom-0 left-0 right-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="lg:w-[30%] text-lg font-bold mb-4 md:mb-0">
            <Logo />
          </div>
          <div className="lg:w-[40%] flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-5">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                to={menu.link}
                className="hover:text-gray-400"
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <div className="lg:w-[30%] flex space-x-4 justify-end mt-4 md:mt-0">
            {sosmeds.map((sosmed) => (
              <Anchor key={sosmed.name} to={sosmed.link} target="_blank">
                {sosmed.icon}
              </Anchor>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400">
          <small>
            &copy; {new Date().getFullYear()} Bendi Tandayu Saputra. All rights
            reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
