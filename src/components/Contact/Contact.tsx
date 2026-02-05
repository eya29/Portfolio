import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Calendar, Globe } from 'lucide-react';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';

export const Contact: React.FC = () => {
  const contactActions = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Drop me a line for collaborations or opportunities",
      action: "mailto:eyayounes29@gmail.com?subject=Portfolio Contact&body=Hi Eya, I'd like to discuss...",
      buttonText: "Send Email",
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Quick questions or informal discussions",
      action: "https://wa.me/21652244735?text=Hi Eya, I found your portfolio and would like to connect!",
      buttonText: "WhatsApp",
      gradient: "from-green-500 to-green-600",
      hoverGradient: "hover:from-green-600 hover:to-green-700"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a meeting to discuss projects in detail",
      action: "mailto:eyayounes29@gmail.com?subject=Meeting Request&body=Hi Eya, I'd like to schedule a call to discuss...",
      buttonText: "Book Call",
      gradient: "from-purple-500 to-purple-600",
      hoverGradient: "hover:from-purple-600 hover:to-purple-700"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "eyayounes29@gmail.com",
      href: "mailto:eyayounes29@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 52 244 735",
      href: "tel:+21652244735"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sousse, Tunisia",
      href: null
    },
    {
      icon: Globe,
      label: "Timezone",
      value: "GMT+1 (CET)",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/eya29",
      color: "hover:text-gray-800 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/eya-younes/",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your ideas into intelligent solutions? I'm always excited to discuss 
            innovative AI/ML projects and explore new opportunities.
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Contact Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                  <div className={`w-16 h-16 bg-gradient-to-r ${action.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {action.description}
                  </p>
                  <Button 
                    onClick={() => window.open(action.action, '_blank')}
                    className={`w-full bg-gradient-to-r ${action.gradient} ${action.hoverGradient} text-white border-0 py-3 font-semibold text-lg transition-all duration-300 transform group-hover:scale-105`}
                  >
                    {action.buttonText}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information & Social Links */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Contact Information
                  </h3>
                </div>
                
                <div className="grid gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center p-4 rounded-xl bg-gray-50 dark:bg-slate-700/50 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-800 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-lg"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-800 dark:text-white font-semibold text-lg">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-500 h-full">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Connect With Me
                  </h3>
                </div>
                
                <div className="grid gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className={`flex items-center p-6 rounded-xl bg-gray-50 dark:bg-slate-700/50 transition-all duration-300 ${social.bgColor} group`}
                    >
                      <div className="w-14 h-14 bg-gray-200 dark:bg-slate-600 rounded-lg flex items-center justify-center mr-6 group-hover:bg-gray-300 dark:group-hover:bg-slate-500 transition-colors duration-300">
                        <social.icon className={`w-7 h-7 text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300`} />
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-gray-800 dark:text-white">
                          {social.label}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Follow my journey & connect
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Additional Social Info */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Let's Stay Connected
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Follow my journey in AI/ML development, get updates on my latest projects, 
                      and join a community of tech enthusiasts passionate about innovation.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Ready to start your next AI project?
          </p>
          <Button 
            onClick={() => window.open('mailto:eyayounes29@gmail.com?subject=Project Collaboration&body=Hi Eya, I have an exciting AI/ML project and would love to collaborate with you.', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-xl font-bold border-0 transition-all duration-300 transform hover:scale-105"
          >
            <Send className="w-6 h-6 mr-3" />
            Let's Talk Business
          </Button>
        </motion.div>
      </div>
    </section>
  );
};