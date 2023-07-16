import React from 'react'
import { tmarcom } from "../app/constants/data";

const TMarcom = () => {
  return (
    <div>
      <h2 className="mb-5">T2 Marketing Communications</h2>
      <div className="grid grid-cols-2 gap-8">
        {tmarcom.map((project) =>
          project.featured ? (
            <a href={project.link} key={project.link}>
              <div className="mockup-window h-[27rem] bg-base-100 border border-base-100 shadow-2xl">
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
      <div className='w-full flex flex-wrap gap-5'>
      {tmarcom.map((project) =>
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

export default TMarcom