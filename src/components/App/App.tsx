
import * as React from "react";
import "typeface-lato";
import { CounsellorsStoreProvider } from "../CounsellorsStoreProvider";
import { Landing } from "./Landing";

export class App extends React.PureComponent {
    public render() {
        return (
            <CounsellorsStoreProvider>
                <Landing/>
            </CounsellorsStoreProvider>
        );
    }
}
