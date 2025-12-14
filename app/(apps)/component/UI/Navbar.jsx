import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <header className="w-full bg-[#202020] px-[25px] h-[60px]  flex items-center text-white">
        <nav className="flex justify-between items-center  w-[1150px] mx-auto">
          <h1 className="text-3xl">WorldAtlas</h1>
          <ul className=" flex items-centercd justify-end gap-[20px] text-[18px]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/country">Country</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
