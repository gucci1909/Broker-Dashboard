import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../public/Logo.png";
import {
  FaChartLine,
  FaHandshake,
  FaDollarSign,
  FaCrown,
  FaCalendarAlt,
  FaTasks,
  FaBullhorn,
  FaBars,
  FaUsers,
  FaBuilding,
  FaClock,
  FaHome,
  FaChartPie,
  FaUserCircle,
  FaCogs,
  FaSignOutAlt,
  FaEnvelope,
  FaBell,
  FaQuestionCircle,
  FaFilter,
  FaBullseye,
} from "react-icons/fa";
// import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Sidebar = ({ sidebarOpen, setSidebarOpen, lang }) => {
  return (
    <div
      className={`fixed z-30 h-screen border-r border-gray-200 bg-white transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-0"
      } overflow-hidden shadow-sm`}
    >
      {/* Logo Section */}
      <div className="flex justify-center border-b border-gray-600 p-4">
        <img
          src={Logo}
          alt="AmanaDesk Logo"
          className="h-20 w-[300px] cursor-pointer object-contain"
        />
      </div>

      {/* Navigation Items */}
      <div className="flex h-[calc(100%-128px)] flex-col justify-between">
        <div className="space-y-1 p-4 text-sm font-medium text-gray-600">
          {[
            { icon: <FaHome />, label: "Dashboard" },
            { icon: <FaChartPie />, label: "Reports" },
            { icon: <FaUsers />, label: "Clients" },
            { icon: <FaEnvelope />, label: "Messages" },
            { icon: <FaBell />, label: "Notifications" },
            { icon: <FaUserCircle />, label: "Profile" },
            { icon: <FaCogs />, label: "Settings" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex cursor-pointer items-center gap-3 rounded-md p-3 transition-all duration-200 hover:bg-blue-50 hover:text-blue-500 ${
                i === 0 ? "bg-blue-50 text-blue-500" : ""
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Help and Support + Logout */}
        <div>
          <div className="p-4 text-sm font-medium text-gray-600">
            <div className="flex cursor-pointer items-center gap-3 rounded-md p-3 transition-all duration-200 hover:bg-blue-50 hover:text-blue-500">
              <FaQuestionCircle /> <span>Help and Support</span>
            </div>
          </div>
          <hr className="mx-4 my-2 border-t border-gray-200" />
          <div className="p-4 text-sm font-medium text-gray-600">
            <div className="flex cursor-pointer items-center gap-3 rounded-md p-3 transition-all duration-200 hover:bg-red-50 hover:text-red-500">
              <FaSignOutAlt /> <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [lang, setLang] = useState("en");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLanguageToggle = () =>
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
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
      textColor: "text-amber-600"
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
      textColor: "text-rose-600"
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
      textColor: "text-emerald-600"
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
    // New medium cards for second row
    // {
    //   icon: <FaUsers />,
    //   label: "Clients",
    //   value: "134",
    //   trend: "+5%",
    //   color: "bg-amber-100",
    //   textColor: "text-amber-600",
    // },
    // {
    //   icon: <FaBuilding />,
    //   label: "Properties",
    //   value: "42",
    //   trend: "-3%",
    //   color: "bg-rose-100",
    //   textColor: "text-rose-600",
    // },
    {
      icon: <FaCalendarAlt />,
      label: "Appointments",
      value: "87",
      trend: "+15%",
      color: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    // {
    //   icon: <FaBullseye />,
    //   label: "Target",
    //   value: "78%",
    //   trend: "+4%",
    //   color: "bg-emerald-100",
    //   textColor: "text-emerald-600",
    // },
  ];

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

  const leaderboard = [
    { name: "Ahmed", deals: 1 },
    { name: "Sara", deals: 2 },
    { name: "Khalid", deals: 3 },
  ];

  const events = [
    "Webinar: Market Insights - Apr 20",
    "Sales Training Session - May 5",
  ];
  const tasks = ["Send follow-up emails", "Review contract documents"];
  const announcements = [
    "New property listings available.",
    "Quarterly meeting on Friday",
  ];

  return (
    <div
      className="flex min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 font-sans text-gray-800"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Updated Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        lang={lang}
      />

      {/* Main Content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          sidebarOpen ? "ltr:ml-64 rtl:mr-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="cursor-pointer text-xl text-blue-500 hover:text-blue-600"
          >
            <FaBars />
          </button>

          <h1 className="text-xl font-semibold text-gray-800 md:text-2xl">
            {lang === "en" ? "Welcome back, Mohamed" : "مرحبا بعودتك، محمد"}
          </h1>

          {/* Language Toggle */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="langSwitch"
              className="sr-only"
              onChange={handleLanguageToggle}
              checked={lang === "ar"}
            />
            <label htmlFor="langSwitch" className="relative cursor-pointer">
              <div className="h-5 w-10 rounded-full bg-gray-300 shadow-inner"></div>
              <div
                className={`absolute top-0.5 h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-300 ${
                  lang === "ar" ? "translate-x-5 rtl:right-1" : "translate-x-1"
                }`}
              ></div>
            </label>
            <span className="text-xs text-gray-600">
              {lang === "ar" ? "العربية" : "English"}
            </span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mx-auto p-4 font-sans">
          {/* Header with Filter */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
              <FaFilter className="text-gray-500" />
              Filters
            </button>
          </div>

          {/* Top 3 Small Cards */}
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
               <p className="text-xs text-gray-500 mt-1">
                 {s.additionalInfo || "On track with projections"}
               </p>
             </div>
             <div className="relative h-2 w-20 rounded-full bg-gray-200">
               <div
                 className={`absolute left-0 top-0 h-full rounded-full ${s.textColor.replace("text", "bg")} shadow-md`}
                 style={{ width: `${Math.abs(parseInt(s.trend))}%` }}
               ></div>
             </div>
           </div>
           
           {/* Additional Dummy Content */}
           <div className="mt-4 pt-3 border-t border-gray-100">
             <div className="flex justify-between text-xs font-medium text-gray-500">
               <span>Weekly Avg.</span>
               <span className="text-gray-700">{s.weeklyAvg || "24.5%"}</span>
             </div>
             <div className="flex justify-between text-xs font-medium text-gray-500 mt-1">
               <span>Monthly Goal</span>
               <span className="text-gray-700">{s.monthlyGoal || "82%"}</span>
             </div>
           </div>
         </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Chart Section */}
            <div className="mt-5 rounded-lg bg-white p-4 shadow-sm lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800">
                  Performance Overview
                </h3>
                <select className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>

              <div className="grid h-64 grid-cols-1 gap-4 md:grid-cols-2">
                {/* Pie Chart Section */}
                <div className="flex flex-col">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-xs font-medium text-gray-500">
                      Your Brokerages
                    </h4>
                    <span className="text-xs font-semibold text-blue-600">
                      51%
                    </span>
                  </div>
                  <div className="flex-1">
                    <Doughnut
                      data={{
                        labels: ["Top Agents", "Other"],
                        datasets: [
                          {
                            data: [29, 20],
                            backgroundColor: ["#3B82F6", "#E5E7EB"],
                            borderWidth: 0,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: "75%",
                        plugins: {
                          legend: {
                            position: "bottom",
                            labels: {
                              boxWidth: 8,
                              padding: 12,
                              font: {
                                size: 9,
                              },
                            },
                          },
                        },
                      }}
                    />
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-500">
                    <span>Top Agents 29%</span>
                    <span>Other 20%</span>
                  </div>
                </div>

                {/* Line Graph Section */}
                <div className="flex flex-col">
                  <h4 className="mb-2 text-xs font-medium text-gray-500">
                    Real-Time Updates
                  </h4>
                  <div className="flex-1 rounded-md bg-gray-50 p-2">
                    {/* This would be replaced with your actual Line component */}
                    <div className="relative h-full">
                      {/* Y-axis labels */}
                      <div className="absolute top-0 left-0 flex h-full flex-col justify-between text-xs text-gray-400">
                        <span>100</span>
                        <span>50</span>
                        <span>0</span>
                      </div>

                      {/* Graph area */}
                      <div className="ml-6 h-full">
                        {/* Sample line - in a real implementation, use ChartJS Line */}
                        <div className="relative h-full w-full">
                          <div className="absolute bottom-0 h-px w-full bg-gray-200"></div>
                          <div
                            className="absolute bottom-0 h-full w-full bg-blue-50"
                            style={{
                              clipPath:
                                "polygon(0% 100%, 10% 80%, 30% 60%, 50% 30%, 70% 40%, 90% 20%, 100% 0%, 100% 100%)",
                            }}
                          ></div>
                          <div
                            className="absolute bottom-0 h-px w-full bg-blue-500"
                            style={{
                              clipPath:
                                "polygon(0% 100%, 10% 80%, 30% 60%, 50% 30%, 70% 40%, 90% 20%, 100% 0%)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-400">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                  </div>
                </div>
              </div>

              {/* Announcements Section */}
            </div>

            {/* Additional Cards */}
            <div className="mt-5 space-y-4">
              {stats.slice(4, 7).map(
                (
                  s,
                  i, // Changed to show 3 cards (indexes 4-6)
                ) => (
                  <motion.div
                    key={i}
                    className="h-[120px] cursor-pointer rounded-lg bg-white p-4 shadow-sm"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                          {s.label}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold text-gray-800">
                          {s.value}
                        </h3>
                      </div>
                      <div
                        className={`rounded-md p-2 ${s.textColor.replace("text", "bg")} bg-opacity-10`}
                      >
                        {s.icon}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span
                        className={`text-xs ${s.trend.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                      >
                        {s.trend} vs target
                      </span>
                      <div className="h-1 w-16 rounded-full bg-gray-200">
                        <div
                          className={`h-full rounded-full ${s.textColor.replace("text", "bg")}`}
                          style={{ width: `${Math.abs(parseInt(s.trend))}%` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-md bg-gray-50 p-3">
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-xs font-semibold text-gray-700">
              Announcements
            </h4>
            <FaBullhorn className="text-xs text-blue-500" />
          </div>
          <ul className="space-y-2 text-xs text-gray-600">
            <li className="flex items-start gap-2">
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              <span>New property listings available</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              <span>Quarterly meeting this Friday</span>
            </li>
          </ul>
        </div>

        {/* Graph + Leaderboard */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-md md:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-gray-700">
              📈 Real-Time Updates
            </h3>
            <div className="flex h-40 items-center justify-center rounded-md bg-gray-50 text-xs text-gray-400">
              Graph Placeholder
            </div>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-md">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-blue-500">
              <FaCrown /> Leaderboard
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              {leaderboard.map((user, idx) => (
                <li
                  key={idx}
                  className="flex justify-between border-b border-gray-200 pb-2"
                >
                  <span>{user.name}</span>
                  <span>{user.deals}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Events / Tasks / Announcements */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Section
            icon={<FaCalendarAlt />}
            title="Upcoming Events"
            items={events}
          />
          <Section icon={<FaTasks />} title="Tasks" items={tasks} />
          <Section
            icon={<FaBullhorn />}
            title="Announcements"
            items={announcements}
          />
        </div>
      </div>
    </div>
  );
};

const Section = ({ icon, title, items }) => (
  <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-md">
    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-blue-500">
      {icon} {title}
    </h3>
    <ul className="list-disc space-y-1 pl-5 text-xs text-gray-600">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Home;
