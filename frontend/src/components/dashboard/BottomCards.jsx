import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaBullseye, FaCalendarAlt, FaChartLine, FaDollarSign, FaHandshake, FaUsers } from "react-icons/fa";

function BottomCards() {
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
    <div className="mt-5 space-y-4">
      {stats.slice(4, 7).map((s, i) => (
        <motion.div
          key={i}
          className="cursor-pointer rounded-xl bg-white p-4 shadow-md transition-all hover:shadow-lg"
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                {s.label}
              </p>
              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                {s.value}
                {s.label === "Revenue" && (
                  <span className="ml-1 text-sm font-normal text-gray-500">
                    USD
                  </span>
                )}
              </h3>
            </div>
            <div
              className={`rounded-lg p-2 ${s.textColor.replace("text", "bg")} bg-opacity-20`}
            >
              {React.cloneElement(s.icon, { size: 20 })}
            </div>
          </div>
          {s.label === "Sales" && (
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Conversion Rate</span>
                <span className="font-medium">12.5%</span>
              </div>
              <div className="mt-1 flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`h-3 w-3 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs text-gray-500">(24 reviews)</span>
              </div>
            </div>
          )}

          {s.label === "Revenue" && (
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Avg. Deal Size</span>
                <span className="font-medium">$1,450</span>
              </div>
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>Monthly Target</span>
                <span className="font-medium">$15k</span>
              </div>
            </div>
          )}

          {s.label === "Appointments" && (
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((user) => (
                    <div
                      key={user}
                      className="h-5 w-5 rounded-full border-2 border-white bg-blue-100"
                    ></div>
                  ))}
                </div>
                <span className="text-xs text-gray-500">3 team members</span>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Next: Today, 3:00 PM
              </div>
            </div>
          )}

          <div className="mt-3 border-t border-gray-100 pt-2">
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-medium ${s.trend.startsWith("+") ? "text-green-600" : "text-red-600"}`}
              >
                {s.trend} vs target
              </span>
              <div className="relative h-2 w-20 rounded-full bg-gray-200">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full ${s.textColor.replace("text", "bg")}`}
                  style={{ width: `${Math.abs(parseInt(s.trend))}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default BottomCards;
