import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedBikes from '@/components/sections/FeaturedBikes';
import HowItWorks from '@/components/sections/HowItWorks';
import CertificationSection from '@/components/sections/CertificationSection';
import Testimonials from '@/components/sections/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedBikes />
      <HowItWorks />
      <CertificationSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
