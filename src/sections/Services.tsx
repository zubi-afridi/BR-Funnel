import {
  ServiceSearchIcon,
  ServiceOrbitIcon,
  ServiceMsgIcon,
  ArrowIcon,
} from "../assets/icons";
import { motion } from "framer-motion";
import {
  fadeInTop,
  staggerContainer,
  viewportSettings,
} from "../utils/animationVariants";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Email Marketing Audit",
      desc: "Deep performance analysis, segmentation gaps, and revenue leak detection.",
      linkText: "Learn More",
      icon: ServiceSearchIcon,
      active: false,
    },
    {
      id: 2,
      title: "Full Email Marketing Management",
      desc: "Strategy, automation, campaigns, copywriting, and ongoing optimization.",
      linkText: "Get Started",
      icon: ServiceOrbitIcon,
      active: true,
    },
    {
      id: 3,
      title: "SMS Marketing",
      desc: "High-converting SMS flows and promotional campaigns with compliance built-in.",
      linkText: "Explore",
      icon: ServiceMsgIcon,
      active: false,
    },
  ];
  return (
    <section
      id="services"
      className="w-full px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="mx-auto w-full max-w-[1152px]"
      >
        <motion.div variants={fadeInTop} className="text-center mb-16">
          <h2 className="text-white font-semibold tracking-tight sm:text-2xl lg:text-[32px] text-xl">
            Our Revenue Growth Services
          </h2>
          <p className="mx-auto mt-2 text-sm text-[#B9B9B9] sm:text-base">
            End-to-end funnel and retention marketing systems tailored to your
            brand.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {services.map(
            ({ id, title, desc, linkText, icon: Icon, active }, i) => (
              <motion.div
                key={id}
                variants={fadeInTop}
                className={`relative group h-full flex flex-col rounded-[24px] overflow-hidden transition-all duration-300 ${active ? "p-[1.5px]" : "border border-white/5"} ${i === 2 ? "md:col-span-2 lg:col-span-1 md:w-[calc(50%-12px)] md:mx-auto lg:w-full lg:mx-0" : ""}`}
              >
                {active && (
                  <div className="absolute inset-0 bg-linear-to-br from-[#793FEE] to-[#26FDFE]" />
                )}
                <div
                  className={`relative h-full w-full flex flex-col bg-[#12192b] rounded-[23px] pt-10 pb-8 px-8 transition-transform duration-300 ${!active && "hover:bg-[#141B2D]/60 hover:border-white/10"}`}
                >
                  <div className="w-[64px] h-[64px] mb-8 flex items-center justify-center rounded-[16px] bg-linear-to-b from-[#2563EB] to-[#7C3AED] shadow-[0_0_26px_0_rgba(124,58,237,0.3)]">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-[21px] mb-3 leading-tight">
                      {title}
                    </h3>
                    <p className="text-[#B9B9B9] text-[14px] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 group/link cursor-pointer w-fit">
                    <span className="font-semibold text-[14px] bg-linear-to-b from-[#793FEE] to-[#26FDFE] bg-clip-text text-transparent transition-opacity group-hover/link:opacity-80">
                      {linkText}
                    </span>
                    <ArrowIcon className="size-3.5 text-[#793FEE] transition-transform group-hover/link:translate-x-1 group-hover/link:opacity-80" />
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Services;
