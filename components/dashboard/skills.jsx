"use client";
import { contextProvider } from "@/provider/contextProvider";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Skill = () => {
  const route = useRouter();
  const [skills, setSkills] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { token } = useContext(contextProvider);

  useEffect(() => {
    if (!token) {
      route.push("/");
    }

    fetch("https://portfolio-backend-seven-kappa.vercel.app/api/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.data);
        setLoading(false);
      });
  }, [token, setSkills, isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const technology_name = e.target.skill.value;
    const icon = e.target.icon.files[0];

    const data = {
      technology_name: `${technology_name}`,
    };

    formData.append("file", icon);
    formData.append("data", JSON.stringify(data));

    fetch("https://portfolio-backend-seven-kappa.vercel.app/api/skills", {
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

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="">
          <label
            htmlFor="skill"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Skill
          </label>
          <input
            type="text"
            id="skill"
            placeholder="Type your skill."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="icon"
          >
            Upload file
          </label>
          <input
            className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 p-2.5 w-1/2 mx-auto focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="icon"
            type="file"
          />
        </div>
        <div className="mx-auto text-center mt-2">
          <button className="bg-blue-400 px-4 py-2 rounded-md">
            Add Skill
          </button>
        </div>
      </form>
      {isLoading && <p>Loading</p>}
      <div className="mt-10">
        <h2 className="text-3xl text-center font-bold my-4">All Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 my-20 text-center justify-center mx-auto items-center">
          {skills?.map((i) => (
            <div key={i._id} className="">
              <span className="text-black px-4 rounded-3xl border border-black  py-2">
                {i?.technology_name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
