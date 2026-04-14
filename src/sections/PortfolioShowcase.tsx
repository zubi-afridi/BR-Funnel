import Container from "../components/common/Container";
import { EmailIcon } from "../assets";
import { Card } from "../assets/images";
import { motion } from "framer-motion";
import { fadeInTop, viewportSettings } from "../utils/animationVariants";

const PortfolioShowcase = () => {
  const gradient = "bg-[linear-gradient(179deg,#793FEE_-16.48%,#26FDFE_99.4%)]";
  return (
    <section>
      <Container variant="section">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col items-center"
        >
          {/* Scroll Animation: Badge */}
          <motion.div variants={fadeInTop} className="flex justify-center mb-5 md:mb-9">
            <div className="relative flex items-center gap-2 px-4 py-2 rounded-[10px]">
              <div className={`absolute inset-0 rounded-[10px] p-[1.5px] ${gradient} border-mask`} />
              <EmailIcon className="size-4" />
              <span className={`bg-clip-text text-transparent ${gradient} font-medium`}>Portfolio Showcase</span>
            </div>
          </motion.div>
          
          {/* Scroll Animation: Title & Text */}
          <div className="flex flex-col justify-between items-center text-center">
            <motion.h2 variants={fadeInTop} className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
              Designed for Conversions. <span className="text-gradient-blue">Built for Scale.</span>
            </motion.h2>
            <motion.p variants={fadeInTop} className="max-w-[350px] md:max-w-[564px] text-[#B9B9B9] text-sm md:text-base mt-4">
              Every email template is crafted with psychology-driven design principles and tested across industries.
            </motion.p>
            
            {/* Scroll Animation: Cards Image */}
            <motion.img 
              variants={fadeInTop}
              src={Card} 
              alt="Cards Images" 
              className="mt-12"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
export default PortfolioShowcase;
