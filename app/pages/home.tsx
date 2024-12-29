import { Button } from '@/components/ui/button';
import StarryBackground from '../test/page';
import { Component } from 'lucide-react';
import Link from 'next/link';
const Home = () => {
  const email = 'fidelniyomugabo67@gmail.com'; // Replace with your email
  const subject = encodeURIComponent('Inquiry About Support or Investment');
  const body = encodeURIComponent(
    `Hello,\n\nI am contacting your company to:\n\n- Seek guidance and talent support.\n- Discuss potential investment opportunities to support your company.\n\nPlease let me know how we can proceed further.\n\nLooking forward to your response.\n\nBest regards,`
  );

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <>
    <StarryBackground />
     <div id="home" className=" w-full h-screen 2xl:h-[50vh] flex items-center justify-center  ">

<div className=" w-full  z-20 flex flex-col items-center justify-center h-full ">
  <div className="md:max-w-4xl mx-auto text-center">
    <button className="bg-[#3f3f4666] text-bodyText px-5 py-3 text-bodySmall rounded-full transition-all duration-300">
      what we offer ?
    </button>

    <div
      className=" px-5 md:px-[50px] mt-5 mb-5  text-4xl md:text-7xl font-semibold  tracking-tight leading-tight animate-fade-in"
      style={{
        background: 'linear-gradient(to right, #F29519, #D9D810,#F29519,#D9D810,#F29519)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
    <p>We offer the  support and guidance</p> 

      <span style={{ WebkitTextFillColor: '#FFFFFF', color: '#FFFFFF' }} className='text-white pt-2'>
      to help you thrive!
      </span>
    </div>

    <p className=" px-5 text-[16px] text-gray-200 mx-auto leading-[20px] animate-fade-in-delay">
    Grow your skills with our guidance and creative support! <br />
    Build your portfolio through real-world projects and opportunities!
    </p>

    <button

      className="  cursor-pointer bg-gradient-to-r from-primaryText to-secondaryText  text-white px-5 shadow-md shadow-primaryText py-3 bg-opacity-10 hover:bg-opacity-75 hover:shadow-lg text-bodyDefault font-[600] rounded-[10px] transition-all duration-300 mt-6"
    >
      <Link href="/#contact">
      <span className='flex items-center justify-center gap-2'>
    <Component className='w-[14px] h-[14px]' /> Get Started
    </span>
      </Link>

    </button>
  </div>
</div>
</div>
    </>
   
  );
};

export default Home;