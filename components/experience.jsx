import React from 'react';
import ExperienceCard from './ui/experience-card';

const Experience = ({ experienceData }) => {
  return (
    <div className="text-black dark:text-white dark:bg-black bg-white slide-up">
      <h2 className="text-5xl lg:text-8xl font-bold uppercase bg-gradient-to-bl from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent py-10 lg:py-16">
        Experience.
      </h2>
      <div className=" mx-auto px-4">
        <div className=" mx-auto">
          {experienceData?.data?.map((experience) => (
            <ExperienceCard experience={experience} key={experience?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
