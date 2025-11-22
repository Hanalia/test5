import { Project, Skill } from './types';

export const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Financial',
    description: 'A real-time crypto visualization dashboard utilizing D3.js and WebSockets for sub-millisecond data updates.',
    tags: ['React', 'D3.js', 'TypeScript', 'WebSockets'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    link: '#'
  },
  {
    id: '2',
    title: 'Aether Lens',
    description: 'AI-powered image analysis tool capable of detecting anomalies in manufacturing lines using computer vision.',
    tags: ['Python', 'TensorFlow', 'React', 'Gemini API'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    link: '#'
  },
  {
    id: '3',
    title: 'Void Commerce',
    description: 'Headless e-commerce solution built for extreme performance and SEO optimization.',
    tags: ['Next.js', 'GraphQL', 'Stripe', 'Redis'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Three.js / WebGL', level: 85, category: 'design' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'GenAI Integration', level: 88, category: 'tools' },
  { name: 'UI/UX Design', level: 75, category: 'design' },
];

export const ABOUT_TEXT = `
I am a creative technologist specializing in building immersive web experiences. 
With a background in both design and engineering, I bridge the gap between aesthetics and functionality. 
My work focuses on performance, interaction, and pushing the boundaries of what's possible in the browser.
Currently exploring the intersection of 3D web graphics and Generative AI.
`;

export const CONTACT_EMAIL = "hello@lumina.dev";
