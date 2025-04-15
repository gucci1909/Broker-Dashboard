import React from "react";
import { Bar } from "react-chartjs-2";

function BarGraphs() {
  return (
    <div className="rounded-xl bg-white p-5 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">
          Monthly Deal Performance
        </h3>
        <select className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 outline-none">
          <option>2023</option>
          <option>2022</option>
        </select>
      </div>

      <div className="h-64">
        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "Closed Deals",
                data: [12, 19, 15, 22, 18, 25, 28],
                backgroundColor: "rgba(59, 130, 246, 0.7)",
                borderColor: "rgba(59, 130, 246, 1)",
                borderWidth: 1,
              },
              {
                label: "Pending Deals",
                data: [5, 8, 6, 10, 7, 12, 15],
                backgroundColor: "rgba(156, 163, 175, 0.7)",
                borderColor: "rgba(156, 163, 175, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: "rgba(229, 231, 235, 1)",
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                position: "top",
                labels: {
                  boxWidth: 12,
                },
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `${context.dataset.label}: ${context.raw}`;
                  },
                },
              },
            },
          }}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-md bg-blue-50 p-2">
          <div className="text-gray-500">Best Month</div>
          <div className="font-bold">Jul: 28 deals</div>
        </div>
        <div className="rounded-md bg-gray-50 p-2">
          <div className="text-gray-500">Avg/Month</div>
          <div className="font-bold">19 deals</div>
        </div>
      </div>
    </div>
  );
}

export default BarGraphs;
