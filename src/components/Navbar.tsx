import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-orange-01 md:px-8 px-4 flex items-center justify-between h-[58px] w-full sticky top-0 z-50">
      <Image
        src="/icons/icon-navbar.svg"
        alt="logo"
        width={338.9416809082031}
        height={25.39}
        className="w-[200px] md:w-[338.9416809082031px] h-[14.98px] md:h-[25.39px] md:mt-2"
      />
      <div className="hidden items-center gap-8 px-4 md:flex">
        <Link href="/">
          <p className="text-white text-h11 font-bold hover:underline">
            PEPs Guide
          </p>
        </Link>
        <Link href="/">
          <p className="text-white text-h11 font-bold hover:underline">
            Data Catalog
          </p>
        </Link>
        <Link href="/">
          <p className="text-white text-h11 font-bold hover:underline">
            Related Resources
          </p>
        </Link>
      </div>
      <div className="flex items-center md:hidden">
        <Image
          src="/icons/hamburger.svg"
          alt="hamburger"
          width={38}
          height={38}
          className="w-[38px] h-[38px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
