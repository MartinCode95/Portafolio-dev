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
    githubUrl: 'https://github.com/MartinCode95',
    imageUrl: `${import.meta.env.BASE_URL}InfraCore.png`,
    featured: true,
  },
  {
    id: 'real-estate',
    title: 'Plataforma Inmobiliaria',
    description: 'Plataforma inmobiliaria full-stack con Next.js y Supabase. Gestión de propiedades, autenticación y base de datos en tiempo real. En desarrollo activo.',
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript', 'Claude Code'],
    featured: true,
    wip: true,
  },
]
