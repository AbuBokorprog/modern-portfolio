'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import sanitizeHtml from 'sanitize-html';
import Experience from './experience';
import Picture from '../public/assets/abubokor.jpeg';
import database from '../public/assets/database-management.png';
import integration from '../public/assets/integration.png';
import responsive from '../public/assets/responsive-design.png';
import optimization from '../public/assets/optimization.png';
import fullStack from '../public/assets/web-development.png';
import accessibility from '../public/assets/accessibility.png';
import { Element } from 'react-scroll';

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
        opacity: 0,
        duration: 1.5, // Increased the duration for a smoother effect
        ease: 'power3.out', // Using a more fluid easing for the animation
        stagger: 0.5, // Reduced the stagger time for quicker animations
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%', // Adjusted for a more noticeable start
          end: 'bottom top', // Ensures it stops at the right point
          // scrub: 1, // Ensures the animation is tied to scroll position for smooth interaction
          once: true, // The animation only happens once for better performance
          // markers: false, // Removed markers unless for debugging
        },
      });
    },
    { scope: container }
  );

  // const clean = sanitizeHtml(aboutData?.description, {
  //   allowedTags: ['p'],
  //   allowedAttributes: {},
  // });

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
    <Element>
      <section
        name="about"
        ref={container}
        className="element dark:bg-black bg-white rounded-t-xl about overflow-hidden px-2"
      >
        <div className="">
          <div className="fade-in">
            <h3 className="text-5xl lg:text-8xl font-bold uppercase bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent py-10 lg:py-16">
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
            <div className="slide-up lg:w-1/2 py-4 lg:my-0 text-black dark:text-white mx-auto">
              <div>
                <div className="text-xl leading-relaxed">
                  🌟 <strong>A dedicated Full Stack Developer</strong> with
                  extensive experience in both frontend and backend
                  technologies, including HTML, CSS, JavaScript, TypeScript,
                  Node.js, and various frameworks. I excel in building dynamic
                  and responsive web applications that provide seamless user
                  experiences. My problem-solving abilities and collaborative
                  approach allow me to thrive in team environments, where I
                  contribute effectively to project success.
                  <br />
                  <br />
                  Committed to continuous learning, I stay updated on industry
                  trends and best practices. I am eager to leverage my
                  creativity and technical skills to tackle complex challenges
                  and deliver impactful solutions. Let's work together to shape
                  the future of web development! 🚀💻
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                  <div>
                    <strong>Phone:</strong> +8801885236058
                  </div>
                  <div>
                    <strong>Email:</strong> abubokor1066@gmail.com
                  </div>
                  <div>
                    <strong>Location:</strong> Bangladesh
                  </div>
                  <div>
                    <strong>Languages:</strong> Bangla, English
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href={'/#contact'}
                    className="text-white dark:text-black bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 hover:shadow-lg transition-all hoverable"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-zinc-600 dark:border-zinc-400" />
        {/* skills */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-5 py-10 lg:py-16 text-center justify-center mx-auto items-center">
          {skillData?.map((skill) => (
            <div key={skill._id} className="flex flex-col items-center">
              <div className="bg-gray-300 dark:bg-gray-50 p-4 rounded-full mb-2">
                <img
                  src={skill.icon}
                  alt={`${skill.technology_name} icon`}
                  className="w-12 h-12" // Adjust size as needed
                />
              </div>
              {/* <span className="dark:text-white text-black hoverable flex items-center justify-center px-4 rounded-3xl border border-black dark:border-white py-2 transition-transform duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md transform hover:scale-105">
                {skill.technology_name}
              </span> */}
            </div>
          ))}
        </div>
        <hr className="border border-zinc-600 dark:border-zinc-400" />
      </section>
      {/* experience */}
      <Experience />
      {/* services */}
      <section name="services slide-up">
        <div id="services">
          <h3 className="text-5xl lg:text-8xl font-bold uppercase bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent py-10 lg:py-16">
            Services.
          </h3>
          <div className="grid w-full px-4 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto gap-6">
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
    </Element>
  );
};

export default About;
