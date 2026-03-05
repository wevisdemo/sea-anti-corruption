"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  { href: "/", label: "PEPs Guide" },
  { href: "/", label: "Data Catalog" },
  { href: "/", label: "Related Resources" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-orange-01 md:px-8 px-4 flex items-center justify-between h-[58px] w-full sticky top-0 z-50">
        <Image
          src="/icons/icon-navbar.svg"
          alt="logo"
          width={338.9416809082031}
          height={25.39}
          className="w-[200px] md:w-[338.9416809082031px] h-[14.98px] md:h-[25.39px] md:mt-2"
        />
        <div className="hidden items-center gap-8 px-4 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <p className="text-white text-h11 font-bold hover:underline">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        <button
          className="flex items-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger"
            width={38}
            height={38}
            className="w-[38px] h-[38px]"
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-orange-01 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-6 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              <p className="text-white text-h11 font-bold hover:underline">
                {link.label}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
