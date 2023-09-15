import React from "react";
import { Typography, Stack, Divider } from "@mui/material";
import { Link } from "react-router-dom";


const CatagoryLinks = [
  {
    id: 1,
    name: "Interviews",
    linkPath: "",
  },
  {
    id: 2,
    name: "Podcast",
    linkPath: "",
  },
  {
    id: 3,
    name: "Inspiration",
    linkPath: "",
  },
  {
    id: 4,
    name: "Process",
    linkPath: "",
  },

  {
    id: 5,
    name: "Meetups",
    linkPath: "",
  },
  {
    id: 6,
    name: "Updates",
    linkPath: "",
  },
  {
    id: 7,
    name: "Hang Time",
    linkPath: "",
  },
  {
    id: 8,
    name: "Community",
    linkPath: "",
  },
];

const Categories = () => {
  return (
    <Stack spacing={1}>
      <Typography
        variant="body1"
        fontSize={16}
        fontWeight={500}
        fontFamily="Inter">
        Overtime
      </Typography>
      <Typography
        variant="body1"
        fontSize={14}
        fontWeight={400}
        fontFamily="Inter"
        color="#9E9EA7">
        The Dribbble Podcast
      </Typography>
      <Typography
        variant="body1"
        fontSize={14}
        fontWeight={500}
        fontFamily="Inter"
        color={"#0D0C22"}
        pt={1}
        pb={4}>
        The Power of Play
      </Typography>
      <Divider />
      <Typography
        variant="body1"
        fontSize={16}
        fontWeight={500}
        color={"#0D0C22"}
        fontFamily="Inter"
        pt={4}>
        All Categories
      </Typography>
      {CatagoryLinks.map((item) => (
        <React.Fragment key={item.id}>
          <Link
            to={item.linkPath}
            style={{ textDecoration: "none", padding: "4px 0px" }}
            variant="body1"
            fontSize={14}
            fontWeight={400}
            fontFamily="Inter">
            {item.name}
          </Link>
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default Categories;
