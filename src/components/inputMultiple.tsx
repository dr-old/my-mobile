import { capitalizeFirstLetter } from "@/utils/helpers";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface InputTextProps {
  type?: string;
  name: string;
  placeholder: string;
  value: string[]; // Changed type to string array
  onChange: (value: string[]) => void; // Changed onChange type
}

const InputMultiple: React.FC<InputTextProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  const handleRemoveItem = (index: number) => {
    const updatedValue = [...value];
    updatedValue.splice(index, 1);
    onChange(updatedValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      onChange([...value, capitalizeFirstLetter(e.currentTarget.value.trim())]);
      e.currentTarget.value = ""; // Clear input after adding value
    }
  };

  return (
    <div className="rounded-xl min-h-10 bg-white/[0.06] px-4 pb-2 pt-4 mb-[20px] flex flex-wrap">
      {value?.length > 0 &&
        value.map((item: string, index: number) => (
          <div
            key={index}
            className="flex flex-row px-2 py-1 mr-1 mb-2 bg-white/10 rounded-md items-start">
            <span className="text-xs font-medium">{item}</span>
            <XMarkIcon
              onClick={() => handleRemoveItem(index)}
              className="text-white w-4 h-4 ml-2"
            />
          </div>
        ))}
      <input
        type={"text"}
        name={name}
        id={name}
        onKeyPress={handleKeyPress} // Handle Enter keypress
        placeholder={placeholder}
        className="block border-0 rounded-lg py-1.5 pl-2 pr-14  text-white bg-transparent placeholder:text-gray-400/50 text-xs sm:leading-6"
      />
    </div>
  );
};

export default InputMultiple;
