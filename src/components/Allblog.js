import React from "react";
import { useSearchParams } from "react-router-dom";
//Define default value
const minlimit=10;
const minpage=0;
const order="asc";
const field="createdAt";
const SubmitBlogs = ({ allBlogPosts }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sortOrder") || order;
  const sortField = searchParams.get("sortField") || field;
  const limit = Number(searchParams.get("limit")) || minlimit;
  const page = Number(searchParams.get("page")) || minpage;

  const sortedBlogPosts = (a, b) => {
    if (sortOrder.toLowerCase() === "asc") {
      if (a[sortField] < b[sortField]) {
        return -1;
      }else if (a[sortField] > b[sortField]) {
        return 1;
      }
    }
    if (sortOrder.toLowerCase() === "desc") {
      if (a[sortField] < b[sortField]) {
        return 1;
      }else if (a[sortField] > b[sortField]) {
        return -1;
      }
    }
    return 0;
  };

  const blogsToDisplay = allBlogPosts.sort(sortedBlogPosts).slice(page * limit, page * limit + limit);

  return (
    <div>
      <h1>All Blogs</h1>
      {blogsToDisplay.map((blog, index) => {
        return (
          <div className="multiPost" key={index}>
            <p>Title: {blog.title}</p>
            <p className="text">{blog.text}</p>
            <p>Author: {blog.author}</p>
            <p className="text">Created: {blog.createdAt}</p>
            <p className="text">ID: {blog.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SubmitBlogs;