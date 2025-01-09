import React from 'react'


import { FaMusic, FaCalendarAlt, FaUsers, FaChartBar, FaVideo, FaHandshake, FaBook, FaStar, FaHeart } from 'react-icons/fa'; // Example icons from react-icons library
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}


const features = () => {
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
        // {
        //   icon: FaHeart,
        //   title: "Donate/Support Link",
        //   description: "Encourage visitors to contribute towards our mission of empowering young creatives through financial support or sponsorship.",
        // },
      ];
      
  return {features } 
}

export default features
