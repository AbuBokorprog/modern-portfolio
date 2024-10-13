'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import sanitizeHtml from 'sanitize-html';
import Experience from './experience';
import Picture from '../public/assets/1000045760-01.jpeg';
import database from '../public/assets/database-management.png';
import integration from '../public/assets/integration.png';
import responsive from '../public/assets/responsive-design.png';
import optimization from '../public/assets/optimization.png';
import fullStack from '../public/assets/web-development.png';
import accessibility from '../public/assets/accessibility.png';

const About = ({ aboutData, skillData }) => {
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(
    () => {
      gsap.from(container.current, {
        y: 100,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 50%',
          end: 'bottom 30%',
          // markers: true,
        },
      });

      gsap.from('.fade-in', {
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 50%',
          end: 'bottom 30%',
          // markers: true,
        },
      });

      gsap.from('.slide-up', {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 50%',
          end: 'bottom bottom',
          // scrub: true,
          // markers: true,
        },
      });
    },
    { scope: container }
  );

  const clean = sanitizeHtml(aboutData?.description, {
    allowedTags: ['p'],
    allowedAttributes: {},
  });

  const serviceData = [
    {
      image: responsive,
      title: 'Responsive Web Design',
      description:
        'Crafting responsive and adaptive web designs that provide optimal viewing experiences across mobile, tablet, and desktop devices.',
    },
    // {
    //   image: fullStack,
    //   title: 'Front-End Development',
    //   description:
    //     'Building dynamic, user-friendly interfaces using React and TypeScript, ensuring fast load times and smooth interactions for better user engagement.',
    // },
    {
      title: 'Full-Stack Web Development',
      description:
        'Building and maintaining web applications with expertise in both front-end and back-end technologies, including React, Node.js, Express, and MongoDB.',
      image: fullStack,
    },
    {
      title: 'API Integration',
      description:
        'Integrating third-party APIs to enhance functionality, including payment gateways, social media, and external data services for dynamic and interactive applications.',
      image: integration,
    },
    {
      title: 'Database Management',
      description:
        'Efficient database design and management using SQL or NoSQL technologies like PostgreSQL, MongoDB, and Firebase to ensure data security and scalability.',
      image: database,
    },
    {
      title: 'Performance Optimization',
      description:
        'Optimizing web performance by refining code, improving load times, and ensuring smooth operation under heavy traffic to enhance user satisfaction.',
      image: optimization,
    },
    {
      image: accessibility,
      title: 'Website Accessibility',
      description:
        'Ensuring your website meets WCAG standards, providing accessibility to all users, including those with disabilities, and improving user experience.',
    },
  ];

  return (
    <section
      ref={container}
      id="about"
      className="dark:bg-black bg-white rounded-t-xl about overflow-hidden px-2"
    >
      <div className="py-10">
        <div className="fade-in">
          <h3 className="text-5xl lg:text-8xl font-bold uppercase bg-gradient-to-bl dark:from-fuchsia-800 dark:to-rose-800 from-fuchsia-500 to-rose-500 bg-clip-text text-transparent py-10">
            About Me.
          </h3>
        </div>
        <div className="lg:flex mx-auto justify-between items-center">
          <div className="">
            <Image
              src={Picture}
              alt="Abubokor"
              width={500}
              height={400}
              loading="lazy"
              className="mx-auto rounded-xl text-center"
            />
          </div>
          <div className=" slide-up lg:w-1/2 py-2 lg:my-0 text-black dark:text-white mx-auto">
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: clean }}
                className="text-xl"
              />
            </div>
            <div className="mt-5">
              <Link
                href={'/#contact'}
                className="dark:text-white text-black bg-gradient-to-bl dark:from-fuchsia-800 dark:to-rose-800 from-fuchsia-500 to-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hoverable"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-zinc-600 dark:border-zinc-400" />
      {/* skills */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 my-20 text-center justify-center mx-auto items-center">
        {skillData?.map((skill) => (
          <div key={skill._id} className="flex flex-col items-center">
            <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-full mb-2">
              <img
                src={skill.icon}
                alt={`${skill.technology_name} icon`}
                className="w-12 h-12" // Adjust size as needed
              />
            </div>
            <span className="dark:text-white text-black hoverable flex items-center justify-center px-4 rounded-3xl border border-black dark:border-white py-2 transition-transform duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md transform hover:scale-105">
              {skill.technology_name}
            </span>
          </div>
        ))}
      </div>
      {/* experience */}
      <Experience />
      <hr className="border border-zinc-600 dark:border-zinc-400" />
      {/* services */}
      <div className="py-10" id="services">
        <h3 className="text-5xl lg:text-8xl font-bold uppercase bg-gradient-to-bl dark:from-fuchsia-800 dark:to-rose-800 from-fuchsia-500 to-rose-500 bg-clip-text text-transparent py-10">
          Services.
        </h3>
        <div className="grid w-full px-4 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto mt-10 gap-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="p-6 card hover:border-b-4 hover:border-rose-400 dark:hover:border-fuchsia-800 transition-all duration-300 w-full border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-950 shadow-xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
                className="w-20 h-20 object-cover mx-auto mb-4 rounded-full"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
