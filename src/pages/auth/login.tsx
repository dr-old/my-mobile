/* eslint-disable jsx-a11y/alt-text */
import { Button, InputText, Layout, NavHeader } from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout type="gradient">
      <NavHeader onPress={() => console.log(2)} />
      <h1 className=" ml-5 mt-14 mb-6 text-[24px] font-semibold">Login</h1>
      <InputText
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter Username/Email"
      />
      <InputText
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter Password"
      />
      <Button type="gradient" label="Login" onPress={() => console.log(1)} />
      <p className="text-center text-[13px] mt-[52px]">
        No account? <text className="text-[#FFE2BE]">Register here</text>
      </p>
    </Layout>
  );
}
