import { AppointmentMedium, AppointmentType, Specialism } from "./iCounsellor";

export interface IFilters {
    readonly endDate: string;
    readonly requiredMedium: AppointmentMedium;
    readonly requiredSpecialisms: Specialism[]
    readonly requiredType: AppointmentType;
    readonly startDate: string;
    readonly requiredTimes: string[]
}
