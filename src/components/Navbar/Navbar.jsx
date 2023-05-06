import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import './Navbar.scss'
import Search from "../Search";
import MegaMenu from '../MegaMenu'
import TopProducts from '../TopProducts';
import FlashSale from '../Reuseable/FlashSale'
import Laptop from "../Laptop";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-parent" >
      <div className="navbar-background" style={{ background: '#2874F0' }}>
        <nav className="bg-white" style={{ width: '80%', background: 'none', margin: 'auto' }}>
          <div className="flex items-center font-medium justify-around" style={{ height: '70px' }}>
            <div className="z-50 p-5 md:w-auto w-full flex justify-between">
              <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
              <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>
            <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
              <li className="home">
                <Link to="/" className="py-7 px-3 inline-block">
                  Home
                </Link>
              </li>
              <NavLinks />
            </ul>
            <div className="md:block hidden">
              <Button />
            </div>
            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
            >
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  Home
                </Link>
              </li>
              <NavLinks />
              <div className="py-5">
                <Button />
              </div>
            </ul>
          </div>

        </nav>
      </div>
      
    </div>
  );
};

export default Navbar;
