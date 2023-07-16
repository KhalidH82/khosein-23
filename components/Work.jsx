'use client'
import React, { useState } from 'react'
import Thorium from './Thorium';
import TMarcom from './TMarcom'
import { experiences } from "../app/constants/data";

const Work = () => {
  const [company, setcompany] = useState(null)
  
  const handleSwitch  = (x) => {
    setcompany(x)
  }

  return (
    <div>
      <div className="container px-4 mx-auto pb-16">
      <div>
        <p></p>
        <h2>Current Work.</h2>
      </div>
        <div className="w-full h-full flex flex-col lg:flex-row gap-10 justify-center items-center py-16">
          {experiences.map((experience) => (
            <div className="card w-full h-[500px] lg:w-1/2 text-ship-cove-800" key={experience.company_name}>
              <div className="card-body">
                <h2 className="card-title">{experience.title}</h2>
                <p>{ experience.company_name }</p>
                <p>{ experience.date }</p>
                <p className='mt-5'>Technologies</p>
                <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                    <div className="badge badge-outline p-3 hover:bg-gradient-to-br hover:from-ship-cove-400 hover:to-ship-cove-600 hover:border-white hover:text-white" key={tech}>{ tech }</div>
                ))}
                </div>
                <p className='mt-5'>Productivity</p>
                <div className="flex flex-wrap gap-2">
                {experience.productivity.map((tool) => (
                    <div className="badge badge-outline p-3 hover:bg-gradient-to-br hover:from-ship-cove-400 hover:to-ship-cove-600 hover:border-white hover:text-white" key={tool}>{ tool }</div>
                ))}
                </div>
                <div className="card-actions justify-end mt-10">
                  <button className="btn bg-gradient-to-b from-ship-cove-400 to-ship-cove-600 text-white border-none" onClick={() => handleSwitch(experience.company_name)}>View Client Projects</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {company ===  'T2 Marketing Communications' ? <TMarcom /> : company === 'Thorium Digital' ?  <Thorium /> : null }
      </div>
    </div>
  );
}

export default Work