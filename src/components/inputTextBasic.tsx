import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface InputTextProps {
  type?: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  disabled?: boolean;
}

const InputTextBasic: React.FC<InputTextProps> = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className="flex flex-row justify-between items-center mb-3">
      <text className="text-[13px] opacity-30">{label}</text>
      <div className="rounded-lg flex flex-row justify-end w-2/3 border-[1px] border-white/[0.22] bg-white/[0.06]">
        {type === "date" ? (
          <DatePicker
            disbled={disabled}
            selected={value}
            onChange={(date: any) =>
              onChange({ target: { name, value: date } })
            }
            dateFormat="dd MM yyyy"
            placeholderText="DD MM YYYY"
            className="rounded-lg inline-flex w-full h-[36px] py-1.5 px-[18px] text-white bg-transparent placeholder:text-gray-400/50 text-[13px] leading-6 text-right"
          />
        ) : (
          <input
            disabled={disabled}
            type={type || "text"}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className="block border-0 rounded-lg py-1.5 px-[18px] w-full h-[36px] text-white bg-transparent placeholder:text-gray-400/50 text-[13px] leading-6 text-right"
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};

export default InputTextBasic;
