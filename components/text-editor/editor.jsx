"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ value, setValue }) => {
  const toolbarOptions = [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ color: [] }][({ list: "ordered" }, { list: "bullet" })],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["link", "image", "video"],
    ["clean"],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        className="h-80"
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "color",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
          "script",
          "align",
          "clean",
        ]}
        theme="snow"
      />
    </div>
  );
};

export default TextEditor;
