"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const container = useRef();
  const smallContainer = useRef();
  useGSAP(
    () => {
      gsap.from(".box", {
        y: -50,
        duration: 0.5,
        delay: 0,
        stagger: 0.5,
      });
    },
    { scope: container }
  );

  return (
    <>
      <div ref={smallContainer}>
        {/* Navbar */}
        <nav className=" relative lg:hidden block">
          <div className=" text-right ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-right text-white focus:outline-none"
            >
              Menu
            </button>
          </div>
        </nav>

        {/* Modal */}
        {isOpen && (
          <div className="fixed transition-transform inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md w-screen h-screen max-w-xl">
              <div className="flex justify-end">
                <button
                  onClick={handleToggle}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  &times;
                </button>
              </div>

              {/* Navigation links */}
              <ul className="mt-4">
                <li>
                  <Link
                    href="#"
                    className="link text-gray-700 text-5xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link text-gray-700 text-5xl font-semibold hover:text-gray-900 block py-2"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link text-gray-700 text-5xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link text-gray-700 text-5xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link text-gray-700 text-5xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <nav ref={container} className="py-6 mx-auto hidden lg:block">
        <div className="lg:flex text-xl font-semibold justify-center gap-10">
          <Link className="box" href={"/"}>
            Home
          </Link>
          <Link className="box" href={"/about"}>
            About
          </Link>
          <Link className="box" href={"/services"}>
            Services
          </Link>
          <Link className="box" href={"/projects"}>
            Projects
          </Link>
          <Link className="box" href={"/contact"}>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
