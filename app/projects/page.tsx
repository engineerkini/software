"use client"

import { allBlogs } from "../data/projects";
import ProjectCard from "../components/projectCard";
import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import { Search, Filter, Grid, List, ArrowRight, Sparkles, Code, Palette, Smartphone } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
  
  // Enhanced categories with icons and better organization
  const categories = [
    { 
      id: "all", 
      label: "All Projects", 
      count: allBlogs.length, 
      icon: Sparkles,
      color: "from-purple-500 to-pink-500" 
    },
    { 
      id: "web", 
      label: "Web Development", 
      count: 6, 
      icon: Code,
      color: "from-blue-500 to-cyan-500" 
    },
    { 
      id: "mobile", 
      label: "Mobile Apps", 
      count: 2, 
      icon: Smartphone,
      color: "from-green-500 to-emerald-500" 
    },
    { 
      id: "design", 
      label: "UI/UX Design", 
      count: 2, 
      icon: Palette,
      color: "from-orange-500 to-red-500" 
    }
  ];
  
  const filteredProjects = allBlogs.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    
    const categoryMap: Record<string, string[]> = {
      "web": ["E-commerce", "Stylos Consults", "Igitego", "Micro AI", "nex-cent", "Education Hub"],
      "mobile": ["Carpooling App", "Car Rental"],
      "design": ["Green Realtor", "Bookme"]
    };
    
    return matchesSearch && categoryMap[filter]?.some(cat => project.title.includes(cat));
  });

  return (
    <div className="relative min-h-screen  overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619532550465-ad4dc9bd680a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-700/90 to-slate-950/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Refined grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Enhanced floating elements with better positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-cyan-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-emerald-500/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-pink-500/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '8s'}}></div>
      </div>

      {/* Interactive cursor glow */}
      <div 
        className="absolute w-64 h-64 bg-blue-400/8 rounded-full blur-3xl pointer-events-none transition-transform duration-500 ease-out will-change-transform z-0"
        style={{
          transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`,
        }}
      ></div>

      <Header />
      
      <div className="relative z-10 px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Compact Hero Section */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Portfolio Showcase</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent block">
                Creative{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent block">
                Portfolio
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-6">
              Discover a curated collection of innovative web applications, mobile experiences, and thoughtful design solutions that bring ideas to life.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="px-4 py-2 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50">
                <div className="text-xl font-bold text-white">{allBlogs.length}+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50">
                <div className="text-xl font-bold text-white">4</div>
                <div className="text-xs text-slate-400">Categories</div>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50">
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-xs text-slate-400">Passion</div>
              </div>
            </div>
          </div>

          {/* Compact Search and Filter Section */}
          <div className={`mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Search and View Controls */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              
              {/* Enhanced Search Bar */}
              <div className="relative w-full lg:w-2/5">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-800/70 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/40 transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* View Toggle and Results */}
              <div className="flex items-center gap-4">
                <div className="text-slate-400 text-sm whitespace-nowrap">
                  <span className="font-medium text-white">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
                </div>
                
                <div className="flex items-center gap-1 p-1 bg-slate-800/60 rounded-lg border border-slate-600/50">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-blue-500 text-white shadow-lg' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-blue-500 text-white shadow-lg' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Compact Category Filters */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`group relative p-4 rounded-xl text-center transition-all duration-300 overflow-hidden ${
                      filter === category.id
                        ? "bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-2 border-blue-500/50 shadow-lg shadow-blue-500/10"
                        : "bg-slate-800/50 border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-700/60"
                    }`}
                  >
                    {/* Background gradient for active state */}
                    {filter === category.id && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5`}></div>
                    )}
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-2 transition-all duration-300 ${
                        filter === category.id
                          ? `bg-gradient-to-br ${category.color} shadow-lg`
                          : "bg-slate-700/50 group-hover:bg-slate-600/60"
                      }`}>
                        <IconComponent className={`w-5 h-5 ${
                          filter === category.id ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`} />
                      </div>
                      
                      <h3 className={`font-semibold text-sm mb-1 transition-colors duration-200 ${
                        filter === category.id ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {category.label}
                      </h3>
                      
                      <div className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium ${
                        filter === category.id 
                          ? "bg-white/20 text-white" 
                          : "bg-slate-700/50 text-slate-400 group-hover:bg-slate-600/50 group-hover:text-slate-300"
                      }`}>
                        {category.count}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Compact Projects Display */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {filteredProjects.length > 0 ? (
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
                  : 'space-y-4'
              }`}>
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.title}
                    className={`group transform transition-all duration-500 hover:scale-105 ${
                      viewMode === 'list' ? 'hover:scale-102' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className={`relative bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl overflow-hidden hover:border-slate-500/60 hover:bg-slate-700/70 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 ${
                      viewMode === 'list' ? 'flex items-center' : ''
                    }`}>
                      
                      {/* Compact Project Image */}
                      <div className={`relative overflow-hidden ${
                        viewMode === 'list' ? 'w-40 h-24 flex-shrink-0' : 'w-full h-44'
                      }`}>
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        
                        {/* Enhanced hover overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                          <div className="bg-white/15 backdrop-blur-md rounded-full p-3 border border-white/20">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        
                        {/* Project category badge */}
                        <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                          {categories.find(cat => 
                            cat.id === filter && filter !== 'all'
                          )?.label || 'Project'}
                        </div>
                      </div>

                      {/* Compact Project Info */}
                      <div className={`${viewMode === 'list' ? 'flex-1' : ''} p-4`}>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight mb-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-400 leading-relaxed mb-4 line-clamp-2 text-sm">
                          {project.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                          <span className="text-xs text-slate-500 font-medium">
                            {project.date}
                          </span>
                          <a
                            href={project.link}
                            className="group/link inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-400/50 rounded-lg text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-sm"
                          >
                            View
                            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800/60 border border-slate-600/50 mb-6">
                  <Search className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-300 mb-3">No projects found</h3>
                <p className="text-slate-500 mb-6">Try adjusting your search terms or explore different categories</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setFilter("all");
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Compact Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-300 font-medium">Let's Collaborate</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Ready to start your next project?</h3>
                <p className="text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
                  Transform your ideas into exceptional digital experiences. Let's discuss how we can bring your vision to life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/#contact"
                    className="group px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <div className="flex items-center gap-2">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </a>
                  
                  <a
                    href="/about"
                    className="px-6 py-3 rounded-xl font-bold text-slate-300 bg-slate-700/50 hover:bg-slate-600/60 border border-slate-600/50 hover:border-slate-500/60 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Learn More About Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
