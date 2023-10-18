import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart = () => {
    // Generate random data for the y-axis (anomaly frequencies)
    const yData = Array(24).fill(0).map(() => Math.ceil(Math.random() * 20));

    // Create labels for the x-axis
    const xLabels = [
        '12:00am', '1:00am', '2:00am', '3:00am', '4:00am', '5:00am',
        '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am',
        '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm',
        '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm',
    ];

    // Create colors for each data point
    const shadesOfBlueBorder = [
        "#1E76F7", "#286FF7", "#3268F6", "#3C61F6", "#4659F5", "#5042F5",
        "#5A3BF4", "#6433F4", "#6E2CF3", "#7825F3", "#821EF3", "#8C17F2",
        "#9610F2", "#A009F1", "#A600F0", "#A600E8", "#A600E0", "#A600D9",
        "#A600D1", "#A600C9", "#A600C1", "#A600BA", "#A600B2", "#A600AA"
    ];
    const shadesOfBlue = [
        "#1E76F727", "#286FF727", "#3268F627", "#3C61F627", "#4659F527", "#5042F527",
        "#5A3BF427", "#6433F427", "#6E2CF327", "#7825F327", "#821EF327", "#8C17F227",
        "#9610F227", "#A009F127", "#A600F027", "#A600E827", "#A600E027", "#A600D927",
        "#A600D127", "#A600C927", "#A600C127", "#A600BA27", "#A600B227", "#A600AA27"
    ];

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
                        return `At ${context.label}: ${context.parsed} occurrences`;
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
            <Bar height={300} width={400} data={data} options={options} />
        </div>
    );
};

export default BarChart;
