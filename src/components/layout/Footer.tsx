import type { ReactNode, SVGProps } from "react";

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
      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
    >
      {children}
    </a>
  );
};

const IconBase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  />
);

const LinkedInIcon = () => (
  <IconBase className="h-6 w-6">
    <rect x="4" y="9" width="4" height="11" rx="1" />
    <circle cx="6" cy="5" r="1.5" />
    <path d="M12 20v-6.2c0-1.9 1.2-3.3 3-3.3s3 1.4 3 3.3V20" />
    <path d="M12 14V9.5H20V20" />
  </IconBase>
);

const TwitterIcon = () => (
  <IconBase className="h-6 w-6">
    <path d="M22 5.8c-.7.3-1.5.5-2.3.7.8-.5 1.5-1.2 1.8-2.1-.8.5-1.7.9-2.6 1.1A4 4 0 0 0 12 9.2c0 .3 0 .6.1.9A11.4 11.4 0 0 1 4 6a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.8 3.8 2.8A8.1 8.1 0 0 1 3 19.3a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.5 1.5-1.2 2-1.9Z" />
  </IconBase>
);

const InstagramIcon = () => (
  <IconBase className="h-6 w-6">
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </IconBase>
);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5"
  >
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FooterColumn = ({
  title,
  items,
}: {
  title: string;
  items: FooterLink[];
}) => {
  return (
    <div>
      <h3 className="text-[22px] font-semibold leading-none text-white">
        {title}
      </h3>

      <ul className="mt-7 space-y-5">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-[18px] font-normal leading-[1.4] text-white/70 transition-colors duration-300 hover:text-white"
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
    <footer className="bg-[#030816] text-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="py-12 md:py-14 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_1.15fr] xl:gap-16">
            {/* Left brand section */}
            <div className="max-w-[340px]">
              <a
                href="/"
                className="inline-block bg-gradient-to-r from-[#4F8CFF] to-[#29D5FF] bg-clip-text text-[32px] font-semibold uppercase tracking-wide text-transparent"
              >
                BR Funnels
              </a>

              <p className="mt-7 max-w-[320px] text-[18px] leading-[1.7] text-white/70">
                Performance-driven email &amp; SMS growth systems.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <SocialButton label="LinkedIn">
                  <LinkedInIcon />
                </SocialButton>

                <SocialButton label="Twitter">
                  <TwitterIcon />
                </SocialButton>

                <SocialButton label="Instagram">
                  <InstagramIcon />
                </SocialButton>
              </div>
            </div>

            {/* Services */}
            <FooterColumn title="Services" items={services} />

            {/* Company */}
            <FooterColumn title="Company" items={company} />

            {/* Newsletter */}
            <div className="max-w-[420px]">
              <h3 className="text-[22px] font-semibold leading-[1.3] text-white">
                Get Weekly Growth Insights
              </h3>

              <p className="mt-7 max-w-[390px] text-[18px] leading-[1.7] text-white/70">
                Expert tips on email marketing and funnel optimization.
              </p>

              <form
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-stretch"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="footer-email" className="sr-only">
                  Your email
                </label>

                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email"
                  className="h-[60px] w-full flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-[18px] text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-[#4F8CFF]/60 focus:bg-white/[0.06] sm:rounded-r-none"
                />

                <button
                  type="submit"
                  aria-label="Submit email"
                  className="group flex h-[60px] w-full items-center justify-center rounded-2xl bg-gradient-to-b from-[#793FEE] to-[#26FDFE] transition-transform duration-300 hover:scale-[1.02] sm:w-[62px] sm:rounded-l-none"
                >
                  <ArrowRightIcon />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-white/8 pt-6">
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-[16px] text-white/60">
                © {currentYear} BR Funnels. All rights reserved.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
                <a
                  href="#"
                  className="text-[16px] text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-[16px] text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;