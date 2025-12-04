import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Globe, Cpu, Palette, ArrowRight, CheckCircle, Zap, Shield, Rocket } from 'lucide-react';
import Button from '../components/Button';
import { TESTIMONIALS, SERVICES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Premium easing curve for smooth "Opal-like" feel
  const easeCurve = [0.16, 1, 0.3, 1];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: easeCurve }
    }
  };

  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  // Hero animation: Slide up and fade in over 0.8s
  const heroItem = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: easeCurve }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent-start/20 rounded-full blur-[100px] animate-blob" />
            <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-accent-end/10 rounded-full blur-[80px] animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={heroContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={heroItem}>
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent-start text-xs font-bold tracking-wider mb-6">
                  ACCEPTING NEW STARTUPS FOR Q2 2025
                </span>
              </motion.div>
              
              <motion.h1 variants={heroItem} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Launch Your Startup in <br />
                <span className="bg-gradient-to-r from-accent-start to-accent-end text-transparent bg-clip-text">
                  Weeks, Not Months
                </span>
              </motion.h1>
              
              <motion.p variants={heroItem} className="text-xl md:text-2xl text-textSecondary mb-10 max-w-2xl mx-auto leading-relaxed">
                Get production-ready websites, AI integration, and brand systems that actually work. One agency. No fragmentation. No waiting.
              </motion.p>
              
              <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" icon onClick={() => navigate('/contact')}>
                  Schedule Discovery Call
                </Button>
                <Button variant="secondary" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Here's The Reality For Founders</h2>
            <p className="text-textSecondary text-lg">You're building the future, but you're stuck in the present.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Agency Trap", desc: "Traditional agencies want enterprise budgets and 3-month timelines. You have 4 weeks and need to ship." },
              { title: "The AI Gap", desc: "You know AI could cut ops by 40%, but you don't have time to engineer the prompts and API connections." },
              { title: "The Brand Blur", desc: "Your product is great, but your brand looks like a generic template. Investors notice." }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: easeCurve }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 mb-6">
                   <span className="text-2xl font-bold">!</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                <p className="text-textSecondary leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section (New) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Founders Choose Us</h2>
            <p className="text-textSecondary text-lg max-w-2xl mx-auto">We aren't a traditional agency. We are a startup accelerator partner.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 mx-auto">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Rapid Deployment</h3>
                <p className="text-textSecondary text-center">We use a battle-tested stack to skip the boilerplate and build your core value immediately.</p>
             </div>
             <div className="p-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 mx-auto">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Integrated Growth</h3>
                <p className="text-textSecondary text-center">Web, AI, and Brand aren't silos. We build them as one cohesive engine for growth.</p>
             </div>
             <div className="p-6">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-6 mx-auto">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Founder Mindset</h3>
                <p className="text-textSecondary text-center">We optimize for conversion, retention, and scalability. Not just pretty pixels.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 relative bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">We Do This For Startups. Specifically.</h2>
             <p className="text-textSecondary text-lg max-w-2xl">Focusing on the three pillars that generate escape velocity.</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div 
                variants={item} 
                key={service.id} 
                className="group relative bg-secondary border border-white/10 rounded-2xl p-8 transition-shadow"
                whileHover={{ 
                  y: -8, 
                  scale: 1.02, 
                  boxShadow: "0 20px 40px -15px rgba(255, 107, 53, 0.2)",
                  transition: { duration: 0.2, ease: "easeOut" } 
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-start to-accent-end opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
                
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-accent-start mb-6 group-hover:bg-accent-start group-hover:text-white transition-colors">
                  {service.icon === 'globe' && <Globe className="w-7 h-7" />}
                  {service.icon === 'cpu' && <Cpu className="w-7 h-7" />}
                  {service.icon === 'palette' && <Palette className="w-7 h-7" />}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="flex items-center text-sm font-semibold text-accent-start mb-4">
                  <span>{service.timeline}</span>
                  <span className="mx-2">•</span>
                  <span>{service.valueProp}</span>
                </div>
                
                <p className="text-textSecondary mb-8 min-h-[80px]">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm text-textSecondary">
                      <CheckCircle className="w-4 h-4 mr-3 text-accent-start" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <LinkWrapper to="/services">
                  <span className="text-white font-semibold flex items-center group-hover:text-accent-start transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </LinkWrapper>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="how-it-works" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-textSecondary">Simple, transparent, and fast.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {['Discovery', 'Creation', 'Launch', 'Scale'].map((step, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-primary border border-white/10 p-6 rounded-xl text-center md:text-left shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: easeCurve }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-start text-white font-bold mb-4 shadow-lg shadow-accent-start/30">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step}</h3>
                  <p className="text-sm text-textSecondary">
                    {idx === 0 && "We dig deep into your vision and constraints."}
                    {idx === 1 && "Weekly sprints, rapid prototypes, real code."}
                    {idx === 2 && "Testing, optimization, and safe deployment."}
                    {idx === 3 && "Retainer support to help you grow fast."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-center mb-16">Startups We've Launched</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((test, i) => (
               <motion.div 
                 key={test.id} 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 whileHover={{ 
                   scale: 1.05, 
                   boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
                   borderColor: "rgba(255,255,255,0.2)"
                 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.4 }}
                 className="bg-white/5 border border-white/10 p-8 rounded-2xl cursor-default transition-all duration-300"
               >
                 <div className="flex items-center space-x-1 mb-6">
                   {[1,2,3,4,5].map(star => (
                     <svg key={star} className="w-5 h-5 text-accent-start fill-current" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
                 <p className="text-lg text-textPrimary italic mb-6">"{test.quote}"</p>
                 <div className="flex items-center">
                   <img src={test.avatarUrl} alt={test.author} className="w-12 h-12 rounded-full mr-4 border-2 border-accent-start" />
                   <div>
                     <p className="font-bold text-white">{test.author}</p>
                     <p className="text-sm text-textSecondary">{test.role}, {test.company}</p>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="bg-gradient-to-r from-accent-start to-accent-end rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-0" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Launch?</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Let's see if we're a fit. 15-minute call to understand your vision. No sales pitch, just strategy.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-accent-start hover:bg-gray-100 border-none"
                onClick={() => navigate('/contact')}
              >
                Schedule Discovery Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const LinkWrapper: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => {
    const navigate = useNavigate();
    return <div onClick={() => navigate(to)} className="cursor-pointer inline-block">{children}</div>;
}

export default Home;