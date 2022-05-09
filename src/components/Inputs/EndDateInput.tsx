
import { Stack, Typography } from "@mui/material";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IFilterStore } from "../../stores";
import { DateInput } from "./DateInput";

interface IEndDateInputProps {
    readonly filterStore?: IFilterStore;
}

@inject("filterStore")
@observer
export class EndDateInput extends React.Component<IEndDateInputProps> {
    public render() {
        const { endDate } = this.props.filterStore!;

        return (
            <Stack spacing={1}>
                <Typography>End Date</Typography>
                <DateInput value={endDate} setValue={this.handleEndDateChange} />
            </Stack>
        );
    }

    private readonly handleEndDateChange = (value?: string) => {
        this.props.filterStore?.setEndDate(value);
    };
}
