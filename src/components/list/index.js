import React from 'react'
import { Container, Typography, Grid, Stack, Divider } from "@mui/material";
import { listData } from "./config";

const list = () => {
    return (
        <Grid container>
            {listData.map((value) => (
                <Grid item md={8} xs={12} key={value.id}>
                    <Divider />
                    <Stack direction={{ md: "row", xs: "column" }} spacing={4} display="flex" alignItems={{ md: "center", xs: "left" }}>
                        <img src={value.image} alt="img1" width={200} height={150} />
                        <Stack spacing={1}>
                            <Typography
                                variant="body1"
                                fontSize={14}
                                fontWeight={500}
                                color={"#9E9EA7"}
                            >
                                {value.subtitle}
                            </Typography>
                            <Typography
                                variant="body1"
                                fontSize={24}
                                fontWeight={500}
                                color={"#000"}
                            >
                                {value.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                fontSize={20}
                                fontWeight={400}
                                color={"#9E9EA7"}
                            >
                                {value.detail}
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    )
}

export default list