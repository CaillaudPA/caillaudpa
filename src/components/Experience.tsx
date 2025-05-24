import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './Experience.module.css';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: 'CTO & Co-founder',
      company: 'AI SmartTalk',
      period: 'February 2024 - Present',
      location: 'Remote',
      description: 'Co-founder and Chief Technical Officer at AI SmartTalk, leading the development of cutting-edge AI conversational systems. Oversaw end-to-end design and deployment of production-grade agentic platforms.',
      technologies: ['LangGraph.js', 'LangChain.js', 'TypeScript', 'Node.js', 'Python', 'OpenAI', 'Mistral', 'LLaMA', 'PostgreSQL', 'Prisma', 'Docker']
    },
    {
      title: 'PHP Expert',
      company: 'Acolad',
      period: 'June 2024 - August 2024',
      location: 'Paris',
      description: 'Implemented new LLM technologies within a CAT tool while contributing to the open-source community.',
      technologies: ['PHP 8', 'MySQL', 'Docker', 'GitLab CI']
    },
    {
      title: 'PHP Developer',
      company: 'TextMaster',
      period: 'July 2023 - February 2024',
      location: 'Paris',
      description: "Middleware maintenance using Symfony 5 and PHP 8, focusing on integrating Akeneo API with TextMaster's web translation solution.",
      technologies: ['Symfony', 'PHP 8', 'MySQL', 'Docker', 'GitLab CI']
    }
  ];

  return (
    <div className={styles.experience}>
      <h2 className={styles.sectionTitle}>
        <Translate>Professional Experience</Translate>
      </h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3 className={styles.jobTitle}>{exp.title}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <div className={styles.period}>{exp.period} | {exp.location}</div>
              <p className={styles.description}>{exp.description}</p>
              <div className={styles.technologies}>
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 