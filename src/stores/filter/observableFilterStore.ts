
import { action, observable } from "mobx";
import { maxDate, minDate } from "../../constants";
import { AppointmentMedium, AppointmentType, IFilters, Specialism } from "../../types";
import { ICounsellorsStore } from "../counsellors";
import { IFilterStore } from "./iFilterStore";

export class ObservableFilterStore implements IFilterStore {
    @observable
    public requiredType: AppointmentType = "";

    @observable
    public requiredMedium: AppointmentMedium = "";

    @observable
    public requiredSpecialisms: Specialism[] = [];

    @observable
    public requiredTimes: string[] = [];

    @observable
    public startDate = minDate;

    @observable
    public endDate = maxDate;

    private readonly counsellorsStore: ICounsellorsStore;

    public constructor(counsellorsStore: ICounsellorsStore) {
        this.counsellorsStore = counsellorsStore;
    }

    @action
    public filter() {
        const filters: IFilters = {
            requiredType: this.requiredType as AppointmentType,
            requiredMedium: this.requiredMedium as AppointmentMedium,
            requiredSpecialisms: this.requiredSpecialisms as Specialism[],
            startDate: this.startDate,
            endDate: this.endDate,
            requiredTimes: this.requiredTimes,
        };

        this.counsellorsStore.filter(filters);
    }

    @action
    public setRequiredType(requiredType: AppointmentType) {
        this.requiredType = requiredType;
        this.filter();
    }

    @action
    public setRequiredMedium(requiredMedium: AppointmentMedium) {
        this.requiredMedium = requiredMedium;
        this.filter();
    }

    @action
    public setRequiredSpecialisms(requiredSpecialisms: Specialism[]) {
        this.requiredSpecialisms = requiredSpecialisms;
        this.filter();
    }

    @action
    public setRequiredTimes(requiredTimes: string[]) {
        this.requiredTimes = requiredTimes;
        this.filter();
    }

    @action
    public setStartDate(startDate?: string) {
        this.startDate = startDate ?? minDate;
        this.filter();
    }

    @action
    public setEndDate(endDate?: string) {
        this.endDate = endDate ?? maxDate;
        this.filter();
    }

}
