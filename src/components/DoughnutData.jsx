import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary components for the Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutData = () => {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
        datasets: [
            {
                label: "Sales Distribution",
                data: [12, 19, 10, 15, 8], // Values for each section
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)", // Red
                    "rgba(54, 162, 235, 0.5)", // Blue
                    "rgba(255, 206, 86, 0.5)", // Yellow
                    "rgba(75, 192, 192, 0.5)", // Green
                    "rgba(153, 102, 255, 0.5)", // Purple
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
        }
    };

    return <Doughnut data={data} options={options} />;
};

export default DoughnutData;
