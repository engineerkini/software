import React from 'react';
import TeamGrid from '../components/TeamGrid';
import VRCubeWithStyles from '../components/CubeAbout';
import Link from 'next/link';
import { Component } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className='h-full bg-backgroundColor pt-[150px]'>

      <div className='w-full  flex lg:flex-row flex-col justify-between lg:items-start items-center  min-h-screen h-full'>
        <div className="flex flex-col items-center lg:items-start justify-start lg:px-[100px] gap-2  ">
          <h2 className="text-bodyText text-3xl md:text-8xl text-center font-medium flex items-center justify-center gap-5">
            Our<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500">Mission</span>
          </h2>
          <p className="text-gray-300 text-bodyDefault md:text-bodyLager leading-bodyDefault text-center lg:text-start  w-full min-w-[280px] md:w-3/4 xl:w-3/4">
            To empower and elevate young talent in the fields of singing, producing, and videography, establishing Exposure Chronicle as a premier platform for artistic expression and media production in East Africa.
          </p>
          <p className="text-gray-400 text-bodyDefault md:text-bodyLager  leading-bodyDefault text-center lg:text-start md:w-2/4 xl:w-3/4 mt-4">
            We believe in nurturing local talent to reshape the media landscape, inspiring the next generation of artists to thrive and innovate.
          </p>
          <button className="px-8 py-3 lg:mt-[100px] rounded-md mt-5 font-medium text-white bg-gradient-to-r from-pink-500 to-amber-500 shadow-lg hover:opacity-90 transition-all duration-300" style={{
        boxShadow: '0 4px 15px rgba(255, 146, 91, 0.3)'
      }}>
      <Link href="/#contact">
      <span className='flex items-center justify-center gap-2'>
    <Component className='w-[14px] h-[14px]' /> Get Started
    </span>
      </Link>

    </button>
        </div>
        <VRCubeWithStyles />

      </div>
      {/* Our Team */}
   
      <div>

      </div>
      <div className='flex-col w-full items-center justify-center gap-5 text-bodyText px-5 lg:px-[50px] xl:px-[100px]'>
          <div className='text-bodyText gap-5  pt-5 flex flex-col items-center justify-center'>
        <div className='py-2 border bg-bgCard/20 w-full border-bgCard/15 rounded-md px-5'>
          <h2 className='text-bodyText text-2xl md:text-4xl text-center font-medium'>
            Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500'>Team</span>
          </h2>
        </div>
      </div> 
        <TeamGrid />
      </div> 
    </div>
  );
};

export default About;