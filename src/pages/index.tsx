import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '../components/Hero';
import Experience from '../components/Experience';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Pierre-Antoine Caillaud - CTO & Co-founder at AI SmartTalk">
      <main>
        <Hero />
        <Experience />
      </main>
    </Layout>
  );
}
