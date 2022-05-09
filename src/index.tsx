import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import "typeface-lato";
import { App } from "./components";
import { defaultTheme } from "./themes";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    root,
);
