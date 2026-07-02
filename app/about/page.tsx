/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useTranslation } from "../i18n/LanguageProvider";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-6 flex w-full flex-col items-start">
    <h2 className="w-full text-start text-3xl font-bold text-[#9D0B0F] tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <span className="section-subtitle-left text-[#1F2937] font-medium text-lg mt-3.5">
        {subtitle}
      </span>
    )}
    <div className="w-12 h-1 bg-[#9D0B0F] mt-3 rounded-full" />
  </div>
);

export default function App() {
  const { t, tRaw } = useTranslation();
  const capabilities = tRaw<string[]>("about.capabilities");

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header></Header>

      <section className="relative flex flex-col md:flex-row items-center bg-gray-100 overflow-hidden">
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 bg-gray-100 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-5xl font-bold text-[#9D0B0F] mb-6"
          >
            {t("about.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-[18px] md:text-[18px] text-[#1F2937] max-w-xl text-justify"
          >
            {t("about.heroText")}
          </motion.p>
        </div>
        <div className="w-full md:w-1/2 h-100 md:h-155 relative">
          <img
            src="/about.png"
            alt="Pharmaceutical Production"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 via-transparent to-transparent md:block hidden" />
        </div>
      </section>

      <section className="md:m-10 m-10">
        <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-34"
          >
            <SectionTitle
              title={t("about.introductionTitle")}
              subtitle={t("about.introductionSubtitle")}
            />
            <div className="text-gray-600 mt-2 leading-relaxed text-[18px] text-justify">
              <p>{t("about.introductionText")}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden h-auto lg:h-screen w-full lg:w-335 flex items-center justify-center"
          >
            <img
              className="w-full h-54 md:h-64 lg:h-80 object-contain md:me-150"
              src="/intro-about-us.png"
              alt="Global Pharmaceuticals Building"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-white -mt-32 -md:m-221 m-6  overflow-hidden">
        <img
          src="/about-3d.webp"
          alt="3D background"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover 
             opacity-100 
             md:scale-100 
             scale-110 
             sm:scale-105"
        />
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionTitle
              title={t("about.facilityTitle")}
              subtitle={t("about.facilitySubtitle")}
            />
            <p className="text-gray-600 leading-relaxed text-[18px] max-w-4xl text-justify">
              {t("about.facilityText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionTitle
              title={t("about.capabilitiesTitle")}
              subtitle={t("about.capabilitiesSubtitle")}
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-1 bg-[#9D0B0F] rounded-sm p-0.5 text-white shrink-0 shadow-sm">
                  <Check size={12} strokeWidth={4} />
                </div>
                <p className="text-gray-600 text-[18px] leading-snug group-hover:text-gray-900 transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#f8f9fa] p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#9D0B0F] mb-6 uppercase">
                {t("about.visionTitle")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-[18px] text-justify">
                {t("about.visionText")}
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="aspect-video lg:aspect-auto"
          >
            <img
              src="/vision.webp"
              alt="Vision Target"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="aspect-video lg:aspect-auto order-last lg:order-0"
          >
            <img
              src="/mission.jpg"
              alt="Mission Hands"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="bg-white p-12 flex flex-col justify-center border-y lg:border-y-0 lg:border-s border-gray-100">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#9D0B0F] mb-6 uppercase">
                {t("about.missionTitle")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-[18px] text-justify">
                {t("about.missionText")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
