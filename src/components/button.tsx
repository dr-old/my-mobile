import React from "react";

interface InputTextProps {
  type?: string;
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<InputTextProps> = ({
  type,
  label,
  onPress,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onPress}
      className={`block w-full border-0 rounded-xl h-10 text-base font-semibold text-center ${
        type === "gradient"
          ? "bg-gradient-to-r from-[#62CDCB] to-[#4599DB] shadow-lg shadow-[#62CDCB]/50"
          : type
      }
      ${disabled ? "opacity-50" : ""}
      `}>
      {label}
    </button>
  );
};

export default Button;
