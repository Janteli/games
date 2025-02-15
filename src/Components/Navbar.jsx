import React, { useEffect, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';
import { TfiYoutube } from 'react-icons/tfi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 10){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    if (location.pathname === "/"){
      window.addEventListener("scroll", handleScroll)
    } else{
      setIsScrolled(true)
    }
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[location.pathname])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center p-4 fixed top-0 left-0 bg-[#341175] text-white px-16 w-full z-50">
      {/* left */}
      <div className="flex gap-6 justify-center items-center">
        <Link to="/about" className="group relative">
          <p className="navbar-brand font-[poppins] text-xs pb-1 transition-all duration-300 font-bold">
            ABOUT
          </p>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/free-coins" className="group relative">
          <p className="navbar-brand font-[poppins] text-xs pb-1 transition-all duration-300 font-bold">
            FREE COINS
          </p>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
        </Link>
        <Link to="/vip" className="group relative">
          <p className="navbar-brand font-[poppins] text-xs pb-1 transition-all duration-300 font-bold">
            VIP
          </p>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/blog" className="group relative">
          <p className="navbar-brand font-[poppins] text-xs pb-1 transition-all duration-300 font-bold">
            BLOG
          </p>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/support" className="group relative">
          <p className="navbar-brand font-[poppins] text-xs pb-1 transition-all duration-300 font-bold">
            CUSTOMER SUPPORT
          </p>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* center */}
      <div>
        <img
          src="https://www.slotomania.com/wp-content/uploads/2022/06/SlotoMania_Logo-300x87.png"
          alt="logo"
          className="h-16"
        />
      </div>

      {/* right */}
      <div className="flex gap-2.5 justify-center items-center pl-80">
        <div>
          <FaFacebookF className="text-xl" />
        </div>
        <div>
          <CiInstagram className="text-2xl" />
        </div>
        <div>
          <TfiYoutube className="text-xl" />
        </div>

        <button className={`py-2 px-10 rounded-3xl bg-green-900 shadow-lg font-bold hidden ${isScrolled? "block": " "} transition-normal duration-500`}>PLAY NOW</button>
      </div>
    </nav>
  );
};

export default Navbar;