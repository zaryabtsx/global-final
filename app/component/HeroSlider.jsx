/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import { useResponsive } from "./useResponsive";
import { useTranslation } from "../i18n/LanguageProvider";

export default function HeroSlider() {
  const { t } = useTranslation();
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    {
      eyebrow: "",
      title: (
        <>
          {t("hero.title")}
          <br />
          <span className="text-[36px] text-black">{t("hero.titleAccent")}</span>
        </>
      ),
      desc: t("hero.desc"),
      partnerImg: "/partners.png",
      image: "/Homepage-02.webp",
    },
  ];

  const goTo = (idx) => {
    setCurrent((idx + slides.length) % slides.length);
    resetAuto();
  };

  const resetAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5000
    );
  };

  useEffect(() => {
    setMounted(true);
    resetAuto();
    return () => clearInterval(timerRef.current);
  }, []);

  if (!mounted || !screenSize) return null;

  const slide = slides[current];

  return (
    <section
      style={{
        background: "#f5f7f9",
        display: "flex",
        flexDirection: screenSize.isMobile ? "column" : "row",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingBlock: screenSize.isMobile ? "40px" : screenSize.isTablet ? "60px" : "0",
        paddingInline: screenSize.isMobile ? "20px" : screenSize.isTablet ? "40px" : "60px 0",
        minHeight: screenSize.isMobile ? "auto" : 480,
      }}
    >
      {/* Content */}
      <div
        key={current}
        style={{
          flex: 1,
          maxWidth: screenSize.isMobile ? "100%" : 560,
          paddingTop: screenSize.isMobile ? 28 : screenSize.isTablet ? 36 : 48,
          paddingBottom: screenSize.isMobile ? 80 : 64,
          transition: "opacity 0.4s ease",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9d0b0f",
            marginBottom: 16,
            fontWeight: 600,
          }}
        >
          {slide.eyebrow}
        </p>

        <h1 className="text-4xl font-bold leading-tight text-[#9d0b0f]">
          {slide.title}
        </h1>

        <p
          style={{
            color: "#4b5563",
            fontSize: screenSize.isMobile ? 15 : 18,
            marginTop: 20,
            lineHeight: 1.75,
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          {slide.desc}
        </p>

        {slide.partnerImg && (
          <div style={{ marginTop: 24 }}>
            <img
              src={slide.partnerImg}
              alt="partners"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>

      {/* Hero Image */}
      <div
        style={{
          flex: 1,
          height: screenSize.isMobile
            ? 260
            : screenSize.isTablet
              ? 400
              : 560,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          key={current}
          src={slide.image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            marginInlineStart: screenSize.isMobile ? 0 : 40,
            transition: "opacity 0.5s ease",
          }}
        />
      </div>
    </section>
  );
}
