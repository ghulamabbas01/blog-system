import React from "react";
import { Container, Typography, Grid, Stack, Divider } from "@mui/material";
import Card from "../../components/card"
import Categories from "../../components/Categories"
import List from "../../components/list"
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
                    <Grid item md={8} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Categories />
                    </Grid>
                </Grid>
                <List />
            </Container>
        </RootStyled>
    );
};

export default blogsList;
