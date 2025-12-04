import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Clock } from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'framer-motion';

// Strict Validation Schema per requirements
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);
    
    try {
      const response = await fetch("https://formspree.io/f/xovgldar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        const result = await response.json();
        if (result.errors) {
            setSubmitError(result.errors.map((e: any) => e.message).join(', '));
        } else {
            setSubmitError("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      setSubmitError("Network connection failed. Please try again.");
    }
  };

  // Focus: Border accent color + 3px ring with accent color at 20% opacity
  const inputClasses = "w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white placeholder-textSecondary/50 focus:outline-none focus:border-[#00CED1] focus:ring-[3px] focus:ring-[#00CED1]/20 transition-all duration-200";
  const labelClasses = "block text-xs font-bold text-textSecondary uppercase tracking-wider mb-2";
  const errorClasses = "text-red-400 text-xs mt-1 font-medium";

  // Load Calendly script dynamically
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head?.appendChild(script);

    return () => {
      // Cleanup if needed, though Calendly script is global
    };
  }, []);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Let's Build Something Legendary
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-textSecondary"
          >
            Choose your preferred way to connect with us.
          </motion.p>
        </div>

        {/* 3-Column Layout: Stack on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMN 1: WhatsApp (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-secondary border border-white/10 rounded-2xl p-8 flex flex-col h-full"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center text-[#25D366] mb-4">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Chat on WhatsApp</h2>
              <p className="text-textSecondary mb-6">Instant messaging. Get a response in 5 minutes.</p>
              
              <a 
                href="https://wa.me/919880973453?text=Hi%20BuildRocket%20Labs%2C%20I%27d%20like%20to%20discuss%20my%20startup%20brand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#1FAE56] text-white font-bold py-3 px-6 rounded-lg transition-colors mb-4"
              >
                Message us on WhatsApp
              </a>
              
              <div className="text-center text-sm text-textSecondary mb-6 font-mono">
                +91 9880973453
              </div>

              <ul className="space-y-3 text-sm text-textSecondary">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-[#25D366] mr-2" /> Instant response</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-[#25D366] mr-2" /> Direct communication</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-[#25D366] mr-2" /> No form friction</li>
              </ul>
            </div>
            
            <div className="mt-auto pt-6 border-t border-white/10 text-xs text-textSecondary flex items-center justify-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Available Mon-Fri, 9 AM - 6 PM IST</span>
            </div>
          </motion.div>

          {/* COLUMN 2: Calendly (Center) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-secondary border border-white/10 rounded-2xl p-2 md:p-4 h-full flex flex-col overflow-hidden"
          >
            <div className="text-center py-4">
              <h2 className="text-xl font-bold">Schedule a Call</h2>
              <p className="text-sm text-textSecondary">Book a personalized consultation</p>
            </div>
            
            <div className="flex-grow relative bg-white rounded-lg overflow-hidden">
               {/* Calendly Inline Widget */}
               <div 
                 className="calendly-inline-widget" 
                 data-url="https://calendly.com/buildrocketlabs" 
                 style={{ minWidth: '320px', height: '100%', width: '100%' }} 
               />
            </div>
          </motion.div>

          {/* COLUMN 3: Contact Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-secondary border border-white/10 rounded-2xl p-8 h-full"
          >
            <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
            <p className="text-textSecondary mb-8">Prefer email? Fill out the form below.</p>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                <p className="text-textSecondary mb-8">
                  Thank you! We'll get back to you within 24 hours.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" fullWidth>
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div>
                  <label htmlFor="name" className={labelClasses}>Name</label>
                  <input 
                    id="name"
                    {...register("name")}
                    className={`${inputClasses} ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>Email</label>
                  <input 
                    id="email"
                    {...register("email")}
                    className={`${inputClasses} ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="company" className={labelClasses}>Company <span className="text-textSecondary/50 font-normal normal-case">(Optional)</span></label>
                  <input 
                    id="company"
                    {...register("company")}
                    className={inputClasses}
                    placeholder="Your startup name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>Message</label>
                  <textarea 
                    id="message"
                    {...register("message")}
                    rows={6}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your startup..."
                  />
                  {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
                </div>

                {submitError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200 text-sm text-center"
                  >
                    {submitError}
                  </motion.div>
                )}

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    fullWidth 
                    disabled={isSubmitting}
                    className="bg-accent-start hover:bg-accent-end shadow-lg shadow-accent-start/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-textSecondary">
                    We respect your privacy. No spam, ever.
                  </p>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;