
import * as React from "react";
import { ICounsellor } from "../../types";
import { AppointmentBookingStoreProvider } from "../AppointmentBookingStoreProvider";
import { Container } from "./Container";

interface IAppointmentBookingDialogProps {
    readonly counsellor: ICounsellor
    readonly isOpen: boolean;
    readonly onClose: () => void;
}

export class AppointmentBookingDialog extends React.PureComponent<IAppointmentBookingDialogProps> {
    public render(){
        const { counsellor, isOpen, onClose } = this.props;

        const { formattedAvailability } = counsellor;
        if (formattedAvailability === undefined){
            return null;
        }

        return (
            <AppointmentBookingStoreProvider formattedAvailability={formattedAvailability}>
                <Container counsellor={counsellor} isOpen={isOpen} onClose={onClose}/>
            </AppointmentBookingStoreProvider>
        );
    }
}
