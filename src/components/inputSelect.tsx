import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface InputTextProps {
  type?: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  disabled?: boolean;
}

const InputSelect: React.FC<InputTextProps> = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className="flex flex-row  justify-between items-center mb-3">
      <text className="text-[13px] opacity-30">{label}</text>
      <div className=" bg-slate-600 w-2/3 rounded-lg border-[1px] border-white/[0.22] bg-white/[0.06]">
        <Menu as="div" className="relative inline-block text-left  w-full">
          <div>
            <Menu.Button
              className={`inline-flex w-full justify-end items-center h-[36px] rounded-lg py-1.5 px-[18px] text-[13px] leading-6 text-right ${
                value ? " text-white" : "text-gray-400/50"
              }`}>
              {value || placeholder}
              <ChevronDownIcon
                className="-mr-1 ml-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {["Male", "Female"].map((item, index) => (
                  <Menu.Item key={index.toString()}>
                    <a
                      onClick={() =>
                        onChange({ target: { name, value: item } })
                      }
                      className={`
                    ${
                      value === item
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    }
                    " block px-4 py-2 text-sm"
                  `}>
                      {item}
                    </a>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default InputSelect;
