"use client";
import React, { useState } from "react";
import TextEditor from "../text-editor/editor";

const Project = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <div>
      <TextEditor setValue={setValue} value={value} />
    </div>
  );
};

export default Project;
