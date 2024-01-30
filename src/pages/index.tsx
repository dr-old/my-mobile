/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Layout, useTheme } from "@/components";
import { Inter } from "next/font/google";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface SectionHeaderProps {
  subtitle: string;
  subtitleColor?: string;
  titleColor?: string;
  title1: string;
  title2: string;
  styles?: string;
}

const SectionHeader = ({
  subtitle,
  subtitleColor,
  titleColor,
  title1,
  title2,
  styles,
}: SectionHeaderProps) => {
  const { theme } = useTheme();
  const clr = theme === "dark" ? "text-slate-300" : "text-slate-900";
  return (
    <div className={styles}>
      <motion.div variants={item}>
        <p className={subtitleColor || "text-indigo-500"}>{subtitle}</p>
      </motion.div>
      <motion.div variants={item}>
        <h1
          className={`font-bold ${
            titleColor || clr
          } text-3xl md:text-4xl mt-1 md:mt-3`}>
          {title1}
        </h1>
      </motion.div>
      <motion.div variants={item}>
        <h1
          className={`font-bold ${
            titleColor || clr
          } text-3xl md:text-4xl mt-1 md:mt-3`}>
          {title2}
        </h1>
      </motion.div>
    </div>
  );
};

const cardList = [
  { title: "Card 1", description: "Description for Card 1" },
  { title: "Card 2", description: "Description for Card 2" },
  { title: "Card 3", description: "Description for Card 3" },
];

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/auth/login"); // Redirect to /auth/login after 2 seconds
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [router]);

  return (
    <Layout type="gradient">
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <h1 className="text-center text-[35px] text-[#FFE2BE] font-semibold">
            Mobile<text className="font-thin">App</text>
          </h1>
          <h1 className="text-center text-sm font-thin opacity-30">
            By Danni Ramdan
          </h1>
        </div>
      </div>
    </Layout>
  );
}
