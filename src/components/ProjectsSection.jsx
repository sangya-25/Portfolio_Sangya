import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  useEffect(() => {
    // GSAP animations for the Projects section triggered on scroll
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

    // Animate project cards
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  // Sample projects data
  const projects = [
    {
      title: 'Revibe - A sustainable e-commerce platform',
      description: 'Developed a sustainability-focused e-commerce website featuring only recycled/upcycled products, with real-time carbon footprint tracking for each item to promote eco-conscious shopping.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'GSAP', 'HTML CSS','JS'],
      image: '/revibe.png',
      link: 'https://revibe-neon.vercel.app/'
    },
    {
      title: 'Agro Nexus - AI-powered agriculture assistant',
      description: 'An AI & IoT-powered platform offering crop recommendations, disease detection, price forecasting, and irrigation scheduling. Features gamified growth tracking and a reward-based e-commerce marketplace to promote sustainable farming.',
      tags: ['Python', 'Flask', 'Arduino', 'MonogoDB','Pytorch','Jupyter Notebook'],
      image: '/agronexus.png',
      link: 'https://drive.google.com/file/d/1bhp-vZwOvbwajlSpvJ9nyVpHdHCAUYqY/view'
    },
    {
      title: 'RTI Query Portal',
      description: 'An AI-powered system that automates RTI request filing by converting natural language queries into structured formats, predicting departments via ML, verifying users with secure OTPs, and offering Hindi-to-English translation with abuse detection.',
      tags: ['Python', 'Flask', 'Gemini API', 'HTML, CSS, JS'],
      image: '/RTI.png',
      link: 'https://rtiqueryporttal.onrender.com/'
    },
    {
      title: 'DataBase Aggregator',
      description: 'An AI-enhanced platform that unifies criminal records, court cases, and police data, enabling efficient retrieval through structured SQL and NLP-based searches. Built with Flask and PostgreSQL, it supports real-time insights for law enforcement, judiciary, and policymakers.',
      tags: ['Python', 'Flask', 'PostgreSQL','HTML, CSS, JS'],
      image: '/database.png',
      link: 'https://police-data-aggregation.onrender.com/'
    },
    {
      title: 'Airline Reservation System - DataBase Aggregator',
      description: 'Developed as part of a team, this project streamlines flight bookings, schedules, employee assignments, and airport operations with a robust relational database. Built with Flask for the backend, HTML/CSS/JS for the frontend, and a well-structured schema to ensure smooth data management.',
      tags: ['Python', 'Flask', 'Supabase','HTML, CSS, JS'],
      image: '/airline.png',
      link: 'https://airlinesreservationsystem.vercel.app/'
    },
    {
      title: 'Tatsam- A Hindi Society Website',
      description: 'Tatsam is a creative and inclusive platform for poetry lovers, writers, and artists, built as the official digital presence of the Tatsam Society.',
      tags: ['GSAP', 'Gemini API', 'Node.js','HTML, CSS, JS'],
      image: '/tatsam.png',
      link: 'https://tatsam-smoky.vercel.app/'
    },
    {
      title: 'Scatch - An e-commerce Shopping Website',
      description: 'A user-friendly e-commerce platform dedicated to bag shopping, featuring secure login/signup for both users and admins. Admins can manage products and track user shopping history, while users can seamlessly browse, explore, and purchase their favorite bags with ease.',
      tags: ['Express.js', 'MongoDB', 'Node.js','HTML, CSS, JS'],
      image: '/scatch.png',
      link: 'https://github.com/sangya-25/Scatch.git'
    },{
      title: 'Student-Teacher Appointment Booking System',
      description: 'A dynamic, full-stack web platform built using the MERN stack to streamline academic scheduling. It features secure, role-based dashboards for admins, teachers, and students with real-time booking, appointment tracking, and automated email notifications. Enhanced with GSAP animations and deployed on Vercel, this system replaces manual scheduling with a scalable, user-friendly digital interface.',
      tags: ['Express.js', 'MongoDB', 'Node.js','HTML, CSS, JS','GSAP','NodeMailer','Vercel'],
      image: '/image.png',
      link: 'https://student-teacher-appointment-omega.vercel.app/'
    },
    {
      title: 'QuickChat – Real-Time Chat Communication Web App',
      description: 'QuickChat is a real-time chat web application built with the MERN stack and powered by Socket.io for instant messaging. The app enables seamless one-on-one and group conversations with live message updates, user presence indicators, and a modern, responsive UI.',
      tags: ['Mongodb','Node.js','Express.js','React','Tailwind CSS','Socket.io','Vercel'],
      image: '/quickChat.png',
      link: 'https://chatapp-socket-frontend.vercel.app/login'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-zinc-900 relative w-full">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-cornflower/5 rounded-full blur-[100px]"></div>
      <div className="absolute right-0 bottom-1/4 w-60 h-60 bg-cornflower/10 rounded-full blur-[80px]"></div>
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Featured Projects</h2>
          <div className="w-20 h-1 bg-cornflower mb-4 mx-auto rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore a selection of my recent work across different domains and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-zinc-800/30 glass-effect rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cornflower/10 transition-all duration-300"
            >
              <div className="h-48 bg-zinc-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-zinc-700 text-cornflower px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-cornflower hover:text-cornflower-light transition-colors"
                >
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          {visibleProjects < projects.length ? (
            <button 
              onClick={() => setVisibleProjects(projects.length)}
              className="inline-block border border-cornflower/50 hover:border-cornflower text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-cornflower/10"
            >
              View All Projects
            </button>
          ) : (
            <button
              onClick={() => setVisibleProjects(4)}
              className="inline-block border border-cornflower/50 hover:border-cornflower text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-cornflower/10"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;