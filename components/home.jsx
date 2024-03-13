"use client";
import React, { useEffect, useState } from "react";
import Loading from "./loading";

const Home = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState(null);
  useEffect(() => {
    let number = 0;
    const timer = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 5) + number;
      number = number + newRandomNumber;
      setRandomNumber(newRandomNumber);
      console.log(number);
      if (number >= 100) {
        setIsLoading(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{isLoading ? "" : <div>{children}</div>}</div>;
};

export default Home;
