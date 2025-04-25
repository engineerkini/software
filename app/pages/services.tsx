// ServicesSection.jsx
import { Code, Monitor, Database, GitBranch, Server, Award } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Assuming SVG icon
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="border bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-500 rounded-md overflow-hidden group relative">
    <div className="z-10 flex flex-col gap-4 p-4 w-full min-w-[280px] xl:min-w-full min-h-[200px] h-full">
      <div className="w-[40px] h-[40px] flex items-center mb-4 p-2.5 bg-blue-800/30 rounded-[6px]">
        <Icon className="w-[30px] h-[30px] text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-100 text-sm w-full">{description}</p>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-[#1d1c1c40] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);



const ServicesSection = () => {
  // Services/Skills list
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
    <section id="services" className="relative py-16 h-full bg-backgroundColor">
      <div className="container mx-auto px-4 z-30">
        <div className="text-center mb-12 space-y-3">
          <button type='button' className="bg-black text-bodyText px-5 py-3 text-bodySmall rounded-full transition-all duration-300">
            Technical Expertise
          </button>
          <h2 className="text-black text-3xl md:text-5xl text-center font-semibold">
            My <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500'>Skills</span> & Services
          </h2>
        </div>

        <div className="grid w-full items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 px-5 lg:px-[50px] xl:px-[100px]">
          {skillsList.map((skill) => (
            <FeatureCard key={skill.title} icon={skill.icon} title={skill.title} description={skill.description} />
          ))}
        </div>
      </div>
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
    </section>
  );
};

export default ServicesSection;