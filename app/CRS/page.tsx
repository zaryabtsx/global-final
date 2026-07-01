/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import WhatWeOffer from "../component/WhatWeOffer";
import Gallery from "../component/Gallery";
import { useTranslation } from "../i18n/LanguageProvider";

function useCountUp(target: number | null, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || target === null) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, animate }: { stat: any; animate: boolean }) {
  const count = useCountUp(stat.target, 1500, animate);

  let display;
  if (stat.static) {
    display = stat.display || `${stat.prefix}${stat.target}`;
  } else {
    display = `${stat.prefix || ""}${count}${stat.suffix || ""}`;
  }

  return (
    <div className="flex-1 text-center px-6">
      <div className="text-5xl font-extrabold text-red-800 leading-tight">
        {display}
      </div>
      <p className="text-gray-500 text-lg mt-2">{stat.label}</p>
    </div>
  );
}

const Page = () => {
  const { t, tRaw } = useTranslation();
  const steps = tRaw<Array<{ title: string; description: string }>>("crs.steps");
  const stats = [
    { id: 1, target: 1350, suffix: "+", label: t("crs.statRegisteredPatients") },
    { id: 2, target: 40, prefix: "30–", suffix: "", label: t("crs.statTransfusionsDaily"), static: true },
    { id: 3, target: null, display: "24/7", label: t("crs.statBloodBankAccess"), static: true },
    { id: 4, target: 21, suffix: "", label: t("crs.statYearsOfService") },
  ];

  const impactRef = useRef<HTMLElement>(null);
  const [impactAnimate, setImpactAnimate] = useState(false);
  const [loadAnimate, setLoadAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !impactAnimate) {
          setImpactAnimate(true);
        }
      },
      { threshold: 0.25 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => observer.disconnect();
  }, [impactAnimate]);

  return (
    <>
      <div className="bg-white">
        <Header />

        <div className="w-full">
          <div className="flex flex-col md:flex-row items-stretch min-h-56 md:min-h-[220px]">
            <div className="flex-1 md:flex-0 md:basis-[42%] bg-gray-100 px-6 py-10 md:px-9 md:py-10 flex flex-col justify-center gap-3">
              <h1
                className={`font-outfit text-3xl md:text-5xl font-bold text-[#9d0b0f] leading-tight ps-10 transition-all duration-800 ease-out
                ${loadAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {t("crs.heroTitle")}
              </h1>
              <p
                className={`text-sm md:text-lg text-gray-600 leading-relaxed ps-10 transition-all duration-800 ease-out
                ${loadAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {t("crs.heroText")}
              </p>
            </div>

            <div className="flex-1 overflow-hidden bg-gray-100 relative min-h-48 md:min-h-full">
              <img
                src="/crs-hero-image.png"
                alt="Thalassemia Care"
                className="ps-10 h-full object-cover object-center w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start px-6 py-12 md:px-10 md:py-12 gap-6 md:gap-12 bg-white">
            <div className="flex-1">
              <h2
                className={`font-outfit text-3xl md:text-4xl font-bold text-[#9d0b0f] mb-2 ps-10 transition-all duration-800 ease-out
                ${loadAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {t("crs.whoWeAreTitle")}
              </h2>
              <p
                className={`text-base md:text-lg text-gray-700 font-semibold mb-4 ps-10 transition-all duration-800 ease-out
                ${loadAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {t("crs.whoWeAreSubtitle")}
              </p>
              <div className="w-12 h-1 bg-[#9d0b0f] mb-6 ms-10" />
              <p
                className={`text-sm md:text-lg text-gray-700 ps-10 leading-relaxed md:leading-loose text-justify transition-all duration-800 ease-out
                ${loadAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {t("crs.whoWeAreP1")}
                <br />
                <br />
                {t("crs.whoWeAreP2")}
              </p>
            </div>

            <div className="flex-1 md:flex-shrink-0 flex items-center justify-center h-48 md:h-80 w-full md:w-auto">
              <img
                src="/jamila.png"
                alt="Jamila Sultana Foundation Logo"
                className="max-w-xs w-full h-auto"
              />
            </div>
          </div>
        </div>

        <WhatWeOffer />

        <section ref={impactRef} className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2
                className={`text-3xl md:text-4xl font-bold text-[#9d0b0f] transition-all duration-800 ease-out
                ${impactAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {t("crs.impactTitle")}
              </h2>
              <span
                className={`section-subtitle text-gray-600 mt-2 text-m md:text-lg px-2 transition-all duration-800 ease-out
                ${impactAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {t("crs.impactSubtitle")}
              </span>
              <div className="w-10 h-1 bg-[#9d0b0f] mx-auto mt-3 rounded" />
            </div>

            <div className="grid grid-cols-2 md:flex items-center justify-center gap-6 md:gap-0 md:divide-x divide-gray-300">
              {stats.map((stat, index) => (
                <div key={stat.id} className="flex justify-center md:px-6">
                  <div
                    className={`transition-all duration-800 ease-out ${impactAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    style={{ transitionDelay: `${80 + index * 100}ms` }}
                  >
                    <StatItem stat={stat} animate={impactAnimate} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row min-h-auto md:min-h-[260px]">
          <div className="flex-1 bg-white py-10 md:py-20 px-6 md:px-20 flex flex-col justify-center gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex items-start gap-3 md:gap-4 transition-all duration-800 ease-out
                ${impactAnimate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-700 text-white text-lg font-bold flex items-center justify-center mt-0.5">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs md:text-lg">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-xs md:text-lg mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 bg-[#9d0b0f] flex flex-col items-center justify-center text-center px-6 md:px-10 py-12 md:py-10">
            <h2
              className={`text-white text-2xl md:text-3xl font-extrabold leading-tight mb-4 transition-all duration-800 ease-out
              ${impactAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {t("crs.becomeDonorTitle")}
            </h2>
            <p
              className={`text-white text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-xs transition-all duration-800 ease-out
              ${impactAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {t("crs.becomeDonorText")}
            </p>
            <button className="bg-white text-red-700 font-semibold text-xs md:text-sm px-6 md:px-8 py-2 md:py-3 rounded hover:bg-gray-100 transition-colors">
              {t("crs.donateBlood")}
            </button>
          </div>
        </section>

        <Gallery />
        <Footer />
      </div>
    </>
  );
};

export default Page;
