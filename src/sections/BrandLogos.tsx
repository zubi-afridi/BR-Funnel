import React from "react";
import {
  LightLayer,
  DarkLayer,
  AuriasLogo,
  WallifyLogo,
  BarelineLogo,
  EonsLogo,
  MoigoLogo,
  TreeLogo,
  NurseryLogo,
  ShunraiLogo,
  RadeantLogo,
  ArrowIcon,
} from "../assets";
import { Button } from "antd";

type BrandItem = {
  id: number;
  name: string;
  Logo: React.FC<React.SVGProps<SVGSVGElement>>;
};

const brands: BrandItem[] = [
  { id: 1, name: "TN Nursery", Logo: NurseryLogo },
  { id: 2, name: "TN Nursery (Tree)", Logo: TreeLogo },
  { id: 3, name: "AEons", Logo: EonsLogo },
  { id: 4, name: "Auria's", Logo: AuriasLogo },
  { id: 5, name: "Bareline", Logo: BarelineLogo },
  { id: 6, name: "Wallify", Logo: WallifyLogo },
  { id: 7, name: "MOIG", Logo: MoigoLogo },
  { id: 8, name: "Radéant", Logo: RadeantLogo },
  { id: 9, name: "Shunrai Knives", Logo: ShunraiLogo },
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
                sm:text-2xl lg:text-[32px] text-xl
                
                
              "
            >
              Trusted by Leading Brands
            </h2>

            <p
              className="
                mx-auto max-w-[520px]
                mt-2 text-sm text-[#B9B9B9] sm:text-base
              "
            >
              Powering growth for companies across industries
            </p>
          </div>


          {/* Cards */}
          <div
            className="
              mx-auto mt-10 grid max-w-[1000px]
              grid-cols-1 gap-x-[28px] gap-y-[26px]
              sm:grid-cols-2
              lg:mt-[44px] lg:grid-cols-3
            "
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="gradient-border rounded-2xl p-px"
              >
                <div className=" rounded-2xl flex items-center justify-center p-6 h-[76px] w-full">
                  <brand.Logo className="w-auto h-auto max-w-[80%] max-h-[32px] sm:max-h-[36px] lg:max-h-[40px]" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center lg:mt-[52px]">
            <Button
              variant="outlined"
              className="w-full sm:w-auto px-8!  transition-colors duration-300 text-base! font-semibold! leading-[24px]! text-white! text-center! flex items-center justify-center gap-1.5 rounded-xl! py-7! border-[#B9B9B9]! border!"
            >
              See How We Scale Brands
              <ArrowIcon className="w-5 h-5 font-bold" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;