"use client";
import gsap from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const container = useRef();

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          end: "bottom 30%",
          scrub: 5,
        },
      })
      .to(container.current, {
        y: -30,
        delay: 1,
        duration: 1,
        opacity: 0,
      });
  }, []);

  return (
    <section
      ref={container}
      id="#"
      className=" min-h-screen flex items-center justify-center dark:text-white"
    >
      <div>
        <h1 className="text-5xl lg:text-9xl title uppercase text-center font-bold">
          <span className="lg:pe-20">Hi there, I'm</span> <br />
          <span className="lg:ps-20">Abu Bokor.</span>
        </h1>
        <div className="flex justify-center items-center gap-4 md:gap-8 mt-8">
          <a href="https://github.com/AbuBokorprog" className="hoverable">
            <FaGithub className="w-8 lg:w-12 h-8 lg:h-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-abu-bokor/"
            className="hoverable"
          >
            <FaLinkedin className="w-8 lg:w-12 h-8 lg:h-12 " />
          </a>
          <a href="#" className="hoverable">
            <FaInstagramSquare className="w-8 lg:w-12 h-8 lg:h-12 " />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
