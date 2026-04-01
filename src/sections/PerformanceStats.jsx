import React from 'react';
import Container from '../components/common/Container';

const PerformanceStats = () => {
  const stats = [
    { value: '$50M+', label: 'Revenue Generated' },
    { value: '450%', label: 'Avg. ROI Increase' },
    { value: '120k', label: 'Leads Captured' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0b0f1a] to-[#121624]">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-8">
              <h3 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-[#793fee] to-[#26fdfe] bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PerformanceStats;
