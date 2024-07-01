"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const subject = data.subject;
    const body = data.message;
    const email = data.email;
    const name = data.name;

    const templateParams = {
      to_name: "Abu Bokor",
      from_name: name,
      message: body,
    };

    emailjs
      .send(
        "service_7exo6md",
        "template_x489mwc",
        templateParams,
        "TPpFzhZxFK7nDe2XM"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        (err) => {
          console.error("Failed to send email.", err);
        }
      );
  };

  return (
    <section id="contact" className="dark:text-white">
      <div className="py-10 overflow-hidden px-2 ">
        <h2 className=" text-3xl lg:text-[165px] text-center uppercase font-bold py-10">
          Get in touch.
        </h2>
        <div className="lg:flex pt-20 items-start flex-row-reverse">
          <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
            <div className=" lg:flex gap-4 items-center">
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
                  {...register("email", { required: true })}
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
                {...register("message", { required: true, maxLength: 20 })}
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
    </section>
  );
};

export default Contact;
