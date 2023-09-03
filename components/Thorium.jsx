import React from 'react'
import { thorium } from "../app/constants/data";

const Thorium = () => {
  return (
    <div className="mt-10">
      <div className="text-left">
        <p className="uppercase">Agency</p>
        <h2>Thorium Digital.</h2>
        <span>Jan 22 - July 23</span>
      </div>
      <p className="my-3">
        As a web developer at Thorium Digital, I take pride in developing and
        building user-friendly multi-locale web applications that harness the
        power of cutting-edge technologies. With a diverse skill set, I utilize
        HTML, CSS, and JavaScript to create seamless and dynamic user
        interfaces. My proficiency in jQuery, React/Next.js, and Node/Express
        enables me to craft interactive and engaging web experiences. I have
        hands-on experience with PHP/Laravel, Angular, TypeScript, and Tailwind
        CSS, ensuring the development of scalable and performant applications.
        At Thorium Digital, I have been actively involved in a variety of
        responsibilities. From content updates to building new UI features, I
        work diligently to enhance mobile-responsive layouts and templates, all
        while refactoring existing code to ensure flexibility, sustainability,
        and reusability across 40+ multi-locale sites.
      </p>
      <div>
          {thorium.map((project) =>
            project.featured ? (
              <a href={project.link} key={project.link}>
                <div className="mockup-window h-full xl:h-[29rem] bg-base-100 border border-base-100 shadow-2xl">
                  <p className="text-center -mt-5 mb-2">{project.name}</p>
                  <div className="flex justify-center px-4 py-3 border-t border-base-300">
                    <img src={project.image} alt="" className="" />
                  </div>
                </div>
              </a>
            ) : null
          )}
      </div>
      <h2 className="my-5">Further Contributions</h2>
      <div className="w-full flex flex-wrap gap-5">
        {thorium.map((project) =>
          project.featured === false ? (
            <a href={project.link} key={project.link}>
              <p>{project.name}</p>
            </a>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Thorium