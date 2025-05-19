import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileCheck, X, ChevronDown, ChevronUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CertificatesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  
  useEffect(() => {
    // Create a timeline for the section entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate the decorative element
    tl.fromTo(
      '.decorative-blur',
      { 
        opacity: 0,
        scale: 0.8,
        x: -100
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out'
      }
    );

    // Animate the heading with a split text effect
    tl.fromTo(
      headingRef.current,
      { 
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out'
      },
      '-=0.8'
    );

    // Animate the underline
    tl.fromTo(
      '.heading-underline',
      { 
        scaleX: 0,
        opacity: 0
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      },
      '-=0.6'
    );

    // Animate the description
    tl.fromTo(
      '.section-description',
      { 
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      },
      '-=0.4'
    );

    // Animate certificate cards with a more sophisticated stagger
    tl.fromTo(
      cardsRef.current,
      { 
        opacity: 0,
        y: 60,
        scale: 0.9,
        rotationY: 15
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1,
        stagger: {
          amount: 0.8,
          from: 'start',
          grid: [1, 3],
          axis: 'x'
        },
        ease: 'power3.out'
      },
      '-=0.4'
    );

    // Animate images with a fade-in effect
    tl.fromTo(
      imagesRef.current,
      {
        opacity: 0,
        scale: 1.1
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      },
      '-=0.8'
    );

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  // Animation for toggling between show all and show less
  useEffect(() => {
    if (cardsRef.current.length > 0) {
      const cards = cardsRef.current;
      const startIndex = showAll ? 0 : 3;
      const endIndex = showAll ? cards.length : 3;

      // Create a timeline for the toggle animation
      const toggleTl = gsap.timeline();

      // Animate cards that are being shown/hidden
      toggleTl.to(cards.slice(startIndex, endIndex), {
        opacity: showAll ? 1 : 0,
        y: showAll ? 0 : 50,
        scale: showAll ? 1 : 0.9,
        rotationY: showAll ? 0 : 15,
        duration: 0.6,
        stagger: {
          amount: 0.4,
          from: 'start',
          grid: [1, 3],
          axis: 'x'
        },
        ease: 'power3.out',
        onComplete: () => {
          // Ensure proper visibility after animation
          cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
              card.style.display = showAll ? 'block' : 'none';
            }
          });
        }
      });

      return () => {
        toggleTl.kill();
      };
    }
  }, [showAll]);

  // Sample certificates data with images
  const certificates = [
    {
      title: 'Smart Delhi Ideathon - Top 30',
      issuer: 'SDI 2025',
      date: 'Feb 2025',
      description: 'Comprehensive training in modern web development technologies and best practices.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/cf-4.jpg'
    },
    {
      title: 'Web Dash - 1st Position',
      issuer: 'IEEE JMI',
      date: 'May 2025',
      description: 'Advanced course covering user interface design, user experience principles, and design systems.',
      skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
      image: '/web-dash.jpg'
    },
    {
      title: 'Shloka Decode - 2nd Position',
      issuer: 'Avinya 25 - NSUT',
      date: 'November 2021',
      description: 'Deep dive into JavaScript programming, modern ES6+ features, and front-end frameworks.',
      skills: ['ES6+', 'Async/Await', 'React Hooks', 'State Management'],
      image: '/nsut_win.jpeg'
    },
    {
      title: 'Vihan 8.0',
      issuer: 'Delhi Technological University',
      date: 'April 2025',
      description: 'Principles and techniques for creating responsive and mobile-first web designs.',
      skills: ['CSS Grid', 'Flexbox', 'Media Queries', 'Mobile-First Design'],
      image: '/vihan.png'
    },{
      title: 'Build Wars',
      issuer: 'MINDFLARE, MAIT',
      date: 'March 2025',
      description: 'Principles and techniques for creating responsive and mobile-first web designs.',
      skills: ['CSS Grid', 'Flexbox', 'Media Queries', 'Mobile-First Design'],
      image: '/mait.jpg'
    },{
      title: 'GDSC Ideathon',
      issuer: 'GDSC BPIT',
      date: 'November 2023',
      description: 'Principles and techniques for creating responsive and mobile-first web designs.',
      skills: ['CSS Grid', 'Flexbox', 'Media Queries', 'Mobile-First Design'],
      image: 'cf-6.jpg'
    },{
      title: 'Flipkart Runway: Session-5',
      issuer: 'Flipkart',
      date: 'March 2025',
      description: 'Principles and techniques for creating responsive and mobile-first web designs.',
      skills: ['CSS Grid', 'Flexbox', 'Media Queries', 'Mobile-First Design'],
      image: 'cf-3.jpg'
    },{
      title: 'HACKHAZARDS',
      issuer: 'Namespace BPIT',
      date: 'March 2025',
      description: 'Principles and techniques for creating responsive and mobile-first web designs.',
      skills: ['CSS Grid', 'Flexbox', 'Media Queries', 'Mobile-First Design'],
      image: 'cf-1.jpg'
    }
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" ref={sectionRef} className="section-padding bg-zinc-800 relative">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-cornflower/5 rounded-full blur-[100px] decorative-blur"></div>
      
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Certifications</h2>
          <div className="w-20 h-1 bg-cornflower mb-4 mx-auto rounded-full heading-underline"></div>
          <p className="text-gray-300 max-w-2xl mx-auto section-description">
            Professional certifications and educational achievements that have shaped my skills and expertise.
          </p>
        </div>
        
        <div className="certificates-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleCertificates.map((certificate, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="certificate-card bg-zinc-900/50 glass-effect rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cornflower/10 transition-all duration-300 group perspective"
            >
              <div className="relative">
                {/* Certificate Image */}
                <div className="relative h-36 overflow-hidden">
                  <img 
                    ref={el => imagesRef.current[index] = el}
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedCertificate(certificate)}
                      className="bg-cornflower text-white px-4 py-2 rounded-md hover:bg-cornflower/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
                
                <div className="p-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-zinc-700 rounded-full p-2 flex-shrink-0">
                      <FileCheck className="h-4 w-4 text-cornflower" />
                    </div>
                    
                    <div>
                      <h3 className="text-base font-bold text-white mb-0.5">{certificate.title}</h3>
                      <div className="flex flex-wrap justify-between items-center">
                        <p className="text-cornflower text-xs">{certificate.issuer}</p>
                        <p style={{marginLeft:"20px"}} className="text-gray-400 text-xs">{certificate.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {certificates.length >= 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="h-5 w-5" />
                </>
              ) : (
                <>
                  View All Certificates
                  <ChevronDown className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Modal for enlarged certificate view */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-zinc-900 rounded-lg overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-zinc-700">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedCertificate.title}</h3>
                <div className="flex items-center gap-4 mt-1">
                  <p className="text-cornflower text-sm">{selectedCertificate.issuer}</p>
                  <p className="text-gray-400 text-sm">{selectedCertificate.date}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-white hover:text-cornflower transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;