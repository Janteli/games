import React, { useEffect, useState } from "react";
import { FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { TfiYoutube } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#341175] text-white px-6 md:px-16 py-4 flex justify-between items-center">
      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Left Menu Links */}
      <div className={`absolute md:relative top-full left-0 w-full md:w-auto bg-[#341175] md:bg-transparent md:flex gap-6 justify-center items-center p-4 md:p-0 transition-all duration-300 ${isMenuOpen ? "block" : "hidden md:flex"}`}>
        <Link to="/about" className="group relative block md:inline-block">
          <p className="text-xs font-bold pb-1 transition-all duration-300">
            ABOUT
          </p>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/free-coins" className="group relative block md:inline-block">
          <p className="text-xs font-bold pb-1 transition-all duration-300">
            FREE COINS
          </p>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
        </Link>
        <Link to="/vip" className="group relative block md:inline-block">
          <p className="text-xs font-bold pb-1 transition-all duration-300">
            VIP
          </p>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/blog" className="group relative block md:inline-block">
          <p className="text-xs font-bold pb-1 transition-all duration-300">
            BLOG
          </p>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/support" className="group relative block md:inline-block">
          <p className="text-xs font-bold pb-1 transition-all duration-300">
            CUSTOMER SUPPORT
          </p>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* Center Logo */}
      <div>
        <img
          src="https://www.slotomania.com/wp-content/uploads/2022/06/SlotoMania_Logo-300x87.png"
          alt="logo"
          className="h-16"
        />
      </div>

      {/* Right Social Links & Button */}
      <div className="flex items-center gap-4">
        <FaFacebookF className="text-xl hidden md:block" />
        <CiInstagram className="text-2xl hidden md:block" />
        <TfiYoutube className="text-xl hidden md:block" />

        <button
          className={`py-2 px-6 rounded-3xl bg-green-900 shadow-lg font-bold transition-all duration-500 ${
            isScrolled ? "block" : "hidden"
          }`}
        >
          PLAY NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
