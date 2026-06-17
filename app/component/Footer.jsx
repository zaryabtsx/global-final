/* eslint-disable react-hooks/set-state-in-effect */
"use client"
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { useResponsive } from './useResponsive'
import { useTranslation } from '../i18n/LanguageProvider'

const Footer = () => {
  const screenSize = useResponsive();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const footerPadding = screenSize.isMobile ? "40px 16px 0" : screenSize.isTablet ? "60px 40px 0" : "80px 80px 0";
  const contactFontSize = screenSize.isMobile ? 14 : 18;
  const headingFontSize = screenSize.isMobile ? 18 : screenSize.isTablet ? 22 : 28;
  const gap = screenSize.isMobile ? 24 : 48;
  const flexBasis = screenSize.isMobile ? "100%" : "360px";
  const logoHeight = screenSize.isMobile ? "25px" : "35px";
  const iconSize = screenSize.isMobile ? 16 : 20;

  return (
    <div>
      {/* Footer */}
      <footer style={{ background: "#86070a", padding: footerPadding, marginTop: screenSize.isMobile ? 20 : 0 }}>
        <div style={{ 
          display: "flex", 
          gap: gap, 
          flexWrap: "wrap", 
          paddingBottom: screenSize.isMobile ? 40 : 60, 
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          textAlign: screenSize.isMobile ? 'center' : 'start'
        }}>
          {/* Brand */}
          <div style={{ flex: screenSize.isMobile ? "0 0 100%" : "0 0 360px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: screenSize.isMobile ? "center" : "flex-start", gap: 12, marginBottom: 20 }}>
              <Link href="/" style={{ cursor: "pointer" }}>
                <img src="/footerLogo-updated.png" style={{height: logoHeight}} alt="Global Pharma Logo" />
              </Link>
            </div>
            <p style={{ color: "#f6fafb", fontSize: contactFontSize, lineHeight: 1.8, margin: 0 }}>
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: 1, minWidth: screenSize.isMobile ? "100%" : "auto" }}>
            <h3 style={{ color: "#fff", fontSize: headingFontSize, fontWeight: 700, marginBottom: screenSize.isMobile ? 16 : 32, marginTop: 0 }}>{t("footer.quickLinks")}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: screenSize.isMobile ? 10 : 14 }}>
              {[
                { label: t("footer.home"), href: "/" },
                { label: t("footer.aboutUs"), href: "/about" },
                { label: t("footer.ourProducts"), href: "/products" },
                { label: t("footer.career"), href: "/career" },
                { label: t("footer.contactUs"), href: "/contact" }
              ].map(link => (
                <Link key={link.href} href={link.href} style={{ color: "#f6fafb", fontSize: contactFontSize, textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#d4d4d4"} onMouseLeave={(e) => e.target.style.color = "#f6fafb"}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div style={{ flex: 1, minWidth: screenSize.isMobile ? "100%" : "auto" }}>
            <h3 style={{ color: "#fff", fontSize: headingFontSize, fontWeight: 700, marginBottom: screenSize.isMobile ? 16 : 32, marginTop: 0 }}>{t("footer.quickLinks")}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: screenSize.isMobile ? 10 : 14 }}>
              {[
                { label: t("footer.policyStatement"), href: "#" },
                { label: t("footer.applyOtherDepartments"), href: "/Form" },
                { label: t("footer.applyForSales"), href: "/Form" }
              ].map(link => (
                <Link key={link.label} href={link.href} style={{ color: "#f6fafb", fontSize: contactFontSize, textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#d4d4d4"} onMouseLeave={(e) => e.target.style.color = "#f6fafb"}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div style={{ flex: 1, minWidth: screenSize.isMobile ? "100%" : "auto" }}>
            <h3 style={{ color: "#fff", fontSize: headingFontSize, fontWeight: 700, marginBottom: screenSize.isMobile ? 16 : 32, marginTop: 0 }}>{t("footer.ourLocation")}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: screenSize.isMobile ? 14 : 20 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", justifyContent: screenSize.isMobile ? "center" : "flex-start" }}>
                <span style={{ color: "#fff", fontSize: iconSize, marginTop: 2 }}>
                  <FaLocationDot />
                </span>
                <span style={{ color: "#f6fafb", fontSize: contactFontSize, lineHeight: 1.6 }}>{t("footer.address")}</span>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: screenSize.isMobile ? "center" : "flex-start" }}>
                <span style={{ color: "#fff", fontSize: iconSize }}>
                  <FaPhoneAlt />
                </span>
                <a href="tel:+92-51-449-302" style={{ color: "#f6fafb", fontSize: contactFontSize, textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#d4d4d4"} onMouseLeave={(e) => e.target.style.color = "#f6fafb"}>+92 336 5559068</a>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: screenSize.isMobile ? "center" : "flex-start" }}>
                <span style={{ color: "#fff", fontSize: iconSize }}>
                  <IoMdMail />
                </span>
                <a href="mailto:info@globalpharmaceuticalspk.com" style={{ color: "#f6fafb", fontSize: contactFontSize, textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#d4d4d4"} onMouseLeave={(e) => e.target.style.color = "#f6fafb"}>info@globalpharmaceuticalspk.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ padding: screenSize.isMobile ? "20px 0" : "28px 0", color: "#f6fafb", fontSize: contactFontSize, textAlign: screenSize.isMobile ? 'center' : 'start' }}>
          {t("footer.copyright")}
        </div>
      </footer>   
    </div>
  )
}

export default Footer