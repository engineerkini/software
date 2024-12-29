import React from 'react';
import { BarChart, Users, Music, Book, Calendar, Eye } from 'lucide-react';
import PlatformDashboard from '../components/layout/platform';

// Define the type for feature data
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description }) => (
  <div className="relative  rounded-md transition-all duration-300 hover:scale-105 overflow-hidden group">
    {/* Gradient background overlay */}
    <div className="absolute inset-0 " />
    
    {/* Top shadow effect */}
    <div className="absolute inset-x-0 top-0  h-24 bg-gradient-to-b from-bgCard to-[#1d1c1c31]" />
    
    {/* Content container */}
    <div className="relative z-10 flex flex-col  gap-4  p-4  md:p-6  w-[280px]  xl:w-[300px] min-h-[300px] h-full">
      <div className="w-12 h-12 mb-4 p-2.5 bg-orange-900/20 rounded-[8px] backdrop-blur-sm">
        <Icon className="w-full h-full text-primaryText" />
      </div>
     <div>
     <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
     <p className="text-gray-400">{description}</p>
     </div>
    </div>

    {/* Hover effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#1d1c1c40] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);
// Services component
const Services: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Music,
      title: "Creative Guidance",
      description: "Receive expert guidance to nurture and develop your artistic skills.",
    },
    {
      icon: Calendar ,
      title: "Portfolio Building",
      description: "Work on real-world projects that enhance your portfolio and showcase your talent.",
    },
    {
      icon: Calendar,
      title: "Collaborative Opportunities",
      description: "Collaborate with industry professionals and fellow artists on exciting projects.",
    },
    {
      icon: Users,
      title: "Creative Community",
      description: "Connect with a vibrant community of artists for support, inspiration, and growth.",
    },
    {
      icon: BarChart,
      title: "Performance Insights",
      description: "Track your progress and performance through feedback and analytics.",
    },
    {
      icon: BarChart,
      title: "Global Exposure",
      description: "Share your work with a global audience and expand your creative reach.",
    },
  ];
  

  return (
    <section id="services" className="py-16 h-full bg-backgroundColor">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
        <button className="bg-[#3f3f4666] text-bodyText px-5 py-3 text-bodySmall rounded-full transition-all duration-300">
        What we focus on ?
         </button>
          <h2 className="text-bodyText text-3xl md:text-5xl text-center font-semibold">
            Our key <span className="text-primaryText">Features</span>
          </h2>
        </div>

        <div className="grid  w-full items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 xl:gap-6  px-5 lg:px-[50px] xl:px-[100px] ">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      {/* <PlatformDashboard /> */}
    </section>
  );
};

export default Services;
