import React from 'react';
import { Timeline, Event } from 'react-timeline-scribble';
const Experience = () => {
  return (
    <div className="text-black dark:text-white dark:bg-black bg-white slide-up">
      <h2 className="text-5xl lg:text-8xl font-bold uppercase bg-gradient-to-bl from-fuchsia-800 to-rose-800 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent py-10 lg:py-16">
        Experience.
      </h2>
      <Timeline>
        <Event
          interval={'2024 – Present'}
          title={'Frontend Developer at Webcoder IT Institute'}
          subtitle={'Dhaka, Uttara'}
        >
          Managed and developed the entire frontend architecture of various
          projects. Implemented responsive designs, interactive UIs, and ensured
          cross-browser compatibility using React, JavaScript, and modern web
          technologies. Collaborated closely with backend teams to deliver
          high-quality web applications.
        </Event>
      </Timeline>
    </div>
  );
};

export default Experience;
