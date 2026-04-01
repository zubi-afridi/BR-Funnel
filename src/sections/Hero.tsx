import React from "react";
import Button from "../components/common/Button";
import { LightLayer, DarkLayer } from "../assets/icons";

const Hero: React.FC = () => {
  return (
    <section className="relative z-0 pt-28 md:pt-32 pb-20 px-4 lg:pt-48 md:pb-32 overflow-hidden">
      {/* Background SVGs for Premium Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Left Atmospheric Glow */}
        <div className="absolute -left-[25%] top-0 h-full w-[80%] opacity-45">
          <LightLayer className="w-full h-full" />
        </div>
        {/* Right Atmospheric Glow */}
        <div className="absolute -right-[25%] top-0 h-full w-[80%] opacity-35">
          <DarkLayer className="w-full h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-[45px] lg:text-[56px] font-semibold mb-6 tracking-tight leading-[1.1] text-white">
          Turn Email & SMS Into Your Most <br />
          <span className="text-gradient-blue">Profitable Revenue Channel</span>
        </h1>

        {/* Subtext */}
        <p className="text-base lg:text-[20px] text-[#E4E4E4] font-normal leading-[26px] md:leading-[37px] text-center mb-16 max-w-[450px] md:max-w-[550px] lg:max-w-[711px] mx-auto">
          We build high-converting funnels, automated email systems, and SMS
          flows that increase retention and maximize lifetime value.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 max-w-[700px] mx-auto justify-center items-center">
          <div className="flex flex-col items-center group transition-all duration-300 p-6 rounded-xl hover:bg-white/3 border border-transparent hover:border-white/8">
            <h2 className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 text-gradient-blue">
              38%
            </h2>
            <p className="text-[#B9B9B9] text-center text-base font-normal leading-[26px]">
              Avg Revenue <br className="hidden md:block" /> Growth
            </p>
          </div>
          <div className="flex flex-col items-center group transition-all duration-300 p-6 rounded-xl hover:bg-white/3 border border-transparent hover:border-white/8">
            <h2 className="text-3xl font-bold text-gradient-blue mb-2 group-hover:scale-110 transition-transform duration-300">
              4.2x
            </h2>
            <p className="text-[#B9B9B9] text-center text-base font-normal leading-[26px]">
              ROI on <br className="hidden md:block" /> Campaigns
            </p>
          </div>
          <div className="flex flex-col items-center group transition-all duration-300 sm:col-span-2 md:col-span-1 p-6 rounded-xl hover:bg-white/3 border border-transparent hover:border-white/8">
            <h2 className="text-3xl font-bold text-gradient-blue mb-2 group-hover:scale-110 transition-transform duration-300">
              120+
            </h2>
            <p className="text-[#B9B9B9] text-center text-base font-normal leading-[26px]">
              Funnels <br className="hidden md:block" /> Built
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button
            variant="primary"
            className="w-full sm:w-auto px-[32px]! py-[16px]! rounded-[14px]! bg-[linear-gradient(90deg,#793FEE_0%,#26FDFE_106.88%)]! gap-[7.734px]! min-h-0! shadow-[0_0_20px_rgba(31,217,249,0.3)] hover:shadow-[0_0_30px_rgba(31,217,249,0.5)] transition-shadow duration-300 text-[16px]! font-semibold! leading-[24px]! text-white! text-center!"
          >
            Book a Free Strategy Call
            <svg
              className="w-5 h-5 ml-1 hidden sm:block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Button
            variant="secondary"
            className="w-full sm:w-auto px-10 hover:border-gray-400 transition-colors duration-300 text-[16px]! font-semibold! leading-[24px]! text-white! text-center!"
          >
            View Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
