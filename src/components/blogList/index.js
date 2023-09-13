import React from "react";
import { Container, Typography, Grid, Stack, Divider } from "@mui/material";
import Card from "../../components/card"
import Categories from "../../components/Categories"
// styled
import RootStyled from "./styled";
const blogsList = () => {
    return (
        <RootStyled>
            <Container maxWidth>
                <Typography
                    variant="h5"
                    fontSize={48}
                    fontWeight={700}
                    color={"#0D0C22"}
                >
                    The Blog
                </Typography>
                <Grid container spacing={15}>
                    <Grid item md={8}>
                        <Card />
                    </Grid>
                    <Grid item md={4}>
                        <Categories />
                    </Grid>
                </Grid>
            </Container>
        </RootStyled>
    );
};

export default blogsList;
