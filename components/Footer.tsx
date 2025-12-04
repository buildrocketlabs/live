import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-accent-start to-accent-end flex items-center justify-center text-white">
                <Rocket className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-textPrimary">BUILDROCKET Labs</span>
            </Link>
            <p className="text-textSecondary max-w-sm mb-6">
              The accelerated launch partner for ambitious startups. We design, build, and scale your tech stack so you can focus on growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-textSecondary hover:text-accent-start transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-textSecondary hover:text-accent-start transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-textSecondary hover:text-accent-start transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-textSecondary hover:text-accent-start text-sm transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-textSecondary hover:text-accent-start text-sm transition-colors">AI Integration</Link></li>
              <li><Link to="/services" className="text-textSecondary hover:text-accent-start text-sm transition-colors">Brand Systems</Link></li>
              <li><Link to="/how-it-works" className="text-textSecondary hover:text-accent-start text-sm transition-colors">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/work" className="text-textSecondary hover:text-accent-start text-sm transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="text-textSecondary hover:text-accent-start text-sm transition-colors">Contact</Link></li>
              <li><a href="#" className="text-textSecondary hover:text-accent-start text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-textSecondary hover:text-accent-start text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textSecondary text-sm mb-4 md:mb-0">
            © 2025 BuildRocket Labs. All rights reserved.
          </p>
          <p className="text-textSecondary text-sm flex items-center">
            Made by founders, for founders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;