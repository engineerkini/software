'use client'

import React, { useEffect, useState } from "react";
import { Briefcase, ArrowDown, Code2, Zap, Mail, Github, Linkedin } from "lucide-react";

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      requestAnimationFrame(() => {
        setMousePosition({ x: clientX, y: clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[url('https://wallpaperbat.com/img/240275-computer-engineering-wallpaper-4k.jpg')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-slate-950/90"
    >
      
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Floating elements - Enhanced for larger screens */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 lg:top-32 left-10 sm:left-20 lg:left-32 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-32 lg:bottom-20 right-10 sm:right-20 lg:right-32 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-5 sm:left-10 lg:left-20 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-cyan-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 right-1/4 lg:right-1/3 w-20 lg:w-32 h-20 lg:h-32 bg-emerald-500/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Interactive cursor glow */}
      <div 
        className="absolute w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-blue-400/8 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate(${mousePosition.x - 60}px, ${mousePosition.y - 60}px)`,
        }}
      ></div>

      <div className="relative z-10 min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Large screen layout - Two column approach */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 2xl:gap-32 min-h-screen items-center max-w-7xl mx-auto">
          
          {/* Left Column - Profile and Social */}
          <div className={`flex flex-col items-start justify-center space-y-8 xl:space-y-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Profile Section */}
            <div className="relative group">
              <div className="w-48 xl:w-56 2xl:w-64 h-48 xl:h-56 2xl:h-64 rounded-3xl overflow-hidden border border-slate-600/50 hover:border-blue-400/40 transition-all duration-300 shadow-2xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/me.jpeg"
                  alt="Profile"
                  loading="eager"
                  decoding="async"
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-2 rounded-xl text-sm font-medium shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Available for Projects
              </div>
            </div>

            {/* Professional Badge */}
            <div className="inline-flex items-center gap-3 bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 px-6 py-3 rounded-full shadow-lg">
              <Code2 className="w-5 h-5 text-blue-400" />
              <span className="text-base font-medium text-slate-200">Full-Stack Software Engineer</span>
            </div>

            {/* Social Links - Vertical layout for large screens */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-slate-300 mb-2">Connect with me</h3>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/engineerkini" className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-600/50 text-slate-400 hover:text-white hover:border-slate-500/50 hover:bg-slate-700/60 transition-all duration-200 group">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub Portfolio</span>
                </a>
                <a href="https://www.linkedin.com/in/kini-esther-306729327/" className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-600/50 text-slate-400 hover:text-white hover:border-slate-500/50 hover:bg-slate-700/60 transition-all duration-200 group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                </a>
                <a href="#contact" className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-600/50 text-slate-400 hover:text-white hover:border-slate-500/50 hover:bg-slate-700/60 transition-all duration-200 group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Send Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className={`flex flex-col justify-center space-y-8 xl:space-y-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Main Headline */}
            <div>
              <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent mb-3">
                  Crafting Digital
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
              
              <div className="relative mb-8">
                <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-slate-300 leading-relaxed">
                  That <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent font-bold">
                      Inspire & Engage
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                  </span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg xl:text-xl text-slate-400 leading-relaxed mb-8 xl:mb-10">
                I build scalable web applications and design intuitive user experiences using modern technologies. 
                Let's create something amazing together that solves real problems and delivers measurable results.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 xl:gap-6">
              <a href="#contact" className="group px-8 xl:px-10 py-4 xl:py-5 rounded-xl font-semibold text-base xl:text-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 xl:w-6 h-5 xl:h-6" />
                  Start a Project
                </div>
              </a>

              <a href="/projects" className="group px-8 xl:px-10 py-4 xl:py-5 rounded-xl font-semibold text-base xl:text-lg text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-slate-500/50">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 xl:w-6 h-5 xl:h-6" />
                  View Portfolio
                </div>
              </a>
            </div>

          </div>
        </div>

        {/* Mobile and Medium screens - Original centered layout */}
        <div className="lg:hidden flex flex-col items-center justify-center min-h-screen">
          
          {/* Profile Section - Centered at top */}
          <div className={`mb-6 sm:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-slate-600/50 hover:border-blue-400/40 transition-all duration-300 shadow-2xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/me.jpeg"
                  alt="Profile"
                  loading="eager"
                  decoding="async"
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-medium shadow-lg flex items-center gap-1">
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full animate-pulse"></div>
                Available
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Professional Badge */}
            <div className={`mb-4 sm:mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                <Code2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">Full-Stack Software Engineer</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4">
                <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent mb-1 sm:mb-2">
                  Crafting Digital
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
              
              <div className="relative mb-4 sm:mb-6">
                <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 leading-relaxed">
                  That <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent font-bold">
                      Inspire & Engage
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                  </span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4">
                I build scalable web applications and design intuitive user experiences using modern technologies. 
                Let's create something amazing together that solves real problems and delivers measurable results.
              </p>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col xs:flex-row gap-2 sm:gap-3 justify-center items-center mb-8 sm:mb-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a href="#contact" className="group w-full xs:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 min-w-[140px] sm:min-w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  Start a Project
                </div>
              </a>

              <a href="/projects" className="group w-full xs:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm min-w-[140px] sm:min-w-[160px] focus:outline-none focus:ring-2 focus:ring-slate-500/50">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <Briefcase className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  View Portfolio
                </div>
              </a>
            </div>

            {/* Social Links - Horizontal for mobile */}
            <div className={`flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a href="https://github.com/engineerkini" className="p-2.5 sm:p-3 rounded-full bg-slate-800/60 border border-slate-600/50 text-slate-400 hover:text-white hover:border-slate-500/50 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-500/50" aria-label="GitHub Profile">
                <Github className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kini-esther-306729327/" className="p-2.5 sm:p-3 rounded-full bg-slate-800/60 border border-slate-600/50 text-slate-400 hover:text-white hover:border-slate-500/50 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-500/50" aria-label="LinkedIn Profile">
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#contact" className="p-2.5 sm:p-3 rounded-full bg-slate-800/60 border border-slate-600/50 text-slate-400 hover:text-white hover:border-slate-500/50 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-500/50" aria-label="Email Contact">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>

          </div>
        </div>

        {/* Scroll Indicator - Positioned for both layouts */}
        <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="flex flex-col items-center gap-1.5 sm:gap-2 text-slate-500 hover:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500/50 rounded-lg p-1" aria-label="Scroll to explore">
            <div className="w-5 sm:w-6 h-8 sm:h-10 border border-slate-600 rounded-full flex justify-center bg-slate-800/30 backdrop-blur-sm">
              <div className="w-0.5 h-1.5 sm:h-2 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
            </div>
            <ArrowDown className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <span className="text-[10px] sm:text-xs font-medium">Scroll to explore</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection
