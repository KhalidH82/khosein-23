"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "../app/constants/data";
import { prompt, josefin } from "../app/fonts";

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
      className={`navbar fixed top-0 left-0 w-full py-2 transition-colors duration-100 ease-in-out z-50 h-[64px] ${
        scrolled
          ? "bg-ship-cove-600 text-ship-cove-100"
          : "bg-transparent text-ship-cove-600"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80"
          >
            {navLinks.map((link) =>
              link.sublink ? (
                <li tabIndex={0}>
                  <details>
                    <summary className="uppercase font-extrabold text-ship-cove-600">
                      {link.title}
                    </summary>
                    <ul className="p-2">
                      {link.sublink.map((agency) => (
                        <li>
                          <a
                            href={agency.link}
                            className="uppercase font-extrabold text-ship-cove-600"
                          >
                            {agency.agency}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={link.id}>
                  {" "}
                  <a
                    href={`#${link.id}`}
                    className="link-underline link-underline-black border-none hover:bg-transparent uppercase font-extrabold text-ship-cove-600"
                    target={link.title === "Resume" ? "_blank" : "_self"}
                  >
                    {link.title}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="w-full flex">
        <a className="logo" href="/" target="_self">
          <Image
            src="/images/1.png"
            width={50}
            height={50}
            alt="Khalid Hosein"
          />
        </a>
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
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) =>
            link.sublink ? (
              <li tabIndex={0}>
                <details>
                  <summary className={`uppercase ${josefin.className}`}>
                    {link.title}
                  </summary>
                  <ul className="p-2 bg-ship-cove-100">
                    {link.sublink.map((agency) => (
                      <li>
                        <a
                          href={agency.link}
                          className={`uppercase text-ship-cove-600 ${josefin.className}`}
                        >
                          {agency.agency}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={link.id}>
                {" "}
                <a
                  href={`#${link.id}`}
                  className={`link-underline link-underline-black border-none hover:bg-transparent uppercase ${josefin.className}`}
                  target={link.title === "Resume" ? "_blank" : "_self"}
                >
                  {link.title}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div className={`${scrolled ? "hidden" : "block"}`}>
          <div className="md:flex hidden">
            <div className="chat chat-end mt-2">
              <div className="chat-bubble">
                <p>Hello! It's nice to meet you!</p>
              </div>
            </div>
            <div className="avatar online h-10 mt-2">
              <div className="hover:ring-4 relative">
                <img
                  className="rounded-full"
                  src="/images/khavatar.png"
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
