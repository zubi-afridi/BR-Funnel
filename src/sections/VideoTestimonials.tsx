import { motion } from "framer-motion";
import {
  fadeInTop,
  staggerContainer,
  viewportSettings,
} from "../utils/animationVariants";

const videos = [
  {
    name: "Sarah Johnson",
    role: "VP of Marketing at TechFlow Inc.",
    videoId: "4Pj_oHLjNUU",
  },
  {
    name: "Michael Chen",
    role: "Founder & CEO at GrowthLabs",
    videoId: "twd-acL2v1w",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Growth at Elevate Commerce",
    videoId: "XoKHw5_GSoM",
  },
];

const VideoTestimonials = () => (
  <section
    id="clients"
    className="relative z-10 w-full overflow-hidden px-4 sm:px-6 lg:px-8"
  >
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute size-[438px] rounded-full bg-[linear-gradient(90deg,rgba(37,99,235,0.1)_0%,rgba(124,58,237,0.1)_100%)] opacity-30 blur-[137.5px] -left-[10px] top-[10px]" />
      <div className="absolute h-[435px] w-[485px] rounded-full bg-[linear-gradient(180deg,#793FEE_0%,#26FDFE_100%)] opacity-30 blur-[137.5px] -right-[180px] top-[10px]" />
    </div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="relative z-10 mx-auto w-full max-w-[1152px]"
    >
      <motion.div variants={fadeInTop} className="mb-16 text-center">
        <h2 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl lg:text-[32px]">
          Trusted by Fast-Growing Brands
        </h2>
        <p className="mx-auto mt-2 text-sm text-[#B9B9B9] sm:text-base">
          Hear directly from the founders and marketers we've helped scale
        </p>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {videos.map(({ name, role, videoId }, i) => (
          <motion.div key={i} variants={fadeInTop} className="w-full">
            <div className="overflow-hidden rounded-[24px]">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div className="pt-5">
              <h3 className="text-[17.5px] leading-relaxed font-semibold text-white">
                {name}
              </h3>
              <p className="mt-1 text-[14px] leading-relaxed text-[#B9B9B9]">
                {role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default VideoTestimonials;
