import { FC, SVGProps } from "react";
import { Button } from "antd";
import { ArrowIcon, progressIcon as ProgressIcon, RevenueLayerIcon, RevenueMappingIcon, RevenueSearchIcon, RevenueSettingIcon } from "../assets/icons";

const steps = [
  { step: 1, title: "Audit & Analysis", description: "Deep dive into your current email performance and revenue opportunities", Icon: RevenueSearchIcon },
  { step: 2, title: "Strategy Mapping", description: "Custom funnel architecture designed for your business model", Icon: RevenueMappingIcon },
  { step: 3, title: "Build Core Flows", description: "High-converting automated flows that drive revenue on autopilot.", Icon: RevenueLayerIcon },
  { step: 4, title: "Monthly Email Campaigns", description: "Strategic campaigns designed to boost engagement and sales.", Icon: RevenueSettingIcon },
  { step: 5, title: "Monthly Reporting", description: "Clear performance insights with ongoing optimization.", Icon: ProgressIcon }
];

const RevenueFramework = () => (
  <section id="process" className="w-full px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
    <div className="relative mx-auto w-full max-w-[1152px]">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-white font-semibold tracking-tight sm:text-2xl lg:text-[32px] text-xl">Our 5-Step Revenue Framework</h2>
        <p className="mx-auto mt-2 text-sm text-[#B9B9B9] sm:text-base">A proven system that transforms email from an expense into a profit center.</p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-[8%] right-[8%] top-[32px] z-0 hidden h-[2px] bg-[#1a2f4d] lg:block" aria-hidden />
        <ul className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5 lg:gap-6 xl:gap-8">
          {steps.map(({ step, title, description, Icon }) => (
            <li key={step} className="relative flex flex-col items-center text-center">
              <div className="relative mb-4 shrink-0">
                <span className="absolute -right-2 -top-1 z-20 flex size-6 items-center justify-center rounded-full small_circle text-xs font-bold text-white shadow-sm">{step}</span>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full circle">
                  <Icon className="size-7 shrink-0" aria-hidden />
                </div>
              </div>
              <h3 className="z-10 mb-2 font-semibold text-white text-base">{title}</h3>
              <p className="max-w-[280px] leading-relaxed text-[#B9B9B9] sm:max-w-[260px] text-sm">{description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 flex justify-center sm:mt-14 lg:mt-16">
        <Button htmlType="button" type="primary" className=" px-[25px]! py-[16px]! h-auto!  rounded-[14px]! border-none! gap-[7.734px]! min-h-0! bg-[linear-gradient(90deg,#793FEE_0%,#26FDFE_106.88%)]! active:scale-[0.95] text-[16px]! font-semibold!  text-white! text-center! hover:text-white! hover:bg-[linear-gradient(90deg,#793FEE_45%,#26FDFE_106.88%)]! flex items-center justify-center">
          <span className="md:hidden">Apply to Your Brand</span>
          <span className="hidden md:inline">Apply This Framework to Your Brand</span>
          <ArrowIcon className="h-5 w-5 shrink-0 ml-1 hidden md:block" />
        </Button>
      </div>
    </div>
  </section>
);

export default RevenueFramework;
