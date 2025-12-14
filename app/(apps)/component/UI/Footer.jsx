"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#202020] px-[25px] h-[60px] flex items-center text-white">
      <div className="w-[1150px] mx-auto flex justify-center md:justify-between items-center">
        <p className="text-[16px] text-gray-300">
          © {new Date().getFullYear()} WorldAtlas. All rights reserved.
        </p>

        <p className="hidden md:block text-[14px] text-gray-400">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
