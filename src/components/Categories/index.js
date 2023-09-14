import React from "react";
import { Typography, Stack, Divider } from "@mui/material";
import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <Stack spacing={1}>
            <Typography
                variant="body1"
                fontSize={16}
                fontWeight={500}
                color={"#0D0C22"}
            >
                Overtime
            </Typography>
            <Typography
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#9E9EA7"}
            >
                The Dribbble Podcast
            </Typography>
            <Typography
                variant="body1"
                fontSize={14}
                fontWeight={500}
                color={"#0D0C22"}
            >
                The Power of Play
            </Typography>
            <Divider />
            <Typography
                variant="body1"
                fontSize={16}
                fontWeight={500}
                color={"#0D0C22"}
            >
                All Categories
            </Typography>
            <Link
                to={""}
                style={{ textDecoration: "none" }}
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Interviews
            </Link>
            <Link
                to={""}
                style={{ textDecoration: "none" }}
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Podcast
            </Link>
            <Link
                to={""}
                style={{ textDecoration: "none" }}
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Inspiration
            </Link>
            <Link
                to={""}
                style={{ textDecoration: "none" }}
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Process
            </Link>
            <Link
                to={""}
                style={{ textDecoration: "none" }}
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Meetups
            </Link>
            <Link
                to={""}
                style={{ textDecoration: "none" }}
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Updates
            </Link>{" "}
            <Link
                to={""}
                style={{ textDecoration: "none" }}
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Hang Time
            </Link>{" "}
            <Link
                to={""}
                style={{ textDecoration: "none" }}
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Community
            </Link>
        </Stack>
    );
};

export default Categories;
