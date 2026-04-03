

import { useState } from "react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";

// Images
import revenueImg from "../assets/icons/sucessStories/revenue.webp";
import trialImg from "../assets/icons/sucessStories/trial.webp";
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
    image: trialImg,
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
    <section className="section-spacing relative" id="success-stories">
      <Container>
        <SectionHeading
          title="Proven Funnel Success Stories"
          subtitle="Real results from real brands we've scaled"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-in-out ${
                activeFilter === filter
                  ? "bg-[#7455ff] shadow-[0_0_20px_rgba(116,85,255,0.4)] text-white"
                  : "bg-[#101625] text-gray-400 hover:text-white border border-[#1f2942]"
              }`}
            >
              {filter}
            </button>
          ))}
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
                  <div className="gradient-border overflow-hidden">
                    <div className="bg-[#0b1221]/80 backdrop-blur-md px-3 py-1.5 flex items-center justify-center gap-2">
                      <ProgressIcon className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold text-white">
                        {story.growth}
                      </span>
                    </div>
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
      </Container>
    </section>
  );
};

export default SuccessStories;