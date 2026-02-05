import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { Card } from '../UI/Card';

export const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Retalk",
      position: "Final Year Intern",
      period: "Feb 2025 - May 2025",
      location: "Sousse, Tunisia",
      description: "Designed an AI pipeline for automated image editing, including background removal, object removal, and recolorization with metadata preservation.",
      technologies: ["TensorFlow", "OpenCV", "Python", "Computer Vision", "Image Processing"],
      highlights: [
        "Designed AI pipeline for automated image editing with background/object removal",
        "Preserved metadata and maintained original image format for output integrity",
        "Processed multiple image formats (PNG, JPEG, AVIF) with RGB normalization"
      ]
    },
    {
      company: "FLESK",
      position: "Summer Intern",
      period: "July 2024 - Aug 2024",
      location: "Monastir, Tunisia",
      description: "Developed an AI-based employee tracking system using facial recognition with TensorFlow and PyTorch.",
      technologies: ["TensorFlow", "PyTorch", "Facial Recognition", "Angular", "TTS"],
      highlights: [
        "Developed AI-based employee tracking system using facial recognition",
        "Integrated text-to-speech (TTS) for interactive voice greetings",
        "Built back-office dashboard using Angular for employee data management"
      ]
    },
    {
      company: "REGALS.INC",
      position: "Summer Intern",
      period: "June 2023 - July 2023",
      location: "Sousse, Tunisia",
      description: "Developed front-end mobile interfaces using Flutter, based on Figma designs for a football club's mobile application.",
      technologies: ["Flutter", "Dart", "Figma", "Mobile Development", "UI/UX"],
      highlights: [
        "Developed front-end mobile interfaces using Flutter based on Figma designs",
        "Collaborated with team to implement improvements to football club mobile app",
        "Delivered pixel-perfect UI implementations from design mockups"
      ]
    },
    {
      company: "University of Sousse",
      position: "Final Year Intern",
      period: "Feb 2022 - June 2022",
      location: "Sousse, Tunisia",
      description: "Created an intelligent solution to effectively manage vacant spots within a large parking facility using camera technology.",
      technologies: ["Computer Vision", "Mobile Development", "IoT", "Real-time Systems"],
      highlights: [
        "Created intelligent parking management system for large facilities",
        "Utilized camera technology for real-time parking space monitoring",
        "Connected system to mobile application for spot reservation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A journey through innovative projects and cutting-edge technologies in AI and software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"></div>

                <div className={`ml-16 md:ml-0 ${index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <Card className="text-left">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="flex items-center mb-3">
                      <Building className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {exp.company}
                      </h3>
                    </div>

                    <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                      {exp.position}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};