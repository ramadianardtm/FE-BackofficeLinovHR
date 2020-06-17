import { Chart } from '../models/chart.interface';

/**
 *  Construct Pie Chart data
 *  @param      labels  Chart Label name
 *  @param      data    Chart Data
 *  @returns    model   Chart Model
 */
export function onConstructPieChart(labels: string[], data: any[]): Chart {
    return {
        labels,
        datasets: [
            {
                data,
                backgroundColor: ['#42A5F5'],
                hoverBackgroundColor: ['#42A5F5'],
            },
        ],
    };
}
