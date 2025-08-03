// App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// import HomePage from "./pages/HomePage";
import HackExperience from "./pages/HackExperience";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <main className="w-full">
              <Navbar />
              <HeroSection />
              <AboutSection />
              <ExperienceSection />
              <ProjectsSection />
              <CertificatesSection />
              <ContactSection />
            </main>
          }
        />
        <Route
          path="/hack_experience"
          element={
            <div className="min-h-screen w-full bg-zinc-900 text-white overflow-x-hidden">
              <HackExperience />
            </div>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
