'use client'

// ServicesSection.tsx
import { Code, Monitor, Database, GitBranch, Server, Award, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`group relative overflow-hidden bg-gradient-to-br from-sky-500 via-sky-400 to-cyan-500 
                 border border-sky-200/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 
                 shadow-lg shadow-sky-500/25 h-64 sm:h-72 flex flex-col justify-center
                 hover:shadow-2xl hover:shadow-sky-500/40 hover:scale-105 hover:-translate-y-2
                 transition-all duration-500 ease-out cursor-pointer
                 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent 
                 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ 
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      
      {/* Animated background circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 
                        rounded-full bg-white/20 backdrop-blur-sm mb-4 sm:mb-6 
                        group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" />
        </div>
        
        <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 tracking-wide leading-tight">
          {title}
        </h3>
        
        <p className="text-sky-50 text-sm sm:text-base leading-relaxed px-2 sm:px-4">
          {description}
        </p>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="w-4 h-4 text-white mx-auto" />
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const skillsList = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive, accessible, and performant user interfaces using React, Next.js, TypeScript and modern CSS frameworks."
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Building robust server-side applications with Node.js, Express, and integrating with various databases and third-party services."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing and implementing efficient database schemas, optimizing queries, and managing both SQL and NoSQL databases."
    },
    {
      icon: GitBranch,
      title: "CI/CD & DevOps",
      description: "Setting up automated testing, deployment pipelines, and implementing best practices for continuous integration and delivery."
    },
    {
      icon: Monitor,
      title: "Full-Stack Solutions",
      description: "Delivering end-to-end solutions from concept to deployment with a focus on scalability, performance, and maintainability."
    },
    {
      icon: Award,
      title: "Code Quality & Architecture",
      description: "Creating clean, maintainable code with strong architecture principles, design patterns, and comprehensive documentation."
    }
  ];

  return (
    <section 
      id="services" 
      className="relative w-full bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-sky-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-cyan-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-20 w-32 sm:w-48 h-32 sm:h-48 bg-purple-500/5 rounded-full blur-2xl" aria-hidden="true"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Award className="w-3 sm:w-4 h-3 sm:h-4" aria-hidden="true" />
            Technical Expertise
          </div>
          
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-500">
              Skills
            </span>{" "}
            & Services
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
            Comprehensive technical solutions delivered with precision and innovation. 
            From concept to deployment, I bring your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
          {skillsList.map((skill, index) => (
            <FeatureCard 
              key={skill.title}
              icon={skill.icon} 
              title={skill.title} 
              description={skill.description}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" aria-hidden="true" />
              Ready to Start?
            </div>
            
            <h3 className="text-black text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
              Let's Build Something Amazing Together
            </h3>
            
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Whether you need a custom web application, technical consultation, or end-to-end development, 
              I'm here to transform your ideas into powerful digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white 
                         px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold
                         hover:from-sky-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-sky-500/25 hover:scale-105
                         transition-all duration-300 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a
                href="projects"
                className="group inline-flex items-center gap-2 bg-white text-gray-700 border-2 border-gray-200
                         px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold
                         hover:bg-gray-50 hover:border-gray-300 hover:scale-105
                         transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;