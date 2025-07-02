
import React, { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg text-white">
      <Navigation />
      
      {/* Parallax Background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(244, 114, 182, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      <HeroSection scrollY={scrollY} />
      
      <div className="gradient-divider my-20" />
      
      <AboutSection />
      
      <div className="gradient-divider my-20" />
      
      <SkillsSection />
      
      <div className="gradient-divider my-20" />
      
      <ExperienceSection />
      
      <div className="gradient-divider my-20" />
      
      <ProjectsSection />
      
      <div className="gradient-divider my-20" />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
