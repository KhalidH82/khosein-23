import React from 'react'
import { experiences } from "../app/constants/data";

console.log(experiences);

const Work = () => {
  return (
      <div className="container px-4 mx-auto">
      <div>
        <p></p>
        <h2>Current Work.</h2>
      </div>
        <div className="w-full h-full flex flex-col lg:flex-row gap-10 justify-center items-center py-16">
          {experiences.map((experience) => (
            <div className="card w-full h-full lg:w-1/2 lg:h-[300px] bg-gradient-to-b from-ship-cove-400 to-ship-cove-600  text-white">
              <div className="card-body">
                <h2 className="card-title">{experience.title}</h2>
                <p>{ experience.company_name }</p>
                <p>{ experience.date }</p>
                <div className="flex flex-wrap gap-2 mt-3">
                {experience.technologies.map((tech) => (
                    <div class="badge badge-outline" key={tech}>{ tech }</div>
                ))}
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-gradient-to-b from-ship-cove-400 to-ship-cove-600 text-white border-none">View Client Projects</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Work