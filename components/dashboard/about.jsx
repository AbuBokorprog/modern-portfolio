"use client";
import React, { useContext, useState } from "react";
import TextEditor from "../text-editor/editor";
import { contextProvider } from "@/provider/contextProvider";

const About = () => {
  const [value, setValue] = useState();
  const { token } = useContext(contextProvider);

  const aboutHandler = (e) => {
    e.preventDefault();

    const description = value;

    const image = e.target.image.files[0];

    const data = {
      description: `${description}`,
    };

    const formData = new FormData();

    formData.append("file", image);
    formData.append("data", JSON.stringify(data));

    fetch("http://localhost:5000/api/about", {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.success) {
          alert("successfully");
        }
      });
  };

  return (
    <div>
      <TextEditor setValue={setValue} value={value} />
      <form onSubmit={aboutHandler} className="mt-10">
        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="image"
          >
            Upload file
          </label>
          <input
            className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 p-2.5 w-1/2 mx-auto focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="image"
            type="file"
          />
        </div>
        <div className="mx-auto text-center mt-2">
          <button className="bg-blue-400 px-4 py-2 rounded-md">
            Add About
          </button>
        </div>
      </form>
    </div>
  );
};

export default About;
