
import { Container as MuiContainer, Grid } from "@mui/material";
import * as React from "react";
import { EndDateInput, MediumSelect, SpecialismsSelect,StartDateInput, TypeSelect , TimeSelect } from "../Inputs";

export class Container extends React.PureComponent {
    public render() {
        return (
            <MuiContainer>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <TypeSelect/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <MediumSelect/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SpecialismsSelect />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <StartDateInput />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <EndDateInput />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TimeSelect />
                    </Grid>
                </Grid>
            </MuiContainer>
        );
    }
}
