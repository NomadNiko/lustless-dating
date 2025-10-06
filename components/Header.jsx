"use client";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header");

  return (
    <div className="flex flex-col items-center justify-center w-11/12 max-w-3xl min-h-screen gap-4 py-32 mx-auto text-center md:py-0">
      <h3 className="flex items-end gap-2 mb-3 text-xl md:text-2xl font-Ovo">
        {t("welcome")}
        <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
      </h3>
      <div className="relative group">
        <div className="absolute inset-0 -m-2 rounded-full animate-rotate_gradient">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-fuchsia-600 via-amber-600 to-green-600 opacity-60 blur-lg"></div>
        </div>
        <img
          src="/assets/logo_heart.png"
          alt=""
          className="relative w-48 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h1 className="text-5xl sm:text-6xl font-Ovo">{t("tagline")}</h1>
      <p className="max-w-2xl mx-auto text-xl font-Ovo md:text-2xl">
        {t("description.line1")}
        <br />
        {t("description.line2")}
        <br />
        {t("description.line3")}
      </p>

      <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
        <div className="rainbow-button relative z-0 overflow-hidden p-0.5 rounded-full hover:scale-105 transition duration-300 active:scale-100">
          <div className="rainbow-before absolute left-[-50%] top-[-50%] w-[200%] h-[200%] animate-rotate_border -z-10 bg-gradient-to-r from-[#202de6] to-[#da2020]  blur-md"></div>
          <a
            href="#contact"
            className="px-10 py-2.5 rounded-full bg-gradient-to-r from-[#202de6] to-[#da2020]  text-white flex items-center gap-2 relative z-10"
          >
            {t("buttons.joinWaitlist")}{" "}
            <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
          </a>
        </div>

        <a
          href="#about"
          className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
        >
          {t("buttons.learnMore")}{" "}
          <img
            src="/assets/download-icon.png"
            alt=""
            className="w-4 dark:invert"
          />
        </a>
      </div>
    </div>
  );
}
