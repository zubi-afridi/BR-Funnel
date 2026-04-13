import MainLayout from "../layouts/MainLayout";
import Hero from "../sections/Hero";
import PortfolioShowcase from "../sections/PortfolioShowcase";
import Integrations from "../sections/Integrations";
import PerformanceStats from "../sections/PerformanceStats";
import BrandLogos from "../sections/BrandLogos";
import Guarantee from "../sections/Guarantee";
import Services from "../sections/Services";
import SuccessStories from "../sections/SuccessStories";
import VideoTestimonials from "../sections/VideoTestimonials";
import MobileOptimized from "../sections/MobileOptimized";
import RevenueFramework from "../sections/RevenueFramework";
import CTASection from "../sections/CTASection";
const Home = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-[50px] md:gap-[70px] lg:gap-[90px]">
        <Hero />
        <Integrations />
        <PortfolioShowcase />
        <PerformanceStats />
        <BrandLogos />
        <Guarantee />
        <Services />
        <SuccessStories />
        <VideoTestimonials />
        <MobileOptimized />
        <RevenueFramework />
        <CTASection />
      </div>
    </MainLayout>
  );
};

export default Home;
