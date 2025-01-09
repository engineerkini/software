import features from '../data/features';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description }) => (

  <div className=" border bg-bgCard/15  border-bgCard/15 rounded-md overflow-hidden ">
  
    {/* Content container */}
    <div className="  z-10 flex  flex-col  gap-4  p-4  w-full  min-w-[280px]  xl:min-w-full min-h-[200px] h-full">
      <div className="w-[40px] h-[40px] flex items-center mb-4 p-2.5 bg-primaryText/30 rounded-[6px]">
        <Icon className="w-[30px] h-[30px] text-primaryText" />
      </div>
     <div>
     <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
     <p className="text-gray-500 text-sm w-full ">{description}</p>
     </div>
    </div>

    {/* Hover effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#1d1c1c40] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const Services: React.FC = () => {
  
const{features:featuresList } = features()
  

  return (
    <section id="services" className=" relative py-16 h-full bg-backgroundColor ">

      <div className="container mx-auto px-4 z-30">
        <div className="text-center mb-12 space-y-3">
        <button className="bg-[#3f3f4666] text-bodyText px-5 py-3 text-bodySmall rounded-full transition-all duration-300">
        What we focus on ?
         </button>
          <h2 className="text-bodyText text-3xl md:text-5xl text-center font-semibold">
            Our key <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500 ' >Services</span>
          </h2>
        </div>

        <div className="grid  w-full items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 xl:gap-6  px-5 lg:px-[50px] xl:px-[100px] ">
          {featuresList.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      <div className="absolute  -z-10 inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        
      {/* <PlatformDashboard /> */}

    </section>
  );
};

export default Services;
