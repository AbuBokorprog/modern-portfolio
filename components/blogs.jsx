import React from 'react';
import BlogCard from './ui/BlogCard';
// import { Element } from 'react-scroll';

const Blogs = ({ blogs }) => {
  return (
    <>
      <div className="rounded-b-xl bg-white text-black dark:text-white px-2 dark:bg-black overflow-hidden pb-10 lg:pb-16">
        <h2 className="text-5xl lg:text-8xl font-bold uppercase bg-gradient-to-bl from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent py-10 lg:py-16">
          Blogs.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
          {blogs?.data?.map((blog) => (
            <BlogCard blog={blog} key={blog?._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
