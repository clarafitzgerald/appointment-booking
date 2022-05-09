export interface IFilterStore {
    readonly endDate: string;
    readonly requiredMedium: string;
    readonly requiredSpecialisms: string[];
    readonly requiredTimes : string[]
    readonly requiredType: string;
    readonly startDate: string;

    setEndDate(endDate?: string): void;
    setRequiredMedium(requiredMedium: string): void;
    setRequiredTimes(requiredTimes: string[]): void;
    setRequiredType(requiredType: string): void;
    setRequiredSpecialisms(requiredSpecialisms: string[]): void;
    setStartDate(startDate?: string): void;

}
