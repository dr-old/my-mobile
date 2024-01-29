/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

interface ContentSkillProps {
  data: Array<{
    image: string;
    title: string;
    subtitle: string;
  }>;
  reverse?: boolean;
}

const ContentSkill = ({ data, reverse = false }: ContentSkillProps) => {
  return (
    <div className="flex justify-center space-x-6 items-center md:container mx-4 md:mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 0,
          reverseDirection: reverse,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        // effect="translate" // Set the effect to translate
        speed={3000}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="py-3">
            <div className="flex flex-row bg-slate-800 p-4 rounded-3xl shadow-lg relative group transition-transform transform translate-x-0 border-2 border-transparent hover:border-indigo-500 ">
              <a className="max-w-[28.3%] flex items-center">
                <img
                  src={item.image}
                  alt={`Image ${item.title}`}
                  className="h-[70px] w-[70px] m-auto"
                />
              </a>
              <div className="p-3">
                <div className="font-bold text-slate-300 text-xl mb-1">
                  {item.title}
                </div>
                <p className="text-slate-400 text-[14px] mb-3">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentSkill;
