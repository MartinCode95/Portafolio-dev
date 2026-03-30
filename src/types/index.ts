export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
  wip?: boolean
}

export interface SkillCategory {
  category: string
  skills: string[]
  secondary?: boolean
}

export interface Education {
  id: string
  institution: string
  degree: string
  status: 'completed' | 'in-progress'
  year?: string
}

export interface Personal {
  name: string
  role: string
  location: string
  email: string
  linkedin: string
  github: string
  phone: string
  bio: string
}
