import { Code2, Brain, Globe, Wrench } from 'lucide-react';

/** Skills from resume — categorized for portfolio display */
export const skillCategories = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Code2,
    color: 'from-accent-cyan to-blue-500',
    skills: ['Python', 'SQL', 'Java', 'JavaScript', 'HTML5/CSS3'],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-emerald-400 to-accent-cyan',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP (spaCy)',
      'Scikit-Learn',
      'Pandas & NumPy',
      'Prompt Engineering',
      'Hugging Face',
      'Model Evaluation',
    ],
  },
  {
    id: 'fullstack',
    title: 'Web & Full Stack',
    icon: Globe,
    color: 'from-accent-violet to-purple-500',
    skills: ['React.js', 'Node.js', 'Express.js', 'Flask', 'REST APIs', 'Tailwind CSS', 'SQLAlchemy'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-pink-400 to-accent-violet',
    skills: ['Git', 'GitHub', 'VS Code', 'SQLite', 'OpenAI API', 'Tesseract OCR', 'Jupyter', 'Postman'],
  },
];
