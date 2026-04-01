import React from 'react';
import Container from '../components/common/Container';

const MobileOptimized = () => {
  return (
    <section className="py-24 bg-[#0b0f1a] relative overflow-hidden">
      <Container className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Mobile-First <br/><span className="bg-gradient-to-r from-[#26fdfe] to-[#793fee] bg-clip-text text-transparent">Optimization</span></h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            In today's world, 80% of Sales happen on mobile. We ensure your funnel is blazing fast and flawlessly designed for every device size.
          </p>
          <ul className="space-y-4">
             <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#26fdfe] rounded-full"></span> 0.5s Load Times</li>
             <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#26fdfe] rounded-full"></span> Thumb-Optimized UI</li>
             <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#26fdfe] rounded-full"></span> Native Mobile Payments</li>
          </ul>
        </div>
        <div className="flex-1 w-full max-w-sm">
           <div className="aspect-[9/19] bg-white/5 rounded-[3rem] border-[8px] border-white/10 p-4 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-[#121624] to-[#0b0f1a] rounded-[2.5rem]"></div>
           </div>
        </div>
      </Container>
    </section>
  );
};

export default MobileOptimized;
