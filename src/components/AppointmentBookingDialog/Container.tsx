
import { Dialog } from "@mui/material";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IAppointmentBookingStore } from "../../stores";
import { ICounsellor } from "../../types";
import { AppointmentSelector } from "./AppointmentSelector";
import { BookingSuccess } from "./BookingSuccess";

interface IContainerProps {
    readonly appointmentBookingStore?: IAppointmentBookingStore
    readonly counsellor: ICounsellor;
    readonly isOpen: boolean;
    readonly onClose: () => void;
}

@inject("appointmentBookingStore")
@observer
export class Container extends React.Component<IContainerProps> {
    public render() {
        const { counsellor, isOpen, appointmentBookingStore } = this.props;

        const { isConfirmed } = appointmentBookingStore!;

        const childProps = { counsellor, onClose: this.handleClose };

        return (
            <Dialog open={isOpen} onClose={this.handleClose} >
                {isConfirmed ? <BookingSuccess {...childProps} /> : <AppointmentSelector {...childProps} />}
            </Dialog>
        );
    }

    private readonly handleClose = () => {
        this.props.appointmentBookingStore?.clear();
        this.props.onClose();
    };
}
