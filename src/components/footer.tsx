/* eslint-disable @next/next/no-img-element */
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from ".";

const ButtonPrimary = () => {
  return (
    <div className="group inline-block relative overflow-hidden">
      <div className="py-5 px-6 flex flex-row justify-between bg-slate-300 rounded-2xl transform origin-bottom transition-transform duration-300 group-hover:scale-95">
        <div className="text-slate-900">
          <div className="flex flex-row items-center">
            <EnvelopeIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            <p>Email</p>
          </div>
          <p>Danniramdan96@gmail.com</p>
        </div>
        <a
          href="mailto:Danniramdan96@gmail.com"
          className="hidden md:inline-flex justify-center bg-slate-200 text-slate-700 rounded-2xl font-THIN px-3 py-3"
        >
          SEND TO EMAIL
        </a>
      </div>
    </div>
  );
};

interface ButtonDefaultProps {
  color: string;
  icon?: ReactNode;
  value?: string;
  link?: string;
  comp?: ReactNode;
}

const ButtonDefault = ({ color, icon, value, comp }: ButtonDefaultProps) => {
  return (
    <div className="group inline-block relative overflow-hidden">
      <div
        className={`py-5 px-6 ${color} rounded-2xl transform origin-bottom transition-transform duration-300 group-hover:scale-95`}
      >
        {comp || (
          <Link href="#" legacyBehavior>
            <a
              target="_blank"
              className="flex flex-row items-center text-slate-300"
            >
              {icon}
              <p>{value}</p>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

interface FooterContentProps {
  no: string;
  desc: string;
}

const FooterContent = ({ no, desc }: FooterContentProps) => {
  return (
    <div className="mb-4 text-slate-300">
      <h1 className="font-bold text-2xl text-indigo-500">{no}</h1>
      <p className=" font-thin text-2xl">{desc}</p>
    </div>
  );
};

const Footer = () => {
  const { theme } = useTheme();
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 20; // Adjust this value as needed

      setScrolledToBottom(isScrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <footer className="mt-20 md:mt-40 flex flex-col">
      <div
        className={`bg-gray-800 text-white py-6 transform origin-bottom transition-transform duration-300 ${
          scrolledToBottom ? "rounded-3xl scale-90" : ""
        }`}
      >
        <div className="md:container mx-4 md:mx-auto py-10 md:py-36">
          <h1 className="text-indigo-500 font-light mb-10 sm:text-2xl md:text-5xl">
            Use these cues to awaken the chatterbox within me. Works much better
            than espresso!
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">
            <FooterContent
              no="01."
              desc="how experiences should be unique & different than usual"
            />
            <FooterContent
              no="02."
              desc="building products that makes people smile!"
            />
            <FooterContent
              no="03."
              desc="how products must have some personality! always."
            />
          </div>
          <div className=" bg-slate-600 h-[1px] flex my-10" />
          <div className="grid grid-cols-1 gap-3">
            <ButtonDefault
              color="bg-indigo-500"
              comp={
                <Link
                  href="https://www.linkedin.com/in/danni-ramdan-4359b3214"
                  legacyBehavior
                >
                  <a
                    target="_blank"
                    className="flex flex-row items-center text-slate-900"
                  >
                    <DocumentTextIcon
                      className="h-5 w-5 mr-2"
                      aria-hidden="true"
                    />
                    <p>Download Resume</p>
                  </a>
                </Link>
              }
            />
            <ButtonPrimary />
            <ButtonDefault
              color="bg-slate-900"
              comp={
                <Link
                  href="https://www.linkedin.com/in/danni-ramdan-4359b3214"
                  legacyBehavior
                >
                  <a
                    target="_blank"
                    className="flex flex-row items-center text-slate-300"
                  >
                    <img src="/images/linkedin.png" className="w-5 h-5 mr-2" />
                    <p>Linkedin</p>
                  </a>
                </Link>
              }
            />
            <ButtonDefault
              color="bg-slate-900"
              comp={
                <Link href="https://wa.me/6285798261849" legacyBehavior>
                  <a
                    target="_blank"
                    className="flex flex-row items-center text-slate-300"
                  >
                    <img src="/images/whatsapp.png" className="w-5 h-5 mr-2" />
                    <p>Whatsapp</p>
                  </a>
                </Link>
              }
            />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col ${
          theme === "dark" ? "text-slate-300" : "text-slate-900"
        } py-14 px-4 items-center text-center`}
      >
        <h1 className="font-bold text-2xl">Danni Ramdan</h1>
        <p className="font-thin">
          Crafted with love💖, some chaos😶‍🌫️ + lots of chai & coffee☕!{" "}
        </p>
        <p className="font-thin">
          I trust to see you again, also I have a message for you. Hehe, bless
          you!
        </p>
        <p className="text-slate-500">
          © Copyrights 2023. All rights & wrongs reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
