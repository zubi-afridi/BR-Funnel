import React from "react";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/icons";
import Container from "../common/Container";
import { motion } from "framer-motion";
import {
  fadeInTop,
  staggerContainer,
  viewportSettings,
} from "../../utils/animationVariants";

const services = [
  "Email Marketing Audit",
  "Full Management",
  "SMS Marketing",
  "Funnel Strategy",
];

const Footer = () => {
  const navigate = useNavigate();

  const handlePlaceholderClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const scrollToSection = (e: React.MouseEvent, id: string, path: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      let targetY = rect.top + scrollTop - 100;

      if (id === "process") {
        targetY = rect.top + scrollTop - 120;
      }

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
      navigate(path, { replace: true });
    }
  };

  const handleCompanyLink = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    if (item === "Case Studies")
      scrollToSection(e, "case-studies", "/case-studies");
    else if (item === "Process") scrollToSection(e, "process", "/our-process");
    else if (item === "About") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/", { replace: true });
    } else if (item === "Contact") scrollToSection(e, "contact", "/contact");
  };

  return (
    <footer className="text-white">
      <Container variant="nav">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="pt-10 md:pt-12 lg:pt-14"
        >
          <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:gap-10 xl:gap-16">
            <motion.div variants={fadeInTop} className="max-w-[340px]">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("/");
                }}
                className="text-3xl font-semibold text-gradient-blue hover:opacity-80 transition-opacity"
              >
                BR FUNNELS
              </Link>
              <p className="mt-5 text-[#B9B9B9] text-sm leading-relaxed">
                Performance-driven email & SMS growth systems.
              </p>
              <div className="mt-7 flex items-center gap-3.5 md:mt-8 md:gap-4">
                <a
                  href="https://www.linkedin.com/company/br-funnels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-white/70 transition-all hover:border-white/20 hover:bg-white/8 hover:text-white md:size-12 md:rounded-xl"
                >
                  <LinkedInIcon className="size-5 md:size-6" />
                </a>
                <a
                  href="#"
                  onClick={handlePlaceholderClick}
                  className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-white/70 transition-all hover:border-white/20 hover:bg-white/8 hover:text-white md:size-12 md:rounded-xl"
                >
                  <TwitterIcon className="size-5 md:size-6" />
                </a>
                <a
                  href="https://www.instagram.com/brfunnels1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-white/70 transition-all hover:border-white/20 hover:bg-white/8 hover:text-white md:size-12 md:rounded-xl"
                >
                  <InstagramIcon className="size-5 md:size-6" />
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeInTop}>
              <h3 className="font-semibold text-white">Services</h3>
              <ul className="mt-5 space-y-3.5 md:mt-7 md:space-y-5">
                {services.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={handlePlaceholderClick}
                      className="text-[#B9B9B9] transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInTop}>
              <h3 className="font-semibold text-white">Company</h3>
              <ul className="mt-5 space-y-3.5 md:mt-7 md:space-y-5">
                {["Case Studies", "Process", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={(e) => handleCompanyLink(e, item)}
                      className="text-[#B9B9B9] transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInTop} className="max-w-[420px]">
              <h3 className="font-medium text-white">
                Get Weekly Growth Insights
              </h3>
              <p className="mt-5 text-[#B9B9B9] leading-relaxed">
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
                    aria-label="Submit"
                    className="group size-[44px] rounded-[10px]! border-none! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! p-0! transition-all hover:scale-[1.02] active:scale-[0.95]!"
                  >
                    <ArrowIcon className="size-5 text-white transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
          <motion.div
            variants={fadeInTop}
            className="mt-10 border-t border-white/8 py-5 md:mt-12 md:py-6"
          >
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-[#B9B9B9] text-sm">
                © {new Date().getFullYear()} BR Funnels. All rights reserved.
              </p>
              <div className="flex gap-8 text-[#B9B9B9] text-sm justify-center sm:justify-start">
                <a
                  href="#"
                  onClick={handlePlaceholderClick}
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  onClick={handlePlaceholderClick}
                  className="transition-colors hover:text-white"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
