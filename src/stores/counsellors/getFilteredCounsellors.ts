import groupBy from "lodash/groupBy";
import sortBy from "lodash/sortBy";
import { AppointmentMedium, AppointmentType, IEnhancedAvailability, ICounsellor, IFilters, Specialism } from "../../types";

export interface getFilteredCousellorsArgs {
    counsellors: ICounsellor[]
    filters: IFilters;
}

// const checker = (filters: IFilters) => {
//     if (filters.requiredMedium !== ""){
//         isMediumOffered;
//     }
//     return () => {

//     }
// };

// const createInclude = (filters:IFilters) => {
//     const checkMedium =
//     filters.requiredMedium === ""
//         ? () => true
//         : (appointment_mediums: AppointmentMedium) => appointment_mediums.includes(filters.requiredMedium);

//     return checkMedium;
// };

export const getFilteredCousellors = (counsellors: ICounsellor[], filters: IFilters): Promise<ICounsellor[]> => {
    const apples = new Promise<ICounsellor[]>((resolve) => {
        const filtered= <ICounsellor[]>[];

        const { endDate, requiredMedium, requiredSpecialisms, requiredType, startDate, requiredTimes } = filters;

        const checkMedium = requiredMedium === ""
            ? () => true
            : (appointment_mediums: AppointmentMedium[]) => appointment_mediums.includes(requiredMedium);

        counsellors.forEach(
            ({ appointment_mediums, appointment_types, availability, specialisms, ...rest }) => {
                const offersRequiredMedium = checkMedium(appointment_mediums);
                if (offersRequiredMedium === false){
                    return;
                }

                const offersRequiredType = isTypeOffered(appointment_types, requiredType);
                if (offersRequiredType===false){
                    return;
                }

                const hasRequiredSpecialisms = checkSpecialisms(specialisms, requiredSpecialisms);
                if (hasRequiredSpecialisms===false){
                    return;
                }

                const appointmentsWithinRange = getAvailabilityWithinRange(availability, requiredTimes, startDate, endDate);
                if (appointmentsWithinRange.length === 0){
                    return;
                }

                const sorted = sortBy(appointmentsWithinRange, "timestamp" );

                const formattedAvailability = groupBy(sorted, "date");

                const match = {
                    ...rest,
                    appointment_mediums,
                    appointment_types,
                    formattedAvailability,
                    availability: appointmentsWithinRange,
                    specialisms,
                };

                filtered.push(match);
            });

        resolve(filtered);
    });

    return apples;
};

// const isMediumOffered =( offeredMedia: AppointmentMedium[],requiredMedium: AppointmentMedium) => {
//     if (requiredMedium === ""){
//         return true;
//     }

//     return offeredMedia.includes(requiredMedium);
// };

const isTypeOffered=( offeredTypes:AppointmentType[],requiredType: AppointmentType) => {
    if (requiredType === ""){
        return true;
    }

    return offeredTypes.includes(requiredType);
};

const checkSpecialisms=( specialisms:Specialism[],requiredSpecialisms: Specialism[]) => {
    if (requiredSpecialisms.length === 0){
        return true;
    }

    const missingSpecialism = requiredSpecialisms.find(requiredSpecialism => !specialisms.includes(requiredSpecialism));

    return missingSpecialism === undefined;
};

const getAvailabilityWithinRange = (availability:IEnhancedAvailability[], requiredTimes:string[], startDate?: string, endDate?: string) => {
    const startDateMs = startDate !== undefined ? new Date(startDate).getTime() : undefined;
    const endDateMs = endDate !== undefined ? new Date(endDate).getTime() : undefined;

    const filteredAvailability = availability.filter(appointment => {
        const apptDateMs = appointment.timestamp;

        ({ apptDateMs, apptDate: appointment.date, startDateMs, startDate, endDateMs , endDate });

        if (endDateMs !== undefined && apptDateMs > endDateMs){
            return false;
        }

        if (startDateMs !== undefined && apptDateMs < startDateMs){
            return false;
        }

        if (requiredTimes.length > 0){
            const apptHour = Number(appointment.time.slice(0,2));

            if (!requiredTimes.includes("morning")){
                if (apptHour <= 12){
                    return false;
                }
            }
            if (!requiredTimes.includes("afternoon")){
                if (apptHour >= 12 && apptHour <= 17){
                    return false;
                }
            }
            if (!requiredTimes.includes("evening")){
                if (apptHour >= 17){
                    return false;
                }
            }

        }

        return true;
    });

    return filteredAvailability;
};
