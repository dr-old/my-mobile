import { toast } from "react-toastify";

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function successResponsePayload(data: any) {
  console.log("data", data);

  return { ok: true, data };
}

export function failedResponsePayload(error: any) {
  console.log("error", error);

  return { ok: false, data: null, error };
}

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const errorNotif = (error: any) => {
  typeof error.message === "object"
    ? error.message.map((item: any, key: number) => {
        return toast.error(capitalizeFirstLetter(item), {
          position: "top-right",
        });
      })
    : typeof error.message === "string"
    ? toast.error(capitalizeFirstLetter(error.message), {
        position: "top-right",
      })
    : null;
};

export const toBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve({
        size: file.size,
        name: file.name,
        images: reader.result,
      });
    reader.onerror = (error) => reject(error);
  });
};

export const resizeImage = async (
  imageFile: Blob | any,
  maxWidth: number,
  maxHeight: number
): Promise<File> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function (event: any) {
      const image = new Image();
      image.src = event.target.result as string;
      image.onload = function () {
        const canvas = document.createElement("canvas");
        let width = image.width;
        let height = image.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx: any = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);

        canvas.toBlob((blob) => {
          if (blob) {
            resolve(
              new File([blob], imageFile.name, {
                type: "image/jpeg",
                lastModified: Date.now(),
              })
            );
          } else {
            reject(new Error("Failed to resize image."));
          }
        }, "image/jpeg");
      };
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
};

export function getZodiacSign(birthday: string) {
  const toDate = new Date(birthday);
  const month = toDate.getMonth() + 1;
  const day = toDate.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return {
      sign: "Ram",
      horoscope: "♈ Aries",
    };
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return {
      sign: "Bull",
      horoscope: "♉ Taurus",
    };
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return {
      sign: "Twins",
      horoscope: "♊ Gemini",
    };
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return {
      sign: "Crab",
      horoscope: "♋ Cancer",
    };
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return {
      sign: "Lion",
      horoscope: "♌ Leo",
    };
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return {
      sign: "Virgin",
      horoscope: "♍ Virgo",
    };
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return {
      sign: "Balance",
      horoscope: "♎ Libra",
    };
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return {
      sign: "Scorpion",
      horoscope: "♏ Scorpius",
    };
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return {
      sign: "Archer",
      horoscope: "♐ Sagittarius",
    };
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return {
      sign: "Goat",
      horoscope: "♑ Capricornus",
    };
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return {
      sign: "Water Bearer",
      horoscope: "♒ Aquarius",
    };
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return {
      sign: "Fish",
      horoscope: "♓ Pisces",
    };
  } else {
    // If the birthday does not fall into any zodiac sign
    return {
      sign: "Unknown",
      horoscope: "Horoscope for unknown sign...",
    };
  }
}
