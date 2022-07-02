import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//In index.js, import BrowserRouter from react-router and add it to the React root render statement.
//https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app

//Nest a new route under the "/blogs" route, the path should be ":blogId", the element should be <BlogPost/>
import BlogPost from "./components/BlogPost";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();