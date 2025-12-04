export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  timeline: string;
  features: string[];
  icon: 'globe' | 'cpu' | 'palette';
  valueProp: string; // Added to replace price with value
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  metric: string;
  description: string;
  imageUrl: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}