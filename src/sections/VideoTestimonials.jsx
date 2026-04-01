import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';

const VideoTestimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#121624] to-[#0b0f1a]" id="testimonials">
      <Container>
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Watch how we help our partners transform their businesses."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-[#793fee]/50 transition-all cursor-pointer group relative overflow-hidden">
               <div className="w-16 h-16 bg-[#793fee]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
               </div>
               <p className="absolute bottom-4 left-4 font-bold text-sm text-gray-300">Client Reveal {i+1}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VideoTestimonials;
