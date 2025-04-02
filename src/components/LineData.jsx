import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineData = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Sales",
                data: [10, 25, 15, 30, 22, 40],
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.1)",
                pointBackgroundColor: "blue",
                tension: 0.4
            },
            {
                label: "Revenue",
                data: [12, 20, 18, 35, 25, 45],
                borderColor: "green",
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                pointBackgroundColor: "green",
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: true },
        },
        scales: {
            x: {
                grid: {
                    display: true
                }
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return <Line data={data} options={options} />;
};

export default LineData;
