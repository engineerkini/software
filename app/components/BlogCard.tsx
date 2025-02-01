'use client'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface BlogSlide {
  imageUrl: string;
  date: string;
  title: string;
  text: string;
  link: string;
}

interface BlogSliderProps {
  slides: BlogSlide[];
}

const BlogSlider: React.FC<BlogSliderProps> = ({ slides }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-[95%] relative max-w-4xl mx-auto bg-white shadow-2xl p-6 rounded-3xl h-[400px] transition-all duration-300 md:h-auto md:min-h-[500px] md:my-44">
      <Swiper
        spaceBetween={30}
        effect="fade"
        loop={true}
        mousewheel={{
          invert: false,
        }}
        pagination={{
          el: '.blog-slider__pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        modules={[EffectFade, Mousewheel, Pagination]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center md:flex-col">
              <div className="relative w-[300px] flex-shrink-0 h-[300px] -translate-x-20 md:translate-x-0 md:-translate-y-1/2 md:w-[90%] md:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fe8a39] to-[#fd3838] rounded-2xl opacity-80" />
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-2xl relative z-10"
                />
              </div>
              
              <div className="flex-grow pr-6 md:text-center md:-mt-20 md:px-8">
                <span className="block text-[#7b7992] font-medium mb-4">
                  {slide.date}
                </span>
                <h3 className="text-2xl font-bold text-[#0d0925] mb-5">
                  {slide.title}
                </h3>
                <p className="text-[#4e4a67] mb-8 leading-relaxed">
                  {slide.text}
                </p>
                <a
                  href={slide.link}
                  className="inline-flex px-8 py-4 rounded-full text-white font-medium tracking-wider bg-gradient-to-r from-[#fe8a39] to-[#fd3838] shadow-lg shadow-red-500/40 hover:shadow-red-500/50 transition-shadow"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="blog-slider__pagination absolute z-20 right-5 top-1/2 -translate-y-1/2 w-3 text-center md:right-auto md:left-1/2 md:-translate-x-1/2 md:top-52 md:w-full md:flex md:justify-center md:items-center">
 
      </div>
    </div>
  );
};

export default BlogSlider;