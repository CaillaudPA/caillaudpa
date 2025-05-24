import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';

interface Skill {
  title: string;
  level: number;
  description: string;
  japaneseText: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    {
      title: 'AI Development',
      level: 95,
      description: 'Expert in LangChain.js, LangGraph.js, and various LLM implementations. Specialized in building autonomous AI agents and complex reasoning systems.',
      japaneseText: 'アイ開発'
    },
    {
      title: 'System Architecture',
      level: 90,
      description: 'Designing and implementing scalable, distributed systems with microservices architecture, focusing on real-time processing and high availability.',
      japaneseText: 'システム設計'
    },
    {
      title: 'Full Stack Development',
      level: 85,
      description: 'Proficient in TypeScript/Node.js ecosystem, modern frontend frameworks, and cloud infrastructure. Strong focus on performance and security.',
      japaneseText: 'フルスタック'
    },
    {
      title: 'DevOps & Cloud',
      level: 80,
      description: 'Experienced with Docker, CI/CD pipelines, and cloud platforms. Implementing infrastructure as code and automated deployment strategies.',
      japaneseText: 'デブオプス'
    },
    {
      title: 'Technical Leadership',
      level: 90,
      description: 'Leading technical teams, making architectural decisions, and implementing best practices for development workflows and code quality.',
      japaneseText: '技術リーダー'
    },
    {
      title: 'Product Strategy',
      level: 85,
      description: 'Translating business requirements into technical solutions, defining product roadmaps, and ensuring alignment with market needs.',
      japaneseText: '製品戦略'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.skillsSection} ref={skillsRef}>
      <div className={styles.matrixBackground} />
      <div className={styles.rateInfo} data-text="900€ / DAY">900€ / DAY</div>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <h3 className={styles.skillTitle} data-text={skill.title}>
              {skill.title}
            </h3>
            <div className={styles.skillLevel}>
              <div className={styles.skillLevelBar}>
                <div 
                  className={styles.skillLevelFill} 
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%'
                  }}
                />
              </div>
            </div>
            <p className={styles.skillDescription}>{skill.description}</p>
            <span className={styles.japaneseText}>{skill.japaneseText}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 