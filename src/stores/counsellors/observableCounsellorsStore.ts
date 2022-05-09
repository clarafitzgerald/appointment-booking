import groupBy from "lodash/groupBy";
import sortBy from "lodash/sortBy";
import { action, observable, runInAction } from "mobx";
import { IAvailablity, ICounsellor, IFilters } from "../../types";
import rawAvailabilities from "./availability-mock.json";
import rawCounsellors from "./counsellor-mock.json";
import { getFilteredCousellors } from "./getFilteredCounsellors";
import { ICounsellorsStore } from "./iCounsellorsStore";

export class ObservableCounsellorsStore implements ICounsellorsStore {
    @observable
    public counsellors: ICounsellor[];

    @observable
    public loading = false;

    public readonly filteredCounsellors = observable.array<ICounsellor>([], { deep: false });

    public constructor() {
        const counsellors = rawCounsellors as ICounsellor[];
        const availabilities = rawAvailabilities as Record<string, IAvailablity[]>;
        this.counsellors = counsellors.map(({ id, ...counsellor }) => {
            const availability = availabilities[id];

            const enhancedAvailability = availability.map(({ datetime, id }) => {
                const [date, longTime] = datetime.split("T");
                const time = longTime.slice(0,5);
                const timestamp = new Date(datetime).getTime();

                return { datetime, date,id, time, timestamp };
            });

            const sorted = sortBy(enhancedAvailability, "timestamp" );

            const formattedAvailability = groupBy(sorted, "date");

            return { ...counsellor, availability: enhancedAvailability, formattedAvailability, id };
        });
    }

    @action
    public filter(filters: IFilters){
        this.loading = true;

        getFilteredCousellors(this.counsellors, filters)
            .then((value) =>
                runInAction(() => {
                    this.filteredCounsellors.replace(value);
                }))
            .finally(() =>
                runInAction(() => {
                    this.loading = false;
                }),
            );
    }

}
