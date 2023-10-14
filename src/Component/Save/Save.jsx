import React, { useContext } from "react";
import { blogContext } from "../../App";
import { Link } from "react-router-dom";

const Save = () => {
  const { blog } = useContext(blogContext);

  return (
    <>
      {blog.map((item) => {
        return (
          <Link to={`/Show/${item.id}`}>
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Save;
