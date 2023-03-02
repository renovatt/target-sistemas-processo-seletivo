import { BillingProps, DailyBillingProcessProps, PercentagesBillingProps } from "../@types";

const currentBillings: BillingProps = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

export function checkFibonacci(n: number) {
    let a = 0;
    let b = 1;
    let c;

    while (b < n) {
        c = a + b;
        a = b;
        b = c;
    }
    if (b === n) {
        return true;
    } else {
        return false;
    }
}

export function dailyBillingProcess(json: DailyBillingProcessProps[]) {
    let lowerBilling = Number.MAX_VALUE;
    let higherBilling = Number.MIN_VALUE;
    let total = 0;
    let daysAboveAverage = 0;

    for (let i = 0; i < json.length; i++) {
        const value = json[i].value;

        if (value === 0) continue
        if (value < lowerBilling) lowerBilling = value;
        if (value > higherBilling) higherBilling = value;
        total += value;
    }

    const billingDays = json.filter(item => item.value !== 0);
    const average = total / billingDays.length;

    for (let i = 0; i < billingDays.length; i++) {
        const value = billingDays[i].value;

        if (value > average) daysAboveAverage++;
    }

    return {
        lowerBilling,
        higherBilling,
        daysAboveAverage,
        total
    };
}

export function calculatePercentages(billing: BillingProps): PercentagesBillingProps {
    const total = Object.values(billing).reduce((acc, curr) => acc + curr);
    const percentages: PercentagesBillingProps = {};

    for (let state in billing) {
        const valor = billing[state];
        const percentual = (valor / total) * 100;
        percentages[state] = percentual.toFixed(2);
    }
    return percentages
}

export function getPercentage() {
    const response = calculatePercentages(currentBillings)
    const formattedPercentages = Object.entries(response).map(([state, percentage]) => {
        return {
            state: state,
            percentage: percentage
        }
    });
    return formattedPercentages;
}

export function inverterString(str: string): string {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}
