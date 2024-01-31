/* eslint-disable jsx-a11y/alt-text */
import { Button, InputText, Layout, NavHeader } from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthStore } from "@/store/auth/authStore";
import { toast } from "react-toastify";
import { capitalizeFirstLetter, validateEmail } from "@/utils/helpers";
import { getCookies } from "cookies-next";

export default function Login() {
  const { login } = useAuthStore();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log("session", getCookies());

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    router.push("/auth/register");
  };

  const handleLogin = async () => {
    const { data, error } = await login({
      email: validateEmail(formData.username) ? formData.username : "",
      username: validateEmail(formData.username) ? "" : formData.username,
      password: formData.password,
    });
    if (error) {
      error?.message?.length > 0
        ? error.message.map((item: any, key: number) => {
            return toast.error(capitalizeFirstLetter(item), {
              position: "top-right",
            });
          })
        : null;
    }
    if (data) {
      toast.success(capitalizeFirstLetter(data.message), {
        position: "top-right",
      });
      setFormData({
        username: "",
        password: "",
      });
      router.replace("/");
    }
  };

  const handleValidate = () => {
    if (formData.username && formData.password) {
      return false;
    }
    return true;
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
      <Button
        disabled={handleValidate()}
        type="gradient"
        label="Login"
        onPress={handleLogin}
      />
      <p className="text-center text-[13px] mt-[52px]">
        No account?{" "}
        <text onClick={handleRegister} className="text-[#FFE2BE]">
          Register here
        </text>
      </p>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const cookies = getCookies({ req, res });

  // Access cookies using the cookie name
  const token = cookies["accessToken"] || null;

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { token },
  };
}
