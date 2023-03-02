export type DailyBillingProcessProps = {
    day: number;
    value: number;
}

export type DailyBillingProps = {
    daysAboveAverage: string | number;
    lowerBilling: string | number;
    higherBilling: string | number;
    total: string | number;
}

export type BillingProps = {
    [key: string]: number;
}

export type PercentagesBillingProps = {
    [key: string]: string;
}

// export type StatesProps = {
//     state: string | number;
//     percentage: string | number;
// }

export type StatesProps = {
    state: string;
    percentage: string;
}