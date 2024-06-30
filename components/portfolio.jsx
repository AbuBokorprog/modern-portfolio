"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import image1 from "../public/assets/home1.png";
import image2 from "../public/assets/luminous-home.png";
import image3 from "../public/assets/center-stone-home.png";
import image4 from "../public/assets/work-manager.png";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import sanitizeHtml from "sanitize-html";

const Portfolio = ({ projects, frontend, mern, full }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [tab, setTab] = useState("all");
  const container = useRef();
  const [portfolioCount, setPortfolioCount] = useState(4);

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
          stagger: 1,
          duration: 4,
        });
    },
    { scope: container }
  );

  const countHandler = () => {
    const count = portfolioCount + 4;
    setPortfolioCount(count);
  };

  return (
    <div
      ref={container}
      id="projects"
      className="portfolio-container rounded-b-xl bg-white py-10 min-h-screen text-black dark:text-white px-2 dark:bg-black overflow-hidden"
    >
      <h2 className="title text-black dark:text-white text-5xl xl:text-8xl uppercase font-bold py-10">
        Selected Works.
      </h2>

      <div className="text-sm my-6 mx-auto font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px justify-center">
          <li className="me-2">
            <button
              onClick={() => setTab("all")}
              className={`${
                tab == "all"
                  ? "active dark:text-blue-500 dark:border-blue-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } inline-block p-4 border-b-2 border-transparent rounded-t-lg `}
            >
              All
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setTab("frontend")}
              className={`${
                tab == "frontend"
                  ? "active dark:text-blue-500 dark:border-blue-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } inline-block p-4 border-b-2 border-transparent rounded-t-lg `}
            >
              Frontend
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setTab("mern-stack")}
              className={`${
                tab == "mern-stack"
                  ? "active dark:text-blue-500 dark:border-blue-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } inline-block p-4 border-b-2 border-transparent rounded-t-lg `}
            >
              MERN Stack
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setTab("full-stack")}
              className={`${
                tab == "full-stack"
                  ? "active dark:text-blue-500 dark:border-blue-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } inline-block p-4 border-b-2 border-transparent rounded-t-lg `}
            >
              Full Stack
            </button>
          </li>
        </ul>
      </div>

      {/* all tab */}
      {tab == "all" && (
        <div className=" px-1 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          {projects?.map((p) => (
            <div
              key={p?._id}
              className={`portfolio-item mb-6 border border-black dark:border-white text-black dark:text-white p-4 rounded-lg shadow-md `}
            >
              <Image
                src={p?.thumbnail}
                alt={p?.projects_name}
                width={500}
                height={500}
                className="w-full lg:h-96 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold uppercase">
                {p?.projects_name}
              </h3>
              <div className="">
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(p?.short_description, {
                      allowedTags: ["p"],
                      allowedAttributes: {},
                    }),
                  }}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 text-center justify-center mx-auto items-center">
                {p?.skills?.map((i) => (
                  <div key={i} className="">
                    <span className="dark:text-white px-4 rounded-3xl border border-black dark:border-white py-2">
                      {i}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={`${p?.github_url}`}
                  target="_blank"
                  className="border border-black dark:border-white px-4 rounded-3xl py-1"
                >
                  Github
                </a>
                <a
                  href={`${p?.view_url}`}
                  target="_blank"
                  className="border border-black dark:border-white px-4 rounded-3xl py-1"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* frontend */}

      {tab == "frontend" && (
        <div className=" px-1 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          {frontend?.map((p) => (
            <div
              key={p?._id}
              className={`portfolio-item mb-6 border border-black dark:border-white text-black dark:text-white p-4 rounded-lg shadow-md `}
            >
              <Image
                src={p?.thumbnail}
                alt={p?.projects_name}
                width={500}
                height={500}
                className="w-full lg:h-96 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold uppercase">
                {p?.projects_name}
              </h3>
              <div className="">
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(p?.short_description, {
                      allowedTags: ["p"],
                      allowedAttributes: {},
                    }),
                  }}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 text-center justify-center mx-auto items-center">
                {p?.skills?.map((i) => (
                  <div key={i} className="">
                    <span className="dark:text-white px-4 rounded-3xl border border-black dark:border-white py-2">
                      {i}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={`${p?.github_url}`}
                  target="_blank"
                  className="border border-black dark:border-white px-4 rounded-3xl py-1"
                >
                  Github
                </a>
                <a
                  href={`${p?.view_url}`}
                  target="_blank"
                  className="border border-black dark:border-white px-4 rounded-3xl py-1"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* mern */}
      {tab == "mern-stack" && (
        <div className=" px-1 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          {mern?.map((p) => (
            <div
              key={p?._id}
              className={`portfolio-item mb-6 border border-black dark:border-white text-black dark:text-white p-4 rounded-lg shadow-md `}
            >
              <Image
                src={p?.thumbnail}
                alt={p?.projects_name}
                width={500}
                height={500}
                className="w-full lg:h-96 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold uppercase">
                {p?.projects_name}
              </h3>
              <div className="">
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(p?.short_description, {
                      allowedTags: ["p"],
                      allowedAttributes: {},
                    }),
                  }}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 text-center justify-center mx-auto items-center">
                {p?.skills?.map((i) => (
                  <div key={i} className="">
                    <span className="dark:text-white px-4 rounded-3xl border border-black dark:border-white py-2">
                      {i}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={`${p?.github_url}`}
                  target="_blank"
                  className="border border-black dark:border-white px-4 rounded-3xl py-1"
                >
                  Github
                </a>
                <a
                  href={`${p?.view_url}`}
                  target="_blank"
                  className="border border-black dark:border-white px-4 rounded-3xl py-1"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* full stack */}
      {tab == "full-stack" && (
        <div className=" px-1 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          {full?.map((p) => (
            <div
              key={p?._id}
              className={`portfolio-item mb-6 border border-black dark:border-white text-black dark:text-white p-4 rounded-lg shadow-md `}
            >
              <Image
                src={p?.thumbnail}
                alt={p?.projects_name}
                width={500}
                height={500}
                className="w-full lg:h-96 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold uppercase">
                {p?.projects_name}
              </h3>
              <div className="">
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(p?.short_description, {
                      allowedTags: ["p"],
                      allowedAttributes: {},
                    }),
                  }}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 text-center justify-center mx-auto items-center">
                {p?.skills?.map((i) => (
                  <div key={i} className="">
                    <span className="dark:text-white px-4 rounded-3xl border border-black dark:border-white py-2">
                      {i}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={`${p?.github_url}`}
                  target="_blank"
                  className="border border-black dark:border-white px-4 rounded-3xl py-1"
                >
                  Github
                </a>
                <a
                  href={`${p?.view_url}`}
                  target="_blank"
                  className="border border-black dark:border-white px-4 rounded-3xl py-1"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="my-6 mx-auto text-center">
        <button
          onClick={countHandler}
          className="px-4 py-1.5 rounded-md border"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
