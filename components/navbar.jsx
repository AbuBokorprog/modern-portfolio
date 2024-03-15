"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
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
  const navRef = useRef();
  const smallContainer = useRef();

  useGSAP(() => {
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
        start: "top -10%",
        end: "bottom bottom",
        scrub: 2,
      },
    });
    gsap.from(smallContainer.current, {
      y: -50,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: smallContainer.current,
        start: "top -80%",
        end: "bottom 50%",
        scrub: 2,
      },
    });
  }, [container, smallContainer]);

  const containerNav = {
    hidden: { x: -100, opacity: 0 },
    show: {
      opacity: 1,
      x: 50,
      transition: {
        duration: 2,
        opacity: 1,
        staggerChildren: 0.5,
        ease: "linear",
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div>
      <div className="">
        {/* Navbar */}
        <nav className="md:hidden block ">
          <div className="fixed top-0 left-0 w-full z-10 text-right">
            <button
              ref={smallContainer}
              onClick={handleToggle}
              className="p-4 focus:outline-none"
            >
              <IoMdMenu className="w-16 h-16 text-blue-400" />
            </button>
          </div>
        </nav>

        {/* Modal */}
        {isOpen && (
          <div className="fixed transition-transform inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div
              ref={navRef}
              onClick={handleToggle}
              className="bg-white p-4 rounded-md w-screen h-screen max-w-xl"
            >
              <div className="flex justify-end">
                <button
                  onClick={handleToggle}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <RxCross1 className="w-16 h-16 link" />
                </button>
              </div>

              {/* Navigation links */}
              <motion.ul
                className="mt-4"
                variants={containerNav}
                initial="hidden"
                animate="show"
              >
                <motion.li variants={item}>
                  <Link
                    href="/"
                    variants={item}
                    className="link text-gray-700 text-5xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link
                    href={"/#about"}
                    variants={item}
                    className="link text-gray-700 text-5xl font-semibold hover:text-gray-900 block py-2"
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link
                    href={"/#services"}
                    variants={item}
                    className="link text-gray-700 text-5xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Services
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link
                    href={"/#projects"}
                    className="link text-gray-700 text-5xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Projects
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link
                    href={"/#contact"}
                    className="link text-gray-700 text-5xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Contact
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        )}
      </div>
      <nav
        ref={container}
        className="py-6 big mx-auto hidden md:block fixed top-0 left-0 w-full z-10"
      >
        <div className="md:flex justify-between px-4">
          <h1 className="text-3xl uppercase font-bold">Abu b.</h1>
          <div className="md:flex text-xl font-semibold justify-center gap-8">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
