import React from 'react';
import Container from '../components/common/Container';

const Guarantee = () => {
  return (
    <section className="py-24 bg-[#0b0f1a] text-center border-y border-white/5">
      <Container>
        <div className="max-w-3xl mx-auto border-2 border-dashed border-[#793fee]/30 p-12 rounded-3xl bg-gradient-to-br from-[#793fee]/5 to-transparent">
          <h2 className="text-4xl font-extrabold mb-6">Our Ironclad Guarantee</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            If we don't beat your current funnel's performance within 30 days, we'll keep working for free until we do. **No questions asked.**
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Guarantee;
