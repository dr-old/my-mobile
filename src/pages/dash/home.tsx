/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Card, Layout, NavHeader } from "@/components";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useState } from "react";
import About from "./about";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthday: "",
    horoscope: "",
    zodiac: "",
    height: "",
    weight: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <NavHeader
        onPress={() => router.back()}
        labelMid="@jhondoe"
        // iconEnd={<EllipsisHorizontalIcon className="text-white w-5 h-5" />}
      />
      <div className="bg-[#162329] h-[190px] w-full mt-11 mb-6 rounded-xl relative">
        <text className=" absolute bottom-4 left-3 text-base">
          @johndoe123,
        </text>
        {/* <PencilSquareIcon className="text-white w-5 h-5 absolute right-3 top-3" /> */}
      </div>
      <About />
      <Card label="Interest" onPress={() => router.push("/dash/interest")}>
        <text className="text-sm opacity-50">
          Add in your interest to find a better match
        </text>
      </Card>
      <div className="w-full h-10"></div>
    </Layout>
  );
}
