/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Card, InputSelect, InputTextBasic } from "@/components";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthday: "",
    horoscope: "",
    zodiac: "",
    height: "",
    weight: "",
    edit: false,
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    handleChange({ target: { name: "edit", value: !formData.edit } });
  };

  return (
    <Card label="About" edit={formData.edit} onPress={handleEdit}>
      {/* <text className="text-sm opacity-50">
            Add in your your to help others know you better
          </text> */}
      <div className="flex flex-row items-center mb-4">
        <text className="text-[13px] opacity-30">Birthday:</text>
        <text className="text-[13px]"> 28 / 08 / 1995 (Age 28)</text>
      </div>

      <div className="flex flex-row items-center mb-7">
        <div className=" flex justify-center items-center rounded-xl w-14 h-14 bg-white/[0.08]">
          <PlusIcon className=" h-6 w-6 text-[#FFE2BE]" />
        </div>
        <text className=" ml-4 text-xs font-light">Add Image</text>
      </div>

      <InputTextBasic
        label="Display Name:"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <InputSelect
        label="Gender:"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        placeholder="Select Gender"
      />
      <InputTextBasic
        type="date"
        label="Birthday:"
        name="birthday"
        value={formData.birthday}
        onChange={handleChange}
        placeholder="DD MM YYYY"
      />
      <InputTextBasic
        label="Horoscope:"
        name="horoscope"
        value={formData.horoscope}
        onChange={handleChange}
        placeholder="--"
        disabled={true}
      />
      <InputTextBasic
        label="Zodiac:"
        name="zodiac"
        value={formData.zodiac}
        onChange={handleChange}
        placeholder="--"
        disabled={true}
      />
      <InputTextBasic
        type="number"
        label="Height:"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="Add height"
      />
      <InputTextBasic
        type="number"
        label="Weight:"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Add weight"
      />
    </Card>
  );
}
