'use client'
import { Carousel } from "react-responsive-carousel";
import { thorium } from "../app/constants/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ResponsiveCarousel() {
  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={false}
      >
        {thorium
          .filter((project) => project.featured === true) // Filter projects with the 'featured' key set to true
          .map((project) => (
            <a href={project.link} key={project.link}>
              <div className="mockup-window h-[52rem] bg-ship-cove-100 border border-base-100 shadow-2xl">
                <p className="text-center -mt-5 mb-2">{project.name}</p>
                <div className="flex justify-center px-4 py-3 border-t border-base-300">
                  <img src={project.image} alt="" className="h-full w-full" />
                </div>
              </div>
            </a>
          ))}
      </Carousel>
    </div>
  );
}
