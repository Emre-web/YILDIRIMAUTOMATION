import React from 'react';
import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Expertise } from '../components/Expertise';
import { TechStack } from '../components/TechStack';
import { Solutions } from '../components/Solutions';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { CTASection } from '../components/CTASection';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>YILDIRIM AUTOMATION | Senior RPA & Web Automation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen flex flex-col selection:bg-purple-500/30">
        <Navbar />
        <main>
          <Hero />
          <Expertise />
          <TechStack />
          <Solutions />
          <ShowcaseSection />
          <CTASection />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
