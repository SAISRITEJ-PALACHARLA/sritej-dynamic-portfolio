
import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Floating Particles Background */}
        <div className="absolute inset-0 -z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-portfolio-cyan rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="glass-morphism rounded-2xl p-8 neon-glow max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-400">Made with</span>
            <Heart className="w-5 h-5 text-portfolio-pink animate-pulse" />
            <span className="text-gray-400">by</span>
            <span className="bg-gradient-to-r from-portfolio-cyan to-portfolio-pink bg-clip-text text-transparent font-semibold">
              Sai Sritej Palacharla
            </span>
          </div>
          
          <p className="text-gray-400 text-sm mb-6">
            Full Stack Developer & AI Enthusiast
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-700 pt-6">
            <div>
              © 2024 Sai Sritej Palacharla. All rights reserved.
            </div>
            <div className="mt-2 md:mt-0">
              Built with React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-portfolio-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-portfolio-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
};
