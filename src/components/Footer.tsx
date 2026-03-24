"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const footerLinks = [
  {
    title: "Home",
    href: "/",
    links: [
      { label: "How?", href: "/#how?" },
      { label: "Focusing Dataset", href: "/#focusing-dataset" },
      { label: "SEA-CAN Open Data", href: "/#sea-can's-open-data-focus-group" },
      { label: "Related Resources", href: "/#related-resources" },
    ],
  },
  {
    title: "PEPs Guide",
    href: "/peps-guide",
    links: [
      { label: "Introduction", href: "/peps-guide#introduction" },
      {
        label: "Defining: Who is PEPs?",
        href: "/peps-guide#defining:-who-is-peps?",
      },
      {
        label: "Data Standard: Put PEPs Into a Structure",
        href: "/peps-guide#data-standard:-put-peps-into-a-structure",
      },
      { label: "What’s Next?", href: "/peps-guide#what's-next?" },
    ],
  },
  {
    title: "Data Catalog",
    href: "/data-catalog",
    links: [],
  },
  {
    title: "Related Resources",
    href: "/related-resources",
    links: [],
  },
];

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-black-01 text-white py-10 md:py-16 px-4 md:px-16">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:min-w-[220px]">
          <Image
            src="/icons/icon-navbar.svg"
            alt="logo"
            width={338.9416809082031}
            height={25.388898849487305}
          />
          <p className="text-b5 text-white mt-2">Copyright © 2026 WeVis</p>
        </div>

        <div className="md:flex hidden md:gap-16 gap-[7px] flex-1 justify-between">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p
                className="text-b5 font-bold mb-3 hover:text-orange-03 cursor-pointer"
                onClick={() => router.push(`${section.href}`)}
              >
                {section.title}
              </p>
              <ul className="flex flex-col gap-1">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-b5 text-white hover:text-orange-03 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
