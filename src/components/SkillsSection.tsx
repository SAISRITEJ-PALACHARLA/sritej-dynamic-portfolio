
import React from 'react';
import { Code, Database, Cloud, Wrench, Globe, Zap } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-8 h-8" />,
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Bash'],
      color: 'portfolio-cyan'
    },
    {
      title: 'Frameworks',
      icon: <Zap className="w-8 h-8" />,
      skills: ['Spring Boot', 'Node.js', 'Express.js', 'React.js', 'Bootstrap', 'Tailwind CSS'],
      color: 'portfolio-pink'
    },
    {
      title: 'Web Tech',
      icon: <Globe className="w-8 h-8" />,
      skills: ['HTML5', 'CSS3', 'REST APIs', 'JWT', 'MVC Architecture'],
      color: 'portfolio-violet'
    },
    {
      title: 'Databases',
      icon: <Database className="w-8 h-8" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQLite'],
      color: 'portfolio-yellow'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'CI/CD'],
      color: 'portfolio-green'
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-8 h-8" />,
      skills: ['Git', 'GitHub', 'Linux Shell', 'VS Code', 'IntelliJ IDEA', 'Postman'],
      color: 'portfolio-cyan'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-portfolio-cyan to-portfolio-pink bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-morphism rounded-2xl p-6 neon-glow hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-${category.color} mb-4 flex items-center gap-3`}>
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-sm bg-${category.color}/20 text-${category.color} rounded-full border border-${category.color}/30 hover:bg-${category.color}/30 transition-colors duration-300`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: 'Full Stack Development', level: 90 },
              { skill: 'Backend Services', level: 85 },
              { skill: 'Cloud Deployment', level: 80 },
              { skill: 'AI/ML Integration', level: 75 },
              { skill: 'DevOps & CI/CD', level: 70 },
              { skill: 'Database Design', level: 85 }
            ].map((item, index) => (
              <div
                key={item.skill}
                className="animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{item.skill}</span>
                  <span className="text-portfolio-cyan">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-portfolio-cyan to-portfolio-pink h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
