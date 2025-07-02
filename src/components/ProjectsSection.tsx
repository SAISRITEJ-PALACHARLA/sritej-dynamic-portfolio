
import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, Cloud, Smartphone } from 'lucide-react';

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'AlgoPrepX',
      subtitle: 'Algorithm Learning Platform',
      description: 'Interactive platform with quizzes, runtime analysis, and DSA content. Features role-based access and pseudocode rendering tools with modular architecture for future expansion.',
      fullDescription: 'A comprehensive learning platform designed to help students master data structures and algorithms. Built with modern web technologies, it features interactive quizzes, visual algorithm demonstrations, and detailed runtime complexity analysis.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      icon: <Code className="w-8 h-8" />,
      color: 'portfolio-cyan',
      image: '/placeholder.svg',
      github: 'https://github.com/SAISRITEJ-PALACHARLA',
      demo: 'https://saisritej-palacharla.github.io/',
      category: 'Web Development'
    },
    {
      title: 'GestureMoveX',
      subtitle: 'Gesture & Eye-Tracking Interface',
      description: 'Real-time system combining gesture and eye-tracking for hands-free control. Enables gesture-driven navigation and gaze-based UI control with cross-platform deployment.',
      fullDescription: 'An innovative human-computer interaction system that uses computer vision to track hand gestures and eye movements. Perfect for accessibility applications and touchless interfaces.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'GazeTracking', 'Docker'],
      icon: <Smartphone className="w-8 h-8" />,
      color: 'portfolio-pink',
      image: '/placeholder.svg',
      github: 'https://github.com/SAISRITEJ-PALACHARLA',
      demo: 'https://saisritej-palacharla.github.io/',
      category: 'AI/ML'
    },
    {
      title: 'Cloud-Native API Gateway',
      subtitle: 'Microservices Architecture',
      description: 'Scalable API gateway built with Spring Boot and deployed on AWS. Features JWT authentication, rate limiting, and automated CI/CD pipeline with Docker containerization.',
      fullDescription: 'Enterprise-grade API gateway solution designed for microservices architecture. Includes advanced features like service discovery, load balancing, and comprehensive monitoring.',
      technologies: ['Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      icon: <Cloud className="w-8 h-8" />,
      color: 'portfolio-violet',
      image: '/placeholder.svg',
      github: 'https://github.com/SAISRITEJ-PALACHARLA',
      demo: '#',
      category: 'Cloud/DevOps'
    },
    {
      title: 'Real-time Analytics Dashboard',
      subtitle: 'Data Visualization Platform',
      description: 'Full-stack dashboard for real-time data visualization with interactive charts, filtering capabilities, and responsive design. Built with React and powered by PostgreSQL.',
      fullDescription: 'A powerful analytics platform that processes and visualizes large datasets in real-time. Features customizable dashboards, advanced filtering, and export capabilities.',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Redis', 'Chart.js'],
      icon: <Database className="w-8 h-8" />,
      color: 'portfolio-yellow',
      image: '/placeholder.svg',
      github: 'https://github.com/SAISRITEJ-PALACHARLA',
      demo: 'https://saisritej-palacharla.github.io/',
      category: 'Data Science'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-portfolio-cyan to-portfolio-pink bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="glass-morphism rounded-2xl overflow-hidden neon-glow hover:scale-105 transition-all duration-500 h-full">
                {/* Project Image/Icon */}
                <div className={`relative h-48 bg-gradient-to-br from-${project.color}/20 to-${project.color}/5 flex items-center justify-center`}>
                  <div className={`text-${project.color} transform group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 bg-${project.color}/20 text-${project.color} text-xs rounded-full border border-${project.color}/30`}>
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold text-${project.color} mb-2`}>
                    {project.title}
                  </h3>
                  <h4 className="text-gray-300 text-sm mb-4 font-medium">
                    {project.subtitle}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {hoveredProject === index ? project.fullDescription : project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs bg-${project.color}/10 text-${project.color} rounded border border-${project.color}/20 hover:bg-${project.color}/20 transition-colors duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-${project.color}/10 text-${project.color} rounded-lg hover:bg-${project.color}/20 transition-all duration-300 text-sm neon-glow`}
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 bg-${project.color}/10 text-${project.color} rounded-lg hover:bg-${project.color}/20 transition-all duration-300 text-sm neon-glow`}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg/80 to-transparent pointer-events-none animate-fade-in-up" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/SAISRITEJ-PALACHARLA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-portfolio-cyan to-portfolio-violet rounded-lg font-semibold text-white neon-glow hover:scale-105 transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
