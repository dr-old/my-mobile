// TypingText.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
}

const TypingAnimation: React.FC<TypingTextProps> = ({ text }) => {
  const [animatedText, setAnimatedText] = useState<string>("");

  useEffect(() => {
    let index = -1;
    const normalizedText = text.normalize(); // Normalize the text
    const textArray = normalizedText.split("");
    const animationInterval = 100; // Adjust typing speed here

    const typingAnimation = () => {
      setAnimatedText((prev) => prev + textArray[index]);
      index++;

      if (index < textArray.length) {
        setTimeout(typingAnimation, animationInterval);
      }
      console.log(index, textArray.length, animatedText);
    };

    if (textArray.length > 0) {
      setTimeout(typingAnimation, animationInterval * 2); // Initial delay before typing starts
    }

    return () => setAnimatedText(""); // Reset text on component unmount
  }, [text]);

  return <motion.span>{animatedText}</motion.span>;
};

export default TypingAnimation;
