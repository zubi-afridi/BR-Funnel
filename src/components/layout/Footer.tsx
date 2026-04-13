import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { ArrowIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../../assets/icons";
import Container from "../common/Container";

const services = ["Email Marketing Audit", "Full Management", "SMS Marketing", "Funnel Strategy"];
const company = ["Case Studies", "Process", "About", "Contact"];

const SocialBtn = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <a href="#" aria-label={label} className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-white/70 transition-all hover:border-white/20 hover:bg-white/8 hover:text-white md:size-12 md:rounded-xl">
    {children}
  </a>
);

const FooterCol = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="font-semibold text-white">{title}</h3>
    <ul className="mt-5 space-y-3.5 md:mt-7 md:space-y-5">
      {items.map(item => <li key={item}><a href="#" className="text-[#B9B9B9] transition-colors hover:text-white">{item}</a></li>)}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="text-white">
    <Container variant="nav">
      <div className="pt-10 md:pt-12 lg:pt-14">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:gap-10 xl:gap-16">
          <div className="max-w-[340px]">
            <Link to="/" className="text-3xl font-semibold text-gradient-blue hover:opacity-80 transition-opacity">BR FUNNELS</Link>
            <p className="mt-5 text-[#B9B9B9] text-sm leading-relaxed">Performance-driven email & SMS growth systems.</p>
            <div className="mt-7 flex items-center gap-3.5 md:mt-8 md:gap-4">
              <SocialBtn label="LinkedIn"><LinkedInIcon className="size-5 md:size-6" /></SocialBtn>
              <SocialBtn label="Twitter"><TwitterIcon className="size-5 md:size-6" /></SocialBtn>
              <SocialBtn label="Instagram"><InstagramIcon className="size-5 md:size-6" /></SocialBtn>
            </div>
          </div>
          <FooterCol title="Services" items={services} />
          <FooterCol title="Company" items={company} />
          <div className="max-w-[420px]">
            <h3 className="font-medium text-white">Get Weekly Growth Insights</h3>
            <p className="mt-5 text-[#B9B9B9] leading-relaxed">Expert tips on email marketing and funnel optimization.</p>
            <form className="mt-6 sm:mt-7" onSubmit={e => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">Your email</label>
              <div className="flex items-center gap-3">
                <Input id="footer-email" type="email" placeholder="Your email" className="h-[44px]! flex-1! rounded-[10px]! border-white/10! bg-white/4! px-5! text-[16px]! text-white! placeholder:text-white/45! shadow-none! outline-none! hover:border-white/20! focus:border-white/25!" />
                <Button htmlType="submit" aria-label="Submit" className="group size-[44px] rounded-[10px]! border-none! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! p-0! transition-all hover:scale-[1.02] active:scale-[0.95]!">
                  <ArrowIcon className="size-5 text-white transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-white/8 py-5 md:mt-12 md:py-6">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[#B9B9B9] text-sm">© {new Date().getFullYear()} BR Funnels. All rights reserved.</p>
            <div className="flex gap-8 text-[#B9B9B9] text-sm justify-center sm:justify-start">
              <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
