import React from "react";
import Link from "next/link";
import { footerLinks } from '../app/constants/data'

const Footer = () => {
  return (
    <footer className="w-full h-[64px] text-ship-cove-300 glass">
      <div className="container px-4 mx-auto h-full w-full flex justify-center items-center gap-5">
        {footerLinks.map((link) => (
          <Link href={link.link}>
            <img
              src={link.icon.src}
              alt={"Khalid Hosein" + link.title}
              className="h-8 w-8"
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
