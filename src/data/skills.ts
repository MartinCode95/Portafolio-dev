import type { SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Sass', 'Vite'],
  },
  {
    category: 'Backend & DevOps',
    skills: ['Node.js', 'Java', 'Python', 'Nodemailer', 'Brevo API', 'Vercel', 'Render', 'GitHub Actions'],
  },
  {
    category: 'Bases de Datos',
    skills: ['MySQL', 'PostgreSQL', 'Neo4j', 'Prisma', 'Firebase', 'Supabase'],
  },
  {
    category: 'SAP Security',
    skills: ['SU01', 'SU10', 'PFCG', 'STMS', 'SU53', 'SU24', 'ST01', 'STAUTHTRACE', 'SUIM', 'SE16N'],
    secondary: true,
  },
  {
    category: 'IA & Claude Code',
    skills: ['Agentes', 'Skills', 'MCP Servers', 'Context7', 'fal.ai', 'Playwright'],
  },
  {
    category: 'Herramientas',
    skills: ['Git', 'GitHub', 'VSCode', 'Claude Code', 'Cursor', 'Antigravity', 'OpenCode'],
  },
]
