import React from "react";
import Container from "../components/common/Container";
import { IntegrationIcon, ShopifyIcon, KlaviyoIcon, MailchimpIcon, HubspotIcon, CampaignIcon, ZapierIcon } from "../assets";
import { motion } from "framer-motion";
import { fadeInTop, staggerContainer, viewportSettings } from "../utils/animationVariants";

const integrationsData = [
  { name: "Shopify", category: "E-Commerce", icon: <ShopifyIcon /> },
  { name: "Klaviyo", category: "Email Platform", icon: <KlaviyoIcon /> },
  { name: "Mailchimp", category: "Email Platform", icon: <MailchimpIcon /> },
  { name: "HubSpot", category: "CRM", icon: <HubspotIcon /> },
  { name: "Active Campaign", category: "Automation", icon: <CampaignIcon /> },
  { name: "Zapier", category: "Integration", icon: <ZapierIcon /> },
];
const statsData = [
  { value: "50+", label: "Platform Integrations" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Sync & Monitoring" },
];
const Integrations: React.FC = () => {
  return (
    <section className="relative z-0 overflow-hidden">
      <Container variant="section">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="rounded-3xl mx-auto sm:rounded-[39px] max-w-6xl border-[0.5px] border-white/7 bg-[linear-gradient(180deg,#111827_0%,#0F172A_100%)] p-4 sm:p-6 md:p-10 lg:p-14.5 transition-all"
        >
          {/* Scroll Animation: Section Header */}
          <motion.div variants={fadeInTop} className="flex justify-center mb-9">
            <div className="relative flex items-center gap-2 px-4 py-2 rounded-[10px]">
              <div className="absolute inset-0 rounded-[10px] p-[1.5px] bg-linear-to-b from-[#793FEE] via-[#793FEE] to-[#26FDFE] border-mask" />
              <IntegrationIcon className="size-4" />
              <span className="bg-clip-text text-transparent bg-linear-to-b from-[#793FEE] via-[#793FEE] to-[#26FDFE] font-medium">
                Seamless Integration
              </span>
            </div>
          </motion.div>
          <motion.div variants={fadeInTop} className="text-center mb-5 md:mb-9">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-tight">Works With Your Existing Stack</h2>
            <p className="text-[#B9B9B9] text-sm md:text-base font-normal">Pre-built integrations with the tools you already use!</p>
          </motion.div>

          {/* Scroll Animation: Grid Logos */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16"
          >
            {integrationsData.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInTop}
                className="flex items-center gap-2 md:gap-5 duration-300 hover:bg-[#1a1f33] hover:border-white/8 hover:shadow-lg hover:shadow-black/20 group cursor-default rounded-2xl border border-white/10 bg-white/5 p-2 md:p-4 transition-transform hover:scale-[1.02]"
              >
                <div className="relative flex items-center justify-center size-[60px] md:size-[70px] rounded-[16px] bg-linear-to-br from-blue-600/20 via-blue-600/20 to-purple-600/20 shrink-0 overflow-hidden transform transition-transform duration-300 group-hover:scale-105 border border-white/5">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white text-[14px] md:text-[18px] font-semibold mb-0.5 md:mb-1.5 leading-[100%]">{item.name}</h3>
                  <div className="inline-flex items-center px-1 py-0.5 md:px-2.5 md:py-1 bg-white/5 border-[0.88px] border-white/10 rounded-[5px] text-[10px] md:text-[12px] text-[#99A1AF]">{item.category}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Animation: Bottom Stats */}
          <motion.div variants={fadeInTop} className="pt-12 border-t border-white/10">
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6"
            >
              {statsData.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInTop}
                  className="flex flex-col items-center justify-center text-center group"
                >
                  <h3 className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-1 text-gradient-blue">{stat.value}</h3>
                  <p className="text-[#B9B9B9] text-[14px] font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
export default Integrations;