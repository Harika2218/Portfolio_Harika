import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { DataWorkflow } from './components/DataWorkflow';
import { Achievements } from './components/Achievements';
import { CareerDirection } from './components/CareerDirection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-200 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Interactive Analytical Console */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Section with 6-stage Focus Map */}
        <About />

        {/* Education Section with Coursework Exploration */}
        <Education />

        {/* Experience Section with Vertical Timeline */}
        <Experience />

        {/* Featured Projects with Simulated Interactive Dashboards */}
        <Projects />

        {/* Skills Section with Primary Technology Hierarchy */}
        <Skills />

        {/* "How I Work With Data" Section */}
        <DataWorkflow />

        {/* Verified Honors & Achievements */}
        <Achievements />

        {/* Career Direction ("Where I'm Heading") */}
        <CareerDirection />

        {/* Final CTA Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal with PDF Printing */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
