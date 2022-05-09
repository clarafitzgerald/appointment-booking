import TextField from "@mui/material/TextField";
import * as React from "react";
import { maxDate, minDate } from "../../constants";

interface IDateInputProps {
    readonly value?: string;
    setValue(value?: string): void;
}

export class DateInput extends React.PureComponent<IDateInputProps> {
    public render() {
        const { value, setValue } = this.props;

        return (
            <TextField
                inputProps={{ min: minDate, max: maxDate }}
                onChange={(event) => setValue(event.target.value)}
                type="date"
                value={value}
            />
        );
    }
}
