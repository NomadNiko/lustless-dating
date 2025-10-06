"use client";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const data = [
    {
      name: t("features.verifiedIdentity.title"),
      icon1: "/assets/code-icon.png",
      icon2: "/assets/code-icon-dark.png",
      description: t("features.verifiedIdentity.description"),
    },
    {
      name: t("features.noPhotosFirst.title"),
      icon1: "/assets/edu-icon.png",
      icon2: "/assets/edu-icon-dark.png",
      description: t("features.noPhotosFirst.description"),
    },
    {
      name: t("features.zeroTolerance.title"),
      icon1: "/assets/project-icon.png",
      icon2: "/assets/project-icon-dark.png",
      description: t("features.zeroTolerance.description"),
    },
  ];
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="mb-2 text-xl text-center md:text-2xl font-Ovo">
        {t("sectionTitle")}
      </h4>
      <h2 className="text-5xl text-center sm:text-6xl font-Ovo">
        {t("mainTitle")}
      </h2>

      <div className="flex flex-col items-center w-full gap-20 my-20 lg:flex-row">
        <div className="relative mx-auto max-w-max">
          <img
            src="/assets/user-image.png"
            alt=""
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img
              src="/assets/circular-text.png"
              alt=""
              className="w-full animate-spin_slow"
            />
            <img
              src="/assets/dev-icon.png"
              alt=""
              className="absolute w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="max-w-2xl mb-10 text-base text-center whitespace-pre-line font-Ovo md:text-xl">
            {t("description")}
          </p>

          <ul className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {data.map((data) => (
              <li
                key={data.name}
                className="p-6 duration-500 border border-gray-300 cursor-pointer dark:border-white/30 rounded-xl hover:bg-lightHover hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
              >
                <img src={data.icon1} alt="" className="mt-3 w-7 dark:hidden" />
                <img
                  src={data.icon2}
                  alt=""
                  className="hidden mt-3 w-7 dark:block"
                />
                <h3 className="my-4 text-xl font-semibold text-gray-700 dark:text-white md:text-2xl">
                  {data.name}
                </h3>
                <p className="text-base text-gray-600 dark:text-white/80 md:text-lg">
                  {data.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
