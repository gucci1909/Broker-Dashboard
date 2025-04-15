import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn } from "react-icons/fa";

function Announcements() {
  return (
    <div className="rounded-xl bg-white p-5 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <FaBullhorn className="text-blue-500" /> Announcements
        </h3>
        <span className="cursor-pointer text-xs text-blue-500">View All</span>
      </div>

      <div className="h-48 overflow-y-auto">
        <ul className="space-y-3">
          {[
            {
              id: 1,
              text: "New property listings available in Downtown area",
              time: "2 min ago",
              new: true,
            },
            {
              id: 2,
              text: "Quarterly meeting scheduled for Friday 3 PM",
              time: "1 hour ago",
            },
            {
              id: 3,
              text: "Updated commission structure effective next month",
              time: "3 hours ago",
            },
            {
              id: 4,
              text: "New marketing materials available in resources",
              time: "Yesterday",
            },
            {
              id: 5,
              text: "System maintenance scheduled for tonight 11PM-1AM",
              time: "2 days ago",
            },
          ].map((announcement) => (
            <motion.li
              key={announcement.id}
              className={`rounded-lg p-3 ${announcement.new ? "bg-blue-50" : "bg-white"}`}
              initial={{ opacity: announcement.new ? 0 : 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-2">
                <div
                  className={`mt-1 h-2 w-2 rounded-full ${announcement.new ? "bg-blue-500" : "bg-gray-300"}`}
                ></div>
                <div>
                  <p className="text-xs font-medium text-gray-800">
                    {announcement.text}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {announcement.time}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Announcements;
