import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { logoVariants } from "./Navbar.variants";

const NavLogo = () => {
  return (
    <motion.div variants={logoVariants} className="shrink-0">
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-3xl font-semibold text-gradient-blue hover:opacity-80 transition-opacity"
      >
        BR FUNNELS
      </Link>
    </motion.div>
  );
};

export default NavLogo;
