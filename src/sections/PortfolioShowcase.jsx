import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';

const PortfolioShowcase = () => {
  return (
    <section className="py-24 bg-[#0b0f1a]" id="portfolio">
      <Container>
        <SectionHeading 
          title="Selected Projects" 
          subtitle="A showcase of high-performance funnels built for premium brands."
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group cursor-pointer">
            <div className="aspect-[16/10] bg-white/5 rounded-2xl mb-6 overflow-hidden border border-white/10">
               <div className="w-full h-full bg-gradient-to-br from-[#793fee]/20 to-transparent group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Luxe Real Estate Funnel</h3>
            <p className="text-gray-400">High-ticket lead generation system for boutique brokers.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-[16/10] bg-white/5 rounded-2xl mb-6 overflow-hidden border border-white/10">
               <div className="w-full h-full bg-gradient-to-br from-[#26fdfe]/20 to-transparent group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">SaaS Retention Engine</h3>
            <p className="text-gray-400">Customer lifecycle automation and scaling strategy.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioShowcase;
