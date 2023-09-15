import React, { useState, useEffect } from "react";
import BlogDetails from "../components/blogdetails";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
const getBlogById = async (blogId) => {
  try {
    const blogRef = doc(db, "blogs", blogId); // Assuming your blog documents are in a "blogs" collection
    const blogDoc = await getDoc(blogRef);

    if (blogDoc.exists()) {
      return blogDoc.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting blog by ID: ", error);
    throw error;
  }
};

const BlogDetail = () => {
  const { id } = useParams(); // Assuming you have the id in the URL params
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await getBlogById(id);
        if (blogData) {
          setBlog(blogData);
        } else {
          console.log("Blog not found!");
        }
      } catch (error) {
        console.error("Error fetching blog: ", error);
      }
    };

    fetchBlog();
  }, [id]);

  console.log(blog);

  return <BlogDetails />;
};

export default BlogDetail;
