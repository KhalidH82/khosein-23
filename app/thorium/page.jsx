import React from 'react'
import { thorium } from "../constants/data";
import Thorium from "@/components/Thorium";

export const metadata = {
  title: "Agency Experience | Khalid Hosein",
  description: "My recent agency work.",
  keywords: "",
};

const ThoriumDigital = () => {
  return (
    <div className="container px-4 mx-auto py-32">
      <Thorium projects={thorium} />
    </div>
  );
}

export default ThoriumDigital