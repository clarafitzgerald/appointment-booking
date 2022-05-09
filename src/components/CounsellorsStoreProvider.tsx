
import { Provider } from "mobx-react";
import * as React from "react";
import { ObservableCounsellorsStore } from "../stores";

export class CounsellorsStoreProvider extends React.PureComponent {
    private readonly counsellorsStore = new ObservableCounsellorsStore();

    public render() {
        return <Provider counsellorsStore={this.counsellorsStore}>{this.props.children}</Provider>;
    }
}
