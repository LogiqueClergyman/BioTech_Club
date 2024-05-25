import React, { useState } from "react";
import logo from "../assets/logoR.png";
import "../App.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logout from "./Logout";

export default function Navbar() {
  const [state, setState] = useState(false);

  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const USER_TYPE = {
    PUBLIC: "Public User",
    USER: "User",
    ADMIN: "Admin",
  };

  // const CURRENT_USER_TYPE = USER_TYPE.USER
  const CURRENT_USER_TYPE = JSON.parse(localStorage.getItem("role"));

  return (
    <nav className="w-[100vw] left-0  bg-opacity-60 bg-gradient-to-r from-teal-200 via-sky-400 to-teal-200">
      <div className="relative top-0 left-0 right-0 bg-opacity-25 z-50  border-b-2 items-center px-4 max-w-screen-2xl mx-auto md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="flex ">
            <a href="https://glauniversity.in:8085/Main/Index" target="_blank">
              <img src={logo} width={70} height={70} alt="Float UI logo" />
            </a>
            <p className="text-3xl m-auto text-black font-bold ">
              Biotech Club
            </p>
          </div>
          <div className="md:hidden">
            <button
              className="text-blue-500 hover:text-black"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            <div>
              <Link
                className="text-black hover:text-2xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
                to={"/"}
              >
                Home
              </Link>
            </div>
            <div>
            <Link
                to={"/event"}
                className="text-black hover:text-3xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
              >
                Event
              </Link>
            </div>
            <div>
              <Link
                to={"/gallery"}
                className="text-black hover:text-3xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
              >
                Gallery
              </Link>
            </div>
            <div>
              <Link
                to={"/team"}
                className="text-black hover:text-3xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
              >
                Team
              </Link>
            </div>
            <div>
              <Link
                to={"/about"}
                className="text-black hover:text-3xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
              >
                About
              </Link>
            </div>

            {CURRENT_USER_TYPE ? (
              <>
                <div>
                  <Link
                    className="text-white hover:text-3xl hover:translate-y-1 transition-all duration-500 ease-in-out p-2 hover:text-black hover:font-bold hover:bg-blue-100 hover:rounded-lg "
                    to={"/UserProfile"}
                  >
                    Profile
                  </Link>
                </div>
              </>
            ) : null}

            {isLoggedIn ? (
              <div className="space-x-4">
                <Link
                  to={"/Logout"}
                  className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                >
                  Logout
                </Link>
              </div>
            ) : //   <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
            //     <li>
            //       <NavLink
            //         to="/signin"
            //         className="block py-3 text-center text-blue-700 hover:text-indigo-600 border rounded-lg md:border-none"
            //       >
            //         Log in
            //       </NavLink>
            //     </li>
            //     <li>
            //       <NavLink
            //         to="/signup"
            //         className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
            //       >
            //         Sign Up
            //       </NavLink>
            //     </li>
            //   </div>
            null}
          </ul>
        </div>
      </div>
    </nav>
  );
}
