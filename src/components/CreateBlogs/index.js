import React, { useState } from "react";
import * as Yup from "yup";
import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import toast from "react-hot-toast";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormik, Form, FormikProvider } from "formik";
import Autocomplete from "@mui/material/Autocomplete";
import AddImage from "./uploadSingleFile";
import Markdown from "./markdown";

import { useAuth } from "../../AuthContext";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { imageDb, db } from "../../firebase";

import { collection, addDoc } from "firebase/firestore";

const categories = [
  {
    _id: 1,
    name: "abbas",
  },
  {
    _id: 2,
    name: "mohsin",
  },
  {
    _id: 3,
    name: "amir",
  },
];

const Index = () => {
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const ResetPasswordSchema = Yup.object().shape({
    title: Yup.string().required("title name is required."),
    category: Yup.string().required("category name is required."),
    tags: Yup.array().min(1, "tags is required"),
    cover: Yup.mixed().required("cover is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "abbas",
      tags: [],
      cover: null,
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      // Handle form submission here
      setLoading(true);

      const imageRef = ref(imageDb, `files/${values.cover.name}`);

      uploadBytes(imageRef, values.cover).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          const { cover, ...others } = values;
          const currentTime = new Date();
          // i want this data variable into my firebase blog table
          const data = {
            ...others,
            uid: currentUser.uid,
            thumbnail: url,
            markdown: html,
            timestamp: currentTime,
          };
          try {
            // Add the data to a "blogs" collection in Firestore
            const docRef = await addDoc(collection(db, "blogs"), data);
            setLoading(false);
            toast.success("Created Successfully");
          } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("something went wrong");
            setLoading(false);
          }
        });
      });
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    values,
    setFieldValue,
    FormHelperText,
  } = formik;
  // Create an onChange handler for the category field
  const handleCategoryChange = (event) => {
    const newValue = event.target.value;
    formik.setFieldValue("category", newValue);
    console.log(currentUser);
  };
  return (
    <Container maxWidth="md">
      <Box sx={{ margin: { md: "48px 0px", xs: "24px 0px" } }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <Typography
                variant="h1"
                color="initial"
                fontSize={48}
                fontWeight={700}
                textAlign="center">
                Blog Entry
              </Typography>
              <Box>
                <AddImage
                  onDrop={(file) => formik.setFieldValue("cover", file[0])}
                  error={Boolean(touched.cover && errors.cover)}
                />
              </Box>
              {/* TextField for title*/}
              <Stack direction={{ md: "row", xs: "column" }} spacing={3}>
                <TextField
                  id="outlined-basic"
                  placeholder="Title"
                  variant="outlined"
                  fullWidth
                  {...getFieldProps("title")}
                  error={Boolean(touched.title && errors.title)}
                  helperText={touched.title && errors.title}
                />
                {/* TextField for title*/}
                {/* category for title*/}
                <FormControl fullWidth>
                  <Select
                    native
                    {...getFieldProps("category")}
                    value={values.category}
                    id="grouped-native-select">
                    {categories?.map((category) => (
                      <option key={category._name} value={category._name}>
                        {category.name}
                      </option>
                    ))}
                  </Select>
                  {touched.category && errors.category && (
                    <FormHelperText error sx={{ px: 2, mx: 0 }}>
                      {touched.category && errors.category}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
              {/* Autocomplete for tage start Here */}
              <Box>
                <Autocomplete
                  multiple
                  freeSolo
                  value={values.tags}
                  onChange={(event, newValue) => {
                    setFieldValue("tags", newValue);
                  }}
                  options={[]}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        {...getTagProps({ index })}
                        key={option}
                        size="small"
                        label={option}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      placeholder="Tages"
                      {...params}
                      error={Boolean(touched.tags && errors.tags)}
                      helperText={touched.tags && errors.tags}
                    />
                  )}
                />
              </Box>
              {/* Autocomplete for tage start end */}
              {/* markdow component here start */}
              <Box>
                <Markdown handleChange={(v) => setHtml(v)} />
              </Box>
              {/* markdow component here end */}
              <Box>
                <LoadingButton
                  loading={loading}
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{ fontFamily: "Inter" }}>
                  Submit
                </LoadingButton>
              </Box>
            </Stack>
          </Form>
        </FormikProvider>
      </Box>
    </Container>
  );
};

export default Index;
