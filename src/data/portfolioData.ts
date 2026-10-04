import type { 
  Project, 
  Experience, 
  Education, 
  SkillCategory, 
  WorkflowStep, 
  Achievement, 
  CareerPillar 
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Evuri Harika',
  eyebrow: 'DATA SCIENCE • ANALYTICS • AI AUTOMATION',
  headline: 'Turning Data Into Decisions. Building Intelligent Solutions.',
  positioning: 'Data Science Student | Data Analyst | AI & Automation Enthusiast',
  supportingText: "I'm Harika, a Computer Science student specializing in Data Science, passionate about transforming data into meaningful insights and building practical AI-powered solutions.",
  brandQuote: 'Turning data into insights and ideas into practical technology.',
  aboutBio: "I am a Computer Science undergraduate specializing in Data Science with practical experience in data visualization, AI-powered workforce automation, REST APIs, and emerging technologies. My focus centers on transforming raw data into clear, actionable insights through structured analysis, dynamic visualizations, and automated solutions. I enjoy bridging analytical exploration with practical software engineering to solve real-world problems.",
  interests: [
    'Data Analytics',
    'Data Visualization',
    'AI-Powered Solutions',
    'Automation',
    'Practical Problem Solving'
  ],
  links: {
    github: 'https://github.com/Harika2218',
    linkedin: 'https://linkedin.com/in/harikaevuri',
    email: 'evuriharika@gmail.com',
  },
  location: 'India',
  availability: 'Open for Data Science & Analytics Internships'
};

