'use client';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.title span', {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.3,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 50%',
          end: 'bottom 30%',
          scrub: 5,
        },
      })
      .to(container.current, {
        y: -30,
        delay: 1,
        duration: 1,
        opacity: 0,
      });
  }, []);

  return (
    <section
      ref={container}
      id="#"
      className="relative min-h-screen flex items-center justify-center dark:text-white"
    >
      <div>
        <h1 className="text-6xl lg:text-9xl font-extrabold text-center bg-gradient-to-bl dark:from-fuchsia-800 dark:to-rose-800 from-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
          <span className="lg:pe-20">Hi there, I'm</span> <br />
          <span className="lg:ps-20">Abu Bokor.</span>
        </h1>
        <div className="flex justify-center items-center gap-4 md:gap-8 mt-8">
          <a href="https://github.com/AbuBokorprog" className="hoverable">
            <FaGithub className="w-8 lg:w-12 h-8 lg:h-12 dark:text-white text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-abu-bokor/"
            className="hoverable"
          >
            <FaLinkedin className="w-8 lg:w-12 h-8 lg:h-12 dark:text-white text-black" />
          </a>
          <a href="#" className="hoverable">
            <FaInstagramSquare className="w-8 lg:w-12 h-8 lg:h-12 dark:text-white text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
