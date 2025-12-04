import React from 'react';
import { CASE_STUDIES } from '../constants';
import Button from '../components/Button';
import { ArrowUpRight } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Built to Scale</h1>
          <p className="text-xl text-textSecondary max-w-2xl">
            Real results for real startups. We measure success in conversion lift, time saved, and funding secured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6 border border-white/10">
                <img 
                  src={study.imageUrl} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="text-accent-start font-bold text-sm">{study.metric}</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-accent-start text-sm font-bold tracking-wider mb-2 uppercase">{study.category}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-start transition-colors">{study.title}</h3>
                  <p className="text-textSecondary max-w-md">{study.description}</p>
                </div>
                <div className="p-2 rounded-full border border-white/20 group-hover:bg-white group-hover:text-primary transition-all">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-24 text-center border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold mb-6">Want to be our next case study?</h2>
             <Button size="lg" onClick={() => window.location.href='/#/contact'}>Start Project</Button>
        </div>
      </div>
    </div>
  );
};

export default Work;