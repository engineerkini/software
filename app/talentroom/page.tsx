
'use client'

import React, { useState, useEffect } from 'react';
import talentData from '../data/talentData';
import TalentCard, { SkeletonCard } from '../components/talentCard';
interface Person {
  name: string;
  profession: ProfessionType;
  image: string;
  instagram: string;
  twitter: string;
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
              <TalentCard key={index} {...person} />
            ))
        }
      </div>
    </>
  );
};

export default TeamCards;