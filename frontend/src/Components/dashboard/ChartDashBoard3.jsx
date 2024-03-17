import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);


function ChartDashBoard3({graphArr3}) {

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const data = {
        datasets: [
            {
                label: 'Red dataset',
                data: graphArr3[0] ? graphArr3[0] : [
                    { x: -50, y: 60, r: 10 },
                    { x: 30, y: -20, r: 15 },
                    { x: 80, y: -90, r: 8 },
                    { x: -70, y: 40, r: 18 },
                    { x: 20, y: 60, r: 11 },
                    { x: -30, y: -20, r: 9 },
                    { x: 40, y: -30, r: 14 },
                    { x: -50, y: 70, r: 7 },
                    { x: 10, y: -40, r: 16 },
                    { x: -60, y: 80, r: 10 },
                    { x: 0, y: -10, r: 12 },
                    { x: 30, y: 50, r: 13 },
                    // ... add more data objects as needed
                ],
                backgroundColor: '#9370DB',
            },
            {
                label: graphArr3[0] ? graphArr3[0] : 'Blue dataset',
                data: [
                    { x: 80, y: -90, r: 8 },
                    { x: -70, y: 40, r: 18 },
                    { x: -50, y: 60, r: 10 },
                    { x: 30, y: -20, r: 15 },
                    { x: -80, y: -30, r: 8 },
                    { x: 70, y: 40, r: 12 },
                    { x: -20, y: 90, r: 6 },
                    { x: 10, y: -70, r: 18 },
                    { x: 40, y: 50, r: 9 },
                    { x: -10, y: 20, r: 14 },
                    { x: 0, y: 0, r: 7 },
                    { x: 90, y: -50, r: 11 },
                    // ... add more data objects as needed
                ],
                backgroundColor: '#8A2BE2',
            },
        ],
    };

    return (
        <>
            <Bubble options={options} data={data} />
        </>
    )
}

export default ChartDashBoard3;

