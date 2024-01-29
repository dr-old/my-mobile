import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

interface InputTextProps {
  label?: string;
  onPress: () => void;
}

const NavHeader: React.FC<InputTextProps> = ({ label, onPress }) => {
  return (
    <div onClick={onPress} className="flex flex-row mt-[20px]">
      <ChevronLeftIcon className="text-white w-5 h-5" />
      <p className=" ml-[10px] text-[14px] ">{label || "Back"}</p>
    </div>
  );
};

export default NavHeader;
