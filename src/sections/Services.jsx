import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';

const Services = () => {
  const serviceList = [
    { title: 'Funnel Design', desc: 'Custom conversion architecture tailored to your unique offer.' },
    { title: 'Growth Ads', desc: 'Direct response copywriting and multi-channel media buying.' },
    { title: 'CRO Audit', desc: 'Data-driven analysis to identify leaks in your existing sales process.' },
  ];

  return (
    <section className="py-24 bg-[#0b0f1a]" id="services">
      <Container>
        <SectionHeading 
          title="Conversion-First Services" 
          subtitle="Everything you need to turn visitors into lifelong customers."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {serviceList.map((service, i) => (
            <Card key={i} title={service.title} className="hover:border-[#793fee]/50 transition-colors group">
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
