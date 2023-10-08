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
          <h2 className={`font-bold ${prompt.className}`}>
            {thoriumExperience.company_name}.
          </h2>
        </Link>
        <span className={`uppercase ${josefin.className}`}>
          {thoriumExperience.date}
        </span>
      </div>
      <p className={`py-3 mt-10 text-xl ${josefin.className}`}>
        {thoriumExperience.description}
      </p>

      <div className="h-full w-full mt-10">
        <div className="h-full w-full flex flex-col gap-10 xl:grid xl:grid-cols-3 xl:gap-20">
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
                  <p className={`text-lg ${josefin.className}`}>
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
            <div className="grid xl:grid-cols-2">
              {thoriumExperience.technologies.map((tech) => (
                <p className={`text-lg ${josefin.className}`}>{tech}</p>
              ))}
            </div>
          </div>

          <div className="col-span1">
            <div className="mb-1">
              <h2 className={`font-bold ${prompt.className}`}>Productivity</h2>
            </div>
            <div>
              {thoriumExperience.productivity.map((tool) => (
                <p className={`text-lg ${josefin.className}`}>{tool}</p>
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