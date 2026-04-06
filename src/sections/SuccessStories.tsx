import { useState } from "react";
import { Button } from "antd";
// import Container from "../components/common/Container";

// Images
import revenueImg from "../assets/icons/sucessStories/revenue.webp";
import conversionImg from "../assets/icons/sucessStories/conversion.webp";
import customerImg from "../assets/icons/sucessStories/customer.webp";

// Icons
import { ArrowIcon, progressIcon as ProgressIcon } from "../assets/icons";

const filters = ["All", "E-Commerce", "DTC", "Info Products"];

const stories = [
  {
    category: "E-Commerce",
    image: revenueImg,
    growth: "+62%",
    title: "Revenue in 90 Days",
    desc: "Increased email revenue through segmented automation & personalized flows.",
    clientName: "Fashion Retailer",
  },
  {
    category: "E-Commerce",
    image: conversionImg,
    growth: "+62%",
    title: "Trial Conversions",
    desc: "Optimized onboarding sequences and nurture campaigns for B2B E-Commerce.",
    clientName: "Analytics Platform",
  },
  {
    category: "DTC",
    image: customerImg,
    growth: "+62%",
    title: "Customer LTV",
    desc: "Built retention system with SMS integration and post-purchase flows.",
    clientName: "Wellness Brand",
  },
];

const SuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-[1152px] ">
        <h2 className="text-center mb-16">
          <h2
            className="text-white font-semibold tracking-[-0.02em]
                sm:text-2xl lg:text-[32px] text-xl"
          >
            Proven Funnel Success Stories
          </h2>
          <p className="text-sm text-[#B9B9B9] sm:text-base">
            Real results from real brands we've scaled
          </p>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <Button
                key={filter}
                htmlType="button"
                type="default"
                variant={isActive ? "solid" : "outlined"}
                onClick={() => setActiveFilter(filter)}
                className={
                  isActive
                    ? "px-6! py-2.5! h-auto! min-h-0! rounded-xl! text-sm! font-semibold! border-none! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! text-white! shadow-[0_0_20px_rgba(31,217,249,0.3)]! hover:text-white! hover:bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! hover:shadow-[0_0_30px_rgba(31,217,249,0.5)]! transition-all duration-300 ease-in-out"
                    : "px-6! py-2.5! h-auto! min-h-0! rounded-xl! text-sm! font-medium! bg-transparent! border-[#1f2942]! text-gray-400! hover:text-white! hover:border-[#1f2942]! transition-all duration-300 ease-in-out"
                }
              >
                {filter}
              </Button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="site-panel flex flex-col overflow-hidden group"
            >
              <div className="relative h-[220px] w-full overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b1221] to-transparent opacity-80" />

                <div className="absolute top-4 right-4">
                  <div className="growth-badge">
                    <ProgressIcon className="w-4 h-4 text-white shrink-0" />
                    <span className="text-sm font-semibold text-white whitespace-nowrap">
                      {story.growth}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-5">
                  <span className="inline-block px-3 py-1.5 rounded-lg bg-[#141b2d] border border-[#1f2942] text-xs text-gray-300">
                    {story.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {story.title}
                </h3>

                <p className="text-gray-400 text-sm mb-8 flex-1 line-clamp-3 leading-relaxed">
                  {story.desc}
                </p>

                <div className="pt-5 mt-auto border-t border-[#1d253f]/50 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {story.clientName}
                  </span>
                  <button className="flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group/btn">
                    View Case Study
                    <ArrowIcon className="w-4 h-4 text-blue-400 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
