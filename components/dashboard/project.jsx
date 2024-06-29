"use client";
import React, { useContext, useEffect, useState } from "react";
import TextEditor from "../text-editor/editor";
import { contextProvider } from "@/provider/contextProvider";
import { useRouter } from "next/navigation";

const Project = () => {
  const [value, setValue] = useState();
  const route = useRouter();
  const [category, setCategory] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { token } = useContext(contextProvider);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (!token) {
      route.push("/");
    }

    fetch("http://localhost:5000/api/projects-category")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.data);
        setLoading(false);
      });
  }, [token, setCategory, isLoading]);

  const categoryHandler = (e) => {
    e.preventDefault();

    const category = e.target.category.value;

    const data = {
      category_name: category,
    };

    fetch(
      "https://portfolio-backend-seven-kappa.vercel.app/api/projects-category",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {});
  };

  const projectHandler = (e) => {
    e.preventDefault();

    const categoryId = e.target.categories.value;
    const projects_name = e.target.name.value;
    const github_url = e.target.github.value;
    const view_url = e.target.view.value;
    const skills = selectedOptions;
    const thumbnail = e.target.image.files[0];
    const short_description = value;
    const data = {
      categoryId,
      projects_name,
      github_url,
      view_url,
      skills,
      short_description,
    };

    const formData = new FormData();

    formData.append("file", thumbnail);
    formData.append("data", JSON.stringify(data));

    fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleSelectChange = (event) => {
    const options = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(options);
  };

  return (
    <div>
      <TextEditor setValue={setValue} value={value} />
      <form onSubmit={projectHandler} className="mt-10">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="project name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-1/2 mx-auto dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="categories"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an Category
          </label>
          <select
            id="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-1/2 mx-auto dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a category</option>
            {category?.map((c) => (
              <option value={c._id} key={c?._id}>
                {c?.category_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="github"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Github URL
          </label>
          <input
            type="text"
            id="github"
            placeholder="Github-URL"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-1/2 mx-auto dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <label
          htmlFor="skills"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Choose Skills:
        </label>
        <select
          id="skills"
          className="h-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          multiple
          onChange={handleSelectChange}
        >
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
        <div>
          <label
            htmlFor="view"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            View URL
          </label>
          <input
            type="text"
            id="view"
            placeholder="View-URL"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-1/2 mx-auto dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
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
            Add Project
          </button>
        </div>
      </form>

      {/* add categories */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center">Add project-category</h2>
        <form className="my-4" onSubmit={categoryHandler}>
          <div className="">
            <label
              htmlFor="category"
              className="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Type your category."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mx-auto text-center mt-2">
            <button className="bg-blue-400 px-4 py-2 rounded-md">
              Add Category
            </button>
          </div>
        </form>

        {category?.map((c) => (
          <div key={c?._id}>
            <li>{c?.category_name}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
