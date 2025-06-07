'use client'

import VRCubeWithStyles from "../components/CubeAbout";
import Link from "next/link";
import { Component, ArrowRight, Code2, Zap, Award, Target, Users, Download } from "lucide-react";
import { useEffect, useState } from "react";

const About: React.FC = () => {
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

  const skills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'TypeScript', level: 88 },
    { name: 'Tailwind CSS', level: 92 }
  ];

  const achievements = [
    { icon: Award, title: "3+ Years", subtitle: "Experience", color: "text-blue-400" },
    { icon: Target, title: "20+", subtitle: "Projects Built", color: "text-purple-400" },
    { icon: Users, title: "15+", subtitle: "Happy Clients", color: "text-green-400" },
    { icon: Zap, title: "100%", subtitle: "Commitment", color: "text-yellow-400" }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden pb-8">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[url('https://wallpaperbat.com/img/240275-computer-engineering-wallpaper-4k.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-slate-900/90"></div>
      </div>
      
      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Enhanced floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-32 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-80 h-80 bg-gradient-to-r from-purple-500/12 to-pink-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-20 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Interactive cursor glow */}
      <div 
        className="absolute w-56 h-56 bg-gradient-to-r from-blue-400/12 to-cyan-400/8 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate(${mousePosition.x - 112}px, ${mousePosition.y - 112}px)`,
        }}
      ></div>

      <div className="relative z-10 min-h-screen px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 min-h-screen items-center">
            
            {/* Left Column - Main Content */}
            <div className={`col-span-7 flex flex-col justify-center space-y-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              
              {/* Header Section */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                  <Code2 className="w-4 h-4" />
                  Software Engineer
                </div>
                
                <h1 className="text-3xl xl:text-4xl font-bold tracking-tight leading-tight">
                  <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent mb-2">
                    About
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Me
                  </span>
                </h1>
              </div>

              {/* Profile & Description */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                {/* Profile Image */}
                <div className="md:col-span-2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-slate-600/50 hover:border-blue-400/40 transition-all duration-300 shadow-2xl">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src="/me.jpeg"
                        alt="Kini Esther"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-3 space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">
                      Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Kini Esther</span>
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      A passionate and detail-oriented Software Engineer with experience in building 
                      fullstack web applications using modern technologies like React, Next.js, Node.js, 
                      PostgreSQL, and more. I love turning ideas into real, scalable digital solutions.
                    </p>
                    <p className="text-base text-slate-400 leading-relaxed">
                      My mission is to create software that not only functions efficiently but also delivers 
                      great user experiences. I'm constantly learning, collaborating, and contributing to the 
                      tech community to stay ahead in the ever-evolving world of development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 text-center hover:border-slate-500/50 transition-all duration-300">
                      <achievement.icon className={`w-8 h-8 mx-auto mb-3 ${achievement.color}`} />
                      <div className={`text-2xl font-bold ${achievement.color} mb-1`}>
                        {achievement.title}
                      </div>
                      <div className="text-sm text-slate-300">{achievement.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="group">
                  <button className="px-8 py-4 rounded-xl font-semibold text-lg text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    <div className="flex items-center justify-center gap-3">
                      <Component className="w-5 h-5" />
                      Let's Work Together
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </Link>
                
                <button className="px-8 py-4 rounded-xl font-semibold text-lg text-slate-300 bg-slate-800/60 border border-slate-600/50 hover:bg-slate-700/60 hover:border-slate-500/50 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500/50">
                  <div className="flex items-center justify-center gap-3">
                    <Download className="w-5 h-5" />
                    Download CV
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column - VR Cube */}
            <div className={`col-span-5 flex justify-center items-start mt-[-100px] -mr-96 mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="w-full max-w-2xl">
                <VRCubeWithStyles />
              </div>
            </div>
          </div>

          {/* Mobile and Tablet Layout */}
          <div className="lg:hidden flex flex-col items-center min-h-screen py-12 space-y-12">
            
            {/* Header */}
            <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Code2 className="w-4 h-4" />
                Software Engineer
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                  About{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
            </div>

            {/* Profile Section */}
            <div className={`text-center space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative group inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border border-slate-600/50 hover:border-blue-400/40 transition-all duration-300 shadow-2xl">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/me.jpeg"
                    alt="Kini Esther"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Kini Esther</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className={`max-w-2xl mx-auto text-center space-y-4 px-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                A passionate and detail-oriented Software Engineer with experience in building 
                fullstack web applications using modern technologies like React, Next.js, Node.js, 
                PostgreSQL, and more.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                My mission is to create software that not only functions efficiently but also delivers 
                great user experiences. I'm constantly learning, collaborating, and contributing to the 
                tech community.
              </p>
            </div>

            {/* Achievements */}
            <div className={`grid grid-cols-2 gap-4 w-full max-w-lg mx-auto px-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {achievements.slice(0, 4).map((achievement, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl p-4 text-center hover:border-slate-500/50 transition-all duration-300">
                    <achievement.icon className={`w-6 h-6 mx-auto mb-2 ${achievement.color}`} />
                    <div className={`text-xl font-bold ${achievement.color} mb-1`}>
                      {achievement.title}
                    </div>
                    <div className="text-xs text-slate-300">{achievement.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className={`w-full max-w-2xl mx-auto px-4 space-y-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-lg font-semibold text-white text-center">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cube */}
            <div className={`w-full max-w-sm mx-auto transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <VRCubeWithStyles />
            </div>
                    
            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 px-4 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 '}`}>
              <Link href="/#contact" className="group">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                  <div className="flex items-center justify-center gap-3">
                    <Component className="w-4 h-4" />
                    Let's Work Together
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>
              
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-slate-300 bg-slate-800/60 border border-slate-600/50 hover:bg-slate-700/60 hover:border-slate-500/50 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500/50">
                <div className="flex items-center justify-center gap-3">
                  <Download className="w-4 h-4" />
                  Download CV
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
