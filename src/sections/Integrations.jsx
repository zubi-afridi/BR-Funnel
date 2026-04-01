import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';

const Integrations = () => {
  return (
    <section className="py-24 bg-[#0b0f1a]">
      <Container>
        <SectionHeading 
          title="Connect Your Entire Stack" 
          subtitle="Seamlessly integrate with your CRM, Email Marketing, and Analytics tools."
        />
        <div className="flex flex-wrap justify-center items-center gap-12 mt-12 bg-white/5 p-12 rounded-3xl border border-white/5">
           {['Stripe', 'Hubspot', 'Mailchimp', 'Zapier', 'Analytics', 'Meta'].map((tool, i) => (
             <div key={i} className="text-xl font-bold opacity-30 hover:opacity-100 transition-opacity cursor-default uppercase">
               {tool}
             </div>
           ))}
        </div>
      </Container>
    </section>
  );
};

export default Integrations;
