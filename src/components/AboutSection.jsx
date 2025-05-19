import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Book, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const bioRef = useRef(null);
  const statsRef = useRef(null);
  const skillsRef = useRef(null);
  
  useEffect(() => {
    // GSAP animations for the About section triggered on scroll
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
    
    // Bio content animation
    gsap.fromTo(
      bioRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
    
    // Stats animation
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 90%',
        }
      }
    );
    
    // Skills animation - This animation might need adjustment or removal depending on the new structure
    // gsap.fromTo(
    //   '.skill-bar',
    //   { width: 0 },
    //   {
    //     width: 'var(--skill-width)',
    //     duration: 1,
    //     ease: 'power2.out',
    //     stagger: 0.1,
    //     scrollTrigger: {
    //       trigger: skillsRef.current,
    //       start: 'top 90%',
    //     }
    //   }
    // );
  }, []);

  // Updated skills data structure with categories
  const skills = [
    {
      category: 'Frontend',
      items: [
        'HTML', 'CSS', 'JavaScript', 'React', 'GSAP', 'Canva', 'Tailwind CSS'
      ]
    },
    {
      category: 'Backend',
      items: [
        'Node.js', 'Express', 'Python', 'Flask', 'SQL', 'MongoDB', 'Rest API', 'APIs'
      ]
    },
    {
      category: 'Tools',
      items: [
        'Git', 'Postman', 'VS Code', 'Vercel'
      ]
    },
    {
      category: 'ML & Data',
      items: [
        'Jupyter Notebook', 'Numpy', 'Pandas', 'OpenCV'
      ]
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding min-h-screen bg-gradient-subtle relative w-full">
      {/* Decorative elements */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-cornflower/5 rounded-full blur-[100px]"></div>
      
      <div className="w-[90%] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 ref={headingRef} className="text-3xl md:text-5xl lg:text-5xl font-bold mb-2 text-gradient">About Me</h2>
          <div className="w-16 h-1 bg-cornflower mb-3 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bio */}
          <div ref={bioRef} className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi there! I'm a passionate web developer and designer with hands-on experience creating modern,
              responsive websites and applications. I specialize in front-end development with React and have a strong
              background in UI/UX design principles.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Additionally, As an AI enthusiast and a passionate ML learner, I am currently exploring the power of computer vision with OpenCV to build practical, real-world solutions. I've developed multiple projects like an AI Virtual Mouse, Smart Volume Controller, and a Virtual Painter — each designed to enhance interaction and bring abstract ideas closer to reality.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong enthusiasm for Data Structures and Algorithms, I regularly engage in problem-solving on platforms like LeetCode and GeeksforGeeks. I'm currently undertaking the GFG 160 Days Challenge to deepen my algorithmic understanding and consistently improve my problem-solving efficiency.
            </p>
            
            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-zinc-800/30 glass-effect rounded-lg p-4 text-center transition-all duration-300 hover:border-cornflower hover:shadow-lg hover:shadow-cornflower/20">
                <div className="flex justify-center items-center mb-2">
                  <Code className="h-6 w-6 text-cornflower" />
                </div>
                <h3 className="text-2xl font-bold text-white">20+</h3>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              
              <div className="bg-zinc-800/30 glass-effect rounded-lg p-4 text-center transition-all duration-300 hover:border-cornflower hover:shadow-lg hover:shadow-cornflower/20">
                <div className="flex justify-center items-center mb-2">
                  <Calendar className="h-6 w-6 text-cornflower" />
                </div>
                <h3 className="text-2xl font-bold text-white">15+</h3>
                <p className="text-gray-400 text-sm">Hackathon Experience</p>
              </div>
              
              <div className="bg-zinc-800/30 glass-effect rounded-lg p-4 text-center transition-all duration-300 hover:border-cornflower hover:shadow-lg hover:shadow-cornflower/20">
                <div className="flex justify-center items-center mb-2">
                  <Book className="h-6 w-6 text-cornflower" />
                </div>
                <h3 className="text-2xl font-bold text-white">20+</h3>
                <p className="text-gray-400 text-sm">Certifications</p>
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" ref={skillsRef}>
            {skills.map((category, index) => (
              <div key={index} className="bg-zinc-800/30 glass-effect rounded-lg p-4 transition-all duration-300 hover:border-cornflower hover:shadow-lg hover:shadow-cornflower/20">
                <h3 className="text-lg font-bold text-cornflower mb-3">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-zinc-700/50 text-gray-300 text-xs px-2 py-1 rounded-full transition-all duration-200 hover:bg-cornflower/30 hover:text-white hover:scale-105 inline-block"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Download CV Button */}
      <div className="mt-8 text-center">
        <a 
          href="/sangya-resume.pdf" 
          className="bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-md font-medium inline-flex items-center gap-2 transition-colors text-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default AboutSection;