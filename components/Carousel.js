"use client";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { prompt } from "../app/fonts";

export default function ResponsiveCarousel({ projects }) {
  // Customized arrow component for the previous slide
  const CustomPrevArrow = (props) => (
    <button onClick={props.onClick} className="custom-btn-left">
      <img
        src="/images/arrow-left.svg"
        className="w-6 h-6 sm:h-12 sm:w-12 object-contain px-5"
      />
    </button>
  );

  // Customized arrow component for the next slide
  const CustomNextArrow = (props) => (
    <button onClick={props.onClick} className="custom-btn-right">
      <img
        src="/images/arrow-right.svg"
        className="w-6 h-6 sm:h-12 sm:w-12 object-contain px-5"
      />
    </button>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {projects
          .filter((project) => project.featured === true) // Filter projects with the 'featured' key set to true
          .map((project) => (
            <Link href={project.link} key={project.link}>
              <div className="mockup-window bg-ship-cove-100 border border-base-100 shadow-2xl">
                <p className={`text-center -mt-5 mb-2 uppercase ${prompt.className}`}>{project.name}</p>
                <div className="flex justify-center px-4 py-3 border-t border-base-300">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
}
