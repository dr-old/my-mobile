import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface InputTextProps {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

const InputText: React.FC<InputTextProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative rounded-xl bg-white/[0.06] mb-[20px]">
      <input
        type={type ? (type === "password" && visible ? "text" : type) : "text"}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="block w-full border-0 rounded-xl py-1.5 pl-[18px] pr-14 h-[51px] text-white bg-transparent placeholder:text-gray-400/50  sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
      {type === "password" ? (
        <div
          onClick={() => setVisible(!visible)}
          className="absolute inset-y-0 right-[18px] flex items-center">
          {visible ? (
            <EyeIcon className="text-white w-5 h-5" />
          ) : (
            <EyeSlashIcon className="text-white w-5 h-5" />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default InputText;
