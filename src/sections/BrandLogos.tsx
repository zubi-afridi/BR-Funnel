import React from "react";
import { LightLayer, DarkLayer, AuriasLogo, WallifyLogo, BarelineLogo, EonsLogo, MoigoLogo, TreeLogo, NurseryLogo, ShunraiLogo, RadeantLogo, ArrowIcon } from "../assets";
import Button from "../components/common/Button";
const brands = [
  { id: 1, name: "TN Nursery", Logo: NurseryLogo },
  { id: 2, name: "TN Nursery (Tree)", Logo: TreeLogo },
  { id: 3, name: "AEons", Logo: EonsLogo },
  { id: 4, name: "Auria's", Logo: AuriasLogo },
  { id: 5, name: "Bareline", Logo: BarelineLogo },
  { id: 6, name: "Wallify", Logo: WallifyLogo },
  { id: 7, name: "MOIG", Logo: MoigoLogo },
  { id: 8, name: "Radéant", Logo: RadeantLogo },
  { id: 9, name: "Shunrai Knives", Logo: ShunraiLogo }
];
const TrustedBrandsSection: React.FC = () => (
  <section className="w-full px-4 sm:px-6 lg:px-8">
    <div className="relative mx-auto w-full max-w-[1152px] overflow-hidden rounded-[24px] border border-white/10 min-h-[585px] px-5 py-10 sm:px-8 sm:py-12 lg:px-[58px] lg:py-[46px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-[20%] -bottom-[20%] w-[70%] h-[70%] opacity-40"><LightLayer className="w-full h-full" /></div>
        <div className="absolute -right-[20%] -top-[20%] w-[70%] h-[70%] opacity-30"><DarkLayer className="w-full h-full" /></div>
      </div>
      <div className="relative z-10">
        <div className="text-center">
          <h2 className="text-white font-semibold tracking-[-0.02em] sm:text-2xl lg:text-[32px] text-xl">Trusted by Leading Brands</h2>
          <p className="mx-auto max-w-[520px] mt-2 text-sm text-[#B9B9B9] sm:text-base">Powering growth for companies across industries</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2 lg:mt-11 lg:grid-cols-3">
          {brands.map(({ id, Logo }) => (
            <div key={id} className="gradient-border rounded-2xl p-px">
              <div className="rounded-2xl flex items-center justify-center p-6 h-[76px] w-full hover:scale-110 transition-all duration-300">
                <Logo className="w-auto h-auto max-w-[80%] max-h-8 sm:max-h-9 lg:max-h-10" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center lg:mt-[52px]">
          <Button variant="secondary" className="w-full sm:w-auto px-10 hover:border-gray-400 transition-colors duration-300 text-[16px]! font-semibold! leading-[24px]! text-white! text-center!">
            See How We Scale Brands
            <ArrowIcon className="w-5 h-5 font-bold" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);
export default TrustedBrandsSection;