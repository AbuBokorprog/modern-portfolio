"use client";
import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const container = useRef();
  useGSAP(
    () => {
      // gsap code here...
      gsap.from(".box", {
        y: -50,
        duration: 1,
        delay: 0.8,
        stagger: 1,
      });
    },
    { scope: container }
  );
  return (
    <nav ref={container} className="py-6 mx-auto">
      <div className="flex text-xl font-semibold justify-center gap-10">
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
  );
};

export default Navbar;
