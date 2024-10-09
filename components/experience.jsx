import React from 'react';
import { Timeline, Event } from 'react-timeline-scribble';
const Experience = () => {
  return (
    <div className="text-black dark:text-white">
      <h2 className="dark:text-white text-5xl lg:text-8xl uppercase font-bold py-10">
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
