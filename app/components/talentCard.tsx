
'use client'

import React, { useState, useEffect } from 'react';
import { Instagram ,Facebook} from 'lucide-react';
import talentData from '../data/talentData';
interface Person {
  name: string;
  profession: ProfessionType;
  image: string;
  instagram: string;
  facebook: string;
}
type ProfessionType = 'Musician' | 'Artist' | 'Photographer' | 'Designer' | 'Videographer' | 'Writer' | 'DJ' | 'Dancer';

const {iconGroup, talent} = talentData()


const TalentCard: React.FC<Person> = ({ name, profession, image, instagram, facebook }) => (
  <div className="relative w-full max-w-[670px] aspect-square">
    <div className="relative w-full h-full bg-bgCard/20 rounded-xl p-6 transition-transform duration-300 hover:scale-105 overflow-hidden group">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-amber-500/20 rounded-xl" />
      <div className="absolute -z-10 top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/30 to-amber-500/20 rounded-full blur-xl opacity-60" />
      
      {/* Content container */}
      <div className="relative h-full flex flex-col items-center">
        {/* Image with overlay for social icons */}
        <div className="relative mb-2 ">
          <img 
            className="w-48 h-48 rounded-full object-center border-2 border-pink-500/50"
            src={image} 
            alt={name} 
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4 bg-black/50 p-3 rounded-full backdrop-blur-sm">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-500/20 rounded-full hover:bg-pink-500/40 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-500/20 rounded-full hover:bg-pink-500/40 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-white text-bodyDefault font-medium   mb-1 ">{name}</h3>
          <div className="art-font cursor-pointer hover:text-[#E4E4E7] text-bodySmall font-[400] flex items-center justify-center gap-2">
            {iconGroup[profession]}
            <span>{profession}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export const SkeletonCard: React.FC = () => (
  <div className="relative w-full max-w-[670px] aspect-square animate-pulse">
    <div className="relative w-full h-full  border bg-bgCard/15  border-bgCard/15 rounded-md p-2">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-gray-600/20 rounded-xl" />
      
      {/* Skeleton image */}
      <div className="w-48 h-48 rounded-full mx-auto mb-2 bg-bgCard/50" />
      
      {/* Skeleton text */}
      <div className="space-y-4">
        <div className="h-6 bg-bgCard/50 rounded-full w-32 mx-auto" />
        <div className="h-4 bg-bgCard/50 rounded-full w-24 mx-auto" />
     
      </div>
    </div>
  </div>
);

export default TalentCard
