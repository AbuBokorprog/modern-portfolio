'use client';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import sanitizeHtml from 'sanitize-html';
import { Element } from 'react-scroll';

const Portfolio = ({ projects, frontend, mern, full }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [tab, setTab] = useState('all');
  const container = useRef();
  const [portfolioCount, setPortfolioCount] = useState(6);
  const [frontCount, setFrontCount] = useState(4);
  const [mernCount, setMernCount] = useState(4);
  const [fullCount, setFullCount] = useState(4);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top 50%',
            end: 'top 5%',
            scrub: 0.5,
          },
        })
        .from('.selectTitle', {
          x: -100,
          duration: 3,
          opacity: 0,
        })
        .from('.portfolio-item', {
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

  const frontendCountHandler = () => {
    const count = frontCount + 4;
    setFrontCount(count);
  };

  const mernCountHandler = () => {
    const count = mernCount + 4;
    setMernCount(count);
  };

  const fullCountHandler = () => {
    const count = fullCount + 4;
    setFullCount(count);
  };

  return (
    <Element name="projects">
      <div
        ref={container}
        className="portfolio-container rounded-b-xl bg-white min-h-screen text-black dark:text-white px-2 dark:bg-black overflow-hidden"
      >
        <h2 className="text-5xl selectTitle lg:text-8xl font-bold uppercase bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent py-10 lg:py-16">
          Selected Works.
        </h2>

        <div className="text-sm mx-auto font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap justify-center">
            <li className="me-2">
              <button
                onClick={() => setTab('all')}
                className={`${
                  tab == 'all'
                    ? 'active text-blue-500 border-blue-500'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                } inline-block p-4 border-b-2 border-transparent rounded-t-lg `}
              >
                All
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setTab('frontend')}
                className={`${
                  tab == 'frontend'
                    ? 'active text-blue-500 border-blue-500'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                } inline-block p-4 border-b-2 border-transparent rounded-t-lg `}
              >
                Frontend
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setTab('mern-stack')}
                className={`${
                  tab == 'mern-stack'
                    ? 'active text-blue-500 border-blue-500'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                } inline-block p-4 border-b-2 border-transparent rounded-t-lg `}
              >
                MERN Stack
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setTab('full-stack')}
                className={`${
                  tab == 'full-stack'
                    ? 'active text-blue-500 border-blue-500'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                } inline-block p-4 border-b-2 border-transparent rounded-t-lg `}
              >
                Full Stack
              </button>
            </li>
          </ul>
        </div>

        <div>
          {/* all tab */}
          {tab == 'all' && (
            <div className="px-2 lg:px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {projects?.slice(0, portfolioCount)?.map((p) => (
                <div
                  key={p?._id}
                  className="portfolio-item mb-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {/* Thumbnail Image */}
                  <Image
                    src={p?.thumbnail}
                    alt={p?.projects_name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover mb-4 rounded-lg shadow-md"
                  />

                  {/* Project Title */}
                  <h3 className="text-2xl font-semibold uppercase mb-3 tracking-wide">
                    {p?.projects_name}
                  </h3>

                  {/* Short Description */}
                  <div className="hidden lg:block mb-4">
                    <div
                      className="text-sm text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(p?.short_description, {
                          allowedTags: ['p'],
                          allowedAttributes: {},
                        }),
                      }}
                    />
                  </div>

                  {/* Technologies Used */}
                  <div className="my-4">
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2 text-center">
                      {p?.skills?.map((i) => (
                        <div
                          key={i}
                          className="py-1 px-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={`${p?.github_url}`}
                      target="_blank"
                      className="bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 text-white dark:text-black px-4 py-2 rounded-lg shadow hover:bg-rose-600 transition-colors duration-200 hoverable"
                    >
                      Github
                    </a>
                    <a
                      href={`${p?.view_url}`}
                      target="_blank"
                      className="bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 text-white dark:text-black px-4 py-2 rounded-lg shadow hover:bg-fuchsia-600 transition-colors duration-200 hoverable"
                    >
                      Preview
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          {projects?.length > 6 && (
            <div className="my-6 mx-auto text-center">
              <button
                onClick={countHandler}
                className="dark:text-white text-black bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hoverable"
              >
                Load more
              </button>
            </div>
          )}
        </div>

        <div>
          {/* frontend */}

          {tab == 'frontend' && (
            <div className="px-2 lg:px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {frontend?.slice(0, frontCount)?.map((p) => (
                <div
                  key={p?._id}
                  className="portfolio-item mb-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {/* Thumbnail Image */}
                  <Image
                    src={p?.thumbnail}
                    alt={p?.projects_name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover mb-4 rounded-lg shadow-md"
                  />

                  {/* Project Title */}
                  <h3 className="text-2xl font-semibold uppercase mb-3 tracking-wide">
                    {p?.projects_name}
                  </h3>

                  {/* Short Description */}
                  <div className="hidden lg:block mb-4">
                    <div
                      className="text-sm text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(p?.short_description, {
                          allowedTags: ['p'],
                          allowedAttributes: {},
                        }),
                      }}
                    />
                  </div>

                  {/* Technologies Used */}
                  <div className="my-4">
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2 text-center">
                      {p?.skills?.map((i) => (
                        <div
                          key={i}
                          className="py-1 px-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={`${p?.github_url}`}
                      target="_blank"
                      className="bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-600 transition-colors duration-200"
                    >
                      Github
                    </a>
                    <a
                      href={`${p?.view_url}`}
                      target="_blank"
                      className="bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 text-white px-4 py-2 rounded-lg shadow hover:bg-fuchsia-600 transition-colors duration-200"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          {frontend?.length > 6 && (
            <div className="my-6 mx-auto text-center">
              <button
                onClick={frontendCountHandler}
                className="dark:text-white text-black bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hoverable"
              >
                Load more
              </button>
            </div>
          )}
        </div>

        <div>
          {/* mern */}
          {tab == 'mern-stack' && (
            <div className="px-2 lg:px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {mern?.slice(0, mernCount)?.map((p) => (
                <div
                  key={p?._id}
                  className="portfolio-item mb-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {/* Thumbnail Image */}
                  <Image
                    src={p?.thumbnail}
                    alt={p?.projects_name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover mb-4 rounded-lg shadow-md"
                  />

                  {/* Project Title */}
                  <h3 className="text-2xl font-semibold uppercase mb-3 tracking-wide">
                    {p?.projects_name}
                  </h3>

                  {/* Short Description */}
                  <div className="hidden lg:block mb-4">
                    <div
                      className="text-sm text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(p?.short_description, {
                          allowedTags: ['p'],
                          allowedAttributes: {},
                        }),
                      }}
                    />
                  </div>

                  {/* Technologies Used */}
                  <div className="my-4">
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2 text-center">
                      {p?.skills?.map((i) => (
                        <div
                          key={i}
                          className="py-1 px-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={`${p?.github_url}`}
                      target="_blank"
                      className="bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-600 transition-colors duration-200"
                    >
                      Github
                    </a>
                    <a
                      href={`${p?.view_url}`}
                      target="_blank"
                      className="bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 text-white px-4 py-2 rounded-lg shadow hover:bg-fuchsia-600 transition-colors duration-200"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div>
            {mern?.length > 6 && (
              <div className="my-6 mx-auto text-center">
                <button
                  onClick={mernCountHandler}
                  className="dark:text-white text-black bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hoverable"
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
          {/* full stack */}
          {tab == 'full-stack' && (
            <div className="px-2 lg:px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {full?.slice(0, fullCount)?.map((p) => (
                <div
                  key={p?._id}
                  className="portfolio-item mb-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {/* Thumbnail Image */}
                  <Image
                    src={p?.thumbnail}
                    alt={p?.projects_name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover mb-4 rounded-lg shadow-md"
                  />

                  {/* Project Title */}
                  <h3 className="text-2xl font-semibold uppercase mb-3 tracking-wide">
                    {p?.projects_name}
                  </h3>

                  {/* Short Description */}
                  <div className="hidden lg:block mb-4">
                    <div
                      className="text-sm text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(p?.short_description, {
                          allowedTags: ['p'],
                          allowedAttributes: {},
                        }),
                      }}
                    />
                  </div>

                  {/* Technologies Used */}
                  <div className="my-4">
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2 text-center">
                      {p?.skills?.map((i) => (
                        <div
                          key={i}
                          className="py-1 px-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={`${p?.github_url}`}
                      target="_blank"
                      className="bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-600 transition-colors duration-200"
                    >
                      Github
                    </a>
                    <a
                      href={`${p?.view_url}`}
                      target="_blank"
                      className="bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 text-white px-4 py-2 rounded-lg shadow hover:bg-fuchsia-600 transition-colors duration-200"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div>
            {full?.length > 6 && (
              <div className="my-6 mx-auto text-center">
                <button
                  onClick={fullCountHandler}
                  className="dark:text-white text-black bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hoverable"
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
