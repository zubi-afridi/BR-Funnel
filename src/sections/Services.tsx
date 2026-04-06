import {
  ServiceSearchIcon,
  ServiceOrbitIcon,
  ServiceMsgIcon,
} from "../assets/icons";

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
    <section className="w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-[1152px]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-white font-semibold tracking-[-0.02em]
                sm:text-2xl lg:text-[32px] text-xl"
          >
            Our Revenue Growth Services
          </h2>
          <p
            className="mx-auto 
                mt-2 text-sm text-[#B9B9B9] sm:text-base"
          >
            End-to-end funnel and retention marketing systems tailored to your
            brand.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative group h-full flex flex-col rounded-[24px] overflow-hidden transition-all duration-300 ${
                service.active ? "p-px" : "border border-white/5"
              } ${index === 2 ? "md:col-span-2 lg:col-span-1 md:w-[calc(50%-12px)] md:mx-auto lg:w-full lg:mx-0" : ""}`}
            >
              {/* Gradient Border Background for Active Card */}
              {service.active && (
                <div className="absolute inset-0 bg-linear-to-br from-[#793FEE] to-[#26FDFE] opacity-70"></div>
              )}

              <div
                className={`relative h-full w-full flex flex-col bg-[#0B0F1A] rounded-[21.127px] pt-10 pb-8 px-8 transition-transform duration-300 ${
                  !service.active &&
                  "hover:bg-[#141B2D]/60 hover:border-white/10"
                }`}
              >
                {/* Icon Box */}
                <div className="w-[63.382px] h-[63.382px] mb-8 flex items-center justify-center rounded-[15.845px] bg-[linear-gradient(180deg,#2563EB_0%,#7C3AED_100%)] shadow-[0_0_26.409px_0_rgba(124,58,237,0.30)]">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-[#FFF] font-[Poppins] text-[21.127px] font-semibold mb-3 leading-[31.691px]">
                    {service.title}
                  </h3>
                  <p className="text-[#B9B9B9] font-[Poppins] text-[14.085px] font-normal leading-[24px]">
                    {service.desc}
                  </p>
                </div>

                {/* Link */}
                <div className="mt-8 flex items-center gap-2 group/link cursor-pointer w-fit">
                  <span className="text-center font-[Poppins] text-[14.085px] font-semibold leading-[21.127px] bg-[linear-gradient(180deg,#793FEE_0%,#26FDFE_100%)] bg-clip-text text-transparent transition-transform duration-300 group-hover/link:opacity-80">
                    {service.linkText}
                  </span>
                  <div className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:opacity-80">
                    {/* Arrow SVG */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="arrow_gradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#793FEE" />
                          <stop offset="100%" stopColor="#26FDFE" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M2.91666 7H11.0833M11.0833 7L7.58332 3.5M11.0833 7L7.58332 10.5"
                        stroke="url(#arrow_gradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
