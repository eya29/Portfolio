import React, { useEffect, useState, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Download, ArrowDown, Github, Linkedin, Mail, Brain, Cpu, Database, Eye, Network, Zap, Code } from 'lucide-react';
import { Button } from '../UI/Button';
import { useTypingEffect } from '../../hooks/useTypingEffect';

export const Hero: React.FC = () => {
  const { displayedText } = useTypingEffect("AI/ML Software Engineer", 100);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const neuralControls = useAnimation();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttle mouse movement for smooth animation
    requestAnimationFrame(() => {
      setMousePosition({ 
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth, 
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight 
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    neuralControls.start({
      rotate: [0, 360],
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    });
  }, [neuralControls]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Cv_EyaYounes.pdf';
    link.download = 'Cv_EyaYounes.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const techIcons = [
    { icon: Brain, position: { top: '15%', left: '10%' }, delay: 0.5, color: 'text-purple-500' },
    { icon: Cpu, position: { top: '25%', right: '15%' }, delay: 1, color: 'text-blue-500' },
    { icon: Database, position: { bottom: '30%', left: '8%' }, delay: 1.5, color: 'text-green-500' },
    { icon: Eye, position: { top: '40%', right: '8%' }, delay: 2, color: 'text-pink-500' },
    { icon: Network, position: { bottom: '20%', right: '12%' }, delay: 2.5, color: 'text-indigo-500' },
    { icon: Zap, position: { top: '60%', left: '12%' }, delay: 3, color: 'text-yellow-500' },
    { icon: Code, position: { bottom: '40%', right: '25%' }, delay: 3.5, color: 'text-cyan-500' },
  ];

  const aiKeywords = [
    "Neural Networks", "Deep Learning", "Computer Vision", "NLP", "TensorFlow", 
    "PyTorch", "Machine Learning", "Data Science", "AI Pipeline", "Model Training",
    "Feature Engineering", "Pattern Recognition", "Predictive Analytics"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      {/* Dynamic Background with Neural Network Effect */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/15 dark:to-pink-500/10"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-l from-cyan-500/10 via-transparent to-indigo-500/10 dark:from-cyan-500/5 dark:via-transparent dark:to-indigo-500/5"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="connectionGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              className="dark:stroke-[url(#connectionGradientDark)]"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0], 
                opacity: [0, 0.8, 0] 
              }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity,
                delay: Math.random() * 3 
              }}
            />
          ))}
        </svg>

        {/* Floating AI Keywords */}
        {aiKeywords.map((keyword, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-blue-600/40 dark:text-blue-400/30 pointer-events-none"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0.8, 1, 0.8],
              y: [-20, 20, -20]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8
            }}
          >
            {keyword}
          </motion.div>
        ))}

        {/* Floating Particles with Smooth Mouse Interaction */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/50 dark:bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePosition.x * 10 + Math.sin(i) * 15,
              y: mousePosition.y * 10 + Math.cos(i) * 15,
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              x: { type: "spring", damping: 50, stiffness: 100 },
              y: { type: "spring", damping: 50, stiffness: 100 },
              opacity: { duration: 4 + Math.random() * 3, repeat: Infinity },
              scale: { duration: 3 + Math.random() * 2, repeat: Infinity }
            }}
          />
        ))}

        {/* Tech Icons Floating */}
        {techIcons.map((tech, i) => (
          <motion.div
            key={i}
            className={`absolute ${tech.color} opacity-30 dark:opacity-20`}
            style={tech.position}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360],
              y: [-10, 10, -10]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: tech.delay
            }}
          >
            <tech.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Profile Image with Neural Network Ring */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
            className="mb-8 relative"
          >
            <div className="w-56 h-56 mx-auto relative">
              {/* Outer Neural Ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                animate={neuralControls}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-blue-500 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: `0 ${112}px`, // Half of container size
                      transform: `rotate(${i * 45}deg) translate(-1.5px, -1.5px)`
                    }}
                    animate={{
                      scale: [0.8, 1.5, 0.8],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>

              {/* Profile Image */}
              <div className="absolute inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                {/* <div className="w-full h-full bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-5xl font-bold text-gray-800 dark:text-white relative overflow-hidden"> */}
                  <div className="w-full h-full bg-gray-100 dark:bg-slate-800 rounded-full relative overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="Eya Younes"
                      className="w-full h-full object-cover rounded-full"
                    />

                  {/* AI Pattern Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                        'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.2))',
                        'linear-gradient(225deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 relative"
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Eya Younes
              </span>
              {/* Glitch Effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent opacity-0"
                animate={{ 
                  opacity: [0, 0.7, 0],
                  x: [-2, 2, -2]
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                Eya Younes
              </motion.span>
            </span>
          </motion.h1>

          {/* Typing Title with AI Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-4 h-16 flex items-center justify-center">
              <motion.span
                className="mr-2 text-blue-500 dark:text-blue-400"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-8 h-8" />
              </motion.span>
              {displayedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-cyan-500 dark:text-cyan-400 ml-1"
              >
                |
              </motion.span>
            </h2>
            
            {/* AI Progress Bars */}
            <div className="flex justify-center space-x-4 mb-6">
              {['AI', 'ML', 'DL', 'CV', 'NLP'].map((tech, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{tech}</div>
                  <div className="w-12 h-1 bg-gray-300 dark:bg-gray-700 rounded">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded"
                      initial={{ width: 0 }}
                      animate={{ width: `${85 + Math.random() * 15}%` }}
                      transition={{ delay: 1 + i * 0.2, duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-blue-400 font-semibold">Transforming ideas</span> into{' '}
            <span className="text-purple-400 font-semibold">intelligent solutions</span> through{' '}
            <span className="text-pink-400 font-semibold">cutting-edge AI</span> and{' '}
            <span className="text-cyan-400 font-semibold">machine learning</span>
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button 
              onClick={scrollToProjects} 
              className="text-lg px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 relative group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Explore Projects
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={downloadCV} 
              className="text-lg px-10 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                initial={false}
              />
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 }}
            className="flex justify-center gap-8 mb-16"
          >
            {[
              { icon: Github, href: "https://github.com/eya29", color: "hover:text-white", gradient: "from-gray-600 to-gray-800" },
              { icon: Linkedin, href: "https://linkedin.com/in/eya-younes/", color: "hover:text-blue-400", gradient: "from-blue-600 to-blue-800" },
              { icon: Mail, href: "mailto:eyayounes29@gmail.com", color: "hover:text-pink-400", gradient: "from-pink-600 to-purple-600" }
            ].map(({ icon: Icon, href, color, gradient }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -8 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-500 transition-all duration-300 ${color} relative group`}
              >
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 scale-150 transition-all duration-300`}
                  whileHover={{ scale: 2 }}
                />
                <Icon className="w-10 h-10 relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="text-gray-500 hover:text-purple-400 transition-colors duration-300 relative group"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <ArrowDown className="w-8 h-8" />
              <motion.div
                className="absolute inset-0 rounded-full bg-purple-500/20 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1.5, 2, 1.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <p className="text-sm mt-2 opacity-70">Discover More</p>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};