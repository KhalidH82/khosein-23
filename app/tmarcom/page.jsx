import React from 'react'
import { tmarcom } from "../constants/data";
import TMarcom from "@/components/TMarcom";

export const metadata = {
  title: "Agency Experience | Khalid Hosein",
  description: "My recent agency work.",
  keywords: "",
};

const T2Marcom = () => {
  return (
    <div className="container px-4 mx-auto py-32">
      <TMarcom projects={tmarcom} />
    </div>
  );
}

export default T2Marcom