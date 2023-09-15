import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
  Box,
} from "@mui/material";
import Categories from "../../components/Categories";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { format } from "date-fns";
// styled
import RootStyled from "./styled";
const BlogsList = () => {
  const [blogs, setBlogs] = useState([]); // State to store the fetched blogs

  // Function to fetch all blogs from Firestore
  const fetchBlogs = async () => {
    const blogsCollectionRef = collection(db, "blogs"); // Replace "blogs" with your actual collection name

    try {
      const querySnapshot = await getDocs(blogsCollectionRef);

      const fetchedBlogs = [];
      querySnapshot.forEach((doc) => {
        const blogData = doc.data();
        fetchedBlogs.push(blogData);
      });

      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
  };

  // Use useEffect to fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []); // The empty array ensures this effect runs once when the component mounts

  // Render the first blog differently
  const firstBlog = blogs[0];
  const otherBlogs = blogs.slice(1);
  console.log(blogs);
  return (
    <RootStyled>
      <Container maxWidth>
        <Typography
          variant="h5"
          fontSize={48}
          fontWeight={700}
          color={"#0D0C22"}>
          The Blog
        </Typography>
        <Grid container spacing={15}>
          <Grid item md={8} xs={12}>
            {/* Render the first blog */}
            <Stack spacing={1}>
              <Typography
                variant="body1"
                fontSize={14}
                fontWeight={500}
                color={"#9E9EA7"}
                pt={{ md: 8, xs: 4 }}>
                {firstBlog &&
                  format(firstBlog.timestamp.toDate(), "dd-MM-yyyy")}
              </Typography>
              <Typography
                variant="h3"
                fontSize={36}
                fontWeight={500}
                color={"#0D0C22"}
                pb={{ md: 4, xs: 2 }}>
                {firstBlog?.title}
              </Typography>
              <img src={firstBlog?.thumbnail} alt={firstBlog?.title} />
              <Box
                sx={{ padding: { md: "32px 0px ", xs: "16px 0px" } }}
                dangerouslySetInnerHTML={{ __html: firstBlog?.markdown }}
              />
            </Stack>

            {/* Render other blogs */}
            {otherBlogs.map((blog) => (
              <Box key={blog.uid} sx={{ cursor: "pointer" }}>
                <Divider />
                <Stack
                  direction={{ md: "row", xs: "column" }}
                  mt={3}
                  pb={3}
                  spacing={4}
                  display="flex"
                  alignItems={{ md: "center", xs: "left" }}>
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={200}
                    height={170}
                    style={{ borderRadius: "8px", objectFit: "cover" }}
                  />
                  <Stack>
                    <Typography
                      variant="body1"
                      fontSize={14}
                      fontWeight={500}
                      color={"#9E9EA7"}>
                      {blog && format(blog.timestamp.toDate(), "dd-MM-yyyy")}
                    </Typography>

                    <Typography variant="body1" fontSize={24} fontWeight={500}>
                      {blog.title}
                    </Typography>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog.markdown.slice(0, 100),
                      }}
                    />
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Grid>
          <Grid item md={4} xs={12}>
            <Categories />
          </Grid>
        </Grid>{" "}
      </Container>
    </RootStyled>
  );
};

export default BlogsList;
