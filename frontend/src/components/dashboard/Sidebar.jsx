import React from 'react'
import Logo from "../../../public/Logo.png";
import { FaBell, FaChartPie, FaCogs, FaEnvelope, FaHome, FaQuestionCircle, FaSignOutAlt, FaUserCircle, FaUsers } from 'react-icons/fa';

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

export default Sidebar;