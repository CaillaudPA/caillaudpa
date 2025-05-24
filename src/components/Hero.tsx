import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Translate>Pierre-Antoine Caillaud</Translate>
        </h1>
        <p className={styles.subtitle}>
          <Translate>CTO & Co-founder at AI SmartTalk</Translate>
        </p>
        <p className={styles.description}>
          <Translate>
            Passionate tech leader specializing in AI, LLMs, and scalable architectures.
            Building the future of conversational AI with cutting-edge technologies.
          </Translate>
        </p>
      </div>
    </div>
  );
} 