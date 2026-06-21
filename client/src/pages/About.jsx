import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// About Components
import AboutHero from '../components/About/AboutHero';
import CompanyIntro from '../components/About/CompanyIntro';
// import OurStoryTimeline from '../components/About/OurStoryTimeline';
import MissionVision from '../components/About/MissionVision';
import TeamMembers from '../components/About/TeamMembers';

// Shared Components from Home
import WhyChooseUs from '../components/Home/WhyChooseUs';
import StatsSection from '../components/Home/StatsSection';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
    // Scroll to top when loading the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* 1. Hero Section */}
      <AboutHero />

      {/* 2. Company Introduction */}
      <CompanyIntro />

      {/* 3. Our Story / Timeline */}
      {/* <OurStoryTimeline /> */}

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5 & 6. Mission & Vision Section */}
      <MissionVision />

      {/* 7. Statistics / Counter Section */}
      <div className="bg-white">
        <StatsSection />
      </div>

      {/* 8. Team Members Section */}
      <TeamMembers />

    </div>
  );
};

export default About;
