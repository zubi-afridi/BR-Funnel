import { motion } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";
import { PhoneIcon } from "../../assets";

import NavLogo from "./Navbar/NavLogo";
import NavLinks from "./Navbar/NavLinks";
import MobileMenu from "./Navbar/MobileMenu";
import { useNavbar } from "./Navbar/useNavbar";
import { containerVariants, buttonVariants } from "./Navbar/Navbar.variants";

const Navbar = () => {
  const { open, setOpen, activeSection, scrollToSection } = useNavbar();

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-100 bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300"
    >
      <Container className="flex justify-between items-center h-16 md:h-18 lg:h-20">
        <NavLogo />
        <nav className="hidden md:flex items-center">
          <NavLinks
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        </nav>
        <motion.div variants={buttonVariants} className="hidden md:block">
          <Button
            onClick={(e) =>
              scrollToSection(e, { href: "#contact", path: "/contact" })
            }
            padding=""
            className="flex items-center gap-2 group md:px-[16px]! md:py-[8px]! lg:px-[30px]! lg:py-[13px]! rounded-md xl:rounded-[10px]! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! min-h-0! border-none!"
          >
            <PhoneIcon className="text-md lg:text-lg group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide text-sm lg:text-base">
              Book a Call
            </span>
          </Button>
        </motion.div>
        <MobileMenu
          open={open}
          setOpen={setOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </Container>
    </motion.header>
  );
};

export default Navbar;
