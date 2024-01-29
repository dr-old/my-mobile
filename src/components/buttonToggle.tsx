import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from ".";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";

interface ButtonToggleProps {
  type: string;
}

const ButtonToggle: React.FC<ButtonToggleProps> = ({ type }) => {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const controls = useAnimation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (type === "lang") {
    return (
      <motion.div
        whileHover={{
          rotate: [0, 360], // Rotate from 0 to 360 degrees in a loop
          transition: { duration: 1, repeat: Infinity, ease: "linear" }, // Loop the animation infinitely
        }}
        onHoverEnd={() => controls.start({ rotate: 0 })} // Stop the loop when the hover ends
        animate={controls}
        className={`flex flex-row items-center leading-6 px-3 py-2 rounded-xl mr-3 border-2 ${
          theme === "dark" ? "border-indigo-500" : "border-slate-900"
        } `}
      >
        <button
          onClick={() => changeLanguage(i18n?.language === "id" ? "en" : "id")}
        >
          {i18n?.language === "id" ? <p>🏴󠁧󠁢󠁥󠁮󠁧󠁿</p> : <p>🇮🇩</p>}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{
        rotate: [0, 360], // Rotate from 0 to 360 degrees in a loop
        transition: { duration: 1, repeat: Infinity, ease: "linear" }, // Loop the animation infinitely
      }}
      onHoverEnd={() => controls.start({ rotate: 0 })} // Stop the loop when the hover ends
      animate={controls}
      className={`flex flex-row items-center leading-6 px-3 py-2 rounded-xl ${
        theme === "dark" ? "bg-indigo-500" : "bg-slate-900"
      } `}
    >
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <SunIcon className="text-yellow-300 w-5 h-5" />
        ) : (
          <MoonIcon className=" text-slate-100 w-5 h-5" />
        )}
      </button>
    </motion.div>
  );
};

export default ButtonToggle;
