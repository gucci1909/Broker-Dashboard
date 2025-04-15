import React from "react";
import { useTranslation } from "react-i18next";
import { FaBolt } from "react-icons/fa";

function ActivityStream({ lang }) {
  const { t } = useTranslation();
  const isRTL = lang === "ar";
  return (
    <div className="rounded-xl bg-white p-5 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <FaBolt className="text-yellow-500" /> {t(`activity_stream`)}
        </h3>
        <span className="text-xs text-gray-500">Live</span>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2 rounded-lg bg-green-50 p-2">
          <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
          <div>
            <p className="text-xs font-medium">
              Ahmed just closed a $450k deal
            </p>
            <p className="mt-1 text-xs text-gray-500">Just now</p>
          </div>
        </div>
        <div className="flex items-start gap-2 rounded-lg bg-blue-50 p-2">
          <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
          <div>
            <p className="text-xs font-medium">
              New lead assigned from website
            </p>
            <p className="mt-1 text-xs text-gray-500">1 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityStream;
