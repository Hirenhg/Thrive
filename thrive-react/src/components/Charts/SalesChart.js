
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Colors,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const SalesChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                data: [120, 200, 150, 80, 250, 300, 180, 220, 140, 190, 260, 310], // one value per month
                backgroundColor: "#dfb938",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                ticks: { color: "#737373",  callback: (index) => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index] },
                grid: {
                    display: false,
                },
            },
            x2: {
                
                position: "bottom",
                ticks: { color: "#171717", callback: (index) => [120, 200, 150, 80, 250, 300, 180, 220, 140, 190, 260, 310][index] },
                grid: {
                    display: false,
                },
                border: {
                    display: false, 
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    display: false,
                },
                grid: {
                    drawTicks: false,
                    display: false,
                },
                border: {
                    display: false, 
                },
            }
        }
    };

    return (
        <div style={{ height: 268 }}>
            <Bar data={data} options={options} />
        </div>
    );
};

