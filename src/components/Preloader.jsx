import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    // Animation to hide preloader
    const timer = setTimeout(() => {
      gsap.to('.preloader', {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          setLoading(false);
          // Animate content in after preloader is gone
          gsap.from('.section-animate', {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Circumference calculation for the SVG circle
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress / 100);

  if (!loading) return null;

  return (
    <div className="preloader fixed inset-0 flex flex-col items-center justify-center z-50 bg-zinc-900">
      <div className="relative w-40 h-40">
        {/* Background circle */}
        <svg className="w-full h-full" viewBox="0 0 140 140">
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="#27272a"
            strokeWidth="5"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="#6495ED"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transform -rotate-90 origin-center"
          />
          {/* Blue glow effect */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="#6495ED"
            strokeWidth="1"
            strokeOpacity="0.3"
            fill="none"
            className="animate-pulse"
            filter="blur(5px)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-lg font-medium">Loading...</span>
          <span className="text-cornflower text-2xl font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;