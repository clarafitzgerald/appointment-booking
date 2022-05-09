
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IAppointmentBookingStore } from "../../stores";
import { ICounsellor } from "../../types";

interface IBookingSuccessProps {
    readonly appointmentBookingStore?: IAppointmentBookingStore
    readonly counsellor: ICounsellor;
    readonly onClose: () => void;
}

@inject("appointmentBookingStore")
@observer
export class BookingSuccess extends React.Component<IBookingSuccessProps> {
    public render() {
        const { counsellor, onClose, appointmentBookingStore } = this.props;

        const { firstName, lastName } = counsellor;

        const { selectedDate, selectedTime } = appointmentBookingStore!;

        return (
            <>
                <DialogTitle>Success!</DialogTitle>
                <DialogContent sx={{ minWidth: "30vw" }}>
                    <Typography>
                        All done!
                    </Typography>
                    <Typography>
                        You&apos;re booked in to see <strong>{firstName} {lastName}</strong> at {selectedTime} on {selectedDate}.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ paddingX: 3, paddingY: 2 }}>
                    <Button color="secondary" variant="outlined" onClick={onClose}>Close</Button>
                </DialogActions>
            </>
        );
    }
}
