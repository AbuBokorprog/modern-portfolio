"use client";
import React, { useState } from "react";
import TextEditor from "../text-editor/editor";

const About = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <div>
      <TextEditor setValue={setValue} value={value} />
    </div>
  );
};

export default About;