
import { Card,CardActionArea,CardContent,CardMedia,Grid } from "@mui/material";
import { observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import { ICounsellor } from "../../types";
import { AppointmentBookingDialog } from "../AppointmentBookingDialog";
import { Details } from "./Details";
import { getCardImage } from "./getCardImage";
import { Header } from "./Header";

interface ICounsellorProps {
    readonly counsellor?: ICounsellor;
}

@observer
export class Counsellor extends React.Component<ICounsellorProps> {
    @observable
    private isDialogOpen = false;

    public render() {
        const { counsellor } = this.props;
        if (counsellor === undefined){
            return null;
        }

        const { appointment_types, appointment_mediums, firstName, lastName, specialisms } = counsellor;

        const cardImage = getCardImage(lastName);

        return (
            <>
                <Grid item xs={12} lg={4}>
                    <Card variant="outlined" sx={{ height: 1 }}>
                        <CardActionArea onClick={this.toggleDialog} sx={{ height: 1 }}>
                            <CardMedia component="img" height={140} image={cardImage} />
                            <CardContent sx={{ height: 1 }}>
                                <Header firstName={firstName} lastName={lastName} appointmentMediums={appointment_mediums} />
                                <Details appointmentTypes={appointment_types} specialisms={specialisms} />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <AppointmentBookingDialog counsellor={counsellor} isOpen={this.isDialogOpen} onClose={this.toggleDialog}/>
            </>
        );
    }

    private readonly toggleDialog = () => {
        this.isDialogOpen = !this.isDialogOpen;
    };

}
