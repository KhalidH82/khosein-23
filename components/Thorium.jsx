import React from 'react'
import { thoriumExperience } from "../app/constants/data";
import Carousel from '/components/Carousel.js'
import { prompt, josefin } from "../app/fonts";

const Thorium = ({ projects }) => {
  return (
    <div className="w-full h-full mt-10">
      <div className="text-left">
        <p className={`uppercase ${josefin.className}`}>Agency</p>
        <a href={thoriumExperience.company_link}>
          <h2 className={`font-bold ${prompt.className}`}>
            {thoriumExperience.company_name}.
          </h2>
        </a>
        <span className={`uppercase ${josefin.className}`}>
          {thoriumExperience.date}
        </span>
      </div>
      <p className={`py-3 mt-10 text-xl ${josefin.className}`}>
        {thoriumExperience.description}
      </p>
      <div className="py-8 w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <div className="">
            <p className={`text-xl mb-5 ${prompt.className}`}>Contributions</p>
          </div>
          <div className="">
            {projects.map((project) =>
              project.featured === false ? (
                <a
                  href={project.link}
                  key={project.link}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <p className={`text-lg ${josefin.className}`}>
                    {project.name}
                  </p>
                  <img src="/images/arrow-right.svg" className="h-4" />
                </a>
              ) : null
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <div
            tabIndex={1}
            className="collapse collapse-arrow border border-ship-cove-300 bg-ship-cove-200 mt-5"
          >
            <div className="collapse-title">
              <p className={`text-xl ${prompt.className}`}>Technologies</p>
            </div>
            <div className="collapse-content">
              {thoriumExperience.technologies.map((tech) => (
                <p className={`text-base ${josefin.className}`}>{tech}</p>
              ))}
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-arrow border border-ship-cove-300 bg-ship-cove-200"
          >
            <div className="collapse-title">
              <p className={`text-xl ${prompt.className}`}>Productivity</p>
            </div>
            <div className="collapse-content">
              {thoriumExperience.productivity.map((tool) => (
                <p className={`text-base ${josefin.className}`}>{tool}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <h2 className={`font-bold my-5 ${prompt.className}`}>
          Feature Contributions
        </h2>
        <Carousel projects={projects} />
      </div>
    </div>
  );
}

export default Thorium