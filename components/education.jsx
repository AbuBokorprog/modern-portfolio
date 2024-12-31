'use client';
import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './ui/education-card';

const Education = ({ educationData }) => {
  return (
    <section className="text-black dark:text-white dark:bg-black bg-white slide-up">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl lg:text-8xl font-bold uppercase bg-gradient-to-bl from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent py-10 lg:py-16"
      >
        Education.
      </motion.h2>
      <div className=" mx-auto px-4">
        <div className=" mx-auto">
          {educationData?.data?.map((edu) => (
            <EducationCard key={edu?._id} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
