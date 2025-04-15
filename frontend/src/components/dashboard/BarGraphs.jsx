import React from "react";
import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

function BarGraphs({lang}) {
  const { t } = useTranslation();
    const isRTL = lang === "ar";
  return (
    <div className="rounded-xl bg-white p-5 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">
        {t(`monthly_deal_performance`)}
        </h3>
        <select className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 outline-none">
          <option>2023</option>
          <option>2022</option>
        </select>
      </div>

      <div className="h-64">
        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "Closed Deals",
                data: [12, 19, 15, 22, 18, 25, 28],
                backgroundColor: "rgba(59, 130, 246, 0.7)",
                borderColor: "rgba(59, 130, 246, 1)",
                borderWidth: 1,
              },
              {
                label: "Pending Deals",
                data: [5, 8, 6, 10, 7, 12, 15],
                backgroundColor: "rgba(156, 163, 175, 0.7)",
                borderColor: "rgba(156, 163, 175, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: "rgba(229, 231, 235, 1)",
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                position: "top",
                labels: {
                  boxWidth: 12,
                },
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `${context.dataset.label}: ${context.raw}`;
                  },
                },
              },
            },
          }}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-md bg-blue-50 p-2">
          <div className="text-gray-500">Best Month</div>
          <div className="font-bold">Jul: 28 deals</div>
        </div>
        <div className="rounded-md bg-gray-50 p-2">
          <div className="text-gray-500">Avg/Month</div>
          <div className="font-bold">19 deals</div>
        </div>
      </div>

      {/* User Feedback Section */}
      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-800">
        {t(`user_feedback`)}
        </h3>
        <div className="h-[300px] overflow-y-auto rounded-lg border border-gray-100 p-2">
          {[
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Emma Williams",
              role: "Account Executive",
              comment:
                "Would love to see more customization options in future updates.",
              rating: 4,
              avatar: "👩‍🎨",
              color: "bg-pink-100 text-pink-800",
            },
            {
              name: "David Kim",
              role: "VP of Sales",
              comment: "Game changer for our quarterly planning process.",
              rating: 5,
              avatar: "👨‍💼",
              color: "bg-green-100 text-green-800",
            },
            {
              name: "Olivia Martinez",
              role: "Sales Operations",
              comment:
                "The real-time data sync is flawless. No more manual updates!",
              rating: 5,
              avatar: "👩‍🔧",
              color: "bg-yellow-100 text-yellow-800",
            },
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
            {
              name: "Sarah Johnson",
              role: "Sales Manager",
              comment:
                "The new dashboard helped us increase conversion by 22%!",
              rating: 5,
              avatar: "👩‍💼",
              color: "bg-purple-100 text-purple-800",
            },
            {
              name: "Michael Chen",
              role: "Marketing Director",
              comment:
                "Very intuitive interface. Our team adopted it immediately.",
              rating: 4,
              avatar: "👨‍💻",
              color: "bg-blue-100 text-blue-800",
            },
          ].map((feedback, index) => (
            <div
              key={index}
              className={`mb-3 flex items-start rounded-lg p-3 ${feedback.color}`}
            >
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg">
                {feedback.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">{feedback.name}</h4>
                    <p className="text-xs opacity-75">{feedback.role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-3 w-3 ${i < feedback.rating ? "text-yellow-500" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-xs">{feedback.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BarGraphs;
