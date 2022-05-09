
import { Typography } from "@mui/material";
import * as React from "react";
import { AppointmentType, Specialism } from "../../types";

interface IDetailsProps {
    readonly appointmentTypes: AppointmentType[];
    readonly specialisms: Specialism[]
}

export class Details extends React.PureComponent<IDetailsProps> {
    public render() {
        const { appointmentTypes, specialisms } = this.props;

        const formattedAppointmentTypes = appointmentTypes.map((type) => type === "one_off" ? "One off": "Consultation").join(", ");
        const specialisesIn = specialisms.join(", ");

        return (
            <>
                <Typography variant="body2" color="text.secondary">
                    <strong>Appointment type(s): </strong> {formattedAppointmentTypes}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Specialises in: </strong> {specialisesIn}
                </Typography>
            </>
        );
    }
}
