import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sanitizeHtml from 'sanitize-html';

const PortfolioCard = ({ p }) => {
  return (
    <div
      key={p?._id}
      className="portfolio-item mb-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
    >
      {/* Thumbnail Image */}
      <Image
        src={p?.thumbnail}
        alt={p?.projects_name}
        width={500}
        height={500}
        className="w-full h-64 object-cover mb-4 rounded-lg shadow-md"
      />

      {/* Project Title */}
      <h3 className="text-2xl font-semibold uppercase mb-3 tracking-wide">
        {p?.projects_name}
      </h3>

      {/* Short Description */}
      <div className="hidden lg:block mb-4">
        <div
          className="text-sm text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(p?.short_description, {
              allowedTags: ['p'],
              allowedAttributes: {},
            }),
          }}
        />
      </div>

      {/* Technologies Used */}
      {/* <div className="my-4">
        <h3 className="text-lg font-semibold mb-2">Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2 text-center">
          {p?.skills?.map((i) => (
            <div
              key={i}
              className="py-1 px-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
            >
              {i}
            </div>
          ))}
        </div>
      </div> */}

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-4">
        <Link
          href={`/portfolio/${p?._id}`}
          className="bg-gradient-to-bl from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 text-white  px-4 py-2 rounded-lg shadow hover:bg-rose-600 transition-colors duration-200 hoverable"
        >
          View Details
        </Link>
        <a
          href={`${p?.view_url}`}
          target="_blank"
          className="bg-gradient-to-bl from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 text-white  px-4 py-2 rounded-lg shadow hover:bg-fuchsia-600 transition-colors duration-200 hoverable"
        >
          Preview
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
