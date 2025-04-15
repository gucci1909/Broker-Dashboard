import React from "react";
import { FaCrown, FaStar } from "react-icons/fa";

function LeadershipBoard() {
  return (
    <div className="rounded-xl bg-white p-5 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <FaCrown className="text-amber-400" /> Top Performers
        </h3>
        <span className="text-xs text-gray-500">This Month</span>
      </div>

      <div className="h-[480px] overflow-y-auto">
        <ul className="space-y-3">
          {[
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "David Wilson",
              deals: 8,
              closed: "$650k",
              trend: "+3%",
            },
            {
              name: "Priya Patel",
              deals: 7,
              closed: "$580k",
              trend: "+1%",
            },
            {
              name: "James Kim",
              deals: 6,
              closed: "$490k",
              trend: "-2%",
            },
            {
              name: "Fatima Zahra",
              deals: 5,
              closed: "$420k",
              trend: "-4%",
            },

            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
            {
              name: "Sarah Johnson",
              deals: 14,
              closed: "$1.2M",
              trend: "+22%",
            },
            {
              name: "Michael Chen",
              deals: 12,
              closed: "$980k",
              trend: "+15%",
            },
            {
              name: "Ahmed Al-Mansoori",
              deals: 11,
              closed: "$850k",
              trend: "+8%",
            },
            {
              name: "Emily Rodriguez",
              deals: 9,
              closed: "$720k",
              trend: "+5%",
            },
          ].map((agent, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between rounded-lg p-2 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
                    idx === 0
                      ? "bg-amber-100 text-amber-800"
                      : idx === 1
                        ? "bg-gray-100 text-gray-800"
                        : idx === 2
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-50 text-gray-600"
                  }`}
                >
                  {idx + 1}
                </span>
                <div>
                  <p className="text-sm font-medium">{agent.name}</p>
                  <p className="text-xs text-gray-500">{agent.closed} closed</p>
                </div>
              </div>
              <span
                className={`text-xs font-medium ${
                  agent.trend.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {agent.trend}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Past Month Performer Highlight */}
      <div className="mt-6 border-t border-gray-100 pt-4">
        <h4 className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
          Past Month Performer
        </h4>
        <div className="rounded-lg bg-amber-50 p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                  <FaStar className="text-amber-400" />
                </div>
                <div className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-amber-50 bg-white">
                  <span className="text-xs font-bold text-amber-600">1</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Alex Turner</p>
                <p className="text-xs text-gray-600">Last Month's Top Agent</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Achievements</p>
              <div className="mt-1 flex gap-2">
                <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-amber-600">
                  18 deals
                </span>
                <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-amber-600">
                  $1.5M closed
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="rounded bg-white p-2">
              <p className="text-xs text-gray-500">Leads</p>
              <p className="text-sm font-bold">42</p>
            </div>
            <div className="rounded bg-white p-2">
              <p className="text-xs text-gray-500">Conversion</p>
              <p className="text-sm font-bold">42.8%</p>
            </div>
            <div className="rounded bg-white p-2">
              <p className="text-xs text-gray-500">Rating</p>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`h-3 w-3 ${star <= 4 ? "text-amber-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadershipBoard;
