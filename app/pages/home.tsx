import { Button } from '@/components/ui/button';
import StarryBackground from '../test/page';
const Home = () => {

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

      className=" cursor-pointer bg-gradient-to-r from-primaryText to-secondaryText  text-white px-7 py-4 bg-opacity-10 hover:bg-opacity-75 shadow-xl hover:shadow-2xl text-bodyDefault font-[600] rounded-[10px] transition-all duration-300 mt-6"
    >
   Get Started
    </button>
  </div>
</div>
</div>
    </>
   
  );
};

export default Home;