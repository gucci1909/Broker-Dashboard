import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaBullseye, FaCalendarAlt, FaChartLine, FaDollarSign, FaHandshake, FaUsers } from "react-icons/fa";

function UpCards() {
  const stats = [
    {
      icon: <FaUsers />,
      label: "CLIENT ACQUISITION",
      value: "134",
      trend: "+5%",
      comparison: "Up from 127 last month",
      additionalInfo: "Ahead of schedule",
      weeklyAvg: "28.2%",
      monthlyGoal: "90%",
      color: "bg-amber-100",
      textColor: "text-amber-600",
    },
    {
      icon: <FaBuilding />,
      label: "PROPERTIES",
      value: "42",
      trend: "-3%",
      comparison: "Down from 43 last quarter",
      additionalInfo: "Seasonal adjustment",
      weeklyAvg: "18.7%",
      monthlyGoal: "75%",
      color: "bg-rose-100",
      textColor: "text-rose-600",
    },
    {
      icon: <FaBullseye />,
      label: "TARGET RATE",
      value: "78%",
      trend: "+4%",
      comparison: "Exceeding expectations",
      additionalInfo: "Best in region",
      weeklyAvg: "72.3%",
      monthlyGoal: "85%",
      color: "bg-emerald-100",
      textColor: "text-emerald-600",
    },

    {
      icon: <FaChartLine />,
      label: "Leads",
      value: "248",
      trend: "+12%",
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      icon: <FaHandshake />,
      label: "Sales",
      value: "56",
      trend: "+8%",
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      icon: <FaDollarSign />,
      label: "Revenue",
      value: "$12.3k",
      trend: "+23%",
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      icon: <FaCalendarAlt />,
      label: "Appointments",
      value: "87",
      trend: "+15%",
      color: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.slice(0, 4).map((s, i) => (
        <motion.div
          key={i}
          className="cursor-pointer rounded-xl bg-white p-5 shadow-lg transition-all hover:shadow-xl"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase opacity-80">
                {s.label}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {s.value}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-500">
                {s.comparison || "Compared to last quarter"}
              </p>
            </div>
            <div
              className={`rounded-xl p-3 ${s.textColor.replace("text", "bg")} bg-opacity-20 shadow-inner`}
            >
              {React.cloneElement(s.icon, { size: 24 })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <span
                className={`text-sm font-bold ${s.trend.startsWith("+") ? "text-green-600" : "text-red-600"}`}
              >
                {s.trend} vs target
              </span>
              <p className="mt-1 text-xs text-gray-500">
                {s.additionalInfo || "On track with projections"}
              </p>
            </div>

            <div className="relative mt-4">
              <div className="mb-1 flex justify-between gap-5 text-xs font-medium text-gray-500">
                <span>Progress</span>
                <span
                  className={`font-bold ${s.trend.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                >
                  {Math.min(
                    100,
                    Math.max(
                      5,
                      Math.abs(parseInt(s.trend)) +
                        Math.floor(Math.random() * 15),
                    ),
                  )}
                  %
                </span>
              </div>
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full ${s.textColor.replace("text", "bg")} transition-all duration-1000 ease-out`}
                  style={{
                    width: `${Math.min(100, Math.max(5, Math.abs(parseInt(s.trend)) + Math.floor(Math.random() * 15)))}%`,
                    backgroundImage: `linear-gradient(to right, ${s.textColor.replace("text", "bg")}, ${s.textColor.replace("text", "bg").replace("600", "400")})`,
                  }}
                >
                  <div className="absolute inset-0 animate-pulse bg-white opacity-20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      s.trend.startsWith("+")
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    } shadow-sm`}
                  >
                    {s.trend} vs target
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Dummy Content */}
          <div className="mt-4 border-t border-gray-100 pt-3">
            <div className="flex justify-between text-xs font-medium text-gray-500">
              <span>Weekly Avg.</span>
              <span className="text-gray-700">{s.weeklyAvg || "24.5%"}</span>
            </div>
            <div className="mt-1 flex justify-between text-xs font-medium text-gray-500">
              <span>Monthly Goal</span>
              <span className="text-gray-700">{s.monthlyGoal || "82%"}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default UpCards;
