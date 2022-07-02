import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
//In /pages, create two new files.
export default function Blogs() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}