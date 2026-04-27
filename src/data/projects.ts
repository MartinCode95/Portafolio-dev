import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'real-estate',
    title: 'Inmobiliaria Web — Base Comercial Adaptable',
    description: 'Proyecto personal inmobiliario full-stack que desarrollé como base comercial reutilizable y lista para vender. Incluye catálogo de propiedades, búsqueda, panel de gestión y una base técnica preparada para adaptar, revender y desplegar para distintas inmobiliarias o corredores.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    githubUrl: 'https://github.com/MartinCode95/inmobiliaria-web',
    liveUrl: 'https://inmobiliaria-galeano.vercel.app/',
    imageUrl: `${import.meta.env.BASE_URL}real-estate-galeano.png`,
    featured: true,
  },
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
]
