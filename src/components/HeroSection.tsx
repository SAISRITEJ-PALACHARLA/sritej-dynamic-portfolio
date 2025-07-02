
import React from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ transform: `translateY(${scrollY * 0.3}px)` }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Animated Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-portfolio-cyan via-portfolio-violet to-portfolio-pink rounded-full flex items-center justify-center text-6xl animate-glow-pulse">
              <span className="animate-wave">👋</span>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-cyan via-portfolio-violet to-portfolio-pink rounded-full opacity-20 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-portfolio-cyan via-portfolio-violet to-portfolio-pink bg-clip-text text-transparent">
            Sai Sritej Palacharla
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-in-right">
          Full Stack Developer & AI Enthusiast
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Computer Science graduate with expertise in building scalable web applications, 
          AI-powered solutions, and cloud-native systems. Passionate about creating 
          innovative technology that makes a real-world impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-portfolio-cyan to-portfolio-violet rounded-lg font-semibold text-white neon-glow hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-portfolio-cyan text-portfolio-cyan rounded-lg font-semibold hover:bg-portfolio-cyan hover:text-white transition-all duration-300 neon-glow"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://linkedin.com/in/saisritej-palacharla" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-morphism rounded-full neon-glow hover:text-portfolio-cyan transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/SAISRITEJ-PALACHARLA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-morphism rounded-full neon-glow hover:text-portfolio-cyan transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://saisritej-palacharla.github.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-morphism rounded-full neon-glow hover:text-portfolio-cyan transition-all duration-300"
          >
            <ExternalLink size={24} />
          </a>
          <a 
            href="mailto:saisritejpalacharlauml@gmail.com"
            className="p-3 glass-morphism rounded-full neon-glow hover:text-portfolio-cyan transition-all duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-portfolio-cyan" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-portfolio-cyan/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-portfolio-pink/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-portfolio-violet/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};
