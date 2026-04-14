import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";
import { PhoneIcon } from "../../assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  const menuItems = [
    { label: "Services", href: "#services", path: "/services" },
    { label: "Case Studies", href: "#case-studies", path: "/case-studies" },
    { label: "Our Clients", href: "#clients", path: "/our-clients" },
    { label: "Our Process", href: "#process", path: "/our-process" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
        if (window.location.pathname !== "/") {
          window.history.replaceState(null, "", "/");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };

    const visibleSections = new Set<string>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let changed = false;
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          visibleSections.add(id);
          changed = true;
        } else {
          if (visibleSections.has(id)) {
            visibleSections.delete(id);
            changed = true;
          }
        }
      });

      if (changed) {
        const order = ["services", "case-studies", "clients", "process", "contact"];
        let topActive = "";
        for (const id of order) {
          if (visibleSections.has(id)) {
            topActive = id;
            break;
          }
        }

        if (topActive) {
          if (topActive === "contact") {
            setActiveSection("");
            if (window.location.pathname !== "/contact") {
              window.history.replaceState(null, "", "/contact");
            }
          } else {
            setActiveSection(topActive);
            const item = menuItems.find(m => m.href === `#${topActive}`);
            if (item && window.location.pathname !== item.path) {
              window.history.replaceState(null, "", item.path);
            }
          }
        } else {
          setActiveSection("");
          if (window.location.pathname !== "/") {
            window.history.replaceState(null, "", "/");
          }
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["services", "case-studies", "clients", "process", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string; path: string }) => {
    e.preventDefault();
    const id = item.href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let targetY = rect.top + scrollTop - 100;

      if (id === "process") {
        targetY = rect.top + scrollTop - 120;
      }

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
      navigate(item.path, { replace: true });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <Container variant="nav" className="flex justify-between items-center h-16 md:h-18 lg:h-20">
        <div className="shrink-0">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-3xl font-semibold text-gradient-blue hover:opacity-80 transition-opacity">
            BR FUNNELS
          </Link>
        </div>

        <nav className="hidden md:flex items-center">
          <ul className="flex items-center md:space-x-4 lg:space-x-10 list-none m-0 p-0">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item)}
                    className={`text-sm lg:text-lg font-medium transition-all duration-200 relative group ${
                      isActive ? "text-white!" : "text-[#E4E4E4]! hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute rounded -bottom-1 left-0 h-0.5 bg-linear-to-r from-[#793FEE] to-[#26FDFE] transition-all duration-300 group-hover:w-full ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button
            onClick={(e) => scrollToSection(e as any, { href: "#contact", path: "/contact" })}
            className="flex items-center gap-2 group md:px-[16px]! md:py-[8px]! lg:px-[30px]! lg:py-[13px]! rounded-md xl:rounded-[10px]! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! min-h-0! border-none!"
          >
            <PhoneIcon className="text-md lg:text-lg group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide text-sm lg:text-base">Book a Call</span>
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            <MenuOutlined className="text-xl" />
          </button>
        </div>
      </Container>
      <Drawer
        title={<span className="text-[28px] font-semibold text-gradient-blue px-2">BR FUNNELS</span>}
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size="large"
        closeIcon={
          <div className="flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/10 text-white shrink-0">
            <CloseOutlined className="text-lg hover:rotate-90 transition-transform" />
          </div>
        }
        classNames={{
          mask: "backdrop-blur-[4px]",
          header: "bg-[#050b17]! border-b! border-[#B9B9B9]! p-6!",
          body: "bg-[#050b17]! py-5! px-0!",
        }}
      >
        <ul className="flex flex-col list-none m-0 p-0">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item)}
                  className={`block px-8 py-4 text-lg font-medium transition-all border-b border-white/5 ${
                    isActive ? "text-white bg-white/5" : "text-[#E4E4E4]! hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <div className="px-8 mt-8">
            <Button
              onClick={(e) => {
                setOpen(false);
                scrollToSection(e as any, { href: "#contact", path: "/contact" });
              }}
              className="flex items-center justify-center gap-2 group w-full px-[30px]! py-[13px]! rounded-[10px]! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! min-h-0! border-none!"
            >
              <PhoneIcon className="text-xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="tracking-wide">Book a Call</span>
            </Button>
          </div>
        </ul>
      </Drawer>
    </header>
  );
};
export default Navbar;
