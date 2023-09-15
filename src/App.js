import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import BlogDetail from "./pages/blogDetail";
import Login from "./pages/login";
import CreateBlog from "./pages/create-blog";
import { AuthProvider } from "./AuthContext"; // Import the AuthProvider
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <AuthProvider>
      {/* Wrap your entire app with AuthProvider */}
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
          <Route path="Login" element={<Login />} />
          <Route path="create-blog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
