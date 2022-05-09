
import { Grid } from "@mui/material";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { ICounsellorsStore } from "../../stores";
import { Counsellor } from "../Counsellor";

interface ICounsellorsListProps {
    readonly counsellorsStore?: ICounsellorsStore;
}

@inject("counsellorsStore")
@observer
export class CounsellorsList extends React.Component<ICounsellorsListProps> {
    public render() {
        const { filteredCounsellors, loading } = this.props.counsellorsStore!;
        if (filteredCounsellors === undefined) {
            return null;
        }

        if (loading) {
            return null;
        }

        return (
            <Grid container spacing={2} alignItems="stretch">
                {filteredCounsellors?.map(counsellor => <Counsellor key={counsellor.id} counsellor={counsellor} />)}
            </Grid >
        );
    }
}
