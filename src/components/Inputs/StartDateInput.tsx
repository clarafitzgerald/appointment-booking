
import { Stack, Typography } from "@mui/material";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IFilterStore } from "../../stores";
import { DateInput } from "./DateInput";

interface IStartDateInputProps {
    readonly filterStore?: IFilterStore;
}

@inject("filterStore")
@observer
export class StartDateInput extends React.Component<IStartDateInputProps> {
    public render() {
        const { startDate } = this.props.filterStore!;

        return (
            <Stack spacing={1}>
                <Typography>Start Date</Typography>
                <DateInput value={startDate} setValue={this.handleStartDateChange} />
            </Stack>
        );
    }

    private readonly handleStartDateChange = (value?: string) => {
        this.props.filterStore?.setStartDate(value);
    };
}
