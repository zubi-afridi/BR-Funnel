
import MainLayout from "../layouts/MainLayout";
import Hero from "../sections/Hero";
// import BrandLogos from "../sections/BrandLogos";
// import RevenueFramework from "../sections/RevenueFramework";
// import Services from "../sections/Services";
// import SuccessStories from "../sections/SuccessStories";
// import PerformanceStats from "../sections/PerformanceStats";
// import VideoTestimonials from "../sections/VideoTestimonials";
import PortfolioShowcase from "../sections/PortfolioShowcase";

import Integrations from "../sections/Integrations";
import PerformanceStats from "../sections/PerformanceStats";
import BrandLogos from "../sections/BrandLogos";


const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Integrations />
      <PortfolioShowcase />
      <PerformanceStats />
      <BrandLogos />
      {/* 
      <RevenueFramework />
      <Services />
      <SuccessStories />
      <VideoTestimonials />
      <MobileOptimized />
      <Guarantee />
      <CTASection /> */}
    </MainLayout>
  );
};

export default Home;
