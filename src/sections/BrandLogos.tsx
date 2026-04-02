import React from "react";
import { LightLayer, DarkLayer } from "../assets";
import { Button } from "antd";

type BrandItem = {
  id: number;
  name: string;
  logo?: string;
  alt?: string;
};

const brands: BrandItem[] = [
  { id: 1, name: "TN Nursery", logo: "/brands/tn-nursery.svg", alt: "TN Nursery" },
  { id: 2, name: "Brand 2", logo: "/brands/brand-2.svg", alt: "Brand 2" },
  { id: 3, name: "AEons", logo: "/brands/aeons.svg", alt: "AEons" },
  { id: 4, name: "Auria's", logo: "/brands/aurias.svg", alt: "Auria's" },
  { id: 5, name: "Brand 5", logo: "/brands/brand-5.svg", alt: "Brand 5" },
  { id: 6, name: "Wallify", logo: "/brands/wallify.svg", alt: "Wallify" },
  { id: 7, name: "MOIG", logo: "/brands/moig.svg", alt: "MOIG" },
  { id: 8, name: "Brand 8", logo: "/brands/brand-8.svg", alt: "Brand 8" },
  { id: 9, name: "Shunrai Knives", logo: "/brands/shunrai-knives.svg", alt: "Shunrai Knives" },
];

const TrustedBrandsSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div
        className="
          relative mx-auto w-full max-w-[1152px]
          overflow-hidden rounded-[24px] border border-white/10
          min-h-[585px]
          px-5 py-10
          sm:px-8 sm:py-12
          md:px-10 md:py-12
          lg:px-[58px] lg:py-[46px]
         
        "
      >
        {/* Atmospheric Layers instead of standard glows */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Bottom Left Layer */}
          <div className="absolute -left-[20%] -bottom-[20%] w-[70%] h-[70%] opacity-40">
            <LightLayer className="w-full h-full" />
          </div>
          {/* Top Right Layer */}
          <div className="absolute -right-[20%] -top-[20%] w-[70%] h-[70%] opacity-30">
            <DarkLayer className="w-full h-full" />
          </div>
        </div>



        <div className="relative z-10">
          {/* Heading */}
          <div className="text-center">
            <h2
              className="
                text-white font-semibold tracking-[-0.02em]
                text-[30px] leading-[36px]
                sm:text-[34px] sm:leading-[40px]
                md:text-[38px] md:leading-[44px]
                lg:text-[46px] lg:leading-[55px]
              "
            >
              Trusted by Leading Brands
            </h2>

            <p
              className="
                mx-auto mt-2 max-w-[520px]
                font-medium text-[#B9B9B9]
                text-[14px] leading-[20px]
                sm:text-[15px] sm:leading-[22px]
                md:text-[16px] md:leading-[24px]
                lg:text-[17px] lg:leading-[26px]
              "
            >
              Powering growth for companies across industries
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              mx-auto mt-10 grid max-w-[900px]
              grid-cols-1 gap-x-[28px] gap-y-[26px]
              sm:grid-cols-2
              lg:mt-[44px] lg:grid-cols-3
            "
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="
                  relative flex h-[74px] items-center justify-center
                  rounded-[16px] border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  px-6
                  sm:h-[78px]
                  lg:h-[76px]
                  transition-all duration-300
                  hover:border-blue-400/30 hover:bg-white/10
                "
              >
                {/* Your real logo goes here */}
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.alt || brand.name}
                    className="
                      relative z-[1]
                      max-h-[34px] w-auto max-w-[150px]
                      object-contain
                      sm:max-h-[36px]
                      lg:max-h-[38px] lg:max-w-[165px]
                    "
                  />
                ) : (
                  <span className="relative z-[1] text-sm text-white/70">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center lg:mt-[46px]">
            {/* <button
              type="button"
              className="
                inline-flex h-[50px] items-center justify-center gap-2
                rounded-[14px] border border-white/10
                bg-white/5 backdrop-blur-sm
                px-6
                text-[16px] font-semibold leading-[20px] text-white
                transition-all duration-300
                hover:bg-white hover:text-black
                sm:h-[54px] sm:px-7
                lg:min-w-[266px]
              "
            >
              <span>See How We Scale Brands</span>
              <span className="text-[18px] leading-none">→</span>
            </button> */}
            <Button
              variant="secondary"
              className="w-full sm:w-auto px-10 hover:border-gray-400 transition-colors duration-300 text-[16px]! font-semibold! leading-[24px]! text-white! text-center!"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;