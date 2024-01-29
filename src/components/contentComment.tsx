/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

interface ContentCommentProps {
  data: Array<{
    image: string;
    title: string;
    subtitle: string;
  }>;
  reverse?: boolean;
}

const ContentComment = ({ data, reverse = false }: ContentCommentProps) => {
  return (
    <div className="flex-col max-h-96 bg-slate-500 items-center overflow-hidden">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ContentComment;
