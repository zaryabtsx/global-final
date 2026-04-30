/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useRef, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import WhatWeOffer from "../component/WhatWeOffer";
import Gallery from "../component/Gallery";

const steps = [
  {
    id: 1,
    title: "Register as a Donor",
    description: "Sign up at the Foundation or through one of our community drives.",
  },
  {
    id: 2,
    title: "Attend a Donation Drive",
    description: "JSF organizes regular drives with a focus on awareness and volunteer engagement.",
  },
  {
    id: 3,
    title: "Blood is Screened & Stored",
    description: "All donations are rigorously screened in our 24/7 blood bank for patient safety.",
  },
  {
    id: 4,
    title: "Patients Receive Timely Transfusions",
    description: "Your donation reaches patients who depend on regular transfusions to survive.",
  },
];
const stats = [
  { id: 1, target: 1350, suffix: "+", label: "Registered Patients" },
  { id: 2, target: 40, prefix: "30–", suffix: "", label: "Transfusions Daily", static: true },
  { id: 3, target: null, display: "24/7", label: "Blood Bank Access", static: true },
  { id: 4, target: 21, suffix: "", label: "Years of Service" },
];

function useCountUp(target: number | null, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (target === null) return;
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

function StatItem({ stat, animate }: { stat: any, animate: boolean }) {
  const count = useCountUp(stat.target, 2000, animate);

  let display;
  if (stat.static) {
    display = stat.display || `${stat.prefix}${stat.target}`;
  } else {
    display = `${stat.prefix || ""}${count}${stat.suffix || ""}`;
  }

  return (
    <div className="flex-1 text-center px-6">
      <div className="text-4xl font-extrabold text-red-800 leading-tight">
        {display}
      </div>
      <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
    </div>
  );
}

const Page = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <>
    <div className="bg-white">
      <Header />

      <div className="w-full ">
        {/* ── Hero Section ── */}
        <div className="flex flex-col md:flex-row items-stretch min-h-56 md:min-h-[220px]">
          {/* Left text panel */}
          <div className="flex-1 md:flex-0 md:basis-[42%] bg-gray-100 px-6 py-10 md:px-9 md:py-10 flex flex-col justify-center gap-3">
            <h1 className="font-outfit text-3xl md:text-5xl font-bold text-[#9d0b0f] leading-tight">
              A Pledge to Lifelong Support for Thalassemia Patients
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Comprehensive, free-of-charge thalassemia care for everyone
              regardless of location or financial status. Funded entirely by
              Global Pharmaceuticals.
            </p>
          </div>

          {/* Right image panel */}
          <div className="flex-1 overflow-hidden bg-red-700 relative min-h-48 md:min-h-full">
            <img
              src="/crs-hero-image.png"
              alt="Thalassemia Care"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* ── Who We Are Section ── */}
        <div className="flex flex-col md:flex-row items-start px-6 py-12 md:px-10 md:py-12 gap-6 md:gap-12 bg-white">
          {/* Text */}
          <div className="flex-1">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-[#9d0b0f] mb-2">
              Who We Are
            </h2>
            <p className="text-base md:text-lg text-gray-700 font-semibold mb-4">
              Self-Funded. Independent. Fully Committed.
            </p>
            <div className="w-12 h-1 bg-[#9d0b0f] mb-6" />
            <p className="text-sm md:text-base text-gray-700 leading-relaxed md:leading-loose text-justify">
              Jamila Sultana Foundation is a flagship initiative of Global
              Pharmaceuticals, entirely funded by the organization&apos;s CEO. This
              self-sufficient model ensures consistent, equitable, and
              high-quality care without relying on external agencies.
              <br />
              <br />
              Patient registration remains perpetually open serving both local
              and remote communities with equal dedication. From initial
              screening to long-term disease management, all services are
              provided under one roof.
            </p>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-shrink-0 flex items-center justify-center h-48 md:h-80 w-full md:w-auto">
            <img
              src="/jamila.png"
              alt="Jamila Sultana Foundation Logo"
              className="max-w-xs  w-full h-auto"
            />
          </div>
        </div>
      </div>
      <WhatWeOffer />

      <section ref={sectionRef} className="bg-white py-16 px-4">
  <div className="max-w-4xl mx-auto">
    {/* Header */}
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#9d0b0f]">
        Our Impact
      </h2>

      <p className="text-gray-600 mt-2 text-sm md:text-base px-2">
        Numbers That Reflect Real Lives Changed
      </p>

      <div className="w-10 h-1 bg-red-600 mx-auto mt-3 rounded" />
    </div>

    {/* Stats Row */}
    <div className="grid grid-cols-2 md:flex items-center justify-center gap-6 md:gap-0 md:divide-x divide-gray-300">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex justify-center md:px-6"
        >
          <StatItem stat={stat} animate={animate} />
        </div>
      ))}
    </div>
  </div>
</section>
   <section className="flex flex-col md:flex-row min-h-auto md:min-h-[260px]">
      {/* Left Panel */}
      <div className="flex-1 bg-white py-10 md:py-20 px-6 md:px-20 flex flex-col justify-center gap-6">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start gap-3 md:gap-4">
            {/* Number Badge */}
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-700 text-white text-sm font-bold flex items-center justify-center mt-0.5">
              {step.id}
            </div>
            {/* Text */}
            <div>
              <h4 className="font-bold text-gray-900 text-xs md:text-sm">
                {step.title}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
 
      {/* Right Panel */}
      <div className="flex-1 bg-[#9d0b0f] flex flex-col items-center justify-center text-center px-6 md:px-10 py-12 md:py-10">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold leading-tight mb-4">
          Become A Blood <br /> Donor Today
        </h2>
        <p className="text-white text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
          Every Unit Of Blood You Donate Can Sustain The Life Of A Thalassemia
          Patient For Weeks. Together We Keep The Supply Going.
        </p>
        <button className="bg-white text-red-700 font-semibold text-xs md:text-sm px-6 md:px-8 py-2 md:py-3 rounded hover:bg-gray-100 transition-colors">
          Donate Blood
        </button>
      </div>
    </section>

    <Gallery></Gallery>
    <Footer />
    </div>
    </>
  );
};

export default Page;
