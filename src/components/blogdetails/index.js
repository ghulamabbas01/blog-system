import React from "react";
import {
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

// icons
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";

const SocialData = [
  {
    id: 1,
    name: "Facebook",
    icon: <FaFacebookSquare color="#3B5998" fontSize={24} />,
    urlPath: "",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <FaTwitter color="#1DA1F2" fontSize={24} />,
    urlPath: "",
  },
  {
    id: 3,
    name: "Linkedin",
    icon: <FaLinkedin color="#0077B5" fontSize={24} />,
    urlPath: "",
  },
  {
    id: 4,
    name: "Copy",
    icon: <BiLinkAlt color="#6E6D7A" fontSize={24} />,
    urlPath: "",
  },
];

const index = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          background: {
            md: "linear-gradient(to right, #fff 40%, #FFF5FC 30%)",
            xs: "#fff",
          },
          margin: { md: "120px 0px", xs: "24px 0px" },
          padding: { md: 10, xs: 0 },
        }}>
        <Grid container>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}>
            <img
              src="/images/image21.png"
              alt="img2"
              width="100%"
              height={{ md: 520, xs: 300 }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: { md: 5, xs: 0 },
                marginTop: { md: 0, xs: 5 },
              }}>
              <Typography
                variant="h4"
                fontSize={{ md: 48, xs: 24 }}
                fontWeight={700}
                color={"#0D0C22"}
                fontFamily="Inter"
                mb={{ md: 4, xs: 2 }}>
                The Remarkable Evolution of the Drawing Tablet: Why Designers
                Should Ditch the Mouse
              </Typography>
              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  fontSize={16}
                  fontWeight={500}
                  color={"#0D0C22"}
                  fontFamily="Inter">
                  by Taylor Louis in{" "}
                  <span>
                    <Link to="" style={{ color: "#0D0C22" }}>
                      Community
                    </Link>
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={14}
                  fontWeight={500}
                  color={"#9E9EA7"}>
                  AUG 25, 2023
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent={{ md: "space-between", xs: "left" }}
                mt={2}
                spacing={{ md: 2, xs: 1 }}>
                {SocialData.map((item) => (
                  <Link
                    to={item.urlPath}
                    key={item.id}
                    style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        background: "#fff",
                        padding: "8px 16px",
                        borderRadius: "24px",
                      }}
                      component="span">
                      {item.icon}
                      <Typography
                        variant="body1"
                        color="initial"
                        fontSize={{ md: 16, xs: 10 }}
                        fontFamily="Inter">
                        {item.name}
                      </Typography>
                    </Box>
                  </Link>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
        <Typography variant="h1" color="initial">
          Hello World
        </Typography>
      </Box>
    </Container>
  );
};

export default index;

// "/images/image21.png";
