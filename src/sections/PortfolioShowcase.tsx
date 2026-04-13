import Container from "../components/common/Container";
import { EmailIcon } from "../assets";
import { Card } from "../assets/images";
const PortfolioShowcase = () => {
  const gradient = "bg-[linear-gradient(179deg,#793FEE_-16.48%,#26FDFE_99.4%)]";
  return (
    <section>
      <Container variant="section">
        <div className="flex justify-center mb-5 md:mb-9">
          <div className="relative flex items-center gap-2 px-4 py-2 rounded-[10px]">
            <div className={`absolute inset-0 rounded-[10px] p-[1.5px] ${gradient} border-mask`} />
            <EmailIcon className="size-4" />
            <span className={`bg-clip-text text-transparent ${gradient} font-medium`}>Portfolio Showcase</span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
            Designed for Conversions. <span className="text-gradient-blue">Built for Scale.</span>
          </h2>
          <p className="max-w-[350px] md:max-w-[564px] text-[#B9B9B9] text-sm md:text-base">Every email template is crafted with psychology-driven design principles and tested across industries.</p>
          <img src={Card} alt="Cards Images" />
        </div>
      </Container>
    </section>
  );
};
export default PortfolioShowcase;
