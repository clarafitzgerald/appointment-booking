import { Box, Container, Paper, Typography } from "@mui/material";
import * as React from "react";
import { CounsellorsList } from "../CounsellorsList";
import { Filters } from "../Filters";

export class Landing extends React.PureComponent {
    public render() {
        return (
            <>
                <Box sx={{ bgcolor: "secondary.main", width: 1, textAlign:"center", paddingY: 5 }}>
                    <Typography variant="h3" color="secondary.contrastText" fontWeight={700} >Welcome to spill.</Typography>
                </Box>
                <Paper elevation={0} sx={{ width: 1 , height: 1, padding: 3 }}>
                    <Filters />
                </Paper>
                <Container sx={{ marginTop: 2 }}>
                    <CounsellorsList />
                </Container>
            </>
        );
    }
}
