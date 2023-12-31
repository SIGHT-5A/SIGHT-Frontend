import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import NoAnomaly from '../NoAnomalyDiv/NoAnomaly';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart = () => {
    // Generate random data for the y-axis (anomaly frequencies)
    const yData = [
        1, 3, 6, 9, 12, 15,
        18, 21, 24, 27, 30, 33,
        30, 27, 24, 21, 18, 15,
        12, 8, 6, 3, 2, 1
    ];

    // const yData = [];

    // Create labels for the x-axis
    const xLabels = [
        '12:00am', '1:00am', '2:00am', '3:00am', '4:00am', '5:00am',
        '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am',
        '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm',
        '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm',
    ];

    // Create colors for each data point
    const shadesOfBlueBorder = [];
    for (let i = 0; i < 24; i++) {
        shadesOfBlueBorder.push("#167efc");
    }

    const shadesOfBlue = [];
    for (let i = 0; i < 24; i++) {
        shadesOfBlue.push("#167efc27");
    }

    const data = {
        labels: xLabels,
        datasets: [
            {
                label: 'Anomaly Frequency',
                data: yData,
                borderWidth: 1,
                backgroundColor: shadesOfBlue,
                borderColor: shadesOfBlueBorder,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time Stamp',
                    font: {
                        size: 16,
                    },
                },
                beginAtZero: true,
            },
            y: {
                title: {
                    display: true,
                    text: 'Frequency',
                    font: {
                        size: 16,
                    },
                },
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 20,
                    fontSize: 14,
                },
            },
            tooltip: {
                callbacks: {
                    title: () => 'Anomaly Frequency',
                    label: (context) => {
                        console.log(context)
                        return `At ${context.label}: ${context.parsed.y} occurrences`;
                    },
                },
            },
        },
        title: {
            display: true,
            text: 'Anomaly Frequency Distribution',
            font: {
                size: 20,
            },
        },
    };

    return (
        <div>
            {
                yData.length
                    ?
                    (<Bar height={300} width={400} data={data} options={options} />)
                    :
                    (
                        <NoAnomaly />
                    )
            }

        </div>
    );
};

export default BarChart;
