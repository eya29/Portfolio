import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Github, Brain, BarChart3, Image, Zap, Code, Database, Eye, Network, Star, ArrowRight, Play } from 'lucide-react';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';

export const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects = [
     {
      title: "AI Automation",
      subtitle: "Workflow Automation, Generative AI & SEO Optimization",
      description: "End-to-end AI automation system built with n8n to streamline content creation, SEO analysis, and multi-platform publishing through intelligent workflow orchestration.",
      // longDescription: "A comprehensive computer vision solution that revolutionizes image processing workflows. The pipeline combines multiple deep learning models for semantic segmentation, object detection, and style transfer, while maintaining image quality and metadata integrity throughout the processing chain.",
      technologies: ["n8n", "Generative AI", "Prompt Engineering", "SEO Automation", "RSS", "Automation"],
      category: "Gen-IA & Automation ",
      icon: Image,
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      bgPattern: "bg-green-50 dark:bg-green-900/20",
      features: [
        "🔄 Automated blog post generation from RSS feeds using Generative AI",
        "🧠 Prompt-engineered workflows for high-quality content creation",
        "📊 Automated SEO audits (on-page & site structure analysis)",
        "📧 SEO optimization reports generated and sent via email",
        "🌐 Multi-platform content publishing through API orchestration"
      ], 
       metrics: {
    // accuracy: "86%",
    // responseTime: "<150ms",
    // assessments: "10K+"
  },
      status: "Completed",
      year: "2025"
    },
    {
      title: "RAG Project – Intelligent Document-Based Chatbot",
      subtitle: "Retrieval-Augmented Generation & Contextual Question Answering",
      description: "An intelligent document-based chatbot using Retrieval-Augmented Generation (RAG) to provide accurate, source-grounded answers from multiple documents.",
      // longDescription: "A comprehensive computer vision solution that revolutionizes image processing workflows. The pipeline combines multiple deep learning models for semantic segmentation, object detection, and style transfer, while maintaining image quality and metadata integrity throughout the processing chain.",
      technologies: ["Python", "RAG", "LLMs", "Embeddings", "LangChain", "ChromaDB", "Streamlit"],
      category: "Gen-IA & NLP ",
      icon: Image,
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      bgPattern: "bg-green-50 dark:bg-green-900/20",
      features: [
        "📚 Multi-document ingestion and indexing using vector embeddings",
        "🔍 Semantic document retrieval with ChromaDB",
        "🤖 Context-aware answer generation via RAG architecture",
        "🖥️ Interactive Streamlit interface for real-time Q&A",
        "🧠 Reduced hallucinations through document-grounded responses"
      ],
      metrics: {
        // accuracy: "86%",
        // responseTime: "<150ms",
        // assessments: "10K+"
      },
      status: "Completed",
      year: "2025"
    },
     {
      title: "AI Vision Pipeline",
      subtitle: "Computer Vision & Automated Enhancement",
      description: "Cutting-edge computer vision pipeline for automated image processing, featuring intelligent background removal, object detection, and AI-powered image enhancement capabilities.",
      longDescription: "A comprehensive computer vision solution that revolutionizes image processing workflows. The pipeline combines multiple deep learning models for semantic segmentation, object detection, and style transfer, while maintaining image quality and metadata integrity throughout the processing chain.",
      technologies: ["TensorFlow", "OpenCV", "SAM", "U-Net", "Python", "FastAPI", "Docker", "LaMA"],
      category: "computer-vision",
      icon: Image,
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      bgPattern: "bg-green-50 dark:bg-green-900/20",
      features: [
        "🎨 Automated background and object removal with pixel-perfect precision",
        "🌈 AI-powered image recolorization using style transfer techniques",
        "📁 Metadata preservation and format integrity across all operations",
        "⚡ Multi-format support (PNG, JPEG, AVIF) with optimized RGB processing",
        "☁️ Cloud-native architecture with scalable processing capabilities"
      ],
      metrics: {
        SSIM: "0.88",
        PSNR: "37dB",
        LPIPS: "0.05",
        DeltaE: "1.2",
        formats: "10+",
        processTime: "<5s"
      },
      status: "Completed",
      year: "2025"
    },
     {
        title: "Skin Cancer Detection",
        subtitle: "Deep Learning & RAG-Based Medical Assistant",
        description: "End-to-end AI system combining EfficientNet-based image classification and a RAG-powered chatbot to support early skin cancer detection and provide reliable, document-grounded medical information.",
        longDescription: "Skin Cancer Detection is a comprehensive medical AI project that integrates computer vision and generative AI to assist users in understanding and identifying potential skin cancer risks. The system uses a pretrained EfficientNet architecture fine-tuned on dermoscopic image datasets to classify skin lesions, while a Retrieval-Augmented Generation (RAG) chatbot answers user questions using trusted skin cancer medical documents. ",
        technologies: ["Python","PyTorch","EfficientNet","Computer Vision","Deep Learning","RAG", "LangChain",  "ChromaDB", "Flask", "Medical Imaging" ],
        category: "ai-ml",
        icon: Brain,
        gradient: "from-emerald-500 via-teal-600 to-cyan-600",
        bgPattern: "bg-emerald-50 dark:bg-emerald-900/20",
        features: [
          "🧠 Fine-tuned EfficientNet pretrained model for skin lesion classification",
          "🖼️ Automated analysis of dermoscopic images (benign vs malignant)",
          "💬 RAG-based medical chatbot answering skin cancer questions using trusted documents",
          "📚 Vector database (ChromaDB) for document retrieval and grounded responses",
          "⚡ Real-time predictions and chatbot responses via Flask API"
        ],
        metrics: {
          accuracy: "90%",
          processTime: "<200ms",
          dataPoints: "25K+ images"
        },
        status: "In Progress",
        year: "2025"
    },
    {
      title: "StressWatch",
      subtitle: " Automatic Stress Detection in Online Posts",
      description: "Advanced AI system leveraging transformer models to analyze social media content and detect psychological stress patterns with high accuracy and real-time processing capabilities.",
      longDescription: "StressWatch represents a breakthrough in mental health technology, combining state-of-the-art NLP with deep learning to create a comprehensive stress detection system. The project utilizes the RoBERTa transformer architecture for nuanced understanding of textual content, while implementing advanced preprocessing techniques with spaCy for optimal performance.",
      technologies: ["Python", "PyTorch", "BERT", "NLP", "spaCy", "Next.js", "CRISP-DM", "Transformers"],
      category: "ai-ml",
      icon: Brain,
      gradient: "from-purple-500 via-purple-600 to-pink-600",
      bgPattern: "bg-purple-50 dark:bg-purple-900/20",
      features: [
        "🧠 Enhanced AI system for social media stress detection with 85% accuracy",
        "🤖 Implemented NLP preprocessing pipelines using spaCy (tokenization, lemmatization, noise removal).",
        "📊 Applied CRISP-DM methodology for structured ML development lifecycle",
        "⚡ Real-time processing with optimized inference pipeline",
        "🎯 Built responsive Next.js interface for seamless user interaction"
      ],
      metrics: {
        accuracy: "85%",
        processTime: "<100ms",
        dataPoints: "50K+"
      },
      status: "Completed",
      year: "2025"
    },
    {
  title: "Depression Detection Platform",
  subtitle: "NLP, Deep Learning & Mental Health Decision Support",
  description: "End-to-end AI-powered platform for early depression detection, combining NLP-based text analysis and the PHQ-9 clinical questionnaire to assess mental health risk and provide personalized recommendations.",
  longDescription: "Depression Detection Platform is an intelligent mental health system designed to support early identification of depressive symptoms. The platform allows users to enter free-text describing their emotional state, which is analyzed using a fine-tuned NLP deep learning model to detect depression indicators. In parallel, users complete the PHQ-9 (Patient Health Questionnaire), a clinically validated 9-question assessment. Based on the combined results, the system classifies depression severity and provides personalized recommendations, such as consulting a mental health professional or practicing targeted well-being exercises.",
  technologies: [
    "Python", "PyTorch","NLP", "Deep Learning","Transformers", "spaCy", "Flask", "PHQ-9" ],
  category: "ai-ml",
  icon: Brain,
  gradient: "from-indigo-500 via-purple-600 to-pink-600",
  bgPattern: "bg-indigo-50 dark:bg-indigo-900/20",
  features: [
    "🧠 NLP-based deep learning model for depression detection from user-written text",
    "📝 Interactive text input page for real-time mental health analysis",
    "📊 Integrated PHQ-9 questionnaire with automatic scoring and severity classification",
    "🎯 Personalized recommendations based on depression level (exercises, self-care, or professional consultation)",
    "⚡ Real-time inference and decision logic served via Flask API"
  ],
  metrics: {
    accuracy: "86%",
    responseTime: "<150ms",
    assessments: "10K+"
  },
  status: "Completed",
  year: "2025"
},

    {
      title: "COVID-19 Analytics Platform",
      subtitle: "Big Data & Predictive Intelligence",
      description: "Comprehensive data analytics platform featuring interactive dashboards and machine learning models for COVID-19 trend analysis and case prediction across multiple countries.",
      longDescription: "A sophisticated big data platform that transforms raw COVID-19 data into actionable insights through advanced analytics and machine learning. The system processes massive datasets using Apache Spark and provides real-time visualizations with predictive capabilities for informed decision-making.",
      technologies: ["MongoDB", "Apache Spark","Databricks", "Python", "MongoDB(Cloud Atlas)", "Plotly", "Matplotlib"],
      category: "data-science",
      icon: BarChart3,
      gradient: "from-blue-500 via-blue-600 to-cyan-600",
      bgPattern: "bg-blue-50 dark:bg-blue-900/20",
      features: [
        "📈 Interactive dashboard for multi-dimensional COVID-19 data exploration",
        "🔮 Collected, processed, and analyzed COVID-19 datasets covering 219 countries using Apache Spark on Databricks for large-scale data processing.",
        "🏗️ Built a linear regression model to predict the number of new COVID-19 cases based on historical time-series data.",
        "📊 Advanced data visualization with real-time updates",
        "🌍 Stored and managed large volumes of structured data in MongoDB Atlas (cloud) for scalable access and querying."
      ],
      metrics: {
        countries: "195+",
        accuracy: "89%",
        dataPoints: "2M+"
      },
      status: "Completed",
      year: "2024"
    },
   
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Zap },
    { id: 'ai-ml', label: 'AI/ML', icon: Brain },
    { id: 'data-science', label: 'Data Science', icon: BarChart3 },
    { id: 'computer-vision', label: 'Computer Vision', icon: Eye }
  ];

  const projectIcons = [
    { icon: Code, position: { top: '10%', left: '5%' }, delay: 0.5 },
    { icon: Database, position: { top: '20%', right: '8%' }, delay: 1 },
    { icon: Network, position: { bottom: '25%', left: '3%' }, delay: 1.5 },
    { icon: Zap, position: { bottom: '15%', right: '10%' }, delay: 2 }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50/30 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Mesh Gradient */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating Project Icons */}
        {projectIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/15 dark:text-blue-500/10"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.15, 0.4, 0.15],
              scale: [0.8, 1.4, 0.8],
              rotate: [0, 180, 360],
              y: [-20, 20, -20]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: item.delay
            }}
          >
            <item.icon className="w-20 h-20" />
          </motion.div>
        ))}

        {/* Code Snippets Background */}
        <div className="absolute inset-0 opacity-5 dark:opacity-3">
          <div className="absolute top-20 left-10 text-xs font-mono text-blue-600 dark:text-blue-400 rotate-12">
            {'</>'}
          </div>
          <div className="absolute top-40 right-20 text-xs font-mono text-purple-600 dark:text-purple-400 -rotate-12">
            {'import tensorflow'}
          </div>
          <div className="absolute bottom-40 left-20 text-xs font-mono text-green-600 dark:text-green-400 rotate-6">
            {'model.predict()'}
          </div>
        </div>

        {/* Floating Particles */}
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-3xl shadow-2xl"
          >
            <Code className="w-12 h-12 text-white" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Showcase of <span className="text-blue-600 dark:text-blue-400 font-semibold">innovative AI/ML solutions</span> that demonstrate 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> technical expertise</span> and 
            <span className="text-green-600 dark:text-green-400 font-semibold"> creative problem-solving</span>
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <Card className={`h-full ${project.bgPattern} border-0 hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  </div>

                  <div className="relative z-10">
                    {/* Project Header with Animation */}
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <motion.div 
                        className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500`}
                      >
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            project.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-700 dark:text-green-300' 
                              : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300'
                          }`}>
                            {project.status}
                          </span>
                        </div>

                        {/* Year Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 text-xs font-semibold bg-white/20 text-white rounded-full backdrop-blur-sm">
                            {project.year}
                          </span>
                        </div>

                        {/* Main Icon */}
                        <motion.div
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: [0, -10, 10, -10, 0],
                            y: [-5, -10, -5]
                          }}
                          transition={{ duration: 0.6 }}
                          className="relative"
                        >
                          <project.icon className="w-24 h-24 text-white drop-shadow-2xl" />
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                            animate={hoveredProject === index ? { scale: [1, 1.5, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>

                        {/* Floating Elements */}
                        <motion.div
                          className="absolute top-6 right-6 text-white/30"
                          animate={{ 
                            rotate: 360,
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 8, repeat: Infinity }}
                        >
                          <Star className="w-6 h-6" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 dark:bg-slate-700/50 rounded-xl">
                        {Object.entries(project.metrics).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-gray-800 dark:text-white">
                              {value}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-lg">
                          🚀 Key Features:
                        </h4>
                        <div className="space-y-2">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-sm text-gray-600 dark:text-gray-300 group-hover:translate-x-2 transition-transform duration-300"
                            >
                              {feature}
                            </motion.div>
                          ))}
                          {project.features.length > 3 && (
                            <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                              +{project.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-white mb-3">
                          🛠️ Tech Stack:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 6).map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1 text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium border hover:border-current transition-all duration-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button 
                          className={`flex-1 bg-gradient-to-r ${project.gradient} hover:scale-105 border-0 text-white font-semibold py-3 transition-all duration-300`}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1 py-3 hover:scale-105 transition-all duration-300 group"
                        >
                          <Play className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="max-w-3xl mx-auto p-10 bg-gradient-to-r from-blue-500 via-purple-600 to-green-500 text-white border-0 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_50%)]" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                More Projects Coming Soon!
              </h3>
              <p className="text-lg opacity-90 mb-6">
                I'm constantly working on new AI/ML projects and innovative solutions. 
                Want to see what I'm building next or collaborate on something amazing?
              </p>
              <motion.div 
                className="flex items-center justify-center text-lg font-semibold"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Let's connect and build the future together
                <ArrowRight className="w-6 h-6 ml-2" />
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};