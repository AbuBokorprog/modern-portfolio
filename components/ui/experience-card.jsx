'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MdWork } from 'react-icons/md';
import moment from 'moment';

const ExperienceCard = ({ experience }) => {
  const {
    position,
    company_name,
    startTime,
    short_description,
    type,
    endTime,
    isPresent,
    company_location,
  } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col md:flex-row gap-4 mb-10 group"
    >
      {/* Timeline dot and line */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500" />
        <div className="w-0.5 h-full bg-gradient-to-b from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500" />
      </div>

      {/* Card Content */}
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 rounded-lg">
            <MdWork className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-start flex-wrap gap-2">
              <h3 className="text-xl font-bold">{company_name}</h3>
              <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-rose-700 dark:text-rose-300 rounded-full">
                {type}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-1 text-gray-600 dark:text-gray-400">
              <span>{company_location}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>{moment(startTime).format('MMMM YYYY')}</span>
                <span>-</span>
                <span>
                  {isPresent ? 'Present' : moment(endTime).format('MMMM YYYY')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-lg bg-gradient-to-r from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent">
            {position}
          </h4>

          <div className="text-gray-700 dark:text-gray-300 prose prose-sm max-w-none">
            <p>{short_description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
