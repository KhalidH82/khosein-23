import React from "react";

export const metadata = {
  title: "About Me | Khalid Hosein",
  description: "A little but about my professional and personal life.",
  keywords: "",
};

const page = () => {
  return (
    <section
      id="about"
      className="about w-full h-screen bg-ship-cove-200 pt-[88px]"
    >
      <div className="container px-4 mx-auto py-16">
        <h2 className="uppercase font-bold mb-5">About</h2>
        <p>
          Hi there! My name is Khalid, and I am a highly innovative Full Stack
          Web Developer with over three years of experience in the field. I have
          a passion for travel, cooking, and cycling, and I have a background in
          the hospitality industry where I gained valuable experience working
          with people and providing excellent customer service. In my current
          role, I enjoy building modern websites using a Jamstack architecture
          and finding creative solutions to complex problems. I am skilled in
          both front-end and back-end technologies, and have a diverse range of
          experience creating scalable applications using various tech stacks. I
          have expertise in React.js, Next.js, Netlify, various CMS systems, and
          I am proficient in implementing core back-end tasks such as 3rd party
          API integration and REST API development. I have a strong set of
          skills and competencies, including full stack development, website
          functionality, layout improvement, content creation, project
          management, user acceptance testing, agile methodology, SEO and Google
          Analytics, and stakeholder relations. When I'm not working, you can
          find me planning my next adventure, trying out new recipes in the
          kitchen, or hitting the trails on my bike.
        </p>
      </div>
    </section>
  );
};

export default page;
