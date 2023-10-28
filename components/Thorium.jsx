import React from 'react'
import Link from 'next/link'
import { thoriumExperience } from "../app/constants/data";
import Carousel from '/components/Carousel.js'
import { prompt, josefin } from "../app/fonts";

const Thorium = ({ projects }) => {
  return (
    <div className="w-full h-full">
      <div className="text-left">
        <p className={`uppercase ${josefin.className}`}>Agency</p>
        <Link href={thoriumExperience.company_link}>
          <h2 className={`font-bold leading-none ${prompt.className}`}>
            {thoriumExperience.company_name}.
          </h2>
        </Link>
        <span className={`uppercase ${josefin.className}`}>
          {thoriumExperience.date}
        </span>
      </div>
      <p className={`py-3 mt-5 ${josefin.className}`}>
        {thoriumExperience.description}
      </p>

      <div className="h-full w-full mt-5">
        <div className="h-full w-full flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-20">
          <div className="col-span1">
            <div className="mb-1">
              <h2 className={`font-bold ${prompt.className}`}>Contributions</h2>
            </div>
            <div>
              {projects.map((project) => (
                <Link
                  href={project.link}
                  key={project.link}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <p className={` ${josefin.className}`}>
                    {project.name}
                  </p>
                  <img src="/images/arrow-right.svg" className="h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span1">
            <div className="mb-1">
              <h2 className={`font-bold ${prompt.className}`}>Technologies</h2>
            </div>
            <div className="grid lg:grid-cols-2">
              {thoriumExperience.technologies.map((tech) => (
                <p className={` ${josefin.className}`}>{tech}</p>
              ))}
            </div>
          </div>

          <div className="col-span1">
            <div className="mb-1">
              <h2 className={`font-bold ${prompt.className}`}>Productivity</h2>
            </div>
            <div>
              {thoriumExperience.productivity.map((tool) => (
                <p className={` ${josefin.className}`}>{tool}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="h-full w-full mt-16">
          <h2 className={`font-bold mb-8  text-center ${prompt.className}`}>
            Feature Projects
          </h2>
          <div className="w-full flex justify-center">
            <Carousel projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thorium