import React from 'react';
import BlogCard from './ui/BlogCard';
// import { Element } from 'react-scroll';

const Blogs = ({ blogs }) => {
  return (
    <>
      <div className="portfolio-container rounded-b-xl bg-white min-h-screen text-black dark:text-white px-2 dark:bg-black overflow-hidden lg:pb-16">
        <h2 className="text-5xl selectTitle lg:text-8xl font-bold uppercase bg-gradient-to-bl from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent py-10 lg:py-16">
          Blogs.
        </h2>

        <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
          {blogs?.data?.map((blog) => (
            <BlogCard blog={blog} key={blog?._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
