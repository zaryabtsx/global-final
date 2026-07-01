/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/LanguageProvider";

const serviceImages = [
  { image: "/CRS-Gallery/1.png", alt: "Doctor Consultation" },
  { image: "/CRS-Gallery/2.png", alt: "Laboratory Services" },
  { image: "/CRS-Gallery/3.png", alt: "Medicines" },
  { image: "/CRS-Gallery/4.png", alt: "Blood Transfusion" },
  { image: "/CRS-Gallery/5.png", alt: "Blood Bank" },
  { image: "/CRS-Gallery/6.png", alt: "Carrier Screening" },
];

const ServiceCard = ({ title, description, image, alt, animate, index }) => (
  <div
    className={`bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-800 ease-out
      ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <img src={image} alt={alt} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-red-800 text-base">{title}</h3>
      <p className="text-gray-500 text-base mt-1">{description}</p>
    </div>
  </div>
);

export default function WhatWeOffer() {
  const { t, tRaw } = useTranslation();
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const items = tRaw("whatWeOffer.items");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animate]);

  return (
    <section ref={sectionRef} className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className={`text-3xl md:text-4xl font-bold text-[#9d0b0f] transition-all duration-800 ease-out
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {t("whatWeOffer.title")}
          </h2>
          <span
            className={`section-subtitle text-gray-600 mt-1 text-lg transition-all duration-800 ease-out delay-150
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {t("whatWeOffer.subtitle")}
          </span>
          <div className="w-10 h-1 bg-red-700 mx-auto mt-3 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={serviceImages[index]?.image}
              alt={serviceImages[index]?.alt}
              animate={animate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
