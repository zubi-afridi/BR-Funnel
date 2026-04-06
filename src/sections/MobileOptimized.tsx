import { PurchasingIcon, TickIcon } from "../assets/icons";
import { MobileOptimized as MobileOptimizedImage } from "../assets/images";

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

const MobileOptimized = () => {
  return (
    <section className="relative z-10 w-full overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pb-20">
      {/* <div className="pointer-events-none absolute left-[-12%] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(83,131,255,0.14)_0%,rgba(83,131,255,0.06)_35%,transparent_72%)] blur-2xl" /> */}
      <div className="pointer-events-none absolute right-[-10%] top-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(115,76,255,0.16)_0%,rgba(115,76,255,0.05)_38%,transparent_74%)] blur-2xl" />

      <div className="relative mx-auto w-full max-w-[1152px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,430px)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          <div className="mx-auto flex w-full max-w-[420px] flex-col justify-center lg:mx-0 lg:min-h-[560px]">
            <div className="mb-7 flex size-[113px] items-center justify-center rounded-4xl bg-[linear-gradient(180deg,#4D79FF_0%,#8B4DFF_100%)] shadow-[0_18px_42px_rgba(92,100,255,0.38)]">
              <PurchasingIcon />
            </div>

            <div className="space-y-4">
              <h2
                className="text-white font-semibold tracking-[-0.02em]
                sm:text-2xl lg:text-[32px] text-xl"
              >
                Optimized for
                <span className="text-gradient-blue">Mobile-First Buyers</span>
              </h2>

              <p className="max-w-[370px] text-[18px] leading-7 text-[#B9B9B9] sm:text-base">
                Over 70% of emails are opened on mobile. We design for
                thumb-friendly engagement.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {features.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#172554] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <img
                      src={TickIcon}
                      alt=""
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-medium leading-6 text-white sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-base leading-6 text-white/55 ">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[760px] items-center justify-center lg:justify-end">
            <img
              src={MobileOptimizedImage}
              alt="Mobile-first email designs"
              className="relative z-10 mx-auto h-auto w-full max-w-[620px] object-contain lg:max-w-[700px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileOptimized;
