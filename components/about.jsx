"use client";
import React, { useRef } from "react";
import img from "@/public/assets/img.png";
import Image from "next/image";
const About = () => {
  return (
    <div className="bg-black">
      <div className="">
        <h2 className="text-white text-3xl lg:text-7xl uppercase font-bold py-4">
          About Me
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
        <div className="lg:w-1/2 py-2 lg:my-0 text-white mx-auto">
          <p className="lg:text-xl">
            <small>
              🚀 a passionate frontend developer with hands-on experience in
              HTML, CSS, JavaScript and TypeScript. I thrive in collaborative
              environments, showcasing effective communication and
              problem-solving skills in team projects. Committed to staying
              current with industry trends, I bring a fresh perspective and
              innovative mindset. Eager to contribute creativity and technical
              proficiency to your team, I am not just seeking a job but a
              journey of continuous learning and meaningful contributions. Let's
              build the future of web development together. 💻✨
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
  );
};

export default About;
