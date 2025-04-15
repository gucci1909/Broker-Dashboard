import { useState } from "react";
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
  FaCar,
  FaEnvelope,
  FaBell,
  FaQuestionCircle,
} from "react-icons/fa";

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
            { icon: <FaUserCircle  />, label: "Profile" },
            { icon: <FaCogs  />, label: "Settings" },
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
    { icon: <FaChartLine />, label: "Leads Generated", value: "248" },
    { icon: <FaHandshake />, label: "Sales Closed", value: "56" },
    { icon: <FaDollarSign />, label: "Commissions Earned", value: "$12,360" },
    { icon: <FaUsers />, label: "Active Clients", value: "134" },
    { icon: <FaBuilding />, label: "Properties Listed", value: "42" },
    { icon: <FaClock />, label: "Follow-ups Scheduled", value: "29" },
  ];

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
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-md transition-all hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-2 text-2xl text-blue-500">{s.icon}</div>
              <p className="text-xs text-gray-500">{s.label}</p>
              <h2 className="text-lg font-semibold text-gray-800">{s.value}</h2>
            </motion.div>
          ))}
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
