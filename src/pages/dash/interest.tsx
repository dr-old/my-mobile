/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useState } from "react";
import { InputMultiple, Layout, NavHeader } from "@/components";
import { useProfileStore } from "@/store/profile/profileStore";
import { capitalizeFirstLetter, errorNotif } from "@/utils/helpers";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function Interest() {
  const { updateProfile, getProfile, profile } =
    useProfileStore() as ProfileStoreType;
  const router = useRouter();
  const [interest, setInterest] = useState<string[]>(
    profile?.interests?.length > 0 ? profile?.interests : []
  );

  const handleSave = async () => {
    console.log("interest", {
      ...profile,
      interests: interest,
    });

    const { data, error } = (await updateProfile({
      ...profile,
      interests: interest,
    })) as unknown as ResponsePayloadType;
    if (error) {
      errorNotif(error);
    }
    if (data) {
      toast.success(capitalizeFirstLetter(data.message), {
        position: "top-right",
      });
      setInterest([]);
      getProfile();
      // router.back();
    }
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
