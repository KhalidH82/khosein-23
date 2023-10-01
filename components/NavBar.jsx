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
      className={`navbar fixed top-0 left-0 w-full transition-colors duration-100 ease-in-out z-50 ${
        scrolled
          ? "bg-ship-cove-500 text-ship-cove-100"
          : "bg-transparent text-ship-cove-500"
      }`}
    >
      <div className="container px-4 py-2 mx-auto">
        <div className="navbar-start flex">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80"
            >
              {navLinks.map((link) =>
                link.sublink ? (
                  <li tabIndex={0} className={prompt.className}>
                    <details>
                      <summary className="uppercase text-ship-cove-600">
                        {link.title}
                      </summary>
                      <ul className="p-2">
                        {link.sublink.map((agency) => (
                          <li>
                            <a
                              href={agency.link}
                              className="uppercase text-ship-cove-600"
                            >
                              {agency.agency}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={link.id} className={prompt.className}>
                    {" "}
                    <a
                      href={`${link.link}`}
                      className="link-underline link-underline-black border-none hover:bg-transparent uppercase text-ship-cove-600"
                      target={link.title === "Resume" ? "_blank" : "_self"}
                    >
                      {link.title}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* <a className="logo" href="/" target="_self">
          <Image
            src="/images/1.png"
            width={50}
            height={50}
            alt="Khalid Hosein"
          />
        </a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) =>
              link.sublink ? (
                <li tabIndex={0} className={prompt.className}>
                  <details>
                    <summary className="uppercase">{link.title}</summary>
                    <ul className="p-2 bg-ship-cove-100">
                      {link.sublink.map((agency) => (
                        <li>
                          <a
                            href={agency.link}
                            className="uppercase text-ship-cove-600"
                          >
                            {agency.agency}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={link.id} className={prompt.className}>
                  {" "}
                  <a
                    href={`${link.link}`}
                    className="link-underline link-underline-black border-none hover:bg-transparent uppercase"
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
            <div className="md:flex hidden justify-end">
              <div className="chat chat-end">
                <div className="chat-bubble bg-ship-cove-500">
                  <p
                    className={`text-base leading-1 text-ship-cove-100 ${josefin.className}`}
                  >
                    Hello! It's nice to meet you!
                  </p>
                </div>
              </div>
              <div className="avatar online h-10">
                <div className="hover:ring-4">
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
    </div>
  );
};

export default NavBar;
