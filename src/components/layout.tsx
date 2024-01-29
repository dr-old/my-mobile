import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { useTheme } from ".";
import { motion, useScroll, useSpring } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

interface LayoutPros {
  children: ReactNode;
  type?: string;
}

export default function Layout({ type, children }: LayoutPros) {
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className={`${
        theme === "dark"
          ? " bg-gradient-to-tl from-slate-900 via-slate-950 to-slate-900"
          : " bg-gradient-to-tl from-slate-100 via-slate-300 to-slate-100"
      } items-center justify-center`}>
      <motion.div
        className="fixed z-10 bottom-0 left-0 right-0 h-2 bg-indigo-500 origin-left"
        style={{ scaleX }}
      />
      {/* <Header /> */}
      <div
        className={`h-screen py-5 px-[18px] ${
          type === "gradient"
            ? "bg-gradient-to-bl from-[#1F4247] via-[#0D1D23] to-[#09141A]"
            : " bg-[#09141A]"
        }`}>
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
