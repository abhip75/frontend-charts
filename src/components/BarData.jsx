import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register only the required components for Bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarData = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Sales",
                data: [10, 25, 15, 30, 22, 40],
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.5)", // Adjust opacity for better visibility
            },
            {
                label: "Revenue",
                data: [12, 20, 18, 35, 25, 45],
                borderColor: "green",
                backgroundColor: "rgba(0, 255, 0, 0.5)",
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
                grid: { display: true }
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default BarData;
