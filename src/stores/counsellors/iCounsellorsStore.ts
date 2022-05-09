import { ICounsellor, IFilters } from "../../types";

export interface ICounsellorsStore {
    readonly counsellors: ICounsellor[];
    readonly filteredCounsellors: ICounsellor[];
    readonly loading: boolean;

    filter(params: IFilters): void;
}
