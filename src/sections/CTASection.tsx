import { Button } from "antd";
import { ClockIcon, VideoIcon, Tick, ArrowIcon } from "../assets/icons";
import { Person } from "../assets/images";
import BookingCalendar from "../components/BookingCalendar";

const CTASection = () => {
  const features = [
    "Quick overview of your brand and current email strategy",
    "Biggest challenges or pain points you're seeing with retention",
    "Quick wins or fixes you can implement right away",
    "Goals you have for email/SMS revenue growth"
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-[1152px]">
        <div className="space-y-4">
          <h2
            className="text-white font-semibold tracking-[-0.02em]
                sm:text-2xl lg:text-[32px] text-xl"
          >
            Ready to Unlock <br />
            <span className="text-gradient-blue">
              Predictable Revenue Growth?{" "}
            </span>
          </h2>

          <p className="mt-2 text-sm text-[#B9B9B9] sm:text-base">
            Let's build a retention system that works 24/7.
          </p>
        </div>

        {/* Main Flex Container - Stacks on mobile, Side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-10 mt-10">

          {/* LEFT SIDE: Strategy Call UI */}
          <div className="w-full lg:w-[830px] text-white">

            {/* Header: Avatar & Team Name */}
            <div className="flex items-center gap-3 mb-10">
              <div className="size-[58px] rounded-full overflow-hidden ">
                <img src={Person} alt="Profile" className="w-full h-full object-cover" />
                <div className="w-full h-full " /> {/* Placeholder */}
              </div>
              <div>
                <p className="text-sm text-[#B9B9B9] font-normal">BR Funnels</p>
                <h4 className="text-[18px] font-semibold">Growth Strategy Team</h4>
              </div>
            </div>

            <h1 className="text-[26px] font-medium mb-4">Strategy Call</h1>

            {/* Meta: Time & Location */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-[#B9B9B9]">
                <div className="flex items-center justify-center p-2 rounded-lg bg-white/5 border-[0.6px] border-white/10 shrink-0">
                  <img
                    src={ClockIcon}
                    className=""
                    alt="clock"
                  />
                </div>

                <span className="text-sm">30 minutes</span>
              </div>
              <div className="flex items-center gap-3 text-[#B9B9B9]">
                <div className="flex items-center justify-center p-2 rounded-lg bg-white/5 border-[0.6px] border-white/10 shrink-0">
                  <img
                    src={VideoIcon}
                    className=""
                    alt="video"
                  />
                </div>
                <span className="text-sm ">
                  Web conferencing details provided upon confirmation.
                </span>
              </div>
            </div>

            {/* Inner Feature Box */}
            <div className="bg-white/4 border border-white/6 rounded-xl p-6 mb-4 text-[#D1D5DC]">
              <p className=" text-[15px] mb-6">
                This is a 30-minute call to discuss how we can help scale your email and SMS marketing.
              </p>

              <ul className="space-y-4">
                {features.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <img src={Tick} alt="check" />
                    <span className="text-sm text-[#B9B9B9]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Labels */}
            <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#B9B9B9]">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#B9B9B9]" />
                No commitment required
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#B9B9B9]" />
                100% free consultation
              </span>
            </div>

          </div>

          {/* RIGHT SIDE: Booking Calendar */}
          <div className="w-full">
            <BookingCalendar />
          </div>

        </div>

        <div className="flex justify-center sm:justify-end  mt-10">
          <Button
            htmlType="button"
            type="primary"
            className=" px-[32px]! py-[16px]! h-auto!  rounded-[14px]! border-none! gap-[7.734px]! min-h-0! bg-[linear-gradient(90deg,#793FEE_0%,#26FDFE_106.88%)]! active:scale-[0.95] text-[16px]! font-semibold!  text-white! text-center! hover:text-white! hover:bg-[linear-gradient(90deg,#793FEE_45%,#26FDFE_106.88%)]! flex items-center justify-center"
          >

            Schedule a Call
            <ArrowIcon className="h-5 w-5 shrink-0 ml-1 hidden md:block" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

