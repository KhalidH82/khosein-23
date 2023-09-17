import React from "react";
import { thorium, tmarcom } from "../../app/constants/data";
import Thorium from "@/components/Thorium";
import TMarcom from "@/components/TMarcom"

export const metadata = {
  title: "Agency Experience | Khalid Hosein",
  description: "My recent agency work.",
  keywords: "",
};

const page = () => {
  console.log(tmarcom);
  return (
    <section id="about" className="about w-full bg-ship-cove-200 pt-[88px]">
      <div className="container px-4 mx-auto py-16">
        <TMarcom projects={tmarcom} />
        <Thorium projects={thorium} />
      </div>
    </section>
  );
};

export default page;
