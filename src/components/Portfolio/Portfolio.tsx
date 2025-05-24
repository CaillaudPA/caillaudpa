import React, { useEffect, useState } from 'react';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  const [timeCode, setTimeCode] = useState('00:00:00:00');

  useEffect(() => {
    const updateTimeCode = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const milliseconds = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
      setTimeCode(`${hours}:${minutes}:${seconds}:${milliseconds}`);
    };

    const interval = setInterval(updateTimeCode, 10);
    return () => clearInterval(interval);
  }, []);

  const contactInfo = {
    address: '12 cité de l\'étang, 79140 Combrand',
    phone: '+33 645 81 41 57',
    email: 'pierre-antoine.caillaud@outlook.com',
    drivingLicense: 'Category B'
  };

  const education = [
    {
      school: 'EPSI, Nantes',
      degree: 'Master\'s Degree',
      period: '2016 - 2018'
    },
    {
      school: 'EPSI, Nantes',
      degree: 'Bachelor\'s Degree',
      period: '2015 - 2016'
    },
    {
      school: 'IUT Joffres, Nantes',
      degree: 'Two-year university degree in computer science',
      period: '2013 - 2015'
    }
  ];

  const experience = {
    title: 'CTO & Co-founder',
    company: 'AI SmartTalk',
    period: 'February 2024 - Present',
    location: 'Remote',
    description: 'Co-founder and Chief Technical Officer at AI SmartTalk, a cutting-edge AI startup focused on autonomous conversational systems and language process automation. Oversaw the end-to-end design, architecture, and deployment of production-grade agentic platforms.',
    responsibilities: [
      'Led the development of large-scale AI agent frameworks with a strong focus on LangGraph.js and LangChain.js, building robust, composable workflows for reasoning, memory, and tool orchestration in JavaScript/TypeScript environments.',
      'Designed and maintained reusable agent patterns including dynamic routing, branching logic, persistent state, and multi-step execution, leveraging LangGraph\'s custom nodes and event-driven flows.',
      'Built modular LangChain.js-based tools integrated with OpenAI, LLaMA, Mistral, and third-party APIs, supporting both synchronous and asynchronous agent capabilities.',
      'Architected full-stack microservice systems in Node.js/TypeScript with PostgreSQL and Supabase for durable memory and chat history, Prisma ORM, and Chroma for semantic retrieval (RAG).',
      'Developed isolated agents in Python for experimentation and backend tasks requiring lightweight, standalone LLM capabilities with memory control and API chaining.',
      'Delivered scalable infrastructure using Docker, RabbitMQ, and CI/CD pipelines (GitLab CI), with a fully containerized architecture enabling rapid testing and deployment of autonomous agents.',
      'Oversaw frontend/backend communication via WebSockets, enabling real-time interaction and feedback loops with agents across distributed systems.'
    ],
    techStack: [
      'LangGraph.js',
      'LangChain.js',
      'TypeScript',
      'Node.js',
      'Python',
      'OpenAI',
      'Mistral',
      'LLaMA',
      'RAG',
      'Zod',
      'PostgreSQL',
      'Prisma',
      'Supabase'
    ]
  };

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.leftColumn}>
        <div>
          <div className={styles.timeCode}>{timeCode}</div>
          <h1 className={styles.name}>Pierre-Antoine Caillaud</h1>
          <h2 className={styles.title}>CTO & Co-founder at AI SmartTalk</h2>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {contactInfo.address}
            </div>
            <div className={styles.contactItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              {contactInfo.phone}
            </div>
            <div className={styles.contactItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {contactInfo.email}
            </div>
            <div className={styles.contactItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h8" />
              </svg>
              Driving License: {contactInfo.drivingLicense}
            </div>
          </div>

          <div className={styles.education}>
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className={styles.educationItem}>
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                <p>{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.experience}>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <div>
                <h3 className={styles.experienceTitle}>{experience.title}</h3>
                <p className={styles.experienceCompany}>{experience.company}</p>
                <p className={styles.experiencePeriod}>{experience.period}</p>
              </div>
              <span className={styles.experienceLocation}>{experience.location}</span>
            </div>
            
            <p>{experience.description}</p>

            <div className={styles.responsibilities}>
              <h4>Key Responsibilities and Achievements:</h4>
              <ul className={styles.responsibilitiesList}>
                {experience.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>

            <div className={styles.techStack}>
              <h4>Main Tech Stack:</h4>
              <div className={styles.techList}>
                {experience.techStack.map((tech, index) => (
                  <span key={index} className={styles.techItem}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 