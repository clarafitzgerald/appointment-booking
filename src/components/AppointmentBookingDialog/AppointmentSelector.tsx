
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
} from "@mui/material";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IAppointmentBookingStore } from "../../stores";
import { ICounsellor } from "../../types";

interface IAppointmentSelectorProps {
    readonly appointmentBookingStore?: IAppointmentBookingStore
    readonly counsellor: ICounsellor;
    readonly onClose: () => void;
}

@inject("appointmentBookingStore")
@observer
export class AppointmentSelector extends React.Component<IAppointmentSelectorProps> {
    public render() {
        const { counsellor, onClose, appointmentBookingStore } = this.props;

        const { firstName, lastName } = counsellor;

        const { availableAppointments = [], availableDates, selectedDate = "", selectedTime = "" } = appointmentBookingStore!;

        const isConfirmDisabled = selectedDate === "" || selectedTime === "";

        return (
            <>
                <DialogTitle>Availability for {firstName} {lastName}</DialogTitle>
                <DialogContent sx={{ minWidth: "30vw" }}>
                    <Stack spacing={2}>
                        <Stack spacing={0}>
                            <DialogContentText>
                                Select a day
                            </DialogContentText>
                            <Select
                                onChange={this.handleDateChange}
                                fullWidth
                                value={selectedDate}
                            >
                                {availableDates.map(date =>
                                    <MenuItem key={date} value={date}>
                                        {(new Date(date)).toDateString()}
                                    </MenuItem>,
                                )}
                            </Select>
                        </Stack>
                        <Stack spacing={0}>
                            <DialogContentText>
                                Select a time
                            </DialogContentText>
                            <Select
                                disabled={availableAppointments.length === 0}
                                fullWidth
                                onChange={this.handleTimeChange}
                                value={selectedTime}
                            >
                                {availableAppointments.map(({ id, time }) => <MenuItem key={id} value={time}>{time}</MenuItem>)}
                            </Select>
                        </Stack>
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ paddingX: 3, paddingY: 2 }}>
                    <Button color="secondary" variant="outlined" onClick={onClose}>Cancel</Button>
                    <Button
                        disabled={isConfirmDisabled}
                        onClick={this.handleConfirm}
                        variant="contained"
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </>
        );
    }

    private readonly handleDateChange = (event: SelectChangeEvent) => {
        this.props.appointmentBookingStore?.setSelectedDate(event.target.value);
    };

    private readonly handleTimeChange = (event: SelectChangeEvent) => {
        this.props.appointmentBookingStore?.setSelectedTime(event.target.value);
    };

    private readonly handleConfirm = () => {
        this.props.appointmentBookingStore?.confirm();
    };
}
