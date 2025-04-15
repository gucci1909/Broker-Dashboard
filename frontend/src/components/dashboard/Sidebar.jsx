import React from 'react';
import Logo from "../../../public/Logo.png";
import { FaBell, FaChartPie, FaCogs, FaEnvelope, FaHome, FaQuestionCircle, FaSignOutAlt, FaUserCircle, FaUsers } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ sidebarOpen, setSidebarOpen, lang }) => {
  const { t } = useTranslation();
  const isRTL = lang === 'ar';

  // Navigation items with translations
  const navItems = [
    { icon: <FaHome />, label: t('dashboard'), active: true },
    { icon: <FaChartPie />, label: t('reports') },
    { icon: <FaUsers />, label: t('clients') },
    { icon: <FaEnvelope />, label: t('messages') },
    { icon: <FaBell />, label: t('notifications') },
    { icon: <FaUserCircle />, label: t('profile') },
    { icon: <FaCogs />, label: t('settings') },
  ];

  const supportItems = [
    { icon: <FaQuestionCircle />, label: t('help_support') },
    { icon: <FaSignOutAlt />, label: t('logout'), isLogout: true }
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`fixed z-30 h-screen border-r border-gray-200 bg-white transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-0"
      } overflow-hidden shadow-sm ${isRTL ? 'right-0' : 'left-0'}`}
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
          {navItems.map((item, i) => (
            <div
              key={i}
              className={`flex cursor-pointer items-center gap-3 rounded-md p-3 transition-all duration-200 hover:bg-blue-50 hover:text-blue-500 ${
                item.active ? "bg-blue-50 text-blue-500" : ""
              } ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className={`${isRTL ? 'mr-2' : 'ml-2'}`}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Help and Support + Logout */}
        <div>
          <div className="p-4 text-sm font-medium text-gray-600">
            <div className={`flex cursor-pointer items-center gap-3 rounded-md p-3 transition-all duration-200 hover:bg-blue-50 hover:text-blue-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-lg">{supportItems[0].icon}</span>
              <span className={`${isRTL ? 'mr-2' : 'ml-2'}`}>{supportItems[0].label}</span>
            </div>
          </div>
          <hr className="mx-4 my-2 border-t border-gray-200" />
          <div className="p-4 text-sm font-medium text-gray-600">
            <div className={`flex cursor-pointer items-center gap-3 rounded-md p-3 transition-all duration-200 hover:bg-red-50 hover:text-red-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-lg">{supportItems[1].icon}</span>
              <span className={`${isRTL ? 'mr-2' : 'ml-2'}`}>{supportItems[1].label}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;