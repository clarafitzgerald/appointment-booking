import { IAvailablity, IEnhancedAvailability } from "./iAvailability";

export interface ICounsellor {
    readonly appointment_mediums: AppointmentMedium[];
    readonly appointment_types: AppointmentType[];
    readonly firstName: string;
    readonly id: string;
    readonly lastName: string;
    readonly specialisms: Specialism[];
    readonly availability: IEnhancedAvailability[]
    readonly formattedAvailability?: Record<string, IAvailablity[]>
}

export type Specialism =
    | "Addiction"
    | "ADHD"
    | "Career counselling"
    | "CBT"
    | "Divorce"
    | "Eating disorders"
    | "Financial difficulties"
    | "Perfectionism"
    | "Sexuality"
    | "Substance misuse"
    | "Violence"
    | "Gender identity"
    | "Sexual abuse"
    | "Race"
    | "Bereavement";

export type AppointmentMedium =
    | "phone"
    | "video"
    | ""

export type AppointmentType =
    | "consultation"
    | "one_off"
    | ""
