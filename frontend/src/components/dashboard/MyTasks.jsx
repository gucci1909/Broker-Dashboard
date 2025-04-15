import React from "react";
import { useTranslation } from "react-i18next";
import { FaTasks } from "react-icons/fa";

function MyTasks({ lang }) {
  const { t } = useTranslation();
  const isRTL = lang === "ar";
  return (
    <div className="rounded-xl bg-white p-5 shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <FaTasks className="text-blue-500" /> {t(`my_tasks`)}
        </h3>
        <button className="text-xs text-blue-500 hover:text-blue-700">
          + Add Task
        </button>
      </div>

      <ul className="max-h-48 space-y-3 overflow-y-auto">
        {[
          {
            id: 1,
            task: "Follow up with Downtown property client",
            due: "Today",
            priority: "high",
          },
          {
            id: 2,
            task: "Review contract for 45 Main St",
            due: "Tomorrow",
            priority: "medium",
          },
          {
            id: 3,
            task: "Schedule property viewings",
            due: "Fri",
            priority: "low",
          },
          {
            id: 4,
            task: "Update CRM with new leads",
            due: "Mon",
            priority: "medium",
          },
        ].map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50"
          >
            <input type="checkbox" className="mt-1 accent-blue-500" />
            <div className="flex-1">
              <p className="text-xs font-medium">{item.task}</p>
              <div className="mt-1 flex items-center justify-between">
                <span
                  className={`text-xs ${
                    item.priority === "high"
                      ? "text-red-500"
                      : item.priority === "medium"
                        ? "text-amber-500"
                        : "text-gray-500"
                  }`}
                >
                  {item.due}
                </span>
                <span
                  className={`h-2 w-2 rounded-full ${
                    item.priority === "high"
                      ? "bg-red-500"
                      : item.priority === "medium"
                        ? "bg-amber-500"
                        : "bg-gray-300"
                  }`}
                ></span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyTasks;
