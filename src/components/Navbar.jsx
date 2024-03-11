import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ismlogo from "../assets/ismlogo.png";
export default function Navbar() {
  const location = useLocation();
  const [bar, setbar] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <div className="bg-gray-300 text-black flex justify-between items-center h-20 w-full pl-8 pr-4 fixed z-10">
      <img src={ismlogo} alt="ismlogo" width={70} className="p-1" />
      <ul className="hidden lg:flex gap-2 items-center">
        <Link onClick={handleClick} to="/">
          <li
            className={`cursor-pointer font-medium text-black px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
              location.pathname === "/" ? "bg-slate-100 rounded-xl" : ""
            }`}
          >
            Home
          </li>
        </Link>
        <Link onClick={handleClick} to="/about">
          <li
            className={`cursor-pointer font-medium text-black px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
              location.pathname === "/about" ? "bg-slate-100 rounded-xl" : ""
            }`}
          >
            About me
          </li>
        </Link>
        <Link onClick={handleClick} to="/research">
          <li
            className={`cursor-pointer font-medium text-black px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
              location.pathname === "/research" ? "bg-slate-100 rounded-xl" : ""
            }`}
          >
            Research
          </li>
        </Link>
        <Link onClick={handleClick} to="/publication">
          <li
            className={`cursor-pointer font-medium text-black px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
              location.pathname === "/publication"
                ? "bg-slate-100 rounded-xl"
                : ""
            }`}
          >
            Publications
          </li>
        </Link>
        <Link onClick={handleClick} to="/awards">
          <li
            className={`cursor-pointer font-medium text-black px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
              location.pathname === "/awards" ? "bg-slate-100 rounded-xl" : ""
            }`}
          >
            Awards
          </li>
        </Link>
        <Link onClick={handleClick} to="/teaching">
          <li
            className={`cursor-pointer font-medium text-black px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
              location.pathname === "/teaching" ? "bg-slate-100 rounded-xl" : ""
            }`}
          >
            Teaching
          </li>
        </Link>
        <Link onClick={handleClick} to="/people">
          <li
            className={`cursor-pointer font-medium text-black px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
              location.pathname === "/people" ? "bg-slate-100 rounded-xl" : ""
            }`}
          >
            People
          </li>
        </Link>
        <Link onClick={handleClick} to="/lab">
          <li
            className={`cursor-pointer font-medium text-black px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
              location.pathname === "/lab" ? "bg-slate-100 rounded-xl" : ""
            }`}
          >
            Lab
          </li>
        </Link>
        <Link onClick={handleClick} to="/project">
          <li
            className={`cursor-pointer font-medium text-black px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
              location.pathname === "/project" ? "bg-slate-100 rounded-xl" : ""
            }`}
          >
            Project
          </li>
        </Link>
        <Link onClick={handleClick} to="/join-us">
          <li
            className={`cursor-pointer font-medium text-black px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
              location.pathname === "/join-us" ? "bg-slate-100 rounded-xl" : ""
            }`}
          >
            Join Us
          </li>
        </Link>
      </ul>
      <div
        onClick={() => setbar(!bar)}
        className=" cursor-pointer pr-4 z-10 text-white lg:hidden"
      >
        {bar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {bar && (
        <ul
          className="flex flex-col justify-center items-center  pt-16 pb-2 gap-1 top-0 right-0 w-100
            h-auto bg-gray-800 lg:hidden fixed"
        >
          <Link
            to="/"
            onClick={() => {
              setbar(!bar);
              handleClick();
            }}
          >
            <li
              className={`cursor-pointer font-medium text-gray-200 px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl `}
            >
              Home
            </li>
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setbar(!bar);
              handleClick();
            }}
          >
            <li
              className={`cursor-pointer font-medium text-gray-200 px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl `}
            >
              About me
            </li>
          </Link>
          <Link
            to="/research"
            onClick={() => {
              setbar(!bar);
              handleClick();
            }}
          >
            <li
              className={`cursor-pointer font-medium text-gray-200 px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl `}
            >
              Research
            </li>
          </Link>
          <Link
            to="/publication"
            onClick={() => {
              setbar(!bar);
              handleClick();
            }}
          >
            <li
              className={`cursor-pointer font-medium text-gray-200 px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl`}
            >
              Publications
            </li>
          </Link>
          <Link
            to="/awards"
            onClick={() => {
              setbar(!bar);
              handleClick();
            }}
          >
            <li
              className={`cursor-pointer font-medium text-gray-200 px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl`}
            >
              Awards
            </li>
          </Link>
          <Link
            to="/teaching"
            onClick={() => {
              setbar(!bar);
              handleClick();
            }}
          >
            <li
              className={`cursor-pointer font-medium text-gray-200 px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl`}
            >
              Teaching
            </li>
          </Link>
          <Link
            to="/people"
            onClick={() => {
              setbar(!bar);
              handleClick();
            }}
          >
            <li
              className={`cursor-pointer font-medium text-gray-200 px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl`}
            >
              People
            </li>
          </Link>
          <Link
            to="/lab"
            onClick={() => {
              setbar(!bar);
              handleClick();
            }}
          >
            <li
              className={`cursor-pointer font-medium text-gray-200 px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl`}
            >
              Lab
            </li>
          </Link>
          <Link
            to="/project"
            onClick={() => {
              setbar(!bar);
              handleClick();
            }}
          >
            <li
              className={`cursor-pointer font-medium text-gray-200 px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
                location.pathname === "/project"
                  ? "bg-slate-100 rounde text-blackd-xl"
                  : ""
              }`}
            >
              Project
            </li>
          </Link>
          <Link
            to="/join-us"
            onClick={() => {
              setbar(!bar);
              handleClick();
            }}
          >
            <li
              className={`cursor-pointer font-medium text-gray-200 px-4 hover:scale-105 transition duration-300 hover:bg-slate-100 rounded-xl ${
                location.pathname === "/join-us"
                  ? "bg-slate-100 rounde text-blackd-xl"
                  : ""
              }`}
            >
              Join Us
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}
