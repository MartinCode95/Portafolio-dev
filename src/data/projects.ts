import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'infracore',
    title: 'InfraCore – Landing Page Profesional',
    description: 'Landing page responsiva con formulario de contacto (Nodemailer + Brevo API), seguridad con Helmet y Express Rate Limit, deploy full-stack con CDN global.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Vercel', 'Render'],
    githubUrl: 'https://github.com/Martin-g95',
    featured: true,
  },
  {
    id: 'portafolio',
    title: 'Portafolio Dev — Este mismo sitio',
    description: 'Portafolio construido con metodología SDD. Cada componente fue especificado antes de generarse. Revisión automática con GGA (Claude como provider).',
    stack: ['React 19', 'TypeScript', 'Vite 8', 'Tailwind CSS v4', 'Claude Code', 'GGA'],
    githubUrl: 'https://github.com/MartinCode95/Portafolio-dev',
    featured: true,
  },
  {
    id: 'real-estate',
    title: 'Plataforma Inmobiliaria',
    description: 'App con stack Next.js + Supabase + IA generativa (fal.ai). Generación de imágenes para propiedades via MCP Servers.',
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'fal.ai', 'MCP Servers', 'Claude Code'],
    featured: true,
  },
]
