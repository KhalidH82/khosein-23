import React from "react";
import Carousel from "/components/Carousel.js";

const TMarcom = ({ projects }) => {
  return (
    <div className="w-full h-full mt-10">
      <div className="text-right">
        <p className="uppercase">Agency</p>
        <h2 className="mb-10">T2 Marketing Communications.</h2>
        <span>June 20 - Sept 20 / - Aug 22 - Present</span>
      </div>
      <p className="py-3">
        As a full stack web developer at an content marketing agency, I
        specialize in crafting cutting-edge marketing websites for global
        industrial technology firms. My role revolves around designing and
        constructing SEO-optimized, content-driven websites that seamlessly
        integrate with various CMS platforms like Nuxt Content and Directus.
        Leveraging the power of Vue/Nuxt 3, Tailwind, Node.js, and the
        efficiency of Netlify, I architect headless solutions that empower both
        internal and external stakeholders to effortlessly manage content
        throughout their digital platforms. Collaborating within a dynamic
        cross-functional team comprising content creators, email marketers, and
        designers, I thrive on bringing innovation and precision to every
        project, ultimately elevating our clients' digital presence.
      </p>
      <div className="h-full w-full">
        <Carousel projects={projects} />
      </div>
      <h2 className="my-5">Further Contributions</h2>
      <div className="w-full flex flex-wrap gap-5">
        {projects.map((project) =>
          project.featured === false ? (
            <a href={project.link} key={project.link}>
              <p>{project.name}</p>
            </a>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TMarcom;
