import React from 'react'
import { AudioLines, Camera, Component, Drum, Headphones, Instagram, Palette, Signature, Facebook, Video } from 'lucide-react';

const talentData = () => {

interface Person {
  name: string;
  profession: ProfessionType;
  image: string;
  instagram: string;
  facebook: string;
}

type ProfessionType = 'Musician' | 'Artist' | 'Photographer' | 'Designer' | 'Videographer' | 'Writer' | 'DJ' | 'Dancer';

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
    const talent: Person[] = [
        {
          name: "Danny Irakoze",
          profession: "Musician",
          image: "/images/jozef.jpeg",
          instagram: "https://instagram.com",
          facebook: "https://facebook.com/Ni Joseph bateur",
        },
        {
          name: "Jane Doe",
          profession: "Artist",
          image: "/images/team4.png",
          instagram: "https://instagram.com/janedoe",
          facebook: "https://facebook.com/Ni Joseph bateur",
        },
        {
          name: "John Smith",
          profession: "Photographer",
          image: "/images/team3.png",
          instagram: "https://instagram.com/johnsmith",
          facebook: "https://x.com/johnsmith",
        },
        {
          name: "Emily Johnson",
          profession: "Designer",
          image: "/images/team4.png",
          instagram: "https://instagram.com/emilyjohnson",
          facebook: "https://x.com/emilyjohnson",
        },
        {
          name: "Michael Brown",
          profession: "Videographer",
          image: "/images/team5.png",
          instagram: "https://instagram.com/michaelbrown",
          facebook: "https://x.com/michaelbrown",
        },
        {
          name: "Sarah Wilson",
          profession: "Writer",
          image: "/images/team6.png",
          instagram: "https://instagram.com/sarahwilson",
          facebook: "https://x.com/sarahwilson",
        },
        {
          name: "Chris Lee",
          profession: "DJ",
          image: "/images/team4.png",
          instagram: "https://instagram.com/chrislee",
          facebook: "https://x.com/chrislee",
        },
        {
          name: "Anna Martinez",
          profession: "Dancer",
          image: "/images/team6.png",
          instagram: "https://instagram.com/annamartinez",
          facebook: "https://x.com/annamartinez",
        },
        {
          name: "Anna Martinez",
          profession: "Dancer",
          image: "/images/team3.png",
          instagram: "https://instagram.com/annamartinez",
          facebook: "https://x.com/annamartinez",
        },
        ];
  return {iconGroup, talent}
}

export default talentData
