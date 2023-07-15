import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { services } from "../app/constants/data";
 
const TechPanel = () => {
  return (
    <div className="h-screen">
      <div className="container px-4 mx-auto py-16">
        <div>
          <p>Introduction</p>
          <h2>Overview.</h2>
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
        <div className="grid grid-cols-3 gap-16 mt-32">
          {services.map((service) => (
            <div
              className="card w-96 bg-base-100 shadow-xl"
              key={service.title}
            >
              <figure className="px-10 pt-10">
                <img src={service.icon.src} alt="" className="rounded-xl w-16 h-16" />
              </figure>
              <div className="card-body items-center text-center">
                <div className="card-actions">
                  <h2 className="card-title">{service.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechPanel;
