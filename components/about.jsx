"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
// import image5 from "@/public/assets/accessibility.png";
// import image1 from "@/public/assets/accessibility.png";
// import image2 from "@/public/assets/accessibility.png";
// import image3 from "@/public/assets/accessibility.png";
// import image4 from "@/public/assets/accessibility.png";
// import image6 from "@/public/assets/accessibility.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import sanitizeHtml from "sanitize-html";

const About = ({ aboutData, skillData }) => {
  // const [about, setAbout] = useState([]);
  // const [skills, setSkills] = useState([]);
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

  // useEffect(() => {
  //   fetch("https://portfolio-backend-seven-kappa.vercel.app/api/about")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAbout(data?.data[0]);
  //     });

  //   fetch("https://portfolio-backend-seven-kappa.vercel.app/api/skills")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSkills(data.data);
  //     });
  // }, [setAbout, setSkills]);

  const clean = sanitizeHtml(aboutData?.description, {
    allowedTags: ["p"],
    allowedAttributes: {},
  });

  return (
    <section
      ref={container}
      id="about"
      className="dark:bg-black rounded-t-xl about overflow-hidden px-2"
    >
      <div className="py-10">
        <div className="fade-in">
          <h2 className="dark:text-white text-5xl lg:text-8xl uppercase font-bold py-10">
            About Me.
          </h2>
        </div>
        <div className="lg:flex mx-auto justify-between items-center">
          <div className="">
            <Image
              src={aboutData?.image}
              alt="Abubokor"
              width={500}
              height={400}
              loading="lazy"
              className="mx-auto rounded-xl text-center"
            />
          </div>
          <div className=" slide-up lg:w-1/2 py-2 lg:my-0 dark:text-white mx-auto">
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: clean }}
                className="text-xl"
              />
            </div>
            <div className="mt-5">
              <Link
                href={"/#contact"}
                className="px-8 py-2 border border-black dark:border-white rounded-3xl"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-zinc-600 dark:border-zinc-400" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 my-20 text-center justify-center mx-auto items-center">
        {skillData?.map((i) => (
          <div key={i._id} className="">
            <span className="dark:text-white px-4 rounded-3xl border border-black dark:border-white py-2">
              {i.technology_name}
            </span>
          </div>
        ))}
      </div>
      {/* <hr className="border border-zinc-400" /> */}
      {/* <div className="py-10" id="services">
        <h2 className="text-white fade-in text-5xl lg:text-8xl uppercase font-bold py-10">
          Services.
        </h2>
        <div className="grid w-full px-4 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto mt-10 gap-4">
          <div className="p-2 card hover:border-b-2 w-full border border-gray-200 rounded-lg  bg-base-100 shadow-2xl">
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
          <div className="p-2 card hover:border-b-2 w-full border border-gray-200 rounded-lg  bg-base-100 shadow-2xl">
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
          <div className="p-2 card hover:border-b-2 w-full border border-gray-200 rounded-lg  bg-base-100 shadow-2xl">
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
          <div className="p-2 card hover:border-b-2 w-full border border-gray-200 rounded-lg  bg-base-100 shadow-2xl">
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
      </div> */}
    </section>
  );
};

export default About;
