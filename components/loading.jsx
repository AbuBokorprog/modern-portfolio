"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Loading = () => {
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(container.current, {
        x: -2000,
        opacity: 1,
        duration: 5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // Adjust as needed
          end: "bottom 20%", // Adjust as needed
          toggleActions: "play none none reverse", // Play animation when entering viewport, reverse when leaving
          markers: true, // Show scroll markers for debugging
        },
      });
    },
    { scope: container }
  );
  return (
    <div
      className="loader bg-black min-h-screen text-center justify-center items-center flex"
      ref={container}
    >
      <p className="text-5xl text font-bold text-white">Welcome</p>
    </div>
  );
};

export default Loading;
