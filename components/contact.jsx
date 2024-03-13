"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" py-10 min-h-screen overflow-hidden">
      <h2 className=" text-3xl lg:text-[165px] text-center uppercase font-bold py-10">
        Get in touch.
      </h2>
      <div className="flex mt-20 items-start ">
        <div className="w-1/5">
          <h3 className="text-2xl uppercase font-semibold">Socials.</h3>
          <div className="my-4 flex flex-col">
            <a href="http://">Linkedin</a>
            <a href="http://">Instagram</a>
            <a href="http://">Github</a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
          <div className=" flex gap-4 items-center">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name:*
              </label>
              <input
                placeholder="Type your name"
                className="bg-gray-50 min-w-full border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("name", { required: true, maxLength: 20 })}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email:*
              </label>
              <input
                type="email"
                placeholder="Type your email address"
                className="bg-gray-50 border min-w-full border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("email", { required: true, maxLength: 20 })}
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Subject:*
            </label>
            <input
              placeholder="Type your subject"
              className="bg-gray-50 min-w-full border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("subject", { required: true, maxLength: 20 })}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Message:*
            </label>
            <textarea
              placeholder="Type your message"
              rows={5}
              className="bg-gray-50 min-w-full border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("name", { required: true, maxLength: 20 })}
            />
          </div>
          <div className="flex justify-center items-center my-4">
            <input
              type="submit"
              value={"Send Message"}
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
