import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HackExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);
  const navigate = useNavigate();

  const hackathons = [
    {
      id: 1,
      title: "NSUT, Shloka Decode Hackathon",
      position: "1st Place",
      project: "TATSAM - NSUT'S HINDI CULTURAL WEBSITE",
      image: `${import.meta.env.BASE_URL}img10.jpg`,
      year: "2024"
    },
    {
      id: 2,
      title: "MAIT, BuildWars Hackathon",
      position: "Top 5",
      project: "AI-Powered RTI Generator",
      image: `${import.meta.env.BASE_URL}img9.jpg`,
      year: "2025"
    },
    {
      id: 3,
      title: "IIT, Hack'24 Hackathon",
      position: "Top 6",
      project: "Database Aggregator",
      image: `${import.meta.env.BASE_URL}img3.jpg`,
      year: "2025"
    },
    {
      id: 4,
      title: "CodeClash2.0, Google",
      position: "Top 10",
      project: "Sniffy - Smart Gas Leakage Detection System, IoT-based",
      image: `${import.meta.env.BASE_URL}img5.jpg`,
      year: "2025"
    },
    {
      id: 5,
      title: "She Builds, Hackathon",
      position: "Top 40",
      project: "AI-Powered Roommate Finder - Harmony Match",
      image: `${import.meta.env.BASE_URL}img8.jpg`,
      year: "2025"
    },
    {
      id: 6,
      title: "WebDash Hackathon, IEEE JMI",
      position: "Ist Position",
      project: "Revibe-A Sustainable E-commerce Platform",
      image: `${import.meta.env.BASE_URL}img1.jpg`,
      year: "2025"
    },{
      id: 7,
      title: "SDI, Smart Delhi Ideathon",
      position: "Top 30",
      project: "Women Safety Web App - Her Suraksha",
      image: `${import.meta.env.BASE_URL}img2.jpg`,
      year: "2025"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % hackathons.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + hackathons.length) % hackathons.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const getItemStyle = (index) => {
    const diff = (index - currentIndex + hackathons.length) % hackathons.length;
    const angle = (diff * 72) * (Math.PI / 180);
    const radius = 200;

    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius - radius;
    const rotateY = diff * 72;
    const scale = diff === 0 ? 1.2 : 0.8;
    const opacity = diff === 0 ? 1 : 0.6;

    return {
      transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: diff === 0 ? 10 : 5 - Math.abs(diff),
      transition: isAnimating ? 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'all 0.3s ease'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">
      <button
  onClick={() => navigate('/')}
  className="mt-4 ml-4 inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-cornflower shadow-[0_0_15px_rgba(100,149,237,0.5)]"
>
  Back
</button>



      <div className="relative z-10 pt-10 pb-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Hackathon Journey
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Exploring the frontiers of innovation through collaborative coding marathons and creative problem-solving
          </p>
        </div>
      </div>

      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Featured Achievements</h2>

          <div className="relative h-[590px] flex items-center justify-center perspective-1000">
            <div ref={carouselRef} className="relative w-[390px] h-[500px] preserve-3d mb-20">
              {hackathons.map((hackathon, index) => (
                <div
                  key={hackathon.id}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="absolute w-full h-full cursor-pointer"
                  style={getItemStyle(index)}
                  onClick={() => goToSlide(index)}
                >
                  <div
  className="w-full h-full bg-zinc-800 backdrop-blur-0 rounded-2xl overflow-hidden border border-zinc-700 transition-all duration-300"
  style={{
    boxShadow:
      index === currentIndex
        ? '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)'
        : '0 0 20px rgba(59, 130, 246, 0.1)'
  }}
>
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-100 transition-opacity duration-300"></div>

  <div className="relative h-full flex flex-col">
    <div className="h-3/3 overflow-hidden">
      <img
        src={hackathon.image}
        alt={hackathon.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {hackathon.year}
      </div>
    </div>
    <div className="h-1/3 p-4 flex flex-col justify-center">
      <h3 className="font-bold text-lg mb-1 text-white">
        {hackathon.title}
      </h3>
      <p className="text-blue-400 font-semibold text-sm mb-1">{hackathon.position}</p>
      <p className="text-zinc-400 text-sm">{hackathon.project}</p>
    </div>
  </div>
</div>

                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute left-10 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zinc-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all duration-300 disabled:opacity-50 z-20 group"
              style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' }}
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute right-10 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zinc-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all duration-300 disabled:opacity-50 z-20 group"
              style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' }}
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
{/* 
      <div className="mt-10 text-center mb-10">
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-zinc-700"
             style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.1)' }}>
          <h3 className="text-2xl font-bold text-blue-400 mb-2">
            {hackathons[currentIndex].title}
          </h3>
          <p className="text-lg text-white mb-2">{hackathons[currentIndex].position}</p>
          <p className="text-zinc-300 mb-4">{hackathons[currentIndex].project}</p>
          <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
            {hackathons[currentIndex].year}
          </div>
        </div>
      </div> */}

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default HackExperience;