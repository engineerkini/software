import { AudioLines, Camera, Component, Drum, Headphones, Instagram, Palette, Signature, Twitter, Video } from 'lucide-react'
import React, { JSX } from 'react'
type Person = {
    name: string;
    profession: string;
    image: string;
    instagram: string;
    twitter: string;
  };
  
  
  type IconMap = {
    [profession: string]: JSX.Element;
  };
  
const About = () => {
    return (
        <div className='min-h-screen bg-backgroundColor pt-[150px]'>
            {/* Our Mission  */}
            <div className='flex flex-col items-center justify-center px-5 gap-2'>
                <h2 className='text-bodyText text-3xl md:text-5xl text-center font-medium flex items-center justify-center gap-5'>
                    Our<span className='text-primaryText'>Mission</span>
                </h2>
                <p className='text-[#E4E4E7] text-bodyDefault leading-bodyDefault text-center md:w-2/4 xl:w-1/4 '>
                    Build a unique platform that enhances events for attendees and organizers, offering easy networking, scheduling, and fostering communities with shared interests.
                </p>
            </div>
            {/* Our Talents  */}
             <div className='text-bodyText px-5 lg:px-[50px] xl:px-[100px] pt-5 flex flex-col items-center justify-center'>
                <div  className='py-2 bg-bgCard rounded-md md:w-1/2 px-5'>
                    <h2 className=' text-bodyText text-2xl md:text-4xl text-center font-medium '>Talents in The <span className='bg-gradient-to-r from-primaryText to-secondaryText text-transparent bg-clip-text '>X P Room</span> </h2>
                </div>

             </div>
            <div className='flex flex-col w-full items-center justify-center  gap-5 text-bodyText px-5 lg:px-[50px] xl:px-[100px] '>
             
               <TeamCards />
              
            </div>

        </div>
    )
}

export default About



// Icon mapping for each profession
const iconGroup: IconMap = {
  Musician: <AudioLines className="text-[14px] w-[14px] h-[14px]" />,
  Artist: <Palette className="text-[14px] w-[14px] h-[14px]" />,
  Photographer: <Camera className="text-[14px] w-[14px] h-[14px]" />,
  Designer: <Component className="text-[14px] w-[14px] h-[14px]" />,
  Videographer: <Video className="text-[14px] w-[14px] h-[14px]" />,
  Writer: <Signature className="text-[14px] w-[14px] h-[14px]" />,
  DJ: <Headphones className="text-[14px] w-[14px] h-[14px]" />,
  Dancer: <Drum className="text-[14px] w-[14px] h-[14px]" />,
};

// Array of people with their details
const peopleWithIcons: Person[] = [
  {
    name: "Danny Irakoze",
    profession: "Musician",
    image: "/images/team1.png",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
  },
  {
    name: "Jane Doe",
    profession: "Artist",
    image: "/images/team2.png",
    instagram: "https://instagram.com/janedoe",
    twitter: "https://x.com/janedoe",
  },
  {
    name: "John Smith",
    profession: "Photographer",
    image: "/images/team1.png",
    instagram: "https://instagram.com/johnsmith",
    twitter: "https://x.com/johnsmith",
  },
  {
    name: "Emily Johnson",
    profession: "Designer",
    image: "/images/team2.png",
    instagram: "https://instagram.com/emilyjohnson",
    twitter: "https://x.com/emilyjohnson",
  },
  {
    name: "Michael Brown",
    profession: "Videographer",
    image: "/images/team2.png",
    instagram: "https://instagram.com/michaelbrown",
    twitter: "https://x.com/michaelbrown",
  },
  {
    name: "Sarah Wilson",
    profession: "Writer",
    image: "/images/team1.png",
    instagram: "https://instagram.com/sarahwilson",
    twitter: "https://x.com/sarahwilson",
  },
  {
    name: "Chris Lee",
    profession: "DJ",
    image: "/images/team1.png",
    instagram: "https://instagram.com/chrislee",
    twitter: "https://x.com/chrislee",
  },
  {
    name: "Anna Martinez",
    profession: "Dancer",
    image: "/images/team1.png",
    instagram: "https://instagram.com/annamartinez",
    twitter: "https://x.com/annamartinez",
  },
  {
    name: "Anna Martinez",
    profession: "Dancer",
    image: "/images/team1.png",
    instagram: "https://instagram.com/annamartinez",
    twitter: "https://x.com/annamartinez",
  },
];

// Component to render cards
function TeamCards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 xl:gap-6 2xl:gap-8 pb-10'>
      {peopleWithIcons.map((person, index) => (
        <div key={index} className="text-bodyText pt-10">
          <div
            className="relative bg-cover bg-center w-[280px]  xl:w-[300px] min-h-[300px] h-full rounded-md p-5 group overflow-hidden"
            style={{ backgroundImage: `url(${person.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1f1d1dc2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  <Instagram />
                </a>
                <a
                  href={person.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                <Twitter />
                </a>
              </div>
            </div>
          </div>
          {/* Text Below the Card */}
          <p className="text-bodySmall font-[500]">
            <strong>{person.name}</strong>
          </p>
          <p className="art-font cursor-pointer hover:text-[#E4E4E7] text-bodySmall font-[400] flex items-center justify-start gap-2">
            {iconGroup[person.profession]} {person.profession}
          </p>
        </div>
      ))}
    </div>
  );
}

