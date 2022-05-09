
import * as React from "react";
import { FilterStoreProvider } from "../FilterStoreProvider";
import { Container } from "./Container";

export class Filters extends React.PureComponent {
    public render(){
        return (
            <FilterStoreProvider>
                <Container />
            </FilterStoreProvider>
        );
    }
}
