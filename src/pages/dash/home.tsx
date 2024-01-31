/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Card, Layout, NavHeader } from "@/components";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useState } from "react";
import About from "./about";
import { deleteCookie, getCookies } from "cookies-next";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "@/store/auth/authStore";
import { useProfileStore } from "@/store/profile/profileStore";
import moment from "moment";
import { getZodiacSign } from "@/utils/helpers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { profile, profileImage, setProfileImage } =
    useProfileStore() as ProfileStoreType;
  const { clearSession } = useAuthStore() as AuthStoreType;
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

  const handleLogout = () => {
    deleteCookie("session");
    deleteCookie("accessToken");
    clearSession();
    setProfileImage([]);
    router.replace("/");
  };

  return (
    <Layout>
      <NavHeader
        onPress={() => router.back()}
        labelMid={profile?.username ? `@${profile?.username}` : undefined}
        iconEnd={
          <ArrowLeftEndOnRectangleIcon
            onClick={handleLogout}
            className="text-white w-5 h-5"
          />
        }
      />
      <div
        className={`bg-[#162329] z-[2] h-[190px] w-full mt-11 mb-6 rounded-xl relative`}>
        {profileImage?.length > 0 ? (
          <img
            src={profileImage[0]?.documentSource}
            className="w-full z-[3] h-[190px] absolute object-cover rounded-xl"
          />
        ) : null}
        <div className=" z-[4] flex flex-col absolute bottom-4 left-3">
          <text className=" text-base">
            @{profile?.username},{" "}
            {profile?.birthday
              ? moment().diff(moment(profile?.birthday), "years")
              : null}
          </text>
          <text className="text-[13px] font-light">{profile?.gender}</text>
          {profile?.birthday ? (
            <div className="flex flex-row mt-3">
              <text className="text-sm px-4 py-2 bg-white/5 rounded-[100px]">
                {getZodiacSign(profile?.birthday)?.horoscope}
              </text>
              <text className="ml-4 text-sm px-4 py-2 bg-white/5 rounded-[100px]">
                {getZodiacSign(profile?.birthday)?.sign}
              </text>
            </div>
          ) : null}
        </div>
        {/* <PencilSquareIcon className="text-white w-5 h-5 absolute right-3 top-3" /> */}
      </div>
      <About />
      <Card label="Interest" onPress={() => router.push("/dash/interest")}>
        {profile?.interests?.length > 0 ? (
          <div className="rounded-xl min-h-10 flex flex-wrap gap-3">
            {profile.interests.map((item: string, index: number) => (
              <text
                key={index.toString()}
                className=" text-sm px-4 py-2 bg-white/5 rounded-[100px]">
                {item}
              </text>
            ))}
          </div>
        ) : (
          <text className="text-sm opacity-50">
            Add in your interest to find a better match
          </text>
        )}
      </Card>
      <div className="w-full h-10"></div>
    </Layout>
  );
}

export async function getServerSideProps(req: Request, res: Response) {
  const cookies = getCookies({ req, res });

  // Access cookies using the cookie name
  const token = cookies["accessToken"] || null;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: { token },
  };
}
