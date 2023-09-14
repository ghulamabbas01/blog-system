import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Login from "./pages/login";
import CreateBlog from "./pages/createBlog";
import { AuthProvider } from "./AuthContext"; // Import the AuthProvider

export default function App() {
  return (
    <AuthProvider>
      {/* Wrap your entire app with AuthProvider */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="Login" element={<Login />} />
          <Route path="createBlog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
