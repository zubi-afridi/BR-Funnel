import React from "react";
import { Email, progressIcon as ProgressIcon, UserIcon, DollarIcon } from "../assets";

type StatCard = {
  id: number;
  title: string;
  value: string;
  icon: React.ReactNode;
};

const stats: StatCard[] = [
  {
    id: 1,
    value: "2.4M+",
    title: "Campaigns Delivered",
    icon: <Email className="h-5 w-5" />,
  },
  {
    id: 2,
    value: "6.8%",
    title: "Avg. Conversion Rate",
    icon: <ProgressIcon className="h-5 w-5" />,
  },
  {
    id: 3,
    value: "850K+",
    title: "Subscribers Managed",
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    id: 4,
    value: "$12M+",
    title: "Revenue Generated",
    icon: <DollarIcon className="h-5 w-5" />,
  },
];

const PerformanceStatsSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto max-w-6xl rounded-[24px] border border-white/10
          bg-[linear-gradient(90deg,#0d1538_0%,#14213d_45%,#10364a_100%)]
          px-5 py-8 sm:px-8 sm:py-10 lg:px-10
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-[32px]">
            Performance That Speaks for Itself!
          </h2>
          <p className="mt-2 text-sm text-[#B9B9B9] sm:text-base">
            Real metrics from real campaigns we&apos;ve managed
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="
                rounded-[18px] border border-white/15 bg-white/2
                p-5 backdrop-blur-sm transition-all duration-300
                hover:border-cyan-400/30 hover:bg-white/4
              "
            >
              <div
                className="
                  mb-5 flex h-11 w-11 items-center justify-center rounded-xl
                  bg-[#4d4dff]/20 text-[#7c7cff]
                "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gradient-blue sm:text-[32px]">
                {item.value}
              </h3>

              <p className="mt-1  text-[#B9B9B9] text-sm font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceStatsSection;