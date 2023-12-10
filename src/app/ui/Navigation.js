"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NGO from "/public/images-ngo/zilesimenye.jpg";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";


const navigationMenu = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about",
    label: "About Us",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#donation",
    label: "Donations",
  },
  {
    href: "#contact",
    label: "Contact Us",
  },
];

const Navigation = () => {
  const donateSection = () => {
    window.location.href = '#donation';
  };

  const [navOpen, setNavOpen] = useState(false);
  const [dimension, setDimensions] = useState({
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });
  

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      // when the window resize we set the navOpen false
      if (dimension.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize());
    };
  });

  return (
    <>
      <motion.header
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="py-7"
      >
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <div>
             <Link href="/">
              <span className="text-primary text-xl">
                  𝒁𝒊𝒍𝒊𝒔𝒊𝒎𝒆𝒏𝒚𝒆 𝑬𝒍𝒅𝒆𝒓𝒍𝒚 𝑯𝒐𝒎𝒆
              </span>
             </Link>
            </div>
            {/* Navigation Menu */}
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, idx) => (
                  <li key={item.label} className="hover:text-primary">
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setNavOpen(false);
                        const targetElement = document.getElementById(
                          item.href.substring(1)
                        );
                        targetElement.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* CTA */}
            <div>
              <Link
                href="#donation"
                onClick={donateSection}
                className="px-4 py-4 bg-primary text-white rounded-lg hidden lg:inline-block hover:bg-blue-900"
              >
                Donate
              </Link>

              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <HiBars3 className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* for mobile/tablet */}
      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden fixed w-screen z-[9999]"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuHandler}
        ></div>

        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              className="flex items-center space-x-3"
              onClick={mobileMenuHandler}
            >
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
            {navigationMenu.map((item, idx) => (
  <li key={item.label}>
    <Link
      href={item.href}
      onClick={(e) => {
        e.preventDefault();
        setNavOpen(false);
        const targetElement = document.getElementById(item.href.substring(1));
        targetElement.scrollIntoView({ behavior: "smooth" });
      }}
      className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
    >
              <span>{item.label}</span>
              <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                <BiChevronRight className="text-xl" />
              </span>
            </Link>
          </li>
        ))}

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
