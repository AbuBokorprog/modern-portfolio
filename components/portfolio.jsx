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
      gsap.from(".title", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".title",
          start: "top 50%",
          end: "bottom 30%",
          // markers: true,
        },
      });

      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: ".title",
      //       start: "top 50%",
      //       end: "bottom 30%",
      //       scrub: 0.5, // Adjust scroll animation smoothness
      //       // markers: true, // Show scroll markers for debugging
      //     },
      //   })
      //   .from(".title", {
      //     x: -100,
      //     duration: 1,
      //     opacity: 0,
      //   });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 50%",
            end: "bottom bottom",
            scrub: 0.5, // Adjust scroll animation smoothness
            // markers: true, // Show scroll markers for debugging
          },
        })
        .from(".portfolio-item", {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 1,
        });
    },
    { scope: container }
  );
  const portfolioItems = [
    {
      id: 1,
      class: "mx-auto lg:w-[110vh]",
      title: "Project Title 1",
      description: "Description of project 1",
      image: "portfolio-image-1.jpg",
    },
    {
      id: 2,
      class: "lg:w-[80vh]",
      title: "Project Title 2",
      description: "Description of project 2",
      image: "portfolio-image-2.jpg",
    },
    {
      id: 4,
      class: "lg:w-[80vh]",
      title: "Project Title 4",
      description: "Description of project 3",
      image: "portfolio-image-3.jpg",
    },
    {
      id: 3,
      class: " lg:w-[110vh]",
      title: "Project Title 3",
      description: "Description of project 3",
      image: "portfolio-image-3.jpg",
    },
  ];

  return (
    <div
      ref={container}
      className="portfolio-container py-10 min-h-screen text-white bg-black overflow-hidden"
    >
      <h2 className="title text-white text-5xl lg:text-8xl uppercase font-bold py-10">
        Selected Works.
      </h2>
      <div className=" px-1 grid grid-cols-1 md:grid-cols-2 items-center ">
        {/* {portfolioItems.map((item) => (
          <div

            className={`portfolio-item border mb-6 text-white p-4 rounded-lg shadow-md ${item.class}`}
          >
            <img
              src="/assets/home1.png"
              alt={"title"}
              className="w-full object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold">{"title"}</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              tempora ea sunt nihil laudantium, excepturi voluptatem tenetur
              illum animi dolorem, odit beatae consequuntur. Aperiam eos quas
              iste esse, magnam tenetur?
            </p>
            <div className="flex justify-between items-center">
              <button>Github</button>
              <button>View</button>
            </div>
          </div>
        ))} */}
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
          <div className="flex justify-between items-center">
            <button>Github</button>
            <button>View</button>
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
          <div className="flex justify-between items-center">
            <button>Github</button>
            <button>View</button>
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
          <div className="flex justify-between items-center">
            <button>Github</button>
            <button>View</button>
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
          <div className="flex justify-between items-center">
            <button>Github</button>
            <button>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
