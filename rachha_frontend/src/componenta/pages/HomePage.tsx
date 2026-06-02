import HeroSection from '../homepageSections/HeroSection';
import HomePageServiceFeature from '../homepageSections/HomePageServiceFeature';
import AboutSection from '../homepageSections/AboutSection';
import HomePageGalleryFeature from '../homepageSections/GalleryFeatureSection';
import TestonomialSection from '../homepageSections/TestonomialSection';
import ContactSection from '../homepageSections/ContactSection';

const Homepage = () => {


  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HomePageServiceFeature />
      <HomePageGalleryFeature/>
      <TestonomialSection/>
      <ContactSection/>
    </main>
  );
};

export default Homepage;