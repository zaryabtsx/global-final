/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/LanguageProvider";

const galleryItems = [
  {
    id: 1,
    image: "/CRS-Gallery/g-1.png",
    caption: "Mr Murtaza Ameer Ali Burhani known as a blood hero. He has donated blood over 170 times",
  },
  {
    id: 2,
    image: "/CRS-Gallery/g-2.png",
    caption: "Psychologist conducting activity sessions for mental relaxation of our patients",
  },
  {
    id: 3,
    image: "/CRS-Gallery/g-3.png",
    caption: "Patients being managed at JSF",
  },
  {
    id: 4,
    image: "/CRS-Gallery/g-4.png",
    caption: "Jamile Sultana Foundation thank our heroes who help us in saving lives",
  },
  {
    id: 5,
    image: "/CRS-Gallery/g-5.png",
    caption: "Staff training sessions for better management and care of patients",
  },
  {
    id: 6,
    image: "/CRS-Gallery/g-6.png",
    caption: "Psychologist conducting activity sessions for mental relaxation of our patients",
  },
  {
    id: 7,
    image: "/CRS-Gallery/g-7.png",
    caption: "Qualified doctors assessing donors eligibility and fitness for blood donation",
  },
  {
    id: 8,
    image: "/CRS-Gallery/g-8.png",
    caption: "Snippets of blood camps where donors are being registered and screening done to assess their general health",
  },
  {
    id: 9,
    image: "/CRS-Gallery/g-9.png",
    caption: "Collaborating with different organizations and groups to help spread our message, awareness and create a network of voluntary donors",
  },
  {
    id: 10,
    image: "/CRS-Gallery/g-10.png",
    caption: "Lab staff working",
  },
  {
    id: 11,
    image: "/CRS-Gallery/g-11.png",
    caption: "Patients being managed at JSF",
  },
  {
    id: 12,
    image: "/CRS-Gallery/g-12.png",
    caption: "Qualified doctors available for free consultations",
  },
];

const GalleryCard = ({ image, caption, animate, index }) => (
  <div 
    className={`relative rounded-lg overflow-hidden group cursor-pointer transition-all duration-800 ease-out
      ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    style={{ transitionDelay: `${index * 80}ms` }}
  >
    <img
      src={image}
      alt={caption}
      className="w-full h-52 object-cover"
    />
    {/* Dark gradient overlay at bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    {/* Caption */}
    <p className="absolute bottom-0 left-0 right-0 text-white text-xs px-3 py-2 leading-snug">
      {caption}
    </p>
  </div>
);

export default function Gallery() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);        // Fixed ref
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
            {t("gallery.title")}
          </h2>
          <span
            className={`section-subtitle text-gray-600 mt-1 text-lg transition-all duration-800 ease-out delay-150
              ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {t("gallery.subtitle")}
          </span>
          <div className="w-10 h-1 bg-red-700 mx-auto mt-3 rounded" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <GalleryCard 
              key={item.id} 
              image={item.image} 
              caption={item.caption} 
              animate={animate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}