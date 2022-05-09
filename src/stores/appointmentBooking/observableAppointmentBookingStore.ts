import { action, computed, observable } from "mobx";
import { IAvailablity } from "../../types";
import { IAppointmentBookingStore } from "./iAppointmentBookingStore";

export class ObservableAppointmentBookingStore implements IAppointmentBookingStore {
    @observable
    public availableDates: string[];

    @observable
    public selectedDate?: string;

    @observable
    public selectedTime?: string;

    @observable
    public isConfirmed = false;

    @computed
    public get availableAppointments(){
        if (this.selectedDate === undefined){
            return [];
        }

        return this.formattedAvailability[this.selectedDate];
    }

    @computed
    public get selectedAppointment(){
        if (this.selectedDate === undefined || this.selectedTime===undefined){
            return undefined;
        }

        const appointment = this.availableAppointments.find(item => item.time === this.selectedTime);

        return appointment;
    }

    private readonly formattedAvailability: Record<string, IAvailablity[]>;

    public constructor(formattedAvailability:Record<string, IAvailablity[]>) {
        this.formattedAvailability = formattedAvailability;
        this.availableDates = Object.keys(formattedAvailability);
    }

    @action
    public setSelectedTime(time:string){
        this.selectedTime = time;
    }

    @action
    public clear(){
        this.selectedDate = undefined;
        this.selectedTime = undefined;
        this.isConfirmed = false;
    }

    @action
    public setSelectedDate(date: string){
        this.selectedDate = date;
    }

    @action
    public confirm(){
        this.isConfirmed = true;
    }
}
