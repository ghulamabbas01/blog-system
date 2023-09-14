import React from "react";
import {
    Container,
    Typography,
    Grid,
    Stack,
    Divider,
    Box,
} from "@mui/material";
import { blogDetailData } from "./config";

const index = () => {
    return (
        <div>
            <Grid container spacing={1} sx={{ padding: "40px", mt: "40px" }}>
                <Grid item md={6} xs={12} zIndex={1}>
                    <img src="/images/image21.png" alt="img2" width={702} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box sx={{ padding: "80px", backgroundColor: "#FFF5FC", display: "flex", alignItems: "center" }}>
                        <Stack>
                            <Typography variant="h4" fontSize={48} fontWeight={700} color={"#0D0C22"}>
                                The Remarkable Evolution of the Drawing Tablet: Why Designers
                                Should Ditch the Mouse
                            </Typography>
                            <Typography variant="body2" fontSize={16} fontWeight={500} color={"#0D0C22"}>
                                by Taylor Louis in Community
                            </Typography>
                            <Typography variant="body2" fontSize={14} fontWeight={500} color={"#9E9EA7"}>
                                AUG 25, 2023
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            <Container maxWidth="sm">
                <Grid container spacing={1}>
                    {blogDetailData.map((value) => (
                        <Grid item md={12} key={value.id}>
                            <Stack spacing={3}>
                                <Typography
                                    variant="body2"
                                    fontSize={20}
                                    fontWeight={400}
                                    color={"#6E6D7A"}
                                >
                                    {value.detail}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontSize={20}
                                    fontWeight={400}
                                    color={"#6E6D7A"}
                                >
                                    Enter the drawing tablet, a device that promises to replicate
                                    the tactile feel of traditional art on a digital
                                    platform—finally, a way to prioritize precision and creativity
                                    in a new design era.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontSize={20}
                                    fontWeight={400}
                                    color={"#6E6D7A"}
                                >
                                    Thanks to our friends at Xencelabs for sponsoring this blog
                                    post
                                </Typography>
                            </Stack>
                            <Stack spacing={2} mt={5}>
                                <Typography
                                    variant="body1"
                                    fontSize={24}
                                    fontWeight={500}
                                    color={"#0D0C22"}
                                >
                                    A Brief Dive into the History of the Drawing Tablet
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontSize={20}
                                    fontWeight={400}
                                    color={"#6E6D7A"}
                                >
                                    Before the sophistication of contemporary tools like those
                                    created by Xencelabs, artists and designers grappled with
                                    rudimentary devices. In the early stages of digital design,
                                    the mouse reigned supreme. While revolutionary in its own
                                    right, the mouse was designed for navigation rather than
                                    creative expression, posing a challenge to designers. The need
                                    for precision and a more “natural” feel led to the development
                                    of the first drawing tablets. These early versions were a flat
                                    surface where artists could use a stylus to draw, offering a
                                    semblance of the traditional pen-on-paper feel. However, they
                                    lacked many features that modern tablets possess, such as
                                    pressure sensitivity, tilt recognition, and high-resolution
                                    displays. Over time, technological advancements and feedback
                                    from the art community propelled rapid innovations. Tablets
                                    became more responsive and intuitive and closely mirrored the
                                    nuances of hand-drawn art. They evolved from mere extensions
                                    of the computer to standalone devices with their displays,
                                    bringing art to life in real-time as the artist sketched.
                                </Typography>
                            </Stack>
                            <Stack spacing={2} mt={5}>
                                <Typography
                                    variant="body1"
                                    fontSize={24}
                                    fontWeight={500}
                                    color={"#0D0C22"}
                                >
                                    5 Compelling Reasons to Embrace the Drawing Tablet:
                                </Typography>
                                <ol
                                    type="1"
                                    style={{
                                        paddingLeft: "16px",
                                        fontSize: "20px",
                                        fontWeight: "400",
                                        color: "#6E6D7A",
                                    }}
                                >
                                    <li>
                                        Precision & Sensitivity: Unlike the mouse, drawing tablets,
                                        especially pen displays, are designed to capture the subtle
                                        nuances of pressure, tilt, and direction.
                                    </li>
                                    <li>
                                        Natural Drawing Experience: Emulating the tactile feel of
                                        paper, these devices bridge the gap between traditional and
                                        digital mediums.
                                    </li>
                                    <li>
                                        Customizable Workflow: Tablets and displays often come with
                                        customizable shortcut buttons, optimizing the design
                                        process.
                                    </li>
                                    <li>
                                        Ergonomic Comfort: Long hours become less taxing with
                                        ergonomically designed tablets that prioritize the user’s
                                        comfort.
                                    </li>{" "}
                                    <li>
                                        Personalization: Modern tablets and displays allow users to
                                        adjust settings to suit their unique style and preferences.
                                    </li>
                                </ol>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default index;
