/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
import { useResponsive } from "./useResponsive";
import { useState, useEffect, useRef } from "react";

export default function TrustedPartnersBanner() {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef(null);

  const partners = [
    {
      name: "Global Pharmaceuticals Pakistan",
      logo: "/partner-1.png",
    },
    {
      name: "Vision Pharmaceuticals (Pvt) Ltd.",
      logo: "/partner-2.png",
    },
    {
      name: "Jamila Sultana Foundation",
      logo: "/Jamila-Sultana-Foundation.png",   // Fixed path
    },
  ];

  const isMobile = screenSize?.isMobile || false;
  const perPage = isMobile ? 1 : 2;

  // Triple loop for seamless infinite scroll
  const loopedPartners = [...partners, ...partners, ...partners];
  const totalSlides = loopedPartners.length;

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 1500);
  };

  useEffect(() => {
    setMounted(true);
    setCurrentIndex(partners.length);
    startTimer();

    return () => clearInterval(timerRef.current);
  }, [isMobile]);

  useEffect(() => {
    if (currentIndex >= partners.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(partners.length);
      }, 900);
    }
    if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(partners.length);
      }, 900);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      const t = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning]);

  const go = (idx) => {
    setIsTransitioning(true);
    setCurrentIndex(partners.length + idx);
    startTimer();
  };

  if (!mounted || !screenSize) return null;

  const itemWidthPercent = 100 / totalSlides;

  // Unified logo width
  const logoWidth = isMobile ? "260px" : "400px";

  return (
    <div
      style={{
        width: "100%",
        height: isMobile ? 70 : screenSize.isTablet ? 160 : 220,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Montserrat', sans-serif",
        paddingLeft: "70px"
      }}
    >
      {/* Slider Track */}
      <div
        style={{
          display: "flex",
          height: "100%",
          width: `${(totalSlides / perPage) * 100}%`,
          transition: isTransitioning
            ? "transform 0.9s cubic-bezier(0.32, 0.72, 0, 1)"
            : "none",
          transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
        }}
      >
        {loopedPartners.map((partner, index) => (
          <div
            key={index}
            style={{
              width: `${itemWidthPercent}%`,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: isMobile ? "0 20px" : "0 100px",
              flexShrink: 0,
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(
                `https://www.google.com/search?q=${encodeURIComponent(partner.name)}`,
                "_blank"
              )
            }
          >
            {/* Logo + Name Container */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "16px" : "20px",
                width: "100%",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  width: logoWidth,
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />

              <p
                style={{
                  margin: 0,
                  color: "#ffffff",
                  fontSize: isMobile ? "15px" : screenSize.isTablet ? "19px" : "24px",
                  fontWeight: 700,
                  letterSpacing: "0.015em",
                  lineHeight: 1.35,
                  whiteSpace: isMobile ? "normal" : "nowrap",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {partner.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots - Mobile Only */}
      {isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
            zIndex: 10,
          }}
        >
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                border: "none",
                background:
                  currentIndex % partners.length === i
                    ? "#ffffff"
                    : "rgba(255,255,255,0.45)",
                transform:
                  currentIndex % partners.length === i ? "scale(1.4)" : "scale(1)",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}