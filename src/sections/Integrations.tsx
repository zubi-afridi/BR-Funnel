import React from "react";
import Container from "../components/common/Container";
import {
  IntegrationIcon,
  ShopifyIcon,
  KlaviyoIcon,
  MailchimpIcon,
  HubspotIcon,
  CampaignIcon,
  ZapierIcon
} from "../assets";



// --- Data ---

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

// --- Main Component ---

const Integrations: React.FC = () => {
  return (
    <section className="relative z-0 py-24 overflow-hidden">
      <Container variant="section">
        {/* Main Card Container */}
        <div className="rounded-3xl mx-auto sm:rounded-[39px] max-w-6xl border-[0.5px] border-[rgba(185,185,185,0.50)] bg-[linear-gradient(180deg,#111827_0%,#0F172A_100%)] p-4 sm:p-6 md:p-10 lg:p-14.5 transition-all ">

          {/* Top Badge */}
          <div className="flex justify-center mb-9">
            <div className="relative flex items-center gap-2 px-4 py-2 rounded-[10px]">
              {/* Gradient Border with Mask for True Transparency */}
              <div className="absolute inset-0 rounded-[10px] p-[1.5px] bg-[linear-gradient(179deg,#793FEE_-16.48%,#26FDFE_99.4%)] border-mask" />

              <IntegrationIcon className="size-4" />
              <span className="bg-clip-text text-transparent bg-[linear-gradient(179deg,#793FEE_-16.48%,#26FDFE_99.4%)] font-medium">
                Seamless Integration
              </span>
            </div>
          </div>

          {/* Heading & Subtext */}
          <div className="text-center mb-5 md:mb-9">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white  tracking-tight leading-tight">
              Works With Your Existing Stack
            </h2>
            <p className="text-[#B9B9B9] text-sm md:text-base  font-normal ">
              Pre-built integrations with the tools you already use!
            </p>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16">
            {integrationsData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 md:gap-5  bg-[linear-gradient(135deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_100%)]    duration-300 hover:bg-[#1a1f33] hover:border-white/8 hover:shadow-lg hover:shadow-black/20 group cursor-default rounded-2xl border border-white/10 bg-white/5 p-2 md:p-4 transition-transform hover:scale-[1.02] active:scale-95"
              >
                {/* Icon Container */}
                <div className="relative flex items-center justify-center size-[60px] md:size-[70px] rounded-[16px] bg-[linear-gradient(135deg,rgba(37,99,235,0.20)_0%,rgba(124,58,237,0.20)_100%)] shrink-0 overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {item.icon}
                </div>

                {/* Text Info */}
                <div>
                  <h3 className="text-white  text-[14px] md:text-[18px] font-semibold mb-0.5 md:mb-1.5 leading-[100%]">
                    {item.name}
                  </h3>
                  <div className="inline-flex items-center px-1 py-0.5 md:px-2.5 md:py-1 bg-white/5 border-[0.88px] border-white/10 rounded-[5px] text-[10px] md:text-[12px]  text-[#99A1AF]">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats & Divider */}
          <div className="pt-12 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center group"
                >
                  <h3 className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-1 text-gradient-blue">
                    {stat.value}
                  </h3>
                  <p className="text-[#B9B9B9] text-[14px] font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Integrations;