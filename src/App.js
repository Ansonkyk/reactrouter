//1
//Create a new github repo called reactrouter, clone the repo to your computer and add the link to populi.
//Use create-react-app in the local project root folder (AKA the project root) to initialize the React project. Run npm start to see the default create-react-app page on localhost:3000.
// Run npm i react-router-dom@6 in the project root.
import React from "react";
import "./App.css";
import Home from "./page/Home";
//This line become useless
import Blogs from "./page/Blogs";
import { Route, Routes } from "react-router-dom";
//Nest a new route under the "/blogs" route, the path should be ":blogId", the element should be <BlogPost/>
import BlogPost from "./components/BlogPost";
import { allBlogPosts } from "./utils/sampleBlg";
//The <AllBlogs /> component should display all the blogs in sample blogs to the page.
import AllBlogs from "./components/Allblog";
import SubmitBlog from "./page/SubmitBlog";
/*Set all as deflaut as requested*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
              path="/blogs/:blogId"
              element={<BlogPost allBlogPosts={allBlogPosts} />}
            />
          <Route
              path="/blogs"
              element={<AllBlogs allBlogPosts={allBlogPosts} />}
            />
          <Route
            path="/submit-blog"
            element={<SubmitBlog allBlogPosts={allBlogPosts} />}
          />
      </Routes>
      </header>
    </div>
  );
}

export default App;