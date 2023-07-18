'use client'
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "../app/constants/data";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div
      className={`navbar fixed top-0 left-0 w-full py-2 transition-colors duration-100 ease-in-out z-50 ${
        scrolled
          ? "bg-ship-cove-600 text-ship-cove-100"
          : "bg-transparent text-ship-cove-600"
      }`}
    >
      <div className="navbar-start">
        <a className="logo" href="/" target="_self">
          <Image
            src="/images/1.png"
            width={50}
            height={50}
            alt="Khalid Hosein"
          />
        </a>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="#4b5588"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content flex flex-col gap-2 mt-3 z-[1] p-2 shadow bg-ship-cove-600 rounded-box w-52 uppercase font-bold text-base text-white tracking-tight"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                {" "}
                <a
                  href={`#${link.id}`}
                  className="link-underline link-underline-black border-none hover:bg-transparent"
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/K.Hosein.pdf"
                alt="Khalid Hosein resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase font-bold text-base tracking-tight">
          {navLinks.map((link) => (
            <li key={link.id}>
              {" "}
              <a
                href={`#${link.id}`}
                className="link-underline link-underline-black border-none hover:bg-transparent"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/K.Hosein.pdf"
              alt="Khalid Hosein resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className={`${scrolled ? "hidden" : "block"}`}>
          <div className="md:flex hidden">
            <div className="chat chat-end">
              <div className="chat-bubble">
                <p>Hello! It's nice to meet you!</p>
              </div>
            </div>
            <div className="avatar online">
              <div className="rounded-full hover:ring-4">
                <Image
                  className="rounded-full"
                  src="/images/khavatar.png"
                  width={50}
                  height={200}
                  alt="Khalid Hosein"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
