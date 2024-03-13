"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const router = useRouter();
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
      gsap.to(container.current, {
        backgroundColor: "#ffffff",
        scrollTrigger: {
          trigger: container.current,
          start: "top -50%",
          end: "bottom bottom",
          scrub: 2,
        },
      });
      gsap.from(smallContainer.current, {
        y: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: smallContainer.current,
          start: "top -80%",
          end: "bottom 50%",
          scrub: 2,
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <div className="">
        {/* Navbar */}
        <nav className="md:hidden block ">
          <div className="">
            <button
              ref={smallContainer}
              onClick={() => setIsOpen(!isOpen)}
              className="p-6 fixed top-0 left-0 w-full z-10 text-right text-white focus:outline-none"
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
      <nav
        ref={container}
        className="py-6 big mx-auto hidden md:block fixed top-0 left-0 w-full z-10"
      >
        <div className="md:flex text-xl font-semibold justify-center gap-10">
          <Link
            className={`${router === "/" ? "text-red-500" : ""}`}
            href={"#"}
          >
            Home
          </Link>
          <Link
            className={`${router === "/#about" ? "text-red-500" : ""}`}
            href={"/#about"}
          >
            About
          </Link>
          <Link
            className={`${router === "/#services" ? "text-red-500" : ""}`}
            href={"#services"}
          >
            Services
          </Link>
          <Link
            className={`${router === "/#projects" ? "text-red-500" : ""}`}
            href={"#projects"}
          >
            Projects
          </Link>
          <Link
            className={`${router === "/#contact" ? "text-red-500" : ""}`}
            href={"#contact"}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
