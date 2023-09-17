import React from 'react'
import { thoriumExperience } from "../app/constants/data";
import Carousel from '/components/Carousel.js'
import { prompt, josefin } from "../app/fonts";

const Thorium = ({ projects }) => {
  return (
    <div className="w-full h-full mt-10">
      <div className="text-left">
        <p className={`uppercase ${josefin.className}`}>Agency</p>
        <h2 className={`font-bold ${prompt.className}`}>
          {thoriumExperience.company_name}.
        </h2>
        <span className={`uppercase ${josefin.className}`}>
          {thoriumExperience.date}
        </span>
      </div>
      <p className={`py-3 mt-10 text-xl ${josefin.className}`}>
        {thoriumExperience.description}
      </p>
      <div className="h-full w-full">
        <h2 className={`font-bold my-5 ${prompt.className}`}>Feature Contributions</h2>
        <Carousel projects={projects} />
      </div>
      <h2 className={`font-bold my-5 ${prompt.className}`}>Further Contributions</h2>
      <div className="w-full flex flex-wrap gap-5">
        {projects.map((project) =>
          project.featured === false ? (
            <a href={project.link} key={project.link}>
              <p className={`py-3 text-xl ${josefin.className}`}>{project.name}</p>
            </a>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Thorium