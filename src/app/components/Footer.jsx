import React from "react";
import Logo from "../../../public/logo.svg"
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-start justify-between">
        <span className="text-2xl md:text-5xl text-white font-semibold">HAZ</span>

      </div>
    </footer>
  );
};

export default Footer;
