/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// Import required modules

interface ContentValueProps {
  data: Array<{
    image: string;
    title: string;
    subtitle: string;
  }>;
  reverse?: boolean;
}

const ContentValue = ({ data, reverse = false }: ContentValueProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:container mx-4 md:mx-auto">
      {data.map((item, index) => (
        <div key={index} className="py-3">
          <motion.div
            // whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 0.8 }}
            className="flex flex-row bg-slate-800 p-4 rounded-3xl shadow-lg relative group transition-transform transform translate-x-0 border-2 border-transparent hover:border-indigo-500 "
          >
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
              <p className="text-slate-400 text-[14px] mb-3">{item.subtitle}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ContentValue;
