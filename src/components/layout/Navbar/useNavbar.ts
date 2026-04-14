import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "./constants";

export const useNavbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Use window.scrollY for modern browsers
      if (window.scrollY < 100) {
        setActiveSection("");
        if (window.location.pathname !== "/") {
          window.history.replaceState(null, "", "/");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        const order = [
          "services",
          "case-studies",
          "clients",
          "process",
          "contact",
        ];
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
            const item = menuItems.find((m) => m.href === `#${topActive}`);

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

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    const sections = [
      "services",
      "case-studies",
      "clients",
      "process",
      "contact",
    ];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<any>, item: { href: string; path: string }) => {
      e.preventDefault();

      const id = item.href.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        const rect = element.getBoundingClientRect();
        // Use scrollY instead of pageYOffset
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

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
    },
    [navigate],
  );

  return {
    open,
    setOpen,
    activeSection,
    scrollToSection,
  };
};
