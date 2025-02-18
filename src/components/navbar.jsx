import React, { useState } from "react";
import MenuIcon from "../assets/images/menu.svg";
import CloseIcon from "../assets/images/closeicon.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar bg-warmBrown h-20">
      <div className="dropdown dropdown-end">
        <div className=" flex-none lg:hidden">
          {!isMenuOpen && (
            <button onClick={toggleMenu} className="btn btn-ghost btn-menu">
              <img
                src={MenuIcon}
                alt="Menu Icon"
                className="h-8 w-8 text-cream"
              />
            </button>
          )}
        </div>
      </div>

      {/*Sidebar*/}
      <div
        className={`fixed  inset-0 h-full w-80 bg-cream bg-opacity-50 text-mocha shadow-lg  transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4  lg:hidden"
        >
          <img src={CloseIcon} alt="Close Icon" className="h-8 w-8 " />
        </button>

        <div className="p-4">
          <ul className="space-y-4 mt-10 text-lg ">
            <li>
              <a href="#" className="btn btn-ghost text-mocha text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-ghost text-mocha text-lg">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-ghost text-mocha text-lg">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-ghost text-mocha text-lg">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-ghost text-mocha text-lg">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Horizontal Menu for Large Screens */}
      <div className="hidden lg:flex   justify-center lg:space-x-6">
        <a href="#">
          <img
            src="Logo.svg"
            alt="brand logo"
            className="h-8 w-8 md:h-16 md:w-16 lg:h-24 lg:w-24"
          />
        </a>

        <a href="#" className="btn btn-ghost text-cream">
          Home
        </a>
        <a href="#" className="btn btn-ghost text-cream">
          Shop
        </a>
        <a href="#" className="btn btn-ghost text-cream">
          About Us
        </a>
        <a href="#" className="btn btn-ghost text-cream">
          Blog
        </a>
        <a href="#" className="btn btn-ghost text-cream">
          Contact
        </a>
      </div>

      <div className="flex-none ms-auto">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-cream hover:stroke-terracotta transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
