import React from "react";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import { LightLayer, DarkLayer, ArrowIcon } from "../assets/icons";
const Hero: React.FC = () => {
  const stats = [
    { value: "38%", labelTop: "Avg Revenue", labelBottom: "Growth" },
    { value: "4.2x", labelTop: "ROI on", labelBottom: "Campaigns" },
    { value: "120+", labelTop: "Funnels", labelBottom: "Built" },
  ];
  return (
    <section className="relative z-0 pt-28 md:pt-32 lg:pt-48 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -left-[25%] top-0 h-full w-[80%] opacity-45">
          <LightLayer className="w-full h-full" />
        </div>
        <div className="absolute -right-[25%] top-0 h-full w-[80%] opacity-35">
          <DarkLayer className="w-full h-full" />
        </div>
      </div>
      <Container className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-[45px] lg:text-[56px] font-semibold mb-6 tracking-tight leading-[1.1] text-white">
          Turn Email & SMS Into Your Most <br />
          <span className="text-gradient-blue">Profitable Revenue Channel</span>
        </h1>
        <p className="text-base lg:text-[20px] text-[#E4E4E4] font-normal leading-[26px] md:leading-[37px] text-center mb-16 max-w-[450px] md:max-w-[550px] lg:max-w-[711px] mx-auto">
          We build high-converting funnels, automated email systems, and SMS
          flows that increase retention and maximize lifetime value.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 max-w-[700px] mx-auto justify-center items-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center group transition-all duration-300 p-6 rounded-xl border border-transparent ${idx === 2 ? "sm:col-span-2 md:col-span-1" : ""}`}>
              <h2 className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 text-gradient-blue text-center">
                {stat.value}
              </h2>
              <p className="text-[#B9B9B9] text-center text-base font-normal leading-[26px]">
                {stat.labelTop} <br className="hidden md:block" /> {stat.labelBottom}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button
            variant="primary"
            className="w-full sm:w-auto px-[32px]! py-[16px]! rounded-[14px]! bg-[linear-gradient(90deg,#793FEE_0%,#26FDFE_106.88%)]! gap-[7.734px]! min-h-0! shadow-[0_0_20px_rgba(31,217,249,0.3)] hover:shadow-[0_0_30px_rgba(31,217,249,0.5)] transition-shadow duration-300 text-[16px]! font-semibold! leading-[24px]! text-white! text-center!">
            Book a Free Strategy Call
            <ArrowIcon className="w-5 h-5 ml-1 hidden md:block" />
          </Button>
          <Button
            variant="secondary"
            className="w-full sm:w-auto px-10 hover:border-gray-400 transition-colors duration-300 text-[16px]! font-semibold! leading-[24px]! text-white! text-center!">
            View Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
