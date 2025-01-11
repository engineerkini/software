import { Button } from '@/components/ui/button';
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
     <div id="home" className=" w-full h-screen flex items-center justify-center  ">

<div className=" w-full  z-20 flex flex-col items-center justify-center h-full ">
  <div className="md:max-w-4xl mx-auto text-center">
    <button className="bg-[#3f3f4666] text-bodyText px-5 py-3 text-bodySmall rounded-full transition-all duration-300">
    Welcome to the Exposure Room
    </button>

    <div
      className=" text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500   px-5 md:px-[50px] mt-5 mb-5 text-3xl  sm:text-4xl md:text-7xl font-semibold  tracking-tight leading-tight animate-fade-in"

    >
    <p>We empower <br /> the next generation </p> 

      <span className=' text-4xl md:text-6xl pt-2' style={{ WebkitTextFillColor: '#FFFFFF', color: '#FFFFFF' }} >
      of creative talent
      in East Africa.
      </span>
    </div>

    <p className=" px-5  sm:max-w-lg text-[16px] text-gray-400 text-center mx-auto leading-[20px] animate-fade-in-delay">
    Our mission is to nurture and elevate young artists in the fields of singing,
producing, and videography by providing them with comprehensive training programs, 
hands-on opportunities, and a supportive community.
    </p>
    <button className="px-8 py-3 rounded-md mt-5 font-medium text-white bg-gradient-to-r from-pink-500 to-amber-500 shadow-lg hover:opacity-90 transition-all duration-300" style={{
        boxShadow: '0 4px 15px rgba(255, 146, 91, 0.3)'
      }}>
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