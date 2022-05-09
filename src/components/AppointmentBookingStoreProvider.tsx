
import { Provider } from "mobx-react";
import * as React from "react";
import { ObservableAppointmentBookingStore } from "../stores";
import { IAvailablity } from "../types";

interface IAppointmentBookingStoreProviderProps {
    readonly formattedAvailability: Record<string, IAvailablity[]>
}

export class AppointmentBookingStoreProvider extends React.PureComponent<IAppointmentBookingStoreProviderProps> {
    private readonly appointmentBookingStore: ObservableAppointmentBookingStore;

    public constructor(props: IAppointmentBookingStoreProviderProps) {
        super(props);

        this.appointmentBookingStore = new ObservableAppointmentBookingStore(this.props.formattedAvailability);
    }

    public render() {
        return <Provider appointmentBookingStore={this.appointmentBookingStore}>{this.props.children}</Provider>;
    }
}
