import React from 'react';
import Container from '../components/common/Container';

const BrandLogos = () => {
  return (
    <section className="py-12 bg-[#0b0f1a] border-y border-white/5">
      <Container>
        <p className="text-center text-gray-500 uppercase tracking-widest text-sm mb-10">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
           {/* Placeholder for actual logos */}
           <div className="font-bold text-2xl">VOLVO</div>
           <div className="font-bold text-2xl">SPOTIFY</div>
           <div className="font-bold text-2xl">ADIDAS</div>
           <div className="font-bold text-2xl">NETFLIX</div>
        </div>
      </Container>
    </section>
  );
};

export default BrandLogos;
