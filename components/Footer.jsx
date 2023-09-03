import React from "react";
import { footerLinks } from '../app/constants/data'

console.log(footerLinks)
const Footer = () => {
  return (
    <footer className="w-full h-[64px] bg-ship-cove-600 text-ship-cove-100">
      <div className="h-full w-full flex justify-center items-center gap-5">
        {footerLinks.map((link) => (
          <a href={link.link}>
            <img
              src={link.icon.src}
              alt={"Khalid Hosein" + link.title}
              className="h-8 w-8"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
