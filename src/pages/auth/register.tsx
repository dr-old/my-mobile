/* eslint-disable jsx-a11y/alt-text */
import { Button, InputText, Layout, NavHeader } from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthStore } from "@/store/auth/authStore";
import { toast } from "react-toastify";
import { capitalizeFirstLetter, errorNotif } from "@/utils/helpers";
import { getCookies } from "cookies-next";
import { GetServerSideProps } from "next";

export default function Register() {
  const { register } = useAuthStore() as AuthStoreType;
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

  const handleRegister = async () => {
    if (formData.password !== formData.passwordConfirm) {
      toast.error("Password is not match", {
        position: "top-right",
      });
    } else {
      const { ok, data, error } = (await register({
        email: formData.email,
        username: formData.username,
        password: formData.password,
      })) as unknown as ResponsePayloadType;
      if (error) {
        errorNotif(error);
      }
      if (data) {
        toast.success(capitalizeFirstLetter(data.message), {
          position: "top-right",
        });
        console.log("data", data);
        setFormData({
          email: "",
          username: "",
          password: "",
          passwordConfirm: "",
        });
      }
    }
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
        onPress={handleRegister}
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

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
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
};
