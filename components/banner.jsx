"use client";
import gsap from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
          //   markers: true,
        },
      })
      .to(container.current, {
        y: -30,
        delay: 1,
        duration: 3,
        opacity: 0,
      });
  }, []);

  return (
    <section
      ref={container}
      className=" min-h-screen flex items-center justify-center"
    >
      <div>
        <h1 className="text-5xl lg:text-9xl title uppercase text-center font-bold">
          <span className="lg:pe-20">Hi there, I'm</span> <br />
          <span className="lg:ps-20">Abu Bokor.</span>
        </h1>
        <p className="text-center my-6 text-sm">
          A freelance frontend developer & web designer <br /> propelling
          startup visions to reality.
        </p>
      </div>
    </section>
  );
};

export default Banner;
