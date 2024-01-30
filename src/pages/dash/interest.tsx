/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useState } from "react";
import { InputMultiple, Layout, NavHeader } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Interest() {
  const router = useRouter();
  const [interest, setInterest] = useState([]);

  const handleSave = () => {
    console.log();
  };

  return (
    <Layout type="gradient">
      <NavHeader
        onPress={() => router.back()}
        iconEnd={
          <text
            onClick={handleSave}
            className="text-[#ABFFFD] text-sm font-semibold">
            Save
          </text>
        }
      />
      <div className="flex flex-col mt-24 h-screen">
        <text className="text-[#FFE2BE] text-sm font-bold">
          Tell everyone about yourself
        </text>
        <h1 className="text-white text-xl font-bold mt-2">
          What interest you?
        </h1>
        <div className=" w-full h-9" />
        <InputMultiple
          name="username"
          value={interest}
          onChange={setInterest}
          placeholder=""
        />
      </div>
    </Layout>
  );
}
