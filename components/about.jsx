"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  return (
    <main className="h-[100vh] bg-black rounded-2xl">
      <h2 className="text-white">About page</h2>
    </main>
  );
};

export default About;
