'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Element } from 'react-scroll';
const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const subject = data.subject;
    const body = data.message;
    const email = data.email;
    const name = data.name;

    const templateParams = {
      to_name: 'Abu Bokor',
      from_name: name,
      message: body,
    };

    emailjs
      .send(
        'service_7exo6md',
        'template_x489mwc',
        templateParams,
        'TPpFzhZxFK7nDe2XM'
      )
      .then(
        (response) => {
          console.log(
            'Email sent successfully!',
            response.status,
            response.text
          );
        },
        (err) => {
          console.error('Failed to send email.', err);
        }
      );
  };

  return (
    <Element>
      <section className="dark:text-white">
        <div className="px-2 ">
          <h2 className="text-4xl lg:text-[120px] xl:text-[165px] text-center font-bold uppercase bg-gradient-to-bl from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent py-5 lg:py-16">
            Get in touch.
          </h2>
          <div className="lg:flex items-start flex-row-reverse py-5 lg:py-10">
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
                    className="bg-gray-50 min-w-full border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:text-white "
                    {...register('name', { required: true, maxLength: 20 })}
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
                    className="bg-gray-50 min-w-full border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:text-white "
                    {...register('email', { required: true })}
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
                  className="bg-gray-50 min-w-full border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:text-white "
                  {...register('subject', { required: true, maxLength: 20 })}
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
                  className="bg-gray-50 min-w-full border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:text-white "
                  {...register('message', { required: true, maxLength: 20 })}
                />
              </div>
              <div className="flex justify-center items-center my-4">
                <input
                  type="submit"
                  value={'Send Message'}
                  className="text-white  bg-gradient-to-bl from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hoverable"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
