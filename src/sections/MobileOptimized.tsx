import { PurchasingIcon, TickIcon } from "../assets/icons";
import { MobileOptimized as MobileOptimizedImage } from "../assets/images";
import { motion } from "framer-motion";
import {
  fadeInTop,
  staggerContainer,
  viewportSettings,
} from "../utils/animationVariants";

const features = [
  {
    title: "Responsive Design by Default",
    description:
      "Every email template is tested across 40+ devices and major email clients.",
  },
  {
    title: "Tap-Optimized CTAs",
    description:
      "Large buttons, clear spacing, and strategic placement help maximize conversions.",
  },
  {
    title: "Lightning-Fast Load Times",
    description:
      "Optimized images and clean code ensure instant rendering on any connection.",
  },
];

const MobileOptimized = () => (
  <section className="relative z-10 w-full overflow-hidden px-4 sm:px-6 lg:px-8">
    <div className="pointer-events-none absolute right-[-10%] top-0 size-[360px] rounded-full bg-[radial-gradient(circle,rgba(115,76,255,0.16)_0%,rgba(115,76,255,0.05)_38%,transparent_74%)] blur-2xl" />
    <div className="relative mx-auto w-full max-w-[1152px]">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,430px)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="mx-auto flex w-full max-w-[420px] flex-col justify-center lg:mx-0 lg:min-h-[560px]"
        >
          <motion.div
            variants={fadeInTop}
            className="mb-7 flex size-[70px] md:size-[90px] lg:size-[113px] rounded-xl md:rounded-2xl lg:rounded-4xl items-center justify-center bg-linear-to-b from-[#4D79FF] to-[#8B4DFF] shadow-[0_18px_42px_rgba(92,100,255,0.38)]"
          >
            <PurchasingIcon className="size-[50px] md:size-[70px] lg:size-[80px]" />
          </motion.div>
          <motion.div variants={fadeInTop} className="space-y-4">
            <h2 className="text-white font-semibold tracking-tight sm:text-2xl lg:text-[32px] text-xl">
              Optimized for <br />
              <span className="text-gradient-blue">Mobile-First Buyers</span>
            </h2>
            <p className="mt-2 text-sm text-[#B9B9B9] sm:text-base">
              Over 70% of emails are opened on mobile. We design for
              thumb-friendly engagement.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} className="mt-8 space-y-5">
            {features.map(({ title, description }) => (
              <motion.div
                key={title}
                variants={fadeInTop}
                className="flex items-start gap-4"
              >
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#172554] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <TickIcon className="size-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-medium leading-6 text-white sm:text-[18px]">
                    {title}
                  </h3>
                  <p className="mt-1 text-base leading-6 text-white/55">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInTop}
          className="relative mx-auto flex w-full max-w-[760px] items-center justify-center lg:justify-end"
        >
          <img
            src={MobileOptimizedImage}
            alt="Mobile-first email designs"
            className="relative z-10 mx-auto h-auto w-full max-w-[620px] object-contain lg:max-w-[700px]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default MobileOptimized;
