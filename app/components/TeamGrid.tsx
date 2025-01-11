import React from 'react';
import TeamCard from './TeamCard';
import { about } from '../data/AboutData';

const TeamGrid: React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 xl:gap-6 2xl:gap-8 pb-10'>
      {about.map((person, index) => (
        <TeamCard key={index} person={person} />
      ))}
    </div>
  );
};

export default TeamGrid;