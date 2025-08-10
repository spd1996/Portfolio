'use client'
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement
  } from 'chart.js'
import PageContainer from "../components/pagecontainer";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  )

  const ChartComponent = () => {
    // Sample data for the Doughnut chart
    const chartData = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4CAF50",
            "#800080",
            "#FFA500",
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4CAF50",
            "#800080",
            "#FFA500",
          ],
        },
      ],
    };
    const barData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Monthly Sales",
            data: [50, 80, 60, 100, 75, 120],
            backgroundColor: "#3490dc", // Blue color
          },
        ],
      };
      const barOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    return (
      <PageContainer>
        <div className="p-4 bg-gray-400 shadow-md h-screen">
        <h1 className="text-2xl font-bold mb-4">Doughnut Chart</h1>
        <div className="h-full flex flex-row">
          <div className="w-[300px]">
            <Doughnut data={chartData} />
          </div>
          <div className="w-[600px]">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </div>
      </PageContainer>
    );
  };

export default ChartComponent;

