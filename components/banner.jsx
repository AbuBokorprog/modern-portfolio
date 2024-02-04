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
    <section ref={container} className="my-20 banner h-[60vh]">
      <h1 className="text-9xl title uppercase text-center font-bold">
        <span className="pe-28">Hi there, I'm</span> <br />
        <span className="ps-44">Abu Bokor.</span>
      </h1>
      <p className="text-center my-6">
        A freelance frontend developer & web designer <br /> propelling startup
        visions to reality.
      </p>
    </section>
  );
};

export default Banner;
