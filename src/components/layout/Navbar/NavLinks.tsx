import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "./Navbar.variants";
import { menuItems } from "./constants";

interface NavLinksProps {
  activeSection: string;
  scrollToSection: (e: React.MouseEvent<any>, item: { href: string; path: string }) => void;
  mobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ activeSection, scrollToSection, mobile = false }) => {
  return (
    <ul className={mobile ? "flex flex-col list-none m-0 p-0" : "flex items-center md:space-x-4 lg:space-x-10 list-none m-0 p-0"}>
      {menuItems.map((item) => {
        const isActive = activeSection === item.href.replace("#", "");

        if (mobile) {
          return (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item)}
                className={`block px-8 py-4 text-lg font-medium transition-all border-b border-white/5 ${
                  isActive ? "text-gradient-blue" : "text-[#E4E4E4]!"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        }

        return (
          <motion.li key={item.label} variants={itemVariants}>
            <a
              href={item.href}
              onClick={(e) => scrollToSection(e, item)}
              className={`text-sm lg:text-lg font-medium transition-all duration-200 relative group ${
                isActive
                  ? "text-white!"
                  : "text-[#E4E4E4]! hover:text-white"
              }`}
            >
              {item.label}

              <span
                className={`absolute rounded -bottom-1 left-0 h-0.5 bg-linear-to-r from-[#793FEE] to-[#26FDFE] transition-all duration-300 group-hover:w-full ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
