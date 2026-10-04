export interface Project {
  id: string;
  title: string;
  category: 'Power BI / SQL' | 'Python / EDA' | 'AI & Automation';
  technologies: string[];
  description: string;
  features: string[];
  githubUrl?: string;
  visualType: 'dashboard' | 'eda' | 'architecture';
  architectureSteps?: { from: string; to: string; label: string }[];
  dimensions?: string[];
  mockStats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period?: string;
  responsibilities: string[];
  keyHighlight?: string;
  visualType: 'workflow' | 'hardware-ai';
  modules?: string[];
  connections?: { from: string; to: string }[];
  tags: string[];
}

export interface Education {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  coursework: { name: string; category: 'core' | 'math' | 'applied' }[];
}

export interface SkillItem {
  name: string;
  isPrimary?: boolean;
}

export interface SkillCategory {
  title: string;
  categoryNumber: number;
  skills: SkillItem[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface Achievement {
  title: string;
  rank: string;
  badgeType: 'gold' | 'silver' | 'bronze' | 'cyan';
  category: string;
  description?: string;
}

export interface CareerPillar {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}
