import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../UI/Card';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "AI/ML",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Keras", level: 88 },
        { name: "OpenCV", level: 82 },
        { name: "NLP", level: 87 },
        { name: "Computer Vision", level: 85 },
        { name: "spaCy", level: 80 }
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "Java", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "C", level: 75 },
        { name: "Dart", level: 78 }
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Angular", level: 82 },
        { name: "Node.js", level: 82 },
        { name: "NestJS", level: 78 },
        { name: "Flutter", level: 80 }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Data & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Docker", level: 82 },
        { name: "Spark", level: 78 },
        { name: "Databricks", level: 75 }
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that power intelligent solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};