"use client";
import React, { useEffect, useRef, useState } from "react";
import Loading from "./loading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState(null);
  const container = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div>{isLoading ? <Loading /> : <div ref={container}>{children}</div>}</div>
  );
};

export default Home;
