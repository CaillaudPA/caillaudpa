import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import BlogPosts from '../components/BlogPosts/BlogPosts';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Pierre-Antoine Caillaud - CTO & Co-founder at AI SmartTalk">
      <main>
        <Portfolio />
        <Skills />
        <BlogPosts />
      </main>
    </Layout>
  );
}
