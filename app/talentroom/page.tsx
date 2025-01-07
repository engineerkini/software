
'use client'

const peopleWithIcons: Person[] = [
  {
    name: "Danny Irakoze",
    profession: "Musician",
    image: "/images/team3.png",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
  },
  {
    name: "Jane Doe",
    profession: "Artist",
    image: "/images/team4.png",
    instagram: "https://instagram.com/janedoe",
    twitter: "https://x.com/janedoe",
  },
  {
    name: "John Smith",
    profession: "Photographer",
    image: "/images/team3.png",
    instagram: "https://instagram.com/johnsmith",
    twitter: "https://x.com/johnsmith",
  },
  {
    name: "Emily Johnson",
    profession: "Designer",
    image: "/images/team4.png",
    instagram: "https://instagram.com/emilyjohnson",
    twitter: "https://x.com/emilyjohnson",
  },
  {
    name: "Michael Brown",
    profession: "Videographer",
    image: "/images/team5.png",
    instagram: "https://instagram.com/michaelbrown",
    twitter: "https://x.com/michaelbrown",
  },
  {
    name: "Sarah Wilson",
    profession: "Writer",
    image: "/images/team6.png",
    instagram: "https://instagram.com/sarahwilson",
    twitter: "https://x.com/sarahwilson",
  },
  {
    name: "Chris Lee",
    profession: "DJ",
    image: "/images/team4.png",
    instagram: "https://instagram.com/chrislee",
    twitter: "https://x.com/chrislee",
  },
  {
    name: "Anna Martinez",
    profession: "Dancer",
    image: "/images/team6.png",
    instagram: "https://instagram.com/annamartinez",
    twitter: "https://x.com/annamartinez",
  },
  {
    name: "Anna Martinez",
    profession: "Dancer",
    image: "/images/team3.png",
    instagram: "https://instagram.com/annamartinez",
    twitter: "https://x.com/annamartinez",
  },
  ];
  import React, { useState, useEffect } from 'react';
  import { AudioLines, Camera, Component, Drum, Headphones, Instagram, Palette, Signature, Twitter, Video } from 'lucide-react';
  
  // Types stay the same as your original code
  interface Person {
    name: string;
    profession: ProfessionType;
    image: string;
    instagram: string;
    twitter: string;
  }
  
  type ProfessionType = 'Musician' | 'Artist' | 'Photographer' | 'Designer' | 'Videographer' | 'Writer' | 'DJ' | 'Dancer';
  // Icon mapping remains the same as your original code
const iconGroup = {
  Musician: <AudioLines className="w-4 h-4" />,
  Artist: <Palette className="w-4 h-4" />,
  Photographer: <Camera className="w-4 h-4" />,
  Designer: <Component className="w-4 h-4" />,
  Videographer: <Video className="w-4 h-4" />,
  Writer: <Signature className="w-4 h-4" />,
  DJ: <Headphones className="w-4 h-4" />,
  Dancer: <Drum className="w-4 h-4" />
};

  const TeamMemberCard: React.FC<Person> = ({ name, profession, image, instagram, twitter }) => (
    <div className="relative w-full  max-w-[670px] aspect-square p-4">
      {/* Container for the entire card */}
      <div className="relative w-full h-full group">
        
        <img className=' rounded-full  z-40 absolute bottom-0 right-5  w-[250px] h-[250px] object-contain object-center p-2' src={image} alt="image" />
       <div className=' -z-10  absolute bg-gradient-to-r from-pink-500 to-amber-500    border  border-bgCard/15 w-[120px] h-[300px] rounded-full'></div>

      <div className=' z-30  absolute bg-gradient-to-r from-pink-500 to-amber-500   border   border-bgCard/15 left-[40%] top-[20%] w-[120px] h-[300px] rounded-full'></div>
  </div>
  <div>
     <div >
            <div className="">
              <h3 className="text-white font-medium text-lg mb-1">{name}</h3>
              <div className="flex items-center gap-2 text-gray-200">
                {iconGroup[profession]}
                <span className="text-sm">{profession}</span>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-3">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  {/* <Instagram className="w-5 h-5" /> */}
                </a>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            </div>
  </div>
    </div>
  );
  
  // Skeleton card that matches the design
  const SkeletonCard: React.FC = () => (
    <div className="relative w-full max-w-[670px] aspect-square p-4 animate-pulse">
      <div className="relative w-full h-full">
        <div className="absolute left-0 top-0 w-[80%] h-[80%] rounded-[50%] bg-gray-700" 
             style={{ transform: 'rotate(-5deg)' }}
        />
        <div className="absolute right-0 bottom-0 w-[80%] h-[80%] rounded-[50%] bg-gray-600"
             style={{ transform: 'rotate(15deg)' }}
        />
        <div className="absolute inset-0 rounded-[28px] bg-gray-800" />
      </div>
    </div>
  );
  
  // Main component
  const TeamCards: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [people, setPeople] = useState<Person[]>([]);
  
    useEffect(() => {
      const loadData = async (): Promise<void> => {
        try {
          setIsLoading(true);
          await new Promise(resolve => setTimeout(resolve, 1500));
          setPeople(peopleWithIcons);
        } catch (error) {
          console.error('Error loading team data:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      loadData();
    }, []);
  
    return (
      <>
        <div className="mt-[100px]">
          <div className="flex flex-col items-center justify-center px-5 gap-2">
            <h2 className="text-bodyText text-3xl md:text-5xl text-center font-medium flex items-center justify-center gap-5">
              Our<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500">Mission</span>
            </h2>
            <p className="text-gray-400 text-bodyDefault leading-bodyDefault text-center md:w-3/4 xl:w-2/4">
              To empower and elevate young talent in the fields of singing, producing, and videography, establishing Exposure Chronicle as a premier platform for artistic expression and media production in East Africa.
            </p>
          </div>
  
          <div className="text-bodyText gap-5 px-5 lg:px-[50px] xl:px-[100px] pt-5 flex flex-col items-center justify-center">
            <div className="py-2 border bg-bgCard/20 w-full border-bgCard/15 rounded-md px-5">
              <h2 className="text-bodyText text-2xl md:text-4xl text-center font-medium">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500">Team</span>
              </h2>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-8">
          {isLoading
            ? Array(8).fill(0).map((_, index) => <SkeletonCard key={index} />)
            : people.map((person, index) => (
                <TeamMemberCard key={index} {...person} />
              ))
          }
        </div>
      </>
    );
  };
  
  export default TeamCards;