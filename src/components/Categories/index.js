import React from 'react'
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
            <Link to={""}
                style={{ textDecoration: "none" }}
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Interviews
            </Link>
            <Typography
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Podcast
            </Typography> <Typography
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Inspiration
            </Typography> <Typography
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Process
            </Typography> <Typography
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Meetups
            </Typography> <Typography
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Updates
            </Typography> <Typography
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Hang Time
            </Typography> <Typography
                variant="body1"
                fontSize={14}
                fontWeight={400}
                color={"#000"}
            >
                Community
            </Typography>
        </Stack>
    )
}

export default Categories