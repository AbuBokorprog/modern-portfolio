"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
            start: "top 100%",
            end: "bottom -10%",
            scrub: 0.5,
            markers: true,
          },
        })
        .from(".title", {
          x: -100,
          duration: 1,
          opacity: 0,
        })
        .from(".portfolio-item", {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.5,
        })
        .to(container.current, {
          y: -50,
          duration: 1,
          delay: 2,
          opacity: 0,
        });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="portfolio-container rounded-b-xl py-10 min-h-screen text-white bg-black overflow-hidden"
    >
      <h2 className="title text-white text-5xl lg:text-8xl uppercase font-bold py-10">
        Selected Works.
      </h2>
      <div className=" px-1 grid grid-cols-1 md:grid-cols-2 items-center ">
        <div
          className={`portfolio-item border mb-6 text-white p-4 rounded-lg shadow-md `}
        >
          <img
            src="/assets/home1.png"
            alt=""
            className="w-full object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold">title</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            tempora ea sunt nihil laudantium, excepturi voluptatem tenetur illum
            animi dolorem, odit beatae consequuntur. Aperiam eos quas iste esse,
            magnam tenetur?
          </p>
          <div className="flex justify-between items-center mt-4">
            <button className="border px-4 rounded-3xl py-1">Github</button>
            <button className="border px-4 rounded-3xl py-1">View</button>
          </div>
        </div>
        <div
          className={`portfolio-item border mb-6 text-white p-4 rounded-lg shadow-md lg:w-[80vh] mx-auto`}
        >
          <img
            src="/assets/home1.png"
            alt={"title"}
            className="w-full object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold">{"title"}</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            tempora ea sunt nihil laudantium, excepturi voluptatem tenetur illum
            animi dolorem, odit beatae consequuntur. Aperiam eos quas iste esse,
            magnam tenetur?
          </p>
          <div className="flex justify-between items-center mt-4">
            <button className="border px-4 rounded-3xl py-1">Github</button>
            <button className="border px-4 rounded-3xl py-1">View</button>
          </div>
        </div>
        <div
          className={`portfolio-item border mb-6 text-white p-4 rounded-lg shadow-md lg:w-[80vh] mx-auto`}
        >
          <img
            src="/assets/home1.png"
            alt={"title"}
            className="w-full object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold">{"title"}</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            tempora ea sunt nihil laudantium, excepturi voluptatem tenetur illum
            animi dolorem, odit beatae consequuntur. Aperiam eos quas iste esse,
            magnam tenetur?
          </p>
          <div className="flex justify-between items-center mt-4">
            <button className="border px-4 rounded-3xl py-1">Github</button>
            <button className="border px-4 rounded-3xl py-1">View</button>
          </div>
        </div>
        <div
          className={`portfolio-item border mb-6 text-white p-4 rounded-lg shadow-md `}
        >
          <img
            src="/assets/home1.png"
            alt={"title"}
            className="w-full object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold">{"title"}</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            tempora ea sunt nihil laudantium, excepturi voluptatem tenetur illum
            animi dolorem, odit beatae consequuntur. Aperiam eos quas iste esse,
            magnam tenetur?
          </p>
          <div className="flex justify-between items-center mt-4">
            <button className="border px-4 rounded-3xl py-1">Github</button>
            <button className="border px-4 rounded-3xl py-1">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
