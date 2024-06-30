"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import image1 from "../public/assets/home1.png";
import image2 from "../public/assets/luminous-home.png";
import image3 from "../public/assets/center-stone-home.png";
import image4 from "../public/assets/work-manager.png";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 50%",
            end: "top 5%",
            scrub: 0.5,
          },
        })
        .from(".title", {
          x: -100,
          duration: 3,
          opacity: 0,
        })
        .from(".portfolio-item", {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.5,
        });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      id="projects"
      className="portfolio-container rounded-b-xl bg-white py-10 min-h-screen text-black dark:text-white px-2 dark:bg-black overflow-hidden"
    >
      <h2 className="title text-black dark:text-white text-5xl xl:text-8xl uppercase font-bold py-10">
        Selected Works.
      </h2>
      <div className=" px-1 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        <div
          className={`portfolio-item mb-6 border border-black dark:border-white text-black dark:text-white p-4 rounded-lg shadow-md `}
        >
          <Image
            src={image1}
            alt=""
            width={500}
            height={500}
            className="w-full lg:h-96 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold uppercase">The Hotel Haven</h3>
          <p className="">
            🌟 Hotel Haven, my collaborative masterpiece, is an intuitive online
            hotel booking platform.
          </p>
          <div className="flex justify-between items-center mt-4">
            <a
              href="https://github.com/AbuBokorprog/hotel-haven-frontend"
              className="border border-black dark:border-white px-4 rounded-3xl py-1"
            >
              Github
            </a>
            <a
              href="https://hotel-haven-37e44.web.app/"
              className="border border-black dark:border-white px-4 rounded-3xl py-1"
            >
              View
            </a>
          </div>
        </div>
        <div
          className={`portfolio-item mb-6 border border-black dark:border-white text-black dark:text-white p-4 rounded-lg shadow-md `}
        >
          <Image
            src={image2}
            alt=""
            width={500}
            height={500}
            className="w-full lg:h-96 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold uppercase">Luminous</h3>
          <p className="">
            Luminous Beauty is an eCommerce platform dedicated to beauty and
            cosmetic products.
          </p>
          <div className="flex justify-between items-center mt-4">
            <a
              href="https://github.com/AbuBokorprog/Luminous-app"
              className="border border-black dark:border-white px-4 rounded-3xl py-1"
            >
              Github
            </a>
            <a
              href="https://luminous-app.vercel.app/"
              className="border border-black dark:border-white px-4 rounded-3xl py-1"
            >
              View
            </a>
          </div>
        </div>
        <div
          className={`portfolio-item mb-6 border border-black dark:border-white text-black dark:text-white p-4 rounded-lg shadow-md `}
        >
          <Image
            src={image3}
            alt=""
            width={500}
            height={500}
            className="w-full lg:h-96 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold uppercase">The Center Stone</h3>
          <p className="">
            The Center Stone is an online jewelry shop that offers a wide
            variety of eye-catching and premium jewelry pieces.
          </p>
          <div className="flex justify-between items-center mt-4">
            <a
              href="https://github.com/AbuBokorprog/the-center-stone-project"
              className="border border-black dark:border-white px-4 rounded-3xl py-1"
            >
              Github
            </a>
            <a
              href="https://the-center-stone.web.app/"
              className="border border-black dark:border-white px-4 rounded-3xl py-1"
            >
              View
            </a>
          </div>
        </div>
        <div
          className={`portfolio-item mb-6 border border-black dark:border-white text-black dark:text-white p-4 rounded-lg shadow-md `}
        >
          <Image
            src={image4}
            alt=""
            width={500}
            height={500}
            className="w-full lg:h-96 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold uppercase">Work Manager</h3>
          <p className="">
            Work Manager is a task management web application that allows users
            to add, view, edit, and delete tasks. Users can organize their tasks
            efficiently and enhance their productivity.
          </p>
          <div className="flex justify-between items-center mt-4">
            <a
              href="https://github.com/AbuBokorprog/work-manager-nextjs"
              className="border border-black dark:border-white px-4 rounded-3xl py-1"
            >
              Github
            </a>
            <a
              href="https://work-manager-dquf3uigr-abubokorprog.vercel.app/"
              className="border border-black dark:border-white px-4 rounded-3xl py-1"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
