import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'base-it',
    title: 'Base-IT — Landing Page Corporativa',
    description: 'Primera venta real de mi producto InfraCore, adaptado para una consultora IT argentina especializada en infraestructura y SAP BASIS. Incorporé formulario de doble confirmación por email, sanitización XSS/SQLi, rate limiting y SEO con Schema.org según los requisitos del cliente.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Brevo API', 'Vercel'],
    githubUrl: 'https://github.com/MartinCode95/Base-IT',
    liveUrl: 'https://base-it-five.vercel.app/',
    imageUrl: `${import.meta.env.BASE_URL}BASE-IT.png`,
    featured: true,
  },
  {
    id: 'infracore',
    title: 'InfraCore – Landing Page Profesional',
    description: 'Landing page profesional que desarrollé como producto propio — formulario de contacto con Nodemailer + Brevo API, seguridad con Helmet y Express Rate Limit, deploy full-stack en Vercel + Render. El mismo producto sirvió de base para una venta real a un cliente.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Vercel', 'Render'],
    githubUrl: 'https://github.com/Martin-g95',
    imageUrl: `${import.meta.env.BASE_URL}InfraCore.png`,
    featured: true,
  },
  {
    id: 'portafolio',
    title: 'Portafolio Dev — Este mismo sitio',
    description: 'Portafolio construido con metodología SDD. Cada componente fue especificado antes de generarse. Revisión automática con GGA (Claude como provider).',
    stack: ['React 19', 'TypeScript', 'Vite 8', 'Tailwind CSS v4', 'Claude Code', 'GGA'],
    githubUrl: 'https://github.com/MartinCode95/Portafolio-dev',
    imageUrl: `${import.meta.env.BASE_URL}PortaFolio.png`,
    featured: true,
  },
  {
    id: 'real-estate',
    title: 'Plataforma Inmobiliaria',
    description: 'App con stack Next.js + Supabase + IA generativa (fal.ai). Generación de imágenes para propiedades via MCP Servers.',
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'fal.ai', 'MCP Servers', 'Claude Code'],
    featured: true,
    wip: true,
  },
]
