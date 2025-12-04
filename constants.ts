import { NavItem, Service, Testimonial, CaseStudy, ProcessStep, TeamMember } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Websites That Convert',
    description: 'High-converting landing pages designed for founders who want speed and results. Built on React/Next.js.',
    timeline: '4 Weeks',
    valueProp: 'Launch Package',
    features: ['Conversion Strategy', 'SEO Optimization', 'CMS Integration', 'Analytics Setup'],
    icon: 'globe',
  },
  {
    id: 'ai',
    title: 'AI That Works',
    description: 'Turn ideas into implemented AI workflows. Strategy + 2-3 quick wins that save your team 20+ hours/week.',
    timeline: '4-12 Weeks',
    valueProp: 'Scale Package',
    features: ['Workflow Audit', 'Custom AI Agents', 'Automation Setup', 'Team Training'],
    icon: 'cpu',
  },
  {
    id: 'brand',
    title: 'Brand That Sticks',
    description: 'Everything a startup brand needs to look credible and move fast. Logo, colors, fonts, templates.',
    timeline: '4 Weeks',
    valueProp: 'Identity Package',
    features: ['Logo Design', 'Visual Identity', 'Social Templates', 'Pitch Deck Assets'],
    icon: 'palette',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "BuildRocket cut our GTM timeline by 6 weeks. Unreal speed without sacrificing quality.",
    author: "Sarah Jenkins",
    role: "CEO",
    company: "FinFlow",
    avatarUrl: "https://picsum.photos/id/1011/100/100"
  },
  {
    id: '2',
    quote: "First time we've had a cohesive brand AND working AI. Best decision we made this year.",
    author: "Marcus Chen",
    role: "Founder",
    company: "EduScale",
    avatarUrl: "https://picsum.photos/id/1025/100/100"
  },
  {
    id: '3',
    quote: "They don't just build; they understand the startup grind. The conversion lift paid for itself in month one.",
    author: "Elena Rodriguez",
    role: "COO",
    company: "HealthVibe",
    avatarUrl: "https://picsum.photos/id/338/100/100"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'finflow',
    title: 'FinFlow SaaS Launch',
    category: 'Web + Brand',
    metric: '22% Conversion Lift',
    description: 'Redesigned the entire onboarding flow and marketing site for a Series A fintech.',
    imageUrl: 'https://picsum.photos/id/1/800/600'
  },
  {
    id: 'eduscale',
    title: 'EduScale AI Integration',
    category: 'AI Ops',
    metric: '40hrs/week Saved',
    description: 'Implemented automated student support agents and content generation workflows.',
    imageUrl: 'https://picsum.photos/id/3/800/600'
  },
  {
    id: 'healthvibe',
    title: 'HealthVibe Rebrand',
    category: 'Branding',
    metric: '3x Brand Recall',
    description: 'Complete visual identity overhaul for a consumer health app.',
    imageUrl: 'https://picsum.photos/id/119/800/600'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dig deep into your vision, market, and constraints. No fluff, just strategy.'
  },
  {
    step: '02',
    title: 'Creation',
    description: 'We design, build, and integrate. Weekly sprints, transparent progress.'
  },
  {
    step: '03',
    title: 'Launch',
    description: 'Testing, optimization, and go-live. We ensure everything breaks the atmosphere safely.'
  },
  {
    step: '04',
    title: 'Scale',
    description: 'Retainer support to optimize and grow as you hit escape velocity.'
  }
];