"use client";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");

  const services = [
    {
      name: t("features.idVerification.title"),
      icon: "/assets/web-icon.png",
      description: t("features.idVerification.description"),
      link: "",
    },
    {
      name: t("features.conversationFirst.title"),
      icon: "/assets/mobile-icon.png",
      description: t("features.conversationFirst.description"),
      link: "",
    },
    {
      name: t("features.mutualReveal.title"),
      icon: "/assets/ui-icon.png",
      description: t("features.mutualReveal.description"),
      link: "",
    },
    {
      name: t("features.safeAndSecure.title"),
      icon: "/assets/graphics-icon.png",
      description: t("features.safeAndSecure.description"),
      link: "",
    },
  ];
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="mb-2 text-xl text-center md:text-2xl font-Ovo">
        {t("sectionTitle")}
      </h4>
      <h2 className="text-5xl text-center sm:text-6xl font-Ovo">
        {t("mainTitle")}
      </h2>
      <p className="max-w-2xl mx-auto mt-5 mb-12 text-base text-center font-Ovo md:text-lg">
        {t("description")}
      </p>

      <div className="grid gap-6 my-10 grid-cols-auto">
        {services.map((service) => (
          <div
            key={service.name}
            className="px-8 py-12 duration-500 border border-gray-300 rounded-lg dark:border-white/30 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <img src={service.icon} alt="" className="w-10" />
            <h3 className="my-4 text-xl text-gray-700 dark:text-white md:text-2xl">
              {service.name}
            </h3>
            <p className="text-base leading-5 text-gray-600 dark:text-white/80 md:text-lg">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Join Waitlist Button */}
      <div className="flex justify-center my-20">
        <div className="rainbow-button relative z-0 overflow-hidden p-0.5 rounded-full hover:scale-105 transition duration-300 active:scale-100">
          <div className="rainbow-before absolute left-[-50%] top-[-50%] w-[200%] h-[200%] animate-rotate_border -z-10 bg-gradient-to-r from-[#202de6] to-[#da2020] blur-md"></div>
          <a
            href="#contact"
            className="px-10 py-2.5 rounded-full bg-gradient-to-r from-[#202de6] to-[#da2020]  text-white flex items-center gap-2 relative z-10"
          >
            {t("buttons.joinWaitlist")}{" "}
            <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
