import { common } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const font = "'Lato', sans-serif";

const teal = "#35D0BA";
const blue = "#041549";
const gray = "#F3F4F6";
const darkGray = "#374151";

export const defaultTheme = createTheme({
    components: {
        MuiInputBase:{
            defaultProps:{
                size: "small",
            },
        },
    },
    palette: {
        background: {
            default: gray,
            paper: common.white,
        },
        primary: {
            contrastText: blue,
            main: teal,
        },
        secondary: {
            contrastText: gray,
            main: blue,
        },
        text: {
            primary: blue,
            secondary: darkGray,
        },
        mode: "light",
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontFamily: font,
    },
});
