'use client'
import React from "react";
import Marquee from "react-fast-marquee";
import AnimatedElement from "../components/AnimatedElement";
import { prompt, josefin } from "../app/fonts";
import { technologies } from "../app/constants/data";

const Technologies = () => {
  const marquee = {
    width: "100%", // CamelCase property names
  };

  return (
    <div className="w-full h-full container px-4 mx-auto pt-16 pb-8">
      <div className="mb-10 text-right">
        <AnimatedElement animationType="fadeInUp">
          <p className={`uppercase ${josefin.className}`}>Experience</p>
          <h2 className={`mb-10 font-bold ${prompt.className}`}>
            Technologies.
          </h2>
          <div className="mx-auto">
            <Marquee autoFill>
              {technologies.map((tech) => (
                <img
                  src={tech.icon.src}
                  alt={tech.name}
                  className="h-28 w-28 object-contain px-5"
                />
              ))}
            </Marquee>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default Technologies;
