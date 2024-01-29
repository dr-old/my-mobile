/* eslint-disable @next/next/no-img-element */
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollScaleAnimationProps {
  item: {
    company: string;
    title: string;
    price: string;
    image: string;
    rating: number;
  };
}

function ScrollScaleAnimation({ item }: ScrollScaleAnimationProps) {
  const worksRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: worksRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0.5, 1]);

  return (
    // <div className=" bg-slate-800" ref={worksRef}>
    <motion.div
      ref={worksRef}
      style={{
        width: "100%",
        scale: scale,
        opacity: opacity,
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10"
    >
      <div className="flex flex-col bg-slate-100/80 text-slate-800 w-full rounded-3xl p-10">
        <span className="font-light mb-3">{item.company}</span>
        <h1 className="font-thin text-2xl md:text-3xl">{item.title}</h1>
        <div className="flex flex-1 pt-3 items-end">
          <ArrowUpRightIcon
            className="h-10 w-10 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
      <div>
        <img
          src={item.image}
          alt="Your Image"
          className="w-full object-cover rounded-3xl"
        />
      </div>
    </motion.div>
    // </div>
  );
}

export default ScrollScaleAnimation;
