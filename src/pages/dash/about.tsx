/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Card, InputSelect, InputTextBasic } from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useProfileStore } from "@/store/profile/profileStore";
import moment from "moment";
import { toast } from "react-toastify";
import {
  capitalizeFirstLetter,
  errorNotif,
  getZodiacSign,
  resizeImage,
  toBase64,
} from "@/utils/helpers";
import { PlusIcon } from "@heroicons/react/24/outline";

interface DetailProps {
  label?: string;
  value?: string;
}

const Detail = ({ label, value }: DetailProps) => {
  return (
    <div className="flex flex-row items-center mb-4">
      <text className="text-[13px] opacity-30 mr-1">{label}:</text>
      <text className="text-[13px]">{value}</text>
    </div>
  );
};

export default function About() {
  const { createProfile, updateProfile, getProfile, setProfileImage, profile } =
    useProfileStore() as ProfileStoreType;
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    name: profile?.name || "",
    gender: profile?.gender || "",
    birthday: profile?.birthday || "",
    horoscope: profile?.horoscope || "",
    zodiac: profile?.zodiac || "",
    height: profile?.height || "",
    weight: profile?.weight || "",
    edit: false,
  });

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = async () => {
    if (formData.edit) {
      if (profile?.email) {
        const { data, error } = (await updateProfile({
          name: formData.name || profile?.name,
          birthday: moment(formData.birthday || profile?.birthday).format(
            "YYYY-MM-DD"
          ),
          height: parseFloat(formData.height || profile?.height),
          weight: parseFloat(formData.weight || profile?.weight),
        })) as unknown as ResponsePayloadType;
        if (error) {
          errorNotif(error);
        }
        if (data) {
          toast.success(capitalizeFirstLetter(data.message), {
            position: "top-right",
          });
          setFormData({
            name: "",
            gender: "",
            birthday: "",
            horoscope: "",
            zodiac: "",
            height: "",
            weight: "",
            edit: false,
          });
        }
      } else {
        const { data, error } = (await createProfile({
          name: formData.name,
          birthday: moment(formData.birthday).format("YYYY-MM-DD"),
          height: parseFloat(formData.height),
          weight: parseFloat(formData.weight),
          interests: [],
        })) as unknown as ResponsePayloadType;
        if (error) {
          errorNotif(error);
        }
        if (data) {
          toast.success(capitalizeFirstLetter(data.message), {
            position: "top-right",
          });
          setFormData({
            name: "",
            gender: "",
            birthday: "",
            horoscope: "",
            zodiac: "",
            height: "",
            weight: "",
            edit: false,
          });
        }
      }
      getProfile();
    } else {
      setFormData({ ...formData, edit: true });
    }
  };

  const onSelectMultiImage = (e: ChangeEvent<HTMLInputElement>) => {
    const filePathsPromises: any[] = [];
    const fileObj = e.target.files;
    const preview = async () => {
      if (fileObj) {
        const totalFiles = e?.target?.files?.length;
        if (totalFiles) {
          for (let i = 0; i < totalFiles; i++) {
            const img = fileObj[i];
            const resizedImage = await resizeImage(img, 800, 600); // Adjust the dimensions as needed
            filePathsPromises.push(toBase64(resizedImage));
            const filePaths = await Promise.all(filePathsPromises);
            const mappedFiles = filePaths.map((base64File) => ({
              documentNumber: "",
              documentName: base64File?.name,
              documentSize: base64File?.size,
              documentSource: base64File?.images,
            }));
            setProfileImage(mappedFiles);
            setFiles(mappedFiles);
          }
        }
      }
    };
    if (!fileObj) {
      return null;
    } else {
      preview();
    }
  };

  const onDeleteFiles = (id: any) => {
    if (fileRef.current) {
      fileRef.current.value = "";
      setFiles(files.splice(id, 0));
    }
  };

  return (
    <Card label="About" edit={formData.edit} onPress={handleEdit}>
      {formData.edit ? (
        <>
          <div className="flex flex-row items-center mb-7">
            <div className=" flex justify-center items-center rounded-xl w-14 h-14 bg-white/[0.08]">
              <label
                htmlFor="file-upload"
                className="flex justify-center items-center rounded-xl w-14 h-14 bg-white/[0.08] cursor-pointer">
                {files?.length > 0 ? (
                  <img src={files[0]?.documentSource} width={56} height={56} />
                ) : (
                  <PlusIcon className=" h-6 w-6 text-[#FFE2BE]" />
                )}
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={onSelectMultiImage}
                  accept="image/*"
                />
              </label>
            </div>
            <span className="ml-4 text-xs font-light">Add Image</span>
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
        </>
      ) : profile?.name ? (
        <>
          <Detail
            label="Birthday"
            value={`
              ${moment(profile?.birthday).format(
                "DD / MM / YYYY"
              )} (Age ${moment().diff(moment(profile?.birthday), "years")})`}
          />
          <Detail
            label="Horoscope"
            value={getZodiacSign(profile?.birthday)?.horoscope}
          />
          <Detail
            label="Zodiac"
            value={getZodiacSign(profile?.birthday)?.sign}
          />
          <Detail label="Height" value={`${profile?.height} cm`} />
          <Detail label="Weight" value={`${profile?.weight} kg`} />
        </>
      ) : (
        <>
          <text className="text-sm opacity-50">
            Add in your your to help others know you better
          </text>
        </>
      )}
    </Card>
  );
}
