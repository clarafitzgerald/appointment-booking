
import { inject, Provider } from "mobx-react";
import * as React from "react";
import { ICounsellorsStore, ObservableFilterStore } from "../stores";

interface IFilterStoreProviderProps {
    readonly counsellorsStore?: ICounsellorsStore;
}

@inject("counsellorsStore")
export class FilterStoreProvider extends React.PureComponent<IFilterStoreProviderProps> {
    private readonly filterStore: ObservableFilterStore;

    public constructor(props: IFilterStoreProviderProps) {
        super(props);

        this.filterStore = new ObservableFilterStore(props.counsellorsStore!);
    }

    public componentDidMount(){
        this.filterStore.filter();
    }

    public render() {
        return <Provider filterStore={this.filterStore}>{this.props.children}</Provider>;
    }
}
