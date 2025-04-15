import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

function SalesPerformance({lang}) {
  const { t } = useTranslation();
  const isRTL = lang === "ar";
  const chartData = {
    labels: ["Leads", "Sales", "Revenue", "Clients", "Properties"],
    datasets: [
      {
        data: [248, 56, 12360, 134, 42],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(139, 92, 246, 0.7)",
          "rgba(217, 119, 6, 0.7)",
          "rgba(244, 63, 94, 0.7)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(217, 119, 6, 1)",
          "rgba(244, 63, 94, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-5 rounded-xl bg-white p-5 shadow-lg lg:col-span-2">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">
        {t("sales_performance")}
        </h3>
        <div className="flex gap-2">
          <select className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Quarter to Date</option>
          </select>
          <button className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
            Export
          </button>
        </div>
      </div>

      <div className="grid h-96 grid-cols-1 gap-6 md:grid-cols-2">
        {/* Enhanced Pie Chart */}
        <div className="flex flex-col">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-700">
            {t("lead_conversion_funnel")}
            </h4>
            <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">
              {Math.round(
                (chartData.datasets[0].data[0] /
                  chartData.datasets[0].data[1]) *
                  100,
              )}
              % Conversion
            </span>
          </div>
          <div className="flex-1">
            <Doughnut
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: "60%",
                plugins: {
                  legend: {
                    position: "right",
                    labels: {
                      boxWidth: 12,
                      padding: 16,
                      font: {
                        size: 11,
                      },
                      generateLabels: (chart) => {
                        const data = chart.data;
                        return data.labels.map((label, i) => ({
                          text: `${label}: ${data.datasets[0].data[i]} (${Math.round((data.datasets[0].data[i] / data.datasets[0].data.reduce((a, b) => a + b, 0)) * 100)}%)`,
                          fillStyle: data.datasets[0].backgroundColor[i],
                          strokeStyle: data.datasets[0].borderColor[i],
                          lineWidth: 1,
                          hidden: false,
                          index: i,
                        }));
                      },
                    },
                  },
                  tooltip: {
                    callbacks: {
                      label: (context) => {
                        const label = context.label || "";
                        const value = context.formattedValue || "";
                        const total = context.dataset.data.reduce(
                          (a, b) => a + b,
                          0,
                        );
                        const percentage = Math.round(
                          (context.raw / total) * 100,
                        );
                        return `${label}: ${value} (${percentage}%)`;
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Enhanced Line Chart Area */}
        <div className="flex flex-col">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-700">
            {t("weekly_performance_trend")}
            </h4>
            <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
              +14.5% vs last week
            </span>
          </div>
          <div className="flex-1 rounded-lg bg-gray-50 p-3">
            {/* This would be replaced with your actual Line chart component */}
            <div className="relative h-full">
              {/* Y-axis */}
              <div className="absolute top-0 left-0 flex h-full flex-col justify-between text-xs text-gray-400">
                <span>200</span>
                <span>150</span>
                <span>100</span>
                <span>50</span>
                <span>0</span>
              </div>

              {/* Chart area */}
              <div className="ml-6 h-full">
                {/* Sample data visualization */}
                <div className="relative h-full w-full">
                  {/* Grid lines */}
                  <div className="absolute bottom-0 h-full w-full">
                    {[0, 25, 50, 75, 100].map((line, i) => (
                      <div
                        key={i}
                        className="absolute right-0 left-0 h-px bg-gray-200"
                        style={{ bottom: `${line}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* Data line */}
                  <svg
                    className="absolute bottom-0 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,80 C10,60 20,70 30,50 C40,30 50,60 60,40 C70,20 80,50 90,30 C100,10 100,10 100,10"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,80 C10,60 20,70 30,50 C40,30 50,60 60,40 C70,20 80,50 90,30 C100,10 100,10 100,10"
                      fill="url(#areaGradient)"
                    />
                    <defs>
                      <linearGradient
                        id="areaGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#3B82F6"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="#3B82F6"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Data points */}
                  {[0, 20, 40, 60, 80, 100].map((point, i) => (
                    <div
                      key={i}
                      className="absolute h-2 w-2 rounded-full border-2 border-white bg-blue-500"
                      style={{
                        left: `${point}%`,
                        bottom: `${i % 2 === 0 ? 30 : 50}%`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-4">
        {[
          { label: "Avg. Deal Size", value: "$1,240", change: "+5.2%" },
          { label: "Conversion Rate", value: "22.7%", change: "+1.8%" },
          { label: "Response Time", value: "2.4h", change: "-0.3h" },
          {
            label: "Client Satisfaction",
            value: "4.8/5",
            change: "+0.2",
          },
        ].map((stat, i) => (
          <div key={i} className="rounded-lg bg-gray-50 p-3">
            <p className="text-xs font-medium text-gray-500">{stat.label}</p>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-sm font-semibold">{stat.value}</span>
              <span
                className={`text-xs ${
                  stat.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesPerformance;
