/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";

export const content = [
  {
    company: "PT. Digital Colony",
    title:
      "A repository of the freelance projects I've works on over the years",
    price: "Rp. 200.000",
    image: "/images/mockup-mobile-1.png",
    rating: 50,
  },
  {
    company: "PT. Hayuq System Indonesia",
    title:
      "Exploring use cases for next generation artifical intelligence products",
    price: "Rp. 200.000",
    image: "/images/mockup-mobile-2.png",
    rating: 50,
  },
  {
    company: "PT. Sahabat Sentosa Sejahtera",
    title: "Designing a game-changing global growth platform for EOR",
    price: "Rp. 200.000",
    image: "/images/3.jpeg",
    rating: 50,
  },
  {
    company: "PT. Jalur Nugraha Eka Kurir",
    title: "Creating the first truly mobile bank and debit card in The Nordics",
    price: "Rp. 150.000",
    image: "/images/4.jpeg",
    rating: 10,
  },
  {
    company: "PT. Algosolusi Nusantara",
    title:
      "Automating the product development process for Zurich, Mastercard & JetBlue",
    price: "Rp. 250.000",
    image: "/images/1.jpeg",
    rating: 45,
  },
  {
    company: "PT. Arkamaya",
    title:
      "Automating the product development process for Zurich, Mastercard & JetBlue",
    price: "Rp. 350.000",
    image: "/images/2.jpeg",
    rating: 77,
  },
];

export const contentSkill = [
  {
    title: "React Native",
    subtitle: "Mobile Apps Development",
    image: "/images/react.svg",
  },
  {
    title: "Next JS",
    subtitle: "Front-End Development",
    image: "/images/nextjs.svg",
  },
  {
    title: "Vue",
    subtitle: "Front-End Development",
    image: "/images/vue-logomark.svg",
  },
  {
    title: "Flutter",
    subtitle: "Mobile Apps Development",
    image: "/images/flutter.svg",
  },
  {
    title: "React JS",
    subtitle: "Front-End Development",
    image: "/images/react.svg",
  },
  {
    title: "Tailwind CSS",
    subtitle: "UI/UX Design",
    image: "/images/tailwindcss.svg",
  },
  {
    title: "PHP",
    subtitle: "Front-End Development",
    image: "/images/php.svg",
  },
  {
    title: "Codeigniter",
    subtitle: "Front-End Development",
    image: "/images/codeigniter.svg",
  },
  {
    title: "Yii",
    subtitle: "Front-End Development",
    image: "/images/yii.svg",
  },
  // {
  //   title: "HTML",
  //   subtitle: "Front-End Development",
  //   image: "/images/html.svg",
  // },
  // {
  //   title: "CSS",
  //   subtitle: "UI Design",
  //   image: "/images/css.svg",
  // },
  // {
  //   title: "Javascript",
  //   subtitle: "Front-End Development",
  //   image: "/images/javascript.svg",
  // },
  // {
  //   title: "Figma",
  //   subtitle: "UI/UX Design",
  //   image: "/images/figma-logomark.svg",
  // },
  // {
  //   title: "blender",
  //   subtitle: "3D UI Design",
  //   image: "/images/blender.svg",
  // },
  // {
  //   title: "Python",
  //   subtitle: "Data Science",
  //   image: "/images/python-logomark.svg",
  // },
  // {
  //   title: "Excel",
  //   subtitle: "Data Analysis",
  //   image: "/images/excel.svg",
  // },
];

export const contentDatabase = [
  {
    title: "Mysql",
    subtitle: "Database",
    image: "/images/mysql.svg",
  },
  {
    title: "Oracle",
    subtitle: "Database",
    image: "/images/oracle.svg",
  },
  {
    title: "Postgresql",
    subtitle: "Database",
    image: "/images/postgresql.svg",
  },
  {
    title: "Mongodb",
    subtitle: "Database",
    image: "/images/mongodb.svg",
  },
];

export const contentValue = () => {
  const { t } = useTranslation();
  return [
    {
      title: t("Invest.great"),
      subtitle: t("Invest.great_desc"),
      image: "/images/react.svg",
    },
    {
      title: t("Invest.shortcut"),
      subtitle: t("Invest.shortcut_desc"),
      image: "/images/react.svg",
    },
    {
      title: t("Invest.access"),
      subtitle: t("Invest.access_desc"),
      image: "/images/react.svg",
    },
  ];
};
