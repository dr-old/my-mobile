import { ThemeProvider } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import "../config/i18n";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const { pathname, query } = router;

    // Extract the language from the URL, assuming it follows the pattern /{language}/...
    const language = pathname.split("/")[1];

    // If no language is found, redirect to the default language
    if (!language) {
      router.push(`/${pathname}`, "", {
        shallow: true,
      });
    }
  }, [router.pathname]);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
