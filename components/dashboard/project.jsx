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

  useEffect(() => {
    if (!token) {
      route.push("/");
    }

    fetch(
      "https://portfolio-backend-seven-kappa.vercel.app/api/projects-category"
    )
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.data);
        setLoading(false);
      });
  }, [token, setCategory, isLoading]);

  const categoryHandler = (e) => {
    e.preventDefault();

    const category = e.target.category.value;
    const data = { category_name: category };

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

    e.target.category.value = "";
  };

  return (
    <div>
      <TextEditor setValue={setValue} value={value} />

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
