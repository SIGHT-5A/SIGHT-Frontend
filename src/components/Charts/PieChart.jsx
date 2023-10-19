import React from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./chart.scss"

ChartJS.register(CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const PieChart = () => {

    // const SeverityData = [5, 11, 18];
    const SeverityData = [];

    const data = {
        labels: ['Severe', 'Moderate', 'Normal'],
        datasets: [
            {
                label: 'Severity frequency',
                data: SeverityData,
                backgroundColor: ['#FF504527', '#FFB54527', '#00C85227'],
                borderColor: ['#FF5045af', '#FFB545af', '#00C852af'],
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    boxWidth: 20,
                    fontSize: 14,
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const percentage = ((context.parsed / context.dataset.data.reduce((a, b) => a + b)) * 100).toFixed(2);
                        return `${label}: ${percentage}%`;
                    },
                },
            },
        },
        title: {
            display: true,
            text: 'Severity Distribution',
            fontSize: 20,
        },
    };

    return (
        <div>
            {
                SeverityData.length
                    ?
                    (<Doughnut height={300} data={data} options={options} />)
                    :
                    (
                        <div className='no-anomaly'>
                            <p>No Anomaly Detected Yet</p>
                        </div>
                    )
            }
        </div>
    );
};

export default PieChart;
