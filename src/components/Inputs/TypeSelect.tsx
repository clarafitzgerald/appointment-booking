
import { Stack, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IFilterStore } from "../../stores";

interface ITypeSelectProps {
    readonly filterStore?: IFilterStore;
}

@inject("filterStore")
@observer
export class TypeSelect extends React.Component<ITypeSelectProps> {
    public render() {
        const { requiredType } = this.props.filterStore!;

        return (
            <Stack spacing={1}>
                <Typography>Appointment Type</Typography>
                <Select
                    onChange={this.onChange}
                    value={requiredType}
                >
                    <MenuItem value={"one_off"}>
                        One off
                    </MenuItem>
                    <MenuItem value={"consultation"} >
                        Consultation
                    </MenuItem>
                    <MenuItem value={""} >
                        No preference
                    </MenuItem>
                </Select>
            </Stack>
        );
    }

    private readonly onChange = (event: SelectChangeEvent) => {
        const requiredType = event.target.value;

        this.props.filterStore?.setRequiredType(requiredType);
    };
}