export const EDUCATION_DATA: Education = {
  institution: 'Mohan Babu University',
  degree: 'Bachelor of Technology',
  specialization: 'Computer Science — Specialization in Data Science',
  period: 'August 2024 – May 2028',
  coursework: [
    { name: 'Data Structures', category: 'core' },
    { name: 'Statistics', category: 'math' },
    { name: 'Operating Systems', category: 'core' },
    { name: 'Database Management', category: 'core' },
    { name: 'Advanced Excel', category: 'applied' },
    { name: 'Data Science', category: 'applied' },
    { name: 'Probability', category: 'math' },
    { name: 'Cloud Computing', category: 'applied' }
  ]
};

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'infosys-springboard',
    company: 'Infosys Springboard Internship 7.0',
    role: 'Data Visualization Intern',
    period: 'Internship 7.0',
    keyHighlight: 'AI-Powered Workforce Automation System for 200 synthetic employees',
    responsibilities: [
      'Worked in an Agile methodology to develop an AI-Powered Workforce Management Automation System for 200 synthetic employees.',
      'Developed data-driven modules for employee management, attendance, leave, payroll, performance monitoring, and workforce planning.',
      'Implemented REST APIs using FastAPI to provide structured access to workforce management data and automation modules.'
    ],
    visualType: 'workflow',
    modules: [
      'Employees',
      'Attendance',
      'Leave',
      'Payroll',
      'Performance',
      'Workforce Planning'
    ],
    tags: ['FastAPI', 'Agile', 'Data Visualization', 'Automation', 'Workforce System', 'REST APIs']
  },
  {
    id: 'aatonovaz-technologies',
    company: 'AatonovaZ Technologies Private Limited',
    role: 'Technical Intern',
    period: 'Internship',
    keyHighlight: 'Software + AI + Hardware Integration',
    responsibilities: [
      'Worked on technical projects involving automation, AI tools, and emerging technologies to develop practical solutions.',
      'Explored and implemented IoT-based solutions using Arduino and Raspberry Pi.',
      'Utilized AI-powered development tools and vibe coding approaches to accelerate prototyping, development, and problem-solving.',
      'Gained hands-on experience integrating software, AI tools, and hardware components to build technology-driven solutions.'
    ],
    visualType: 'hardware-ai',
    connections: [
      { from: 'Python', to: 'AI Tools' },
      { from: 'AI Tools', to: 'Arduino' },
      { from: 'Arduino', to: 'Raspberry Pi' },
      { from: 'Raspberry Pi', to: 'Python' }
    ],
    tags: ['Python', 'AI Tools', 'Arduino', 'Raspberry Pi', 'IoT Solutions', 'Vibe Coding', 'Automation']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'customer-behavior-analysis',
    title: 'Customer Behavior Analysis Dashboard',
    category: 'Power BI / SQL',
    technologies: ['Power BI', 'Excel', 'SQL'],
    description: 'An interactive Power BI dashboard designed to analyze customer purchasing behavior and business performance.',
    features: [
      'Sales analysis',
      'Revenue analysis',
      'Customer demographics',
      'Subscription status',
      'Product categories',
      'Dynamic visualizations',
      'Interactive DAX filters'
    ],
    githubUrl: 'https://github.com/Harika2218',
    visualType: 'dashboard',
    dimensions: ['Sales & Revenue', 'Demographics', 'Subscriptions', 'Product Categories', 'DAX Measures'],
    mockStats: [
      { label: 'Primary Tool', value: 'Power BI & DAX' },
      { label: 'Data Source', value: 'SQL & Cleaned Excel' },
      { label: 'Core View', value: 'Interactive Filters' }
    ]
  },
  {
    id: 'netflix-movie-analysis',
    title: 'Netflix Movie Analysis',
    category: 'Python / EDA',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    description: 'Exploratory data analysis of the Netflix Movies and TV Shows dataset to uncover content and viewing trends.',
    features: [
      'Content distribution analysis',
      'Release year trend examination',
      'Genre distribution categorization',
      'Content rating breakdown',
      'Geographical / country distribution'
    ],
    githubUrl: 'https://github.com/Harika2218',
    visualType: 'eda',
    dimensions: ['Genres', 'Release years', 'Ratings', 'Countries', 'Content distribution'],
    mockStats: [
      { label: 'Environment', value: 'Jupyter / Python' },
      { label: 'Data Libraries', value: 'Pandas & NumPy' },
      { label: 'Visualization', value: 'Matplotlib & Seaborn' }
    ]
  },
  {
    id: 'ai-workforce-management',
    title: 'AI-Powered Workforce Management Automation System',
    category: 'AI & Automation',
    technologies: ['Python', 'MongoDB', 'FastAPI'],
    description: 'A workforce management system designed to automate employee, attendance, leave, payroll, performance, and workforce planning processes.',
    features: [
      'Employee management',
      'Attendance tracking',
      'Leave management',
      'Payroll automation',
      'Performance monitoring',
      'Workforce planning',
      'Synthetic employee dataset (200 employees)',
      'MongoDB data management',
      'REST APIs using FastAPI'
    ],
    githubUrl: 'https://github.com/Harika2218',
    visualType: 'architecture',
    architectureSteps: [
      { from: 'Frontend', to: 'FastAPI REST API', label: 'JSON / HTTP' },
      { from: 'FastAPI REST API', to: 'MongoDB', label: 'Data Persist' },
      { from: 'MongoDB', to: 'Workforce Modules', label: 'Orchestration' }
    ],
    dimensions: ['Employee', 'Attendance', 'Leave', 'Payroll', 'Performance', 'Planning'],
    mockStats: [
      { label: 'Supported Scope', value: '200 Synthetic Employees' },
      { label: 'Backend Layer', value: 'FastAPI REST API' },
      { label: 'Database', value: 'MongoDB' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'PROGRAMMING',
    categoryNumber: 1,
    skills: [
      { name: 'Python', isPrimary: true },
      { name: 'Java', isPrimary: false },
      { name: 'SQL', isPrimary: true }
    ]
  },
  {
    title: 'DATA ANALYTICS',
    categoryNumber: 2,
    skills: [
      { name: 'Data Analysis', isPrimary: true },
      { name: 'Statistical Analysis', isPrimary: false },
      { name: 'Data Cleaning', isPrimary: false },
      { name: 'Exploratory Data Analysis', isPrimary: false }
    ]
  },
  {
    title: 'DATA VISUALIZATION',
    categoryNumber: 3,
    skills: [
      { name: 'Power BI', isPrimary: true },
      { name: 'Microsoft Excel', isPrimary: true },
      { name: 'Tableau', isPrimary: false },
      { name: 'Matplotlib', isPrimary: false }
    ]
  },
  {
    title: 'CLOUD',
    categoryNumber: 4,
    skills: [
      { name: 'Cloud Computing Basics', isPrimary: false },
      { name: 'AWS', isPrimary: false }
    ]
  },
  {
    title: 'PLATFORMS',
    categoryNumber: 5,
    skills: [
      { name: 'GitHub', isPrimary: false },
      { name: 'n8n', isPrimary: false }
    ]
  },
  {
    title: 'AI TOOLS',
    categoryNumber: 6,
    skills: [
      { name: 'ChatGPT', isPrimary: false },
      { name: 'Claude', isPrimary: false },
      { name: 'Antigravity', isPrimary: false },
      { name: 'AI-Assisted Development', isPrimary: false },
      { name: 'Vibe Coding', isPrimary: false }
    ]
  },
  {
    title: 'PROFESSIONAL',
    categoryNumber: 7,
    skills: [
      { name: 'Leadership', isPrimary: false },
      { name: 'Teamwork', isPrimary: false },
      { name: 'Business Communication', isPrimary: false },
      { name: 'Problem Solving', isPrimary: false },
      { name: 'Time Management', isPrimary: false }
    ]
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'COLLECT',
    description: 'Understand the problem and data.',
    details: 'Identify business objectives, evaluate raw data sources, examine schemas, and formulate targeted analytical questions.',
    iconName: 'Database'
  },
  {
    step: '02',
    title: 'CLEAN',
    description: 'Prepare and validate the dataset.',
    details: 'Handle missing values, rectify inconsistencies, normalize data formats, and ensure rigorous data integrity for downstream tasks.',
    iconName: 'Sparkles'
  },
  {
    step: '03',
    title: 'ANALYZE',
    description: 'Explore patterns and relationships.',
    details: 'Execute exploratory data analysis (EDA), compute statistical summaries, and identify distributions and key correlations.',
    iconName: 'TrendingUp'
  },
  {
    step: '04',
    title: 'VISUALIZE',
    description: 'Turn findings into understandable dashboards and charts.',
    details: 'Design intuitive visual hierarchies using Power BI, Tableau, and Matplotlib to make complex patterns immediately clear.',
    iconName: 'BarChart3'
  },
  {
    step: '05',
    title: 'INSIGHT',
    description: 'Identify meaningful patterns and trends.',
    details: 'Synthesize data signals into actionable insights, providing clear reasoning to drive strategic business and operational choices.',
    iconName: 'Lightbulb'
  },
  {
    step: '06',
    title: 'AUTOMATE',
    description: 'Use technology and AI to turn insights into practical solutions.',
    details: 'Build automated workflows, REST endpoints with FastAPI, and intelligent integrations to transform analytical findings into operational systems.',
    iconName: 'Cpu'
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: 'Google Developer Group On Campus Hackathon',
    rank: '7th Place',
    badgeType: 'cyan',
    category: 'Hackathon',
    description: 'Recognized for collaborative innovation, rapid prototype development, and technical problem-solving under competitive hackathon conditions.'
  },
  {
    title: 'Departmental Club Hackathon',
    rank: '1st Place',
    badgeType: 'gold',
    category: 'Campus Hackathon',
    description: 'Secured first place for demonstrated problem formulation, data structuring, and effective solution execution.'
  },
  {
    title: 'SVCET Techno Fest — Paper Presentation',
    rank: '2nd Place',
    badgeType: 'silver',
    category: 'Technical Paper Presentation',
    description: 'Awarded 2nd place for technical clarity, structured research analysis, and confident presentation of emerging computational concepts.'
  }
];

export const CAREER_PILLARS: CareerPillar[] = [
  {
    title: 'DATA SCIENCE',
    subtitle: 'Analytics • Statistics • EDA',
    description: 'Deepening proficiency in statistical modeling, exploratory analysis, hypothesis testing, and machine learning foundations.',
    items: ['Exploratory Data Analysis', 'Statistical Inference', 'Predictive Modeling', 'Feature Engineering']
  },
  {
    title: 'DATA VISUALIZATION',
    subtitle: 'Power BI • Tableau • Excel',
    description: 'Mastering dynamic dashboard architecture, advanced DAX modeling, data storytelling, and stakeholder-ready reporting.',
    items: ['Interactive Dashboards', 'DAX Measures', 'Visual Storytelling', 'KPI Monitoring']
  },
  {
    title: 'AI & AUTOMATION',
    subtitle: 'AI tools • Automation • Intelligent workflows',
    description: 'Harnessing modern AI tools, vibe coding patterns, and orchestration engines to automate analytical and operational workflows.',
    items: ['Workflow Automation', 'AI-Assisted Development', 'API Orchestration', 'Intelligent Agents']
  },
  {
    title: 'SOFTWARE & CLOUD',
    subtitle: 'Python • APIs • AWS fundamentals',
    description: 'Strengthening backend engineering practices, REST API construction with FastAPI, and scalable cloud deployment foundations.',
    items: ['FastAPI & REST Architecture', 'MongoDB & SQL Databases', 'Cloud Infrastructure Basics', 'Modular Code Design']
  }
];
