import React, { useState } from "react";
import {
  FaBars,
  FaChartLine,
  FaChevronDown,
  FaCog,
  FaFileExport,
  FaFilter,
  FaLock,
  FaNewspaper,
  FaRegCalendarAlt,
  FaSignOutAlt,
  FaUser,
  FaUserCircle,
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
import { useTranslation } from "react-i18next";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

const Home = () => {
  const { t, i18n } = useTranslation(); // Assuming you're using react-i18next
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isTimeframeOpen, setIsTimeframeOpen] = useState(false);

  const handleLanguageToggle = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // RTL/LTR direction classes
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const isRTL = dir === "rtl";

  return (
    <div
      className={`flex min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 ${isRTL ? 'font-arabic' : 'font-sans'} text-gray-800 ${dir}`}
      dir={dir}
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        lang={i18n.language}
      />

      <div
        className={`flex-1 transition-all duration-300 ${sidebarOpen ? (isRTL ? "mr-64" : "ml-64") : ""}`}
      >
        {/* Enhanced Header with RTL support */}
        <header className="sticky top-0 z-20 w-full bg-white shadow-sm">
          <div className="mx-auto flex items-center justify-between p-4">
            {/* Left Side - Toggle & Welcome */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleSidebar}
                className="cursor-pointer text-xl text-blue-600 hover:text-blue-800"
              >
                <FaBars />
              </button>
              <h1 className="text-xl font-bold text-gray-800 md:text-2xl">
                {t("welcome_message", { name: "Mohamed" })}
              </h1>
              <div className="flex items-center justify-end gap-2">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={i18n.language === "ar"}
                    onChange={handleLanguageToggle}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-300 transition-all peer-checked:bg-yellow-600">
                    <div
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                        i18n.language === "ar"
                          ? isRTL
                            ? "left-0.5"
                            : "right-0.5"
                          : isRTL
                            ? "right-0.5"
                            : "left-0.5"
                      }`}
                    ></div>
                  </div>
                </label>
                <span className="text-sm font-medium text-gray-700">
                  {i18n.language === "ar" ? "العربية" : "English"}
                </span>
              </div>
            </div>

            {/* Right Side - Profile Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 rounded-full p-1 hover:bg-gray-100"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                {isRTL ? (
                  <>
                    <FaChevronDown
                      className={`h-3 w-3 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                    />
                    <span className="hidden text-sm font-medium md:inline">
                      {t("admin")}
                    </span>
                    <FaUserCircle className="h-8 w-8 text-gray-600" />
                  </>
                ) : (
                  <>
                    <FaUserCircle className="h-8 w-8 text-gray-600" />
                    <span className="hidden text-sm font-medium md:inline">
                      {t("admin")}
                    </span>
                    <FaChevronDown
                      className={`h-3 w-3 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                    />
                  </>
                )}
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div
                  className={`ring-opacity-5 absolute ${isRTL ? "left-0" : "right-0"} mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black`}
                >
                  <div className="border-b border-gray-100 px-4 py-2">
                    <p className="text-sm font-medium text-gray-900">
                      {t("signed_in_as")}
                    </p>
                    <p className="text-xs text-gray-500">mohamed@broker.com</p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaUser className={isRTL ? "ml-2" : "mr-2"} />
                    {t("my_profile")}
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaCog className={isRTL ? "ml-2" : "mr-2"} />
                    {t("settings")}
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaLock className={isRTL ? "ml-2" : "mr-2"} />
                    {t("change_password")}
                  </a>
                  <div className="border-t border-gray-100"></div>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaSignOutAlt className={isRTL ? "ml-2" : "mr-2"} />
                    {t("logout")}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Market News Ticker */}
          <div className="bg-gray-900 px-4 py-2 text-white">
            <div className="flex items-center overflow-hidden">
              <span
                className={`${isRTL ? "ml-4" : "mr-4"} flex-shrink-0 rounded bg-amber-500 px-2 py-1 text-xs font-bold`}
              >
                {"MARKET UPDATE"}
              </span>
              <div className="flex items-center whitespace-nowrap">
                {isRTL ? (
                  <>
                    <span className="ml-4 text-sm">
                      • {"Mortgage rates drop to 3.25% for first-time buyers"}
                    </span>
                    <FaChartLine className="ml-2 text-green-400" />
                    <span className="ml-4 text-sm">
                      •{" "}
                      {
                        "Property prices in Downtown Dubai increased by 2.3% this week"
                      }
                    </span>
                    <FaNewspaper className="ml-2 text-blue-400" />
                  </>
                ) : (
                  <>
                    <FaNewspaper className="mr-2 text-blue-400" />
                    <span className="mr-8 text-sm">
                      {
                        "Property prices in Downtown Dubai increased by 2.3% this week"
                      }{" "}
                      •
                    </span>
                    <FaChartLine className="mr-2 text-green-400" />
                    <span className="mr-8 text-sm">
                      {"Mortgage rates drop to 3.25% for first-time buyers"} •
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="mx-auto">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Left Side - Info Section */}
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <p className="text-sm font-medium text-gray-700">
                    {t("last_updated")}:{" "}
                    <span className="font-semibold text-gray-900">
                      {new Date().toLocaleDateString(i18n.language)}
                    </span>
                  </p>
                </div>

                <div className="hidden h-4 w-px bg-gray-200 md:block"></div>

                <div className="flex items-center gap-2">
                  <FaChartLine className="text-blue-500" />
                  <p className="text-sm font-medium text-gray-700">
                    {t("performance")}:{" "}
                    <span className="font-semibold text-green-600">+12.5%</span>{" "}
                    {t("this_month")}
                  </p>
                </div>
              </div>

              {/* Right Side - Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-gray-50 hover:shadow-md">
                  <FaFilter className="text-gray-500" />
                  {t("filters")}
                </button>

                <button className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 transition-all hover:bg-blue-100 hover:shadow-md">
                  <FaFileExport className="text-blue-500" />
                  {t("export")}
                </button>

                <div className="relative">
                  <button
                    className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-gray-50 hover:shadow-md"
                    onClick={() => setIsTimeframeOpen(!isTimeframeOpen)}
                  >
                    <FaRegCalendarAlt className="text-gray-500" />
                    {t("timeframe")}
                    <FaChevronDown
                      className={`h-3 w-3 transition-transform ${isTimeframeOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isTimeframeOpen && (
                    <div
                      className={`ring-opacity-5 absolute ${isRTL ? "left-0" : "right-0"} z-10 mt-1 w-40 rounded-md bg-white py-1 shadow-lg ring-1 ring-black`}
                    >
                      {[
                        t("today"),
                        t("this_week"),
                        t("this_month"),
                        t("this_quarter"),
                      ].map((item) => (
                        <button
                          key={item}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setSelectedTimeframe(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <UpCards lang={i18n.language} />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <SalesPerformance lang={i18n.language} />
              <BottomCards lang={i18n.language} />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6">
                <Announcements lang={i18n.language} />
                <MyTasks lang={i18n.language} />
                <ActivityStream lang={i18n.language} />
              </div>

              <BarGraphs lang={i18n.language} />
              <LeadershipBoard lang={i18n.language} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
