
import React, { useState, useEffect } from 'react';

export const AboutSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const aboutText = `> whoami
Sai Sritej Palacharla

> cat bio.txt
Computer Science graduate with experience in full-stack development, 
backend services, and deploying AI-powered cloud solutions. 

> skills --list
Proficient in Java, Python, JavaScript, and SQL. Strong foundation 
in data structures, system design, and DevOps workflows.

> passion --show
Passionate about building scalable, real-world systems that solve 
complex problems and make technology accessible to everyone.

> current_status
Graduate Research Assistant at UMass Lowell, working on AI tools 
and functional language compilers.

> fun_fact
When I'm not coding, you'll find me exploring new technologies 
or contributing to open-source projects!

> _`;

  useEffect(() => {
    if (currentIndex < aboutText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + aboutText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, aboutText]);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-portfolio-cyan to-portfolio-pink bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism rounded-2xl p-8 neon-glow">
            {/* Terminal Header */}
            <div className="flex items-center mb-6 pb-4 border-b border-gray-600">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">
                terminal -- sritej@portfolio
              </div>
            </div>

            {/* Terminal Content */}
            <div className="terminal-text text-sm md:text-base leading-relaxed">
              <pre className="whitespace-pre-wrap font-mono">
                {displayText}
                <span className="animate-blink-caret border-r-2 border-portfolio-green ml-1"></span>
              </pre>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="glass-morphism rounded-xl p-6 text-center neon-glow">
              <div className="text-3xl font-bold text-portfolio-cyan mb-2">3.92</div>
              <div className="text-gray-400 text-sm">GPA</div>
            </div>
            <div className="glass-morphism rounded-xl p-6 text-center neon-glow">
              <div className="text-3xl font-bold text-portfolio-pink mb-2">15+</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="glass-morphism rounded-xl p-6 text-center neon-glow">
              <div className="text-3xl font-bold text-portfolio-violet mb-2">5+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            <div className="glass-morphism rounded-xl p-6 text-center neon-glow">
              <div className="text-3xl font-bold text-portfolio-yellow mb-2">2+</div>
              <div className="text-gray-400 text-sm">Years Exp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
