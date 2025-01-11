
'use client'

import React, { useState, useEffect } from 'react';
import talentData from '../data/talentData';
import TalentCard, { SkeletonCard } from '../components/talentCard';
interface Person {
  name: string;
  profession: ProfessionType;
  image: string;
  instagram: string;
 facebook: string;
}
type ProfessionType = 'Musician' | 'Artist' | 'Photographer' | 'Designer' | 'Videographer' | 'Writer' | 'DJ' | 'Dancer';

const {talent} = talentData()



const TeamCards: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setPeople(talent);
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
       <div className='flex flex-col gap-10 mt-10'>
       <div className="text-bodyText gap-5  pt-5 flex flex-col items-center justify-center">
          <div className="py-2 border bg-bgCard/20 w-full border-bgCard/15 rounded-md px-5">
            <h2 className="text-bodyText text-2xl md:text-4xl text-center font-medium">
              X <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500">Prosure</span> Talented Room
            </h2>
          </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {isLoading
          ? Array(8).fill(0).map((_, index) => <SkeletonCard key={index} />)
          : people.map((person, index) => (
              <TalentCard key={index} {...person} />
            ))
        }
      </div>
       </div>
    </>
  );
};

export default TeamCards;