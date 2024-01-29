/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Rating, useTheme } from ".";

interface ContentBannerProps {
  data: Array<{
    image: string;
    title: string;
    price: string;
    rating: number;
  }>;
}

const ContentBanner = ({ data }: ContentBannerProps) => {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center space-x-4 py-1 items-center md:container mx-4 md:mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }} // Delay in milliseconds (3 seconds)
        className="mySwiper"
        breakpoints={{
          // Define breakpoints for responsive design
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
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="py-10">
            <div className=" bg-slate-800 rounded-3xl overflow-hidden shadow-lg relative group transition-transform transform hover:translate-y-3">
              <img
                src={item.image}
                alt={`Image ${item.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="px-6 py-4 ">
                <p className="mb-1 font-medium text-slate-300 text-xl line-clamp-2">
                  {item.title}
                </p>
                <p className="text-slate-400 font-light mb-3">{item.price}</p>
                <Rating ratings={item.rating} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentBanner;
