import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import SkillSection from '../components/SkillsSection';

const About = () => {
  return (
    <div className="About">
      <AboutSection />
      <SkillSection />
      <ContactSection />
    </div>

  );
};

export default About;
