import React from 'react';
import { SERVICES } from '../constants';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Check, Globe, Cpu, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Complete Tech Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-textSecondary max-w-2xl mx-auto"
          >
            Choose the specific service you need, or combine them for a full launch acceleration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-secondary border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              whileHover={{ 
                scale: 1.02, 
                y: -8, 
                boxShadow: "0 20px 40px -15px rgba(255, 107, 53, 0.2)",
                transition: { duration: 0.2, ease: "easeOut" } 
              }}
            >
              <div className="flex-1">
                <div className="inline-block px-4 py-1 rounded-full bg-accent-start/10 text-accent-start font-bold text-sm mb-6">
                  {service.timeline}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-textSecondary mb-8 leading-relaxed">
                  {service.description}
                  <br /><br />
                  We don't just "deliver". We build systems that scale. Whether it's a Next.js frontend or a Python-based AI agent, code quality is enterprise-grade from Day 1.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center">
                      <Check className="w-5 h-5 text-accent-start mr-3" />
                      <span className="text-textPrimary">{feat}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  {/* Pricing removed, focusing on call to action */}
                  <Button onClick={() => navigate('/contact')}>Get Custom Proposal</Button>
                </div>
              </div>
              
              <div className="flex-1 w-full h-full min-h-[300px] bg-white/5 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                 {/* Visual Placeholder for Service */}
                 <div className="absolute inset-0 bg-gradient-to-br from-accent-start/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
                 <div className="text-center z-10 p-8">
                    <div className="mb-4 text-white opacity-80 flex justify-center">
                        {service.icon === 'globe' && <Globe className="w-24 h-24 stroke-[1.5]" />}
                        {service.icon === 'cpu' && <Cpu className="w-24 h-24 stroke-[1.5]" />}
                        {service.icon === 'palette' && <Palette className="w-24 h-24 stroke-[1.5]" />}
                    </div>
                    <p className="text-sm font-mono text-textSecondary uppercase tracking-widest">{service.valueProp}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-white/5 rounded-2xl p-12 text-center"
        >
            <h2 className="text-2xl font-bold mb-4">Not sure what you need?</h2>
            <p className="text-textSecondary mb-8">Most founders start with a Discovery Call to map out their tech roadmap.</p>
            <Button variant="outline" onClick={() => navigate('/contact')}>Schedule Free Consult</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;