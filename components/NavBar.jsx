'use client'
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div>
      <div
        className={`navbar fixed top-0 left-0 w-full py-2 transition-colors duration-100 ease-in-out z-50 ${
          scrolled
            ? "bg-ship-cove-600 text-ship-cove-100"
            : "bg-transparent text-ship-cove-600"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase font-bold text-base tracking-tight"
            >
              <li>
                <a href="/about">About Me</a>
              </li>
              <li>
                <a>Current Work</a>
                <ul className="p-2 text-ship-cove-900">
                  <li>
                    <a>T2 Marketing Communications</a>
                  </li>
                  <li>
                    <a>Thorium Digital</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact</a>
              </li>
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
          <a className="logo" href="/" target="_self">
            <Image
              src="/images/1.png"
              width={50}
              height={200}
              alt="Khalid Hosein"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-bold text-base tracking-tight">
            <li>
              <a
                href="/about"
                className="link-underline link-underline-black border-none hover:bg-transparent"
              >
                About Me
              </a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="hover:bg-transparent">Current Work</summary>
                <ul className="p-2 text-ship-cove-900">
                  <li>
                    <a>T2 Marketing Communications</a>
                  </li>
                  <li>
                    <a>Thorium Digital</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="link-underline link-underline-black border-none hover:bg-transparent">
                Contact
              </a>
            </li>
            <li>
              <a
                className="link-underline link-underline-black border-none hover:bg-transparent"
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
          <div className={`chat chat-end ${scrolled ? "hidden" : "block"}`}>
            <div className="chat-bubble">
              <p>
                Hello! It's nice to meet you!
              </p>
            </div>
          </div>
          <div className="avatar online">
            <div className="w-12 rounded-full hover:ring-4">
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
  );
};

export default NavBar;
