"use client";
import React, { useRef } from "react";
import gsap from "gsap";

const Loading = ({ time }) => {
  const container = useRef();
  return (
    <div
      className="loader min-h-screen text-center justify-center items-center flex"
      ref={container}
    >
      <p className="text-5xl font-bold text-black">{time}</p>
    </div>
  );
};

export default Loading;
