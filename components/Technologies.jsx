'use client'
import React from "react";
import Marquee from "react-fast-marquee";
import { prompt, josefin } from "../app/fonts";
import { technologies } from "../app/constants/data";

const Technologies = () => {
  const marquee = {
    width: "100%", // CamelCase property names
  };

  return (
    <div className="w-full h-full container px-4 mx-auto py-5">
      <div className="mb-5 text-right">
          <p className={`uppercase ${josefin.className}`}>Experience</p>
          <h2 className={`mb-5 font-bold ${prompt.className}`}>
            Technologies.
          </h2>
          <div className="mx-auto">
            <Marquee autoFill>
              {technologies.map((tech) => (
                <img
                  src={tech.icon.src}
                  alt={tech.name}
                  className="w-20 h-20 md:h-28 md:w-28 object-contain px-5"
                  key={tech.name}
                />
              ))}
            </Marquee>
          </div>
      </div>
    </div>
  );
};

export default Technologies;
