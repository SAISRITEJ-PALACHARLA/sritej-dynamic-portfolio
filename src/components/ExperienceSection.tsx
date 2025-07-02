
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Graduate Research Assistant',
      company: 'University of Massachusetts Lowell',
      period: 'Sep 2023 – May 2025',
      location: 'Lowell, MA',
      description: [
        'Developed functional language compilers in Python and built/tested AI tools using ChatGPT, DeepSeek, and RAG pipelines',
        'Created lightweight Flask apps, managed Conda environments, and automated tasks using Linux CLI and GitHub',
        'Collaborated on user-facing AI tools and prompt-engineered solutions for research usability'
      ],
      technologies: ['Python', 'Flask', 'AI/ML', 'Linux', 'GitHub', 'RAG'],
      color: 'portfolio-cyan'
    },
    {
      title: 'Junior Web Developer',
      company: 'Arete IT Services',
      period: 'Oct 2022 – Jul 2023',
      location: 'India',
      description: [
        'Built responsive full-stack web apps using HTML, CSS, JS, Node.js, Express, and MongoDB',
        'Deployed systems on AWS EC2, configured Linux servers, and practiced Agile development',
        'Communicated directly with clients for feature enhancements, bug fixes, and deployment cycles'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'AWS EC2', 'Linux', 'Agile'],
      color: 'portfolio-pink'
    }
  ];

  const education = {
    degree: 'M.S. in Computer Science',
    school: 'University of Massachusetts Lowell',
    gpa: '3.92 / 4.0',
    location: 'Lowell, MA',
    period: '2023 - 2025'
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-portfolio-cyan to-portfolio-pink bg-clip-text text-transparent">
          Experience & Education
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-portfolio-cyan via-portfolio-violet to-portfolio-pink"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:pl-1/2 md:text-left'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute w-4 h-4 bg-${exp.color} rounded-full left-2 md:left-1/2 transform md:-translate-x-1/2 mt-6 z-10 shadow-lg`}></div>
                
                <div className={`glass-morphism rounded-2xl p-6 ml-8 md:ml-0 neon-glow hover:scale-105 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className={`text-xl font-bold text-${exp.color} mb-1`}>{exp.title}</h3>
                      <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="text-gray-300 mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`text-${exp.color} mt-1.5 text-xs`}>●</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs bg-${exp.color}/20 text-${exp.color} rounded border border-${exp.color}/30`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-300">Education</h3>
            <div className="glass-morphism rounded-2xl p-8 neon-glow animate-scale-in">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-portfolio-violet mb-2">{education.degree}</h4>
                <h5 className="text-xl text-gray-300 mb-4">{education.school}</h5>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {education.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {education.location}
                  </div>
                  <div className="bg-portfolio-violet/20 text-portfolio-violet px-3 py-1 rounded-full text-sm">
                    GPA: {education.gpa}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-300">Research</h3>
            <div className="glass-morphism rounded-2xl p-8 neon-glow animate-fade-in-up">
              <h4 className="text-xl font-bold text-portfolio-green mb-4">
                Heart Disease Classification Using Random Forest and Naive Bayesian Methods
              </h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Published research on machine learning approaches for heart disease detection, 
                comparing the effectiveness of Random Forest and Gaussian Naive Bayes algorithms 
                in medical diagnosis applications.
              </p>
              <a
                href="https://www.neuroquantology.com/open-access/DETECTION+OF+HEART+DISEASE+USING+HYBRID+RANDOM+FOREST+AND+GAUSSIAN+NAIVE%25E2%2580%2599S+BAYESIAN+TECHNIQUES_13968/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-portfolio-green hover:text-white transition-colors duration-300 neon-glow"
              >
                <ExternalLink size={16} />
                Read Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
