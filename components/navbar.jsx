'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { RxCross1 } from 'react-icons/rx';
import { IoMdMenu } from 'react-icons/io';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

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
    gsap.from('.box', {
      y: -50,
      duration: 0.5,
      delay: 0,
      stagger: 0.5,
    });
    gsap.from(smallContainer.current, {
      y: -50,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: smallContainer.current,
        start: 'top -50%',
        end: 'bottom 70%',
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
        duration: 1,
        opacity: 1,
        staggerChildren: 0.3,
        ease: 'linear',
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
        <nav className="lg:hidden block ">
          <div
            ref={smallContainer}
            className="flex p-4 items-center justify-between fixed top-0 left-0 w-full z-10 text-right dark:bg-white bg-black"
          >
            <Link
              href={'/'}
              className="text-3xl uppercase font-bold bg-gradient-to-r dark:from-fuchsia-600 dark:to-rose-600 from-fuchsia-500 to-rose-500 bg-clip-text text-transparent hover:opacity-75"
            >
              Abu b.
            </Link>
            <button
              onClick={handleToggle}
              className=" hoverable focus:outline-none "
            >
              <IoMdMenu className="w-12 h-12 text-black dark:text-white dark:bg-black bg-white rounded-full border" />
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
                  className="text-gray-500 hoverable hover:text-gray-700 focus:outline-none"
                >
                  <RxCross1 className="w-12 h-12 link" />
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
                    className="link hoverable text-gray-700 text-xl dark:text-white font-semibold hover:text-gray-900 block py-2"
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link
                    href={'/about'}
                    variants={item}
                    className="link hoverable text-gray-700 text-xl font-semibold hover:text-gray-900 block py-2"
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link
                    href={'/services'}
                    variants={item}
                    className="link hoverable text-gray-700 text-xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Services
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link
                    href={'/projects'}
                    className="link hoverable text-gray-700 text-xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Projects
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link
                    href={'/contact'}
                    className="link hoverable text-gray-700 text-xl font-semibold hover:text-gray-900 block py-2"
                  >
                    Contact
                  </Link>
                </motion.li>
                <motion.li className="my-4">
                  <a
                    href="/abubokor-full-stack-developer.pdf"
                    download
                    className="text-white bg-gradient-to-bl from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg px-5 py-2.5 me-2 my-2 hoverable"
                  >
                    Resume
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        )}
      </div>

      {/* large device */}
      <nav
        ref={container}
        className="py-6 dark:text-white dark:bg-black bg-white text-black border-b hidden lg:block fixed top-0 start-0 end-0 z-20"
      >
        <div className="md:flex items-center justify-between px-2 container mx-auto">
          <Link
            href="/"
            className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent hover:opacity-75 hoverable"
          >
            &lt;Bokor&gt;
          </Link>
          <div className="md:flex text-xl font-semibold justify-center gap-8">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Services</Link>
            <Link href={'/'}>Projects</Link>
            <Link href={'/'}>Contact</Link>
          </div>
          <div>
            <a
              href="/abubokor-full-stack-developer.pdf"
              download
              className="text-white bg-gradient-to-bl from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 hoverable"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
