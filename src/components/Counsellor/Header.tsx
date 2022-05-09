
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import { Stack,Typography } from "@mui/material";
import * as React from "react";

interface IHeaderProps {
    readonly firstName: string;
    readonly lastName: string;
    readonly appointmentMediums: string[]
}

export class Header extends React.PureComponent<IHeaderProps> {
    public render() {
        const { appointmentMediums, firstName, lastName } = this.props;

        const offersPhoneAppointments = appointmentMediums.includes("phone");
        const offersVideoAppointments = appointmentMediums.includes("video");

        return (
            <Stack direction="row" justifyContent="space-between">
                <Typography gutterBottom variant="h5" component="div">
                    {firstName} {lastName}
                </Typography>
                <Stack direction="row" spacing={1}>
                    {offersPhoneAppointments && <PhoneRoundedIcon/>}
                    {offersVideoAppointments && <VideocamRoundedIcon/>}
                </Stack>
            </Stack>
        );
    }
}
