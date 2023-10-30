"use client";
import Head from "next/head";
import Image from "next/image";
import AnimatedElement from "../components/AnimatedElement";
import { prompt } from "../app/fonts";
import "../public/animate.min.css";

const Hero = () => {
  return (
    <section className="hero h-full w-full">
      <div className="container px-4 py-5 mx-auto">
        <div className="h-full flex flex-col gap-8 lg:gap-0 lg:flex-row items-start md:items-center">
          <div className="h-full w-full lg:w-1/2">
            <img
              src="/images/khavatar.png"
              alt="Khalid Hosein"
              className="object-cover w-full"

            />
          </div>
          <div className="h-full w-full text-left lg:w-1/2 uppercase">
              <h1 className={`font-bold leading-none mb-2 ${prompt.className}`}>
                Hi, I'm{" "}
                <span className="text-ship-cove-700 font-extrabold">
                  Khalid
                </span>
              </h1>
              <div className="flex flex-col lg:flex-row sm:items-start xl:items-center">
                <h2
                  className={`font-bold leading-none animate-character ${prompt.className}`}
                >
                  Full Stack Web Developer
                </h2>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
