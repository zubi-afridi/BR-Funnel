import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../sections/Hero';
import BrandLogos from '../sections/BrandLogos';
import RevenueFramework from '../sections/RevenueFramework';
import Services from '../sections/Services';
import SuccessStories from '../sections/SuccessStories';
import PerformanceStats from '../sections/PerformanceStats';
import VideoTestimonials from '../sections/VideoTestimonials';
import PortfolioShowcase from '../sections/PortfolioShowcase';
import MobileOptimized from '../sections/MobileOptimized';
import Integrations from '../sections/Integrations';
import Guarantee from '../sections/Guarantee';
import CTASection from '../sections/CTASection';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <BrandLogos />
      <RevenueFramework />
      <Services />
      <SuccessStories />
      <PerformanceStats />
      <VideoTestimonials />
      <PortfolioShowcase />
      <MobileOptimized />
      <Integrations />
      <Guarantee />
      <CTASection />
    </MainLayout>
  );
};

export default Home;
