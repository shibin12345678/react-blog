import React, { useContext, useRef } from "react";
import "./Write.css";
import { blogContext } from "../../App";
import { Link } from "react-router-dom";

const Write = () => {
  const { blog, setBlog } = useContext(blogContext);
  const data = useRef({});
  const text = useRef({});
  const handleClick = () => {
    const newData = data.current.value;
    const newText = text.current.value;
    const value = { title: newData, body: newText, id: Date.now() };
    setBlog([...blog, value]);
   
  };

  return (
    <>
      <div className="write-main">
        <h1 className="heading">Create Blog</h1>
        <textarea
          placeholder="Title"
          cols={60}
          className="title"
          ref={data}
        ></textarea>
        <br />

        <textarea
          className="textare"
          placeholder="WriteNotes..."
          cols={60}
          rows={15}
          ref={text}
        ></textarea>
        <br />
        <Link to="/Save">
          <button className="write-btn" onClick={handleClick}>
            Save
          </button>
        </Link>
      </div>
    </>
  );
};

export default Write;
