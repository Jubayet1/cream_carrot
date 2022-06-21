import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../App";

const Details = () => {
  const [blogs] = useContext(BlogContext);

  let { Key } = useParams();
  const blog = blogs.find((blog) => blog.productKey == Key);
  console.log(blog);
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={blog.img}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="nothing"
          />
          <div>
            <h1 class="text-5xl font-bold">{blog.name}</h1>
            <p class="py-6">
                {blog.description}
            </p>
            <button class="btn btn-primary">{blog.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
