
import { Stack, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IFilterStore } from "../../stores";

interface ITimeSelectProps {
    readonly filterStore?: IFilterStore;
}

@inject("filterStore")
@observer
export class TimeSelect extends React.Component<ITimeSelectProps> {
    public render() {
        const { requiredTimes } = this.props.filterStore!;

        return (
            <Stack spacing={1}>
                <Typography>What time(s) of day work best for you?</Typography>
                <Select
                    multiple
                    onChange={this.onChange}
                    value={requiredTimes}
                >
                    <MenuItem value="morning">
                        Morning
                    </MenuItem>
                    <MenuItem value="afternoon">
                        Afternoon
                    </MenuItem>
                    <MenuItem value="evening">
                        Evening
                    </MenuItem>
                </Select>
            </Stack>
        );
    }

    private readonly onChange = (event: SelectChangeEvent<string[]>) => {
        const { value } = event.target;

        const requiredTimes = typeof value === "string" ? value.split(",") : value;

        this.props.filterStore?.setRequiredTimes(requiredTimes);
    };
}
