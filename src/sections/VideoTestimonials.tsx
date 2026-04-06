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

const VideoTestimonials = () => {
  return (
    <section className="relative z-10 w-full overflow-hidden px-4 pt-16 pb-12 sm:px-6 lg:px-8">
      {/* Gradient blur circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute size-[438px] rounded-full bg-[linear-gradient(90deg, rgba(37, 99, 235, 0.10) 0%, rgba(124, 58, 237, 0.10) 100%)] opacity-30 blur-[137.5px]"
          style={{ left: "-10px", top: "10px" }}
        />
        <div
          className="absolute h-[435px] w-[485px] rounded-full bg-[linear-gradient(180deg,#793FEE_0%,#26FDFE_100%)] opacity-30 blur-[137.5px]"
          style={{ right: "-180px", top: "10px" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1152px]">
        <div className="mb-16 text-center">
          <h2 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl lg:text-[32px]">
            Trusted by Fast-Growing Brands
          </h2>
          <p className="mx-auto mt-2 text-sm text-[#B9B9B9] sm:text-base">
            Hear directly from the founders and marketers we've helped scale
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {videos.map((item, index) => (
            <div key={index} className="w-full">
              <div className="overflow-hidden rounded-[24px]">
                <div className="relative aspect-video w-full">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="pt-5">
                <h3 className="font-[Poppins] text-[17.555px] leading-[26.332px] font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-1 font-[Poppins] text-[14px] leading-[22.4px] font-normal text-[#B9B9B9]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
