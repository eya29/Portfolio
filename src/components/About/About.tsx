import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Zap, Target, Award, Users, Lightbulb, Database, Eye, Network, Cpu } from 'lucide-react';
import { Card } from '../UI/Card';

export const About: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Specialized in developing intelligent systems using TensorFlow, PyTorch, and advanced deep learning techniques.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, and cloud platforms for scalable solutions.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Passionate about solving complex problems with cutting-edge AI technologies and creative approaches.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Committed to delivering high-quality solutions that make a real impact in the world of technology.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    }
  ];

  const stats = [
    { value: "3+", label: "Years of Experience", icon: Award, color: "text-blue-600 dark:text-blue-400" },
    { value: "10+", label: "AI/ML Projects", icon: Brain, color: "text-purple-600 dark:text-purple-400" },
    { value: "15+", label: "Technologies Mastered", icon: Code, color: "text-yellow-600 dark:text-yellow-400" },
    { value: "4+", label: "Successful Internships", icon: Users, color: "text-green-600 dark:text-green-400" }
  ];

  const technologies = [
    { name: "Python", progress: 95, color: "bg-blue-500" },
    { name: "TensorFlow", progress: 90, color: "bg-orange-500" },
    { name: "PyTorch", progress: 88, color: "bg-red-500" },
    { name: "React/Next.js", progress: 85, color: "bg-cyan-500" },
    { name: "Computer Vision", progress: 87, color: "bg-purple-500" },
    { name: "NLP", progress: 83, color: "bg-green-500" }
  ];

  const floatingIcons = [
    { icon: Database, position: { top: '10%', left: '5%' }, delay: 0.5 },
    { icon: Eye, position: { top: '20%', right: '8%' }, delay: 1 },
    { icon: Network, position: { bottom: '25%', left: '3%' }, delay: 1.5 },
    { icon: Cpu, position: { bottom: '15%', right: '5%' }, delay: 2 }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5 dark:from-blue-500/3 dark:via-purple-500/6 dark:to-pink-500/3"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20 dark:text-blue-500/10"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
              y: [-20, 20, -20]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: item.delay
            }}
          >
            <item.icon className="w-12 h-12" />
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 dark:bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl"
          >
            <Lightbulb className="w-10 h-10 text-white" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Passionate About
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            As a recent <span className="text-blue-600 dark:text-blue-400 font-semibold">Teleinformatics Engineering graduate</span> from ISITCom Sousse, 
            I specialize in <span className="text-purple-600 dark:text-purple-400 font-semibold">artificial intelligence and machine learning</span> solutions. 
            My passion lies in transforming complex challenges into 
            <span className="text-pink-600 dark:text-pink-400 font-semibold"> innovative, intelligent systems</span> that push the boundaries of what's possible.
          </motion.p>
        </motion.div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group"
            >
              <Card className={`text-center h-full ${feature.bgColor} border-0 hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color}`} />
                </div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg group-hover:shadow-xl`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="p-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Technical Expertise
                </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Proficiency levels in key technologies and frameworks
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800 dark:text-white text-lg">
                      {tech.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 font-medium">
                      {tech.progress}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${tech.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="p-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 text-white border-0 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4">Achievement Highlights</h3>
                <p className="text-xl opacity-90">
                  Numbers that reflect my journey and dedication in AI/ML
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <motion.h3 
                      className="text-4xl md:text-5xl font-bold mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-lg opacity-90">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Ready to collaborate on your next AI project?
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Let's transform your ideas into intelligent solutions together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};