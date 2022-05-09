
import { Stack, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { availableSpecialisms } from "../../constants";
import { IFilterStore } from "../../stores";

interface ISpecialismsSelectProps {
    readonly filterStore?: IFilterStore;
}

@inject("filterStore")
@observer
export class SpecialismsSelect extends React.Component<ISpecialismsSelectProps> {
    public render() {
        const { requiredSpecialisms } = this.props.filterStore!;

        return (
            <Stack spacing={1}>
                <Typography>Specialisms</Typography>
                <Select
                    multiple
                    onChange={this.onChange}
                    value={requiredSpecialisms}
                >
                    {availableSpecialisms.map(specialism =>
                        <MenuItem key={specialism} value={specialism}>
                            {specialism}
                        </MenuItem>,
                    )}
                </Select>
            </Stack>
        );
    }

    private readonly onChange = (event: SelectChangeEvent<string[]>) => {
        const { value } = event.target;

        const requiredSpecialisms = typeof value === "string" ? value.split(",") : value;

        this.props.filterStore?.setRequiredSpecialisms(requiredSpecialisms);
    };
}
