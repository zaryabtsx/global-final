/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/LanguageProvider";

const services = [
  {
    id: 1,
    title: "Doctor & Hematologist Consultations",
    description: "Free clinical consultations at every step of treatment with qualified specialists.",
    image: "/CRS-Gallery/1.png",
    alt: "Doctor Consultation",
  },
  {
    id: 2,
    title: "Free Laboratory Services",
    description: "All diagnostic and follow-up lab investigations provided at no cost.",
    image: "/CRS-Gallery/2.png",
    alt: "Laboratory Services",
  },
  {
    id: 3,
    title: "Medicines & Iron Chelation",
    description: "Tailored treatment protocols including iron chelating agents completely free.",
    image: "/CRS-Gallery/3.png",
    alt: "Medicines",
  },
  {
    id: 4,
    title: "Blood Transfusion Therapy",
    description: "30–40 patients receive complimentary transfusions daily to maintain hemoglobin levels.",
    image: "/CRS-Gallery/4.png",
    alt: "Blood Transfusion",
  },
  {
    id: 5,
    title: "24/7 Blood Bank",
    description: "State-of-the-art facility with round-the-clock screened and safe blood supply.",
    image: "/CRS-Gallery/5.png",
    alt: "Blood Bank",
  },
  {
    id: 6,
    title: "Awareness & Carrier Screening",
    description: "Family counseling, early diagnosis promotion, and preventive screening programs.",
    image: "/CRS-Gallery/6.png",
    alt: "Carrier Screening",
  },
];

const ServiceCard = ({ title, description, image, alt, animate, index }) => (
  <div 
    className={`bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-800 ease-out
      ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <img
      src={image}
      alt={alt}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-red-800 text-base">{title}</h3>
      <p className="text-gray-500 text-base mt-1">{description}</p>
    </div>
  </div>
);

export default function WhatWeOffer() {
  const { t, tRaw } = useTranslation();
  const items = tRaw("whatWeOffer.items");
  const sectionRef = useRef(null);           // Fixed: Removed strict HTMLElement type
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
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
        {/* Header */}
        <div className="text-center mb-10">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-[#9d0b0f] transition-all duration-800 ease-out
              ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {t("whatWeOffer.title")}
          </h2>
          <span
            className={`section-subtitle text-gray-600 mt-1 text-lg transition-all duration-800 ease-out delay-150
              ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {t("whatWeOffer.subtitle")}
          </span>
          <div className="w-10 h-1 bg-red-700 mx-auto mt-3 rounded" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              title={items[index].title}
              description={items[index].description}
              animate={animate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}