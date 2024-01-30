import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

interface InputTextProps {
  label?: string;
  labelMid?: string;
  labelEnd?: string;
  iconEnd?: React.ReactNode;
  onPress: () => void;
}

const NavHeader: React.FC<InputTextProps> = ({
  label,
  labelMid,
  labelEnd,
  iconEnd,
  onPress,
}) => {
  return (
    <div onClick={onPress} className="flex flex-row mt-[20px] relative">
      <div className="flex flex-row absolute left-0">
        <ChevronLeftIcon className="text-white w-5 h-5" />
        <text className=" ml-[8px] text-[14px] ">{label || "Back"}</text>
      </div>
      {labelMid && (
        <text className="text-[14px] text-center absolute inset-0 top-0">
          {labelMid}
        </text>
      )}
      {iconEnd || labelEnd ? (
        <div className="flex flex-row absolute right-0">
          {iconEnd && iconEnd}
          {labelEnd && <text className="text-[14px] ">{labelEnd}</text>}
        </div>
      ) : null}
    </div>
  );
};

export default NavHeader;
