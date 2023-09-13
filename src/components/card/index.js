import React from 'react'
import { Container, Typography, Grid, Stack, Divider } from "@mui/material";

const card = () => {
    return (
        <Stack spacing={1}>
            <Typography
                variant="body1"
                fontSize={14}
                fontWeight={500}
                color={"#9E9EA7"}
            >
                AUG 29, 2023
            </Typography>
            <Typography
                variant="h3"
                fontSize={36}
                fontWeight={500}
                color={"#0D0C22"}
            >
                How to make (and keep) money as a freelance designer
            </Typography>
            <img src="/images/image1.png" alt="img1" />
            <Typography
                variant="body2"
                fontSize={20}
                fontWeight={400}
                color={"#0D0C22"}
            >
                Use this guide to establish strong practices and automate
                recurring processes so you can consistently grow your business
                and revenue over time.
            </Typography>
        </Stack>
    )
}

export default card