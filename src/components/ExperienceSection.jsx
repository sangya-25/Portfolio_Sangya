import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // GSAP animations for the Experience section triggered on scroll
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    // Animate timeline
    gsap.fromTo(
      '.experience-item',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.experience-timeline',
          start: 'top 80%',
        }
      }
    );
  }, []);

  // Sample experience data
  const experiences = [
    {
      title: 'Web Dash Hackathon - 1st Position',
      company: 'Organized by IEEE JMI',
      period: '[May, 2025]',
      description: 'Developed a sustainable e-commerce website focusing on upcycled and recycled products, featuring a real-time carbon footprint calculation for user purchases.',
      achievements: [
        'Secured 1st position in the hackathon.',
        'Built a fully functional e-commerce platform.',
        'Implemented MERN stack, various APIs, and Paypal integration for payments.',
        'Utilized GSAP for an intuitive and engaging frontend user experience.'
      ]
    },
    {
      title: 'Shloka Decode Hackathon - 2nd Position',
      company: 'Organized by Avinya\'25 NSUT',
      period: '[April, 2025]',
      description: 'Created a fully organized and beautifully designed website for TATSAM, the Hindi society of NSUT.',
      achievements: [
        'Secured 2nd prize in the hackathon.',
        'Developed a visually appealing and well-structured website.',
        'Integrated GSAP for smooth scrolling animations and transitions.'
      ]
    },
    {
      title: 'HackVSIT 6.0 - ReUpyog Track Winner',
      company: 'Organized by VIPS',
      period: '[April, 2025]',
      description: 'Developed AgroNexus, an innovative AI & IoT-powered platform revolutionizing sustainable farming practices through intelligent crop management and environmental monitoring.',
      achievements: [
        'Won the ReUpyog sustainability track (sponsored track).',
        'Implemented AI models for crop disease detection and yield forecasting.',
        'Integrated IoT sensors for real-time soil and environmental monitoring.',
        'Developed an intelligent irrigation system for optimal water usage.',
        'Created a reward system to incentivize sustainable farming practices.'
      ]
    },
    {
      title: 'Build Wars - Top 6 Finalist',
      company: 'Organized by MAIT',
      period: '[March, 2025]',
      description: 'Engineered an innovative AI-powered RTI Query Generator that simplifies the process of drafting Right to Information requests using natural language processing and speech recognition technology.',
      achievements: [
        'Achieved Top 6 position among competitive teams.',
        'Integrated Google\'s Gemini API for intelligent query processing and response generation.',
        'Implemented speech-to-text functionality for voice-based RTI query input.',
        'Developed a user-friendly interface that converts simple queries into formal RTI letters.'
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-gradient-subtle relative w-full">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-cornflower/5 rounded-full blur-[80px]"></div>
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Hackathons Experience</h2>
          <div className="w-20 h-1 bg-cornflower mb-8 rounded-full"></div>
          
          <div className="experience-timeline space-y-12 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:h-full before:bg-cornflower/30 md:pl-8">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-item relative pl-12 md:pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-8 h-8 bg-zinc-800 border-2 border-cornflower rounded-full flex items-center justify-center z-10">
                  <Briefcase className="h-4 w-4 text-cornflower" />
                </div>
                
                <div className="bg-zinc-800/30 glass-effect rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                      <p className="text-cornflower">{experience.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{experience.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{experience.description}</p>
                  
                  <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-1">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Button to navigate to detailed experience page */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/Portfolio_Sangya/hack_experience')}
              className="inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-cornflower shadow-[0_0_15px_rgba(100,149,237,0.5)]"
            >
              Explore Hack Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;