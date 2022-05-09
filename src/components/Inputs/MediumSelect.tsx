
import { Stack, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IFilterStore } from "../../stores";

interface IMediumSelectProps {
    readonly filterStore?: IFilterStore;
}

@inject("filterStore")
@observer
export class MediumSelect extends React.Component<IMediumSelectProps> {
    public render() {
        const { requiredMedium } = this.props.filterStore!;

        return (
            <Stack spacing={1}>
                <Typography>Appointment Medium</Typography>
                <Select
                    onChange={this.onChange}
                    value={requiredMedium}
                >
                    <MenuItem value={"phone"}>
                        Phone
                    </MenuItem>
                    <MenuItem value={"video"} >
                        Video
                    </MenuItem>
                    <MenuItem value={""} >
                        No preference
                    </MenuItem>
                </Select>
            </Stack>
        );
    }

    private readonly onChange = (event: SelectChangeEvent) => {
        const requiredMedium = event.target.value;

        this.props.filterStore?.setRequiredMedium(requiredMedium);
    };
}
