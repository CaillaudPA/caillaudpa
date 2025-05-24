import React from 'react';
import styles from './BlogPosts.module.css';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
}

const BlogPosts: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: 'Building Autonomous AI Agents with LangGraph.js',
      date: '2024-03-15',
      excerpt: 'Deep dive into creating complex AI agents using LangGraph.js, exploring advanced patterns for reasoning and memory management.',
      image: '/img/blog/ai-agents.jpg',
      link: '/blog/building-autonomous-ai-agents'
    },
    {
      title: 'Scaling Microservices with Event-Driven Architecture',
      date: '2024-03-01',
      excerpt: 'Best practices for designing and implementing scalable microservices using event-driven patterns and message queues.',
      image: '/img/blog/microservices.jpg',
      link: '/blog/scaling-microservices'
    },
    {
      title: 'Advanced RAG Techniques for LLM Applications',
      date: '2024-02-15',
      excerpt: 'Exploring sophisticated Retrieval-Augmented Generation techniques to enhance LLM capabilities in production environments.',
      image: '/img/blog/rag-techniques.jpg',
      link: '/blog/advanced-rag-techniques'
    }
  ];

  return (
    <section className={styles.blogSection}>
      <div className={styles.matrixOverlay} />
      <div className={styles.blogGrid}>
        {posts.map((post, index) => (
          <article key={index} className={styles.blogCard}>
            <div className={styles.imageContainer}>
              <img src={post.image} alt={post.title} className={styles.blogImage} />
            </div>
            <div className={styles.blogContent}>
              <div className={styles.blogDate} data-text={post.date}>{post.date}</div>
              <h3 className={styles.blogTitle} data-text={post.title}>
                {post.title}
              </h3>
              <p className={styles.blogExcerpt}>{post.excerpt}</p>
              <a href={post.link} className={styles.blogLink}>
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts; 