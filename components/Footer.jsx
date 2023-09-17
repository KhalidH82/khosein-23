import React from "react";
import { footerLinks } from '../app/constants/data'
const Footer = () => {
  return (
    <footer className="w-full h-[64px] bg-ship-cove-500 text-ship-cove-300">
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
