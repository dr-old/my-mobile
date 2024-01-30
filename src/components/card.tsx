import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

interface InputTextProps {
  type?: string;
  label: string;
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  edit?: boolean;
}

const Card: React.FC<InputTextProps> = ({
  type,
  edit,
  disabled,
  label,
  children,
  onPress,
}) => {
  return (
    <div className="bg-[#0E191F] w-full mb-[18px] py-[18px] px-[27px] rounded-xl">
      <div className="flex flex-row justify-between">
        <text className="text-sm">{label}</text>
        {edit ? (
          <text onClick={onPress} className="text-xs text-[#FFE2BE]">
            Save & Update
          </text>
        ) : (
          <PencilSquareIcon onClick={onPress} className="text-white w-5 h-5" />
        )}
      </div>
      <div className="flex flex-col mt-8 mb-4">{children}</div>
    </div>
  );
};

export default Card;
