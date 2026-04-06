import type { ReactNode } from "react";
import { Button, Input } from "antd";
import {
  ArrowIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/icons";
import Container from "../common/Container";

type FooterLink = {
  label: string;
  href: string;
};

const services: FooterLink[] = [
  { label: "Email Marketing Audit", href: "#" },
  { label: "Full Management", href: "#" },
  { label: "SMS Marketing", href: "#" },
  { label: "Funnel Strategy", href: "#" },
];

const company: FooterLink[] = [
  { label: "Case Studies", href: "#" },
  { label: "Process", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

type SocialButtonProps = {
  label: string;
  children: ReactNode;
};

const SocialButton = ({ label, children }: SocialButtonProps) => {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:text-white md:h-12 md:w-12 md:rounded-xl"
    >
      {children}
    </a>
  );
};

const FooterColumn = ({
  title,
  items,
}: {
  title: string;
  items: FooterLink[];
}) => {
  return (
    <div>
      <h3 className=" font-semibold leading-none text-white text-base">
        {title}
      </h3>

      <ul className="mt-5 space-y-3.5 md:mt-7 md:space-y-5">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-base font-normal leading-[1.4] text-[#B9B9B9] transition-colors duration-300 hover:text-white "
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white">
      <Container>
        <div className="pt-10 md:pt12 lg:pt-14">
          <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:gap-10 xl:gap-16">
            {/* Left brand section */}
            <div className="max-w-[340px]">
              <a
                href="/"
                className="text-3xl font-semibold tracking-wider text-gradient-blue hover:opacity-80 transition-opacity cursor-pointer"
              >
                BR FUNNELS
              </a>

              <p className="mt-5 max-w-[350px]  leading-[1.7] text-[#B9B9B9] md:mt-7 text-sm">
                Performance-driven email &amp; SMS growth systems.
              </p>

              <div className="mt-7 flex items-center gap-3.5 md:mt-8 md:gap-4">
                <SocialButton label="LinkedIn">
                  <LinkedInIcon className="h-5 w-5 md:h-6 md:w-6" />
                </SocialButton>

                <SocialButton label="Twitter">
                  <TwitterIcon className="h-5 w-5 md:h-6 md:w-6" />
                </SocialButton>

                <SocialButton label="Instagram">
                  <InstagramIcon className="h-5 w-5 md:h-6 md:w-6" />
                </SocialButton>
              </div>
            </div>

            {/* Services */}
            <FooterColumn title="Services" items={services} />

            {/* Company */}

            <FooterColumn title="Company" items={company} />

            {/* Newsletter */}
            <div className="max-w-[420px]">
              <h3 className=" font-medium leading-[1.3] text-white text-base">
                Get Weekly Growth Insights
              </h3>

              <p className="mt-5 max-w-[390px] leading-[1.7] text-[#B9B9B9] md:mt-7 text-base">
                Expert tips on email marketing and funnel optimization.
              </p>

              <form
                className="mt-6 sm:mt-7"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="footer-email" className="sr-only">
                  Your email
                </label>
                <div className="flex items-center gap-3">
                  <Input
                    id="footer-email"
                    type="email"
                    placeholder="Your email"
                    className="h-[44px]! flex-1! rounded-[10px]! border-white/10! bg-white/4! px-5! text-[16px]! text-white! placeholder:text-white/45! shadow-none! outline-none! hover:border-white/20! focus:border-white/25!"
                  />

                  <Button
                    htmlType="submit"
                    aria-label="Submit email"
                    className="group size-[44px] rounded-[10px]! border-none! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! p-0!  transition-all duration-300 hover:scale-[1.02] active:scale-[0.95]! "
                  >
                    <ArrowIcon className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-white/8 py-5 md:mt-12 md:py-6">
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-[#B9B9B9] text-sm">
                © {currentYear} BR Funnels. All rights reserved.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8 text-[#B9B9B9] text-sm">
                <a
                  href="#"
                  className="  transition-colors duration-300 hover:text-white "
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="  transition-colors duration-300 hover:text-white "
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
