'use client';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.title', {
      y: 100,
      opacity: 0,
      duration: 0.5,
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
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
      });
  }, []);

  return (
    <section
      ref={container}
      id="#"
      className="relative lg:my-10 min-h-screen flex items-center justify-center dark:text-white"
    >
      <div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-center bg-gradient-to-bl dark:from-fuchsia-800 dark:to-rose-800 from-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
          <span className="lg:pe-20 title">Hi there, I'm</span> <br />
          <span className="lg:ps-20 title">Abu Bokor.</span>
        </h1>
        {/* Typing Animation for roles */}
        <div className="mt-5 title text-center text-2xl md:text-4xl font-medium text-white">
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'MERN Stack Developer',
              2000,
              'Full Stack Developer',
              2000,
            ]}
            repeat={Infinity}
            speed={40}
          />
        </div>
        <div className="flex title justify-center items-center gap-4 md:gap-8 mt-8">
          <a href="https://github.com/AbuBokorprog" className="hoverable">
            <FaGithub className="w-8 md:w-12 h-8 md:h-12 dark:text-white text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-abu-bokor/"
            className="hoverable"
          >
            <FaLinkedin className="w-8 md:w-12 h-8 md:h-12 dark:text-white text-black" />
          </a>
          <a href="#" className="hoverable">
            <FaInstagramSquare className="w-8 md:w-12 h-8 md:h-12 dark:text-white text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
