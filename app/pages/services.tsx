import React from 'react';
import { BarChart, Users, Music, Book, Calendar, Eye } from 'lucide-react';
import PlatformDashboard from '../components/layout/platform';
import { FaMusic, FaCalendarAlt, FaUsers, FaChartBar, FaVideo, FaHandshake, FaBook, FaStar, FaHeart } from 'react-icons/fa'; // Example icons from react-icons library
// Define the type for feature data
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description }) => (
  <div className=" border bg-bgCard/15  border-bgCard/15 rounded-md overflow-hidden ">
  
    {/* Content container */}
    <div className="  z-10 flex  flex-col  gap-4  p-4  w-full  min-w-[280px]  xl:min-w-full min-h-[200px] h-full">
      <div className="w-[40px] h-[40px] flex items-center mb-4 p-2.5 bg-primaryText/30 rounded-[6px]">
        <Icon className="w-[30px] h-[30px] text-primaryText" />
      </div>
     <div>
     <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
     <p className="text-gray-500 text-sm w-full ">{description}</p>
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
      icon: FaMusic,
      title: "Showcase Portfolio",
      description: "Highlighting the best works from our participants to gain visibility and recognition.",
    },
    {
      icon: FaVideo,
      title: "Training Programs & Production",
      description: "Access to a variety of workshops and courses designed to enhance skills in singing, producing, and videography.",
    },
    {
      icon: FaHandshake,
      title: "Mentorship Opportunities",
      description: "Connect with industry professionals for guidance, support, and career development.",
    },
    {
      icon: FaUsers,
      title: "Community Hub",
      description: "A vibrant forum for young creatives to collaborate, share ideas, and showcase their work.",
    },
    {
      icon: FaBook,
      title: "Online Content Library",
      description: "Exclusive access to tutorials, resources, and inspiration tailored for aspiring artists.",
    },
    {
      icon: FaCalendarAlt,
      title: "Event Calendar",
      description: "Stay updated on upcoming workshops, networking events, and talent showcases.",
    },
    {
      icon: FaHandshake,
      title: "Partnership Opportunities",
      description: "Information on how businesses and organizations can collaborate with us for mutual growth.",
    },
    {
      icon: FaStar,
      title: "Testimonials",
      description: "Success stories and feedback from participants who have benefited from our programs.",
    },
    {
      icon: FaBook,
      title: "Blog and Resources",
      description: "Articles, tips, and industry insights to keep our community informed and inspired.",
    },
    {
      icon: FaHeart,
      title: "Donate/Support Link",
      description: "Encourage visitors to contribute towards our mission of empowering young creatives through financial support or sponsorship.",
    },
  ];
  

  return (
    <section id="services" className=" relative py-16 h-full bg-backgroundColor ">

      <div className="container mx-auto px-4 z-30">
        <div className="text-center mb-12 space-y-3">
        <button className="bg-[#3f3f4666] text-bodyText px-5 py-3 text-bodySmall rounded-full transition-all duration-300">
        What we focus on ?
         </button>
          <h2 className="text-bodyText text-3xl md:text-5xl text-center font-semibold">
            Our key <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500 ' >Services</span>
          </h2>
        </div>

        <div className="grid  w-full items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 xl:gap-6  px-5 lg:px-[50px] xl:px-[100px] ">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      <div className="absolute  -z-10 inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        
      {/* <PlatformDashboard /> */}
    </section>
  );
};

export default Services;
