'use client'
import React, { useState, useEffect, useRef } from "react";
import { PopupButton } from "react-calendly";
import { slabo, khula, montserrat } from "../app/fonts";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section className="hero h-screen">
      <div className="container px-4 mx-auto">
        <div className="h-full flex flex-col gap-10 lg:gap-0 lg:flex-row items-center">
          <div className="h-full w-full lg:w-1/2">
            <img src="/images/khavatar.png" alt="" />
          </div>
          <div className="h-full w-full text-left lg:w-1/2 uppercase">
            <h1 className={`font-bold ${slabo.className}`}>
              Hi, I'm{" "}
              <span className="text-ship-cove-700 font-extrabold">Khalid</span>
            </h1>
            <div className="flex flex-col lg:flex-row sm:items-start xl:items-center gap-5">
              <h2 className={`font-bold animate-character ${khula.className}`}>
                Full Stack Web Developer
              </h2>
              <div className="animate-bounce">
                <a href="#about">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      <div ref={modalRef}></div>
      </div>
      <div className="fixed right-3 bottom-3 btn rounded-full bg-ship-cove-600 text-white hover:bg-ship-cove-800 z-50">
      <PopupButton
        url="https://calendly.com/khalid-hosein/get-to-know-me"
        rootElement={modalRef.current}
        text="Let's Chat!"
        textColor="#fff"
        color="#707ec2"
      />
      </div>
    </section>
  );
};

export default Hero;
