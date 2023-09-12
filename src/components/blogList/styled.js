import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const RootStyled = styled(Box)(({ theme }) => ({
    position: "relative",
    padding: "30px",
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(5, 0),
    },
    "& .main-box": {
        border: `1px solid ` + theme.palette.primary.light,
        padding: theme.spacing(4),
        borderRadius: "16px",
        background: theme.palette.background.default,
        height: "100%",
    },

}));
export default RootStyled;