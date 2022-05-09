import { IAvailablity } from "../../types";

export interface IAppointmentBookingStore {
    readonly availableDates: string[]
    readonly selectedDate?: string;
    readonly selectedTime?: string;
    readonly selectedAppointment?: IAvailablity;
    readonly availableAppointments?: IAvailablity[]
    readonly isConfirmed?: boolean;

    setSelectedTime(time: string): void;
    setSelectedDate(date: string): void;
    confirm(): void;
    clear(): void;
}
