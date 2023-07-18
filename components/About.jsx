"use client";
import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../app/constants/data";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const About = () => {
  return (
      <div className="w-full h-full container px-4 mx-auto py-16">
        <div>
          <p>Introduction</p>
          <h2>About me.</h2>
          <p className="text-xl mt-5">
            Welcome! My name is Khalid, and I am a results-oriented full-stack
            web developer specializing in creating dynamic marketing
            applications. With a unique blend of technical expertise and
            marketing acumen, I bring extensive experience in working with
            JavaScript and a deep proficiency in frameworks like React/Next.js
            and Vue/Nuxt.js. I have a strong command of CMS systems such as
            Contentful, Directus, Strapi, and Nuxt/Content, allowing me to
            efficiently manage and deliver content-driven projects. My skill set
            also extends to working in a JAMstack architecture, leveraging the
            power of JavaScript, APIs, pre-built markup, and Tailwind CSS to
            create high-performing and scalable web applications. With a
            meticulous attention to detail and a passion for staying up-to-date
            with the latest industry trends, I am dedicated to providing
            seamless and innovative solutions that help businesses thrive in the
            digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-32">
          {services.map((service) => (
            <Tilt options={defaultOptions} key={service.title}>
              <div
                className="card custom-card bg-base-100 shadow-xl"
                key={service.title}
              >
                <figure className="px-10 pt-10">
                  <img
                    src={service.icon.src}
                    alt=""
                    className="rounded-xl w-16 h-16"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <div className="card-actions">
                    <h2 className="card-title">{service.title}</h2>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        <div className="w-full h-full mt-10 flex">
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
        <div className="chat chat-start">
          <div className="chat-bubble">
            <p>Scroll down to see some of my recent work.</p>
          </div>
        </div>
        </div>
      </div>
  );
};

export default About;
