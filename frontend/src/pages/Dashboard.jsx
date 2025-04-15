import React, { useState } from "react";
import {
  FaBars,
  FaFilter,
} from "react-icons/fa";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import ActivityStream from "../components/dashboard/ActivityStream";
import MyTasks from "../components/dashboard/MyTasks";
import Announcements from "../components/dashboard/Announcements";
import LeadershipBoard from "../components/dashboard/LeadershipBoard";
import Sidebar from "../components/dashboard/Sidebar";
import BarGraphs from "../components/dashboard/BarGraphs";
import SalesPerformance from "../components/dashboard/SalesPerformance";
import UpCards from "../components/dashboard/UpCards";
import BottomCards from "../components/dashboard/BottomCards";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

const Home = () => {
  const [lang, setLang] = useState("en");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLanguageToggle = () =>
    setLang((prev) => (prev === "en" ? "ar" : "en"));

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div
      className="flex min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 font-sans text-gray-800"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        lang={lang}
      />
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          sidebarOpen ? "ltr:ml-64 rtl:mr-64" : "ml-0"
        }`}
      >
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

        <div className="mx-auto p-4 font-sans">
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

          <UpCards />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <SalesPerformance />

            <BottomCards />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6">
            <Announcements />
            <MyTasks />
            <ActivityStream />
          </div>

          <BarGraphs />
          <LeadershipBoard />
        </div>
      </div>
    </div>
  );
};

export default Home;
