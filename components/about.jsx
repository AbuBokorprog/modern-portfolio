"use client";
import React, { useRef } from "react";
import img from "@/public/assets/img.png";
import Image from "next/image";
import gsap from "gsap";
import image5 from "@/public/assets/accessibility.png";
import image1 from "@/public/assets/accessibility.png";
import image2 from "@/public/assets/accessibility.png";
import image3 from "@/public/assets/accessibility.png";
import image4 from "@/public/assets/accessibility.png";
import image6 from "@/public/assets/accessibility.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.from(container.current, {
        y: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          end: "bottom 30%",
          // markers: true,
        },
      });

      gsap.from(".fade-in", {
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          end: "bottom 30%",
          // markers: true,
        },
      });

      gsap.from(".slide-up", {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          end: "bottom bottom",
          // scrub: true,
          // markers: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="bg-black rounded-t-xl about overflow-hidden"
    >
      <div className="py-10">
        <div className="fade-in">
          <h2 className="text-white text-5xl lg:text-8xl uppercase font-bold py-10">
            About Me.
          </h2>
        </div>
        <div className="lg:flex mx-auto justify-between items-center">
          <div className="">
            <Image
              src={img}
              alt=""
              width={500}
              height={400}
              className="mx-auto rounded-xl text-center"
            />
          </div>
          <div className=" slide-up lg:w-1/2 py-2 lg:my-0 text-white mx-auto">
            <p className="lg:text-xl ">
              <small>
                🚀 a passionate frontend developer with hands-on experience in
                HTML, CSS, JavaScript and TypeScript. I thrive in collaborative
                environments, showcasing effective communication and
                problem-solving skills in team projects. Committed to staying
                current with industry trends, I bring a fresh perspective and
                innovative mindset. Eager to contribute creativity and technical
                proficiency to your team, I am not just seeking a job but a
                journey of continuous learning and meaningful contributions.
                Let's build the future of web development together. 💻✨
              </small>
            </p>
            <div className="lg:w-96 py-2">
              <div className="flex gap-10 justify-start">
                <p className="w-32 font-medium">Birthday:</p>
                <p>26 June 2004</p>
              </div>
              <div className="flex gap-10 justify-start">
                <p className="w-32 font-medium">Phone:</p>
                <p>+8801885236058</p>
              </div>
              <div className="flex gap-10 justify-start">
                <p className="w-32 font-medium">Email:</p>
                <p>abubokor1066@gmail.com</p>
              </div>
              <div className="flex gap-10 justify-start">
                <p className="w-32 font-medium">From:</p>
                <p>Bangladesh</p>
              </div>
              <div className="flex gap-10 justify-start">
                <p className="w-32 font-medium">Language:</p>
                <p>Bangla, English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-zinc-400" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 my-20 text-center justify-center mx-auto items-center">
        {[
          "HTML",
          "CSS",
          "Bootstrap",
          "Tailwind CSS",
          "JavaScript",
          "Typescript",
          "React",
          "Next.js",
          "MongoDB",
          "mongoose",
          "Node.js",
          "Express.js",
          "GSAP",
          "Framer Motion",
          "Git",
          "Postman",
          "Firebase",
          "Figma",
        ].map((i) => (
          <div key={i} className="">
            <span className="text-white px-4 rounded-3xl border border-white py-2">
              {i}
            </span>
          </div>
        ))}
      </div>
      {/* <hr className="border border-zinc-400" /> */}
      <div className="py-10">
        <h2 className="text-white fade-in text-5xl lg:text-8xl uppercase font-bold py-10">
          Services.
        </h2>
        <div className="grid w-full px-4 md:grid-col-2 lg:grid-cols-3 justify-center mx-auto gap-4 mt-10 ">
          <div className="p-2 card hover:border-b-2 max-w-sm border border-gray-200 rounded-lg lg:w-96 bg-base-100 shadow-2xl">
            <Image
              src={image1}
              alt="image1"
              width={500}
              height={500}
              className="w-20  rounded-xl"
            />

            <div className="text-white card-body">
              <h3 className="text-lg font-semibold text-white">
                Responsive Design
              </h3>
              <p className="mb-3 font-normal">
                Responsive web design creates adaptable websites that seamlessly
                adjust their layout and content to fit different devices,
                ensuring an optimal user experience across screens of all sizes.
              </p>
            </div>
          </div>
          <div className="p-2 card hover:border-b-2 max-w-sm border border-gray-200 rounded-lg lg:w-96 bg-base-100 shadow-2xl">
            <Image
              width={500}
              height={500}
              src={image3}
              alt="Shoes"
              className="w-20 rounded-xl"
            />

            <div className="text-white card-body">
              <h3 className="text-lg font-semibold text-white">
                HTML/CSS development
              </h3>
              <p className="mb-3 font-normal">
                Web development involves creating and maintaining websites using
                various programming languages, frameworks, and tools. It
                encompasses front-end development, back-end development, and
                database management to deliver functional and visually appealing
                online experiences.
              </p>
            </div>
          </div>
          <div className="p-2 card hover:border-b-2 max-w-sm border border-gray-200 rounded-lg lg:w-96 bg-base-100 shadow-2xl">
            <Image
              width={500}
              height={500}
              src={image2}
              alt="Shoes"
              className="w-20 rounded-xl"
            />

            <div className="text-white card-body">
              <h3 className="text-lg font-semibold text-white">
                Front End Development
              </h3>
              <p className="mb-3 font-normal">
                Front-end development focuses on creating the user-facing
                portion of a website or application. It involves coding HTML,
                CSS, and JavaScript to design and implement visually appealing
                and interactive interfaces that enhance user engagement.
              </p>
            </div>
          </div>
          <div className="p-2 card hover:border-b-2 max-w-sm border border-gray-200 rounded-lg lg:w-96 bg-base-100 shadow-2xl">
            <Image
              width={500}
              height={500}
              src={image5}
              alt="Shoes"
              className="w-20 rounded-xl"
            />

            <div className="text-white ">
              <h3 className="text-lg font-semibold text-white">
                Website accessibility
              </h3>
              <p className="mb-3 font-normal">
                Responsive web design creates adaptable websites that seamlessly
                adjust their layout and content to fit different devices,
                ensuring an optimal user experience across screens of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
