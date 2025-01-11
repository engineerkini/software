import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { Person } from '@/types/type';

type TeamCardProps = {
  person: Person;
};

const TeamCard: React.FC<TeamCardProps> = ({ person }) => {
  return (
    <div className="text-bodyText pt-10">
      <div
        className="relative border border-bgCard/15 bg-cover bg-center min-w-[280px] min-h-[300px] h-full rounded-md p-5 group overflow-hidden"
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
       {person.profession}
      </p>
    </div>
  );
};

export default TeamCard;