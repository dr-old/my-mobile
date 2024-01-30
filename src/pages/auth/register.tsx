/* eslint-disable jsx-a11y/alt-text */
import { Button, InputText, Layout, NavHeader } from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    router.push("/auth/login");
  };

  const handleValidate = () => {
    if (
      formData.email &&
      formData.username &&
      formData.password &&
      formData.passwordConfirm
    ) {
      return false;
    }
    return true;
  };

  return (
    <Layout type="gradient">
      <NavHeader onPress={() => console.log(2)} />
      <h1 className=" ml-5 mt-14 mb-6 text-[24px] font-semibold">Register</h1>
      <InputText
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />
      <InputText
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Create Username"
      />
      <InputText
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Create Password"
      />
      <InputText
        type="password"
        name="passwordConfirm"
        value={formData.passwordConfirm}
        onChange={handleChange}
        placeholder="Confirm Password"
      />
      <Button
        disabled={handleValidate()}
        type="gradient"
        label="Register"
        onPress={() => console.log(1)}
      />
      <p className="text-center text-[13px] mt-[52px]">
        Have an account?{" "}
        <text onClick={handleLogin} className="text-[#FFE2BE]">
          Login here
        </text>
      </p>
    </Layout>
  );
}
