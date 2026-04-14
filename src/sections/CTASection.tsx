import { Button } from "antd";
import { ClockIcon, VideoIcon, Tick, ArrowIcon } from "../assets/icons";
import { Person } from "../assets/images";
import BookingCalendar from "../components/BookingCalendar";
import { motion } from "framer-motion";
import { fadeInTop, viewportSettings } from "../utils/animationVariants";

const features = [
  "Quick overview of your brand and current email strategy",
  "Biggest challenges or pain points you're seeing with retention",
  "Quick wins or fixes you can implement right away",
  "Goals you have for email/SMS revenue growth",
];

const CTASection = () => (
  <section
    id="contact"
    className="w-full px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden"
  >
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="mx-auto w-full max-w-[1152px]"
    >
      {/* Scroll Animation: Header */}
      <motion.div variants={fadeInTop} className="space-y-4">
        <h2 className="text-white font-semibold tracking-tight sm:text-2xl lg:text-[32px] text-xl">
          Ready to Unlock <br />
          <span className="text-gradient-blue">
            Predictable Revenue Growth?
          </span>
        </h2>
        <p className="mt-2 text-sm text-[#B9B9B9] sm:text-base">
          Let's build a retention system that works 24/7.
        </p>
      </motion.div>

      {/* Scroll Animation: Content Wrapper */}
      <motion.div
        variants={fadeInTop}
        className="flex flex-col lg:flex-row gap-10 mt-10"
      >
        <div className="w-full lg:w-[830px] text-white">
          <div className="flex items-center gap-3 mb-10">
            <div className="size-[58px] rounded-full overflow-hidden">
              <img src={Person} alt="P" className="size-full object-cover" />
            </div>
            <div>
              <p className="text-sm text-[#B9B9B9]">BR Funnels</p>
              <h4 className="text-[18px] font-semibold">
                Growth Strategy Team
              </h4>
            </div>
          </div>
          <h1 className="text-[26px] font-medium mb-4">Strategy Call</h1>
          <div className="space-y-3 mb-4">
            {[
              { icon: ClockIcon, text: "30 minutes" },
              {
                icon: VideoIcon,
                text: "Web conferencing details provided upon confirmation.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[#B9B9B9]">
                <div className="flex size-9 items-center justify-center rounded-lg bg-white/5 border-[0.6px] border-white/10 shrink-0">
                  <img src={item.icon} alt="i" />
                </div>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="bg-white/4 border border-white/6 rounded-xl p-6 mb-4 text-[#D1D5DC]">
            <p className="text-[15px] mb-6">
              This is a 30-minute call to discuss how we can help scale your
              email and SMS marketing.
            </p>
            <ul className="space-y-4">
              {features.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img src={Tick} alt="v" />
                  <span className="text-sm text-[#B9B9B9]">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#B9B9B9]">
            {["No commitment required", "100% free consultation"].map(
              (t, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-[#B9B9B9]" />
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="w-full">
          <BookingCalendar />
        </div>
      </motion.div>

      {/* Scroll Animation: Bottom Button */}
      <motion.div
        variants={fadeInTop}
        className="flex justify-center sm:justify-end mt-10"
      >
        <Button
          htmlType="button"
          type="primary"
          className=" px-[32px]! py-[16px]! h-auto!  rounded-[14px]! border-none! gap-[7.734px]! min-h-0! bg-[linear-gradient(90deg,#793FEE_0%,#26FDFE_106.88%)]! active:scale-[0.95] text-[16px]! font-semibold!  text-white! text-center! hover:text-white! hover:bg-[linear-gradient(90deg,#793FEE_45%,#26FDFE_106.88%)]! flex items-center justify-center"
        >
          Schedule a Call
          <ArrowIcon className="h-5 w-5 shrink-0 ml-1 hidden md:block" />
        </Button>
      </motion.div>
    </motion.div>
  </section>
);

export default CTASection;
