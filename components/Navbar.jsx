"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

import React, { useState } from "react";
import { delay, motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [light, setLight] = useState(false);

  const mobileMenuDisplay = () => {
    setNav(!nav);
  };
  const toggleTheme = () => {
    // alert("want to toggle theme...?");
    setLight(!light);
    document.body.className = light ? "dark" : "";
  };

  return (
    <>
      <div className="w-full shadow-navbarShadow h-20 lg:h-[9vh] sticky top-0 z-50 px-4 dark:bg-bodyColor">
        <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <h3 className="text-teal-800 dark:text-textGreen text-2xl font-bold">
                RizPort
              </h3>
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center gap-5">
            <ul className="flex items-center justify-around text-[13px] gap-7 px-4">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <Link
                  href="/about"
                  className="flex items-center gap-1 font-bold   uppercase dark:text-textDark hover:text-textLight dark:hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <span className="text-teal-800 dark:text-textGreen">A</span>
                  bout
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <Link
                  href="/skills"
                  className="flex items-center gap-1 font-bold uppercase dark:text-textDark hover:text-textLight  dark:hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <span className="text-teal-800 dark:text-textGreen">S</span>
                  kills
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <Link
                  href="/projects"
                  className="flex items-center gap-1 font-bold uppercase dark:text-textDark hover:text-textLight   dark:hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <span className="text-teal-800 dark:text-textGreen">P</span>
                  rojects
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-1 font-bold uppercase dark:text-textDark hover:text-textLight dark:hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <span className="text-teal-800 dark:text-textGreen">C</span>
                  ontact
                </Link>
              </motion.li>
              <a href="/riz_resume.pdf" target="_blank">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-3 py-1 rounded-md text-teal-800 hover:bg-textLight dark:text-textGreen text-[13px] border border-teal-800 dark:border-textGreen dark:hover:bg-hoverColor duration-300"
                >
                  Resume
                </motion.button>
              </a>
            </ul>
          </div>

          {/* hamburger */}

          <div className="flex justify-between gap-2">
            <div>
              <button
                className="text-teal-800 dark:text-textGreen text-2xl font-bold"
                onClick={toggleTheme}
              >
                {light ? <MdDarkMode /> : <MdLightMode />}
              </button>
            </div>
            <div
              className="w-6 h-5 flex flex-col justify-between items-center md:hidden  text-4xl text-teal-800 dark:text-textGreen cursor-pointer overflow-hidden group"
              onClick={mobileMenuDisplay}
            >
              {nav ? <AiFillCloseCircle /> : <GiHamburgerMenu />}
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={` ${
          nav ? "block" : "hidden"
        }  mobMenu z-50 fixed w-full h-screen py-11 px-7 bg-black dark:bg-black  mx-auto rounded-b-md md:hidden`}
      >
        <ul className="w-full flex flex-col items-center justify-center text-center text-[13px] gap-4 px-4">
          <li className="border-b-4 border-bodyColor w-full">
            <Link
              className="flex items-center gap-3 justify-center py-2 font-medium uppercase text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="/about"
              onClick={mobileMenuDisplay}
            >
              About
            </Link>
          </li>
          <li className="border-b-4 border-bodyColor w-full">
            <Link
              className="flex items-center gap-3 justify-center py-2 font-medium uppercase text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="/skills"
              onClick={mobileMenuDisplay}
            >
              Skills
            </Link>
          </li>
          <li className="border-b-4 border-bodyColor w-full">
            <Link
              className="flex items-center gap-3 justify-center py-2 font-medium uppercase text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="/projects"
              onClick={mobileMenuDisplay}
            >
              Projects
            </Link>
          </li>
          <li className="border-b-4 border-bodyColor w-full">
            <Link
              className="flex items-center gap-3 justify-center py-2 font-medium uppercase text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="/contact"
              onClick={mobileMenuDisplay}
            >
              Contact
            </Link>
          </li>
          <a href="/riz_resume.pdf" target="_blank">
            <button className="px-3 py-1 rounded-md text-teal-800  dark:text-textGreen text-[13px] border border-teal-800 dark:border-textGreen hover:bg-hoverColor duration-300">
              Resume
            </button>
          </a>
        </ul>

        <div className="flex items-center justify-center gap-4 py-11">
          <a href="#">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-teal-800 dark:hover:text-textGreen cursor-porinter hover:-translate-y-2 transition-all duration-300">
              <FaGithub />
            </span>
          </a>
          <a href="#">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-teal-800 dark:hover:text-textGreen cursor-porinter hover:-translate-y-2 transition-all duration-300">
              <FaLinkedin />
            </span>
          </a>
          <a href="#">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-teal-800 dark:hover:text-textGreen cursor-porinter hover:-translate-y-2 transition-all duration-300">
              <FaInstagram />
            </span>
          </a>
          <a href="#">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-teal-800 dark:hover:text-textGreen cursor-porinter hover:-translate-y-2 transition-all duration-300">
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
