/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BoltIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  FingerPrintIcon,
  RocketLaunchIcon,
  SquaresPlusIcon,
  TvIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { ButtonToggle, useTheme } from ".";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hide = false;

  const navbar = [
    { name: t("Common.about"), href: "/about", icon: BoltIcon },
    { name: t("Common.works"), href: "/works", icon: TvIcon },
    { name: t("Common.connect"), href: "/contact", icon: RocketLaunchIcon },
    { name: t("Common.resume"), href: "/resume", icon: DocumentTextIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-blue-950/30 backdrop-blur-md" : "bg-opacity-0"
      } p-4 fixed z-10 w-full top-0 transition-all ease-in-out duration-300`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" legacyBehavior>
            <a className="-m-1.5 p-1.5">
              <span className="sr-only">DnG</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only text-slate-500">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group hidden={true} className="hidden lg:flex lg:gap-x-12">
          {hide && (
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 px-2 py-1 rounded-md text-slate-300 hover:bg-white/10">
                Product
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-slate-900/90 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50/10"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-slate-300 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-slate-300"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-slate-700/90">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-slate-300 hover:bg-white/10"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          )}
          {navbar.map((item, index) => (
            <div
              key={index.toString()}
              className={`flex flex-row items-center leading-6 px-3 py-2  rounded-md ${
                theme === "dark"
                  ? "text-slate-300 hover:bg-white/10"
                  : "text-slate-900 hover:bg-slate-900/10"
              }`}
            >
              {item?.icon ? (
                <item.icon className="h-4 w-4 mr-2" aria-hidden="true" />
              ) : null}
              <Link href={item.href} legacyBehavior>
                <a className="flex-row text-sm font-semibold ">{item.name}</a>
              </Link>
            </div>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ButtonToggle type="lang" />
          <ButtonToggle type="theme" />
          {/* <div className="flex flex-row items-center leading-6 px-3 py-2 rounded-md bg-indigo-600 text-slate-300 hover:bg-indigo-600/50">
            <DocumentTextIcon className="h-4 w-4 mr-2" aria-hidden="true" />
            <a href="#" className="text-sm font-semibold ">
              Resume
            </a>
          </div> */}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-950/30 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" legacyBehavior>
              <a className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/50">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  text-slate-300 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                {navbar.map((item, index) => (
                  <a
                    key={index.toString()}
                    href="#"
                    className={`flex flex-row items-center -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      theme === "dark"
                        ? "text-slate-300 hover:bg-white/10 "
                        : "text-slate-900 hover:bg-slate-900/10 "
                    }`}
                  >
                    {item?.icon ? (
                      <item.icon className="h-4 w-4 mr-2" aria-hidden="true" />
                    ) : null}
                    <Link href={item.href} legacyBehavior>
                      <a className="flex-row text-sm font-semibold ">
                        {item.name}
                      </a>
                    </Link>
                  </a>
                ))}
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-300 hover:bg-gray-50"
                >
                  Features
                </a> */}
              </div>
              <div className="py-6 flex flex-row">
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-300 hover:bg-gray-50"
                >
                  Log in
                </a> */}
                <ButtonToggle type="lang" />
                <ButtonToggle type="theme" />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
