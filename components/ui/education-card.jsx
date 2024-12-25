'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import moment from 'moment';

const EducationCard = ({ education }) => {
  const {
    degree,
    institute_name,
    startTime,
    endTime,
    grade,
    _id,
    field,
    institute_location,
    isPresent,
    short_description,
  } = education;

  const achievements = ['Achievement 1', 'Achievement 2'];
  const courses = [
    'Data Structures',
    'Algorithms',
    'Web Development',
    // ...
  ];
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
            <FaGraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{institute_name}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-600">
                  {moment(startTime).format('MMMM YYYY')}
                </span>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm text-gray-600">
                  {isPresent ? 'Present' : moment(endTime).format('MMMM YYYY')}
                </span>
              </div>
              {grade && (
                <>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
                    Grade: {grade}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-lg bg-gradient-to-r from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent">
              {degree}
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Field of Study:{field}
            </p>
          </div>

          <div className="text-gray-700 dark:text-gray-300">
            <p>{short_description}</p>
          </div>

          {achievements && achievements.length > 0 && (
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Key Achievements:</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {courses && courses.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {courses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                >
                  {course}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
