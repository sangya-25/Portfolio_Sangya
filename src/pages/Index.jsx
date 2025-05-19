import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import CertificatesSection from '../components/CertificatesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize GSAP animations
    const initAnimations = () => {
      // Parallax effect for decorative elements
      gsap.utils.toArray('.parallax').forEach((element) => {
        gsap.to(element, {
          y: (i, target) => -(target.getAttribute('data-speed') || 100),
          ease: 'none',
          scrollTrigger: {
            trigger: element.parentNode,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    };

    // Wait for preloader to complete
    setTimeout(() => {
      setIsLoading(false);
      initAnimations();
    }, 3500);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-white">
      <Preloader />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;