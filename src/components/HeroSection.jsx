import { useEffect, useRef } from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // GSAP animation for Hero section
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(
      headerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    )
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      );
  }, []);

  return (
    <section id="home" className="section-padding min-h-screen flex items-center relative overflow-hidden w-full">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-subtle z-0"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-cornflower/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cornflower/10 rounded-full blur-[100px] animate-pulse"></div>
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center md:gap-24">
          <div className="md:w-3/5">
            <h1 
              ref={headerRef} 
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
            >
              <span className="text-white">Hello, I'm </span>
              <span className="text-gradient">Sangya Ojha</span>
            </h1>
            
            <p 
              ref={textRef} 
              className="text-lg md:text-xl text-gray-300 mb-8 text-balance"
            >
              I'm a passionate Software Engineer specializing in full stack web development.
              I'm eager to collaborate, innovate, and drive digital transformation.
            </p>
            
            <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="bg-gradient-blue text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-cornflower/20 transition-all"
              >
                View Projects <ArrowRight size={18} className="ml-1" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sangya-ojha-7a58a22a3/" 
                className="border-2 border-cornflower text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-all hover:bg-cornflower/10"
              >
                Let's Connect <Linkedin size={18} className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            {/* Hero image or abstract shape can be placed here */}
            <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-cornflower-dark/20 to-cornflower-light/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 border-2 border-cornflower/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 border border-cornflower/40 rounded-full"></div>
              {/* Replace Your Name text with image */}
              <img 
                src="/sangya_try.jpg" /* Replace with your image path */
                alt="Sangya Ojha" 
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-filter backdrop-blur-lg flex items-center justify-center border border-white/20 cursor-pointer animate-bounce">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;