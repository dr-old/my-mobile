import { Layout } from "@/components";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookies } from "cookies-next";
import { GetServerSideProps } from "next";
import { useAuthStore } from "@/store/auth/authStore";

export default function Welcome() {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore() as AuthStoreType;

  useEffect(() => {
    const fetchSession = async () => {
      if (isLoggedIn) {
        router.push("dash/home");
      } else {
        router.push("auth/login");
      }
    };

    const timeout = setTimeout(() => {
      fetchSession();
    }, 4000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [router]);

  return (
    <Layout type="gradient">
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <h1 className="text-center text-[35px] text-[#FFE2BE] font-semibold">
            Mobile<text className="font-thin">App</text>
          </h1>
          <h1 className="text-center text-sm font-thin opacity-30">
            By Danni Ramdan
          </h1>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  // Parse cookies from the request headers
  const cookies = getCookies({ req, res });

  // Access cookies using the cookie name
  const token = cookies["accessToken"] || null;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }

  return {
    props: { token },
  };
};
