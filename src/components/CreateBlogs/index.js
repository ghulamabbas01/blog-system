import React, { useState } from "react";
import * as Yup from "yup";
import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useFormik, Form, FormikProvider } from "formik";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "../CreateBlogs/Select";
import AddImage from "./uploadSingleFile";
import Markdown from "./markdown";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

const Index = () => {
  const [loading, setLoading] = React.useState(false);
  const ResetPasswordSchema = Yup.object().shape({
    addimage: Yup.string().required("image name is Required."),
    firstName: Yup.string().required("firstName name is Required."),
    category: Yup.number().required("category Number is Required."),
    tages: Yup.array().required("tages name is Required."),
  });

  const formik = useFormik({
    initialValues: {
      addimage: "",
      firstName: "",
      category: "",
      tages: [],
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { resetForm }) => {},
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <Container maxWidth="md">
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={5}>
            <Typography
              variant="h1"
              color="initial"
              fontSize={48}
              fontWeight={700}
              textAlign="center"
              sx={{ paddingTop: "48px" }}>
              Blog Entry
            </Typography>
            <Box>
              <AddImage
                {...getFieldProps("addimage")}
                error={Boolean(touched.addimage && errors.addimage)}
                helperText={touched.addimage && errors.addimage}
              />
            </Box>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                {...getFieldProps("firstName")}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
              {/* Replace Select component with your own */}
              <Select
                {...getFieldProps("category")}
                error={Boolean(touched.category && errors.category)}
                helperText={touched.category && errors.category}
              />
            </Stack>

            <Box>
              <Autocomplete
                multiple
                limitTags={4}
                id="multiple-limit-tags"
                fullWidth
                options={top100Films}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tags"
                    placeholder="Tags"
                    {...getFieldProps("tages")}
                    error={Boolean(touched.tages && errors.tages)}
                    helperText={touched.tages && errors.tages}
                  />
                )}
              />
            </Box>
            <Box>
              <Markdown />
            </Box>
            <Box>
              <Button
                variant="contained"
                size="large"
                onClick={handleSubmit}
                // Add additional button props here
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Form>
      </FormikProvider>
    </Container>
  );
};

export default Index;
