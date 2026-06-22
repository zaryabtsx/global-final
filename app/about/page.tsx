/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-6">
    <h2 className="text-3xl font-bold text-[#9D0B0F] tracking-tight ">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[#1F2937] font-medium text-lg mt-1">{subtitle}</p>
    )}
    <div className="w-12 h-1 bg-[#9D0B0F] mt-3 rounded-full" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header></Header>
      {/* Top Red Bar */}

      <section className="relative flex flex-col md:flex-row items-center bg-gray-100 overflow-hidden">
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 bg-gray-100 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-5xl font-bold text-[#9D0B0F] mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-[18px] md:text-[18px] text-[#1F2937] max-w-xl text-justify"
          >
            Established in 1995, Global Pharmaceuticals has been delivering quality
            healthcare solutions for over three decades. With a state-of-the-art
            manufacturing facility in Islamabad and adherence to international
            quality standards, we produce safe, effective, and affordable
            medicines. Our commitment to innovation, excellence, and patient
            well-being has earned us the trust of healthcare professionals across
            Pakistan and international markets. We remain dedicated to improving
            lives through accessible healthcare solutions.
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

      {/* Introduction Section */}
      <section className="md:m-10 m-10">
        <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-34"
          >
            <SectionTitle
              title="Introduction"
              subtitle="Global Pharmaceuticals"
            />
            <div className="text-gray-600 mt-2 leading-relaxed text-[18px] text-justify">
              <p>
                Global Pharmaceuticals Pvt. Ltd. is a leading pharmaceutical manufacturer dedicated to improving health outcomes through quality-driven healthcare solutions. Backed by experienced professionals, advanced technologies, and a strong culture of compliance, we manufacture a diverse range of pharmaceutical products that meet the highest standards of safety, efficacy, and quality.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden h-auto lg:h-screen w-full lg:w-335 flex items-center justify-center"
          >
            <img
              className="w-full h-54 md:h-64 lg:h-80 object-contain md:mr-150"
              src="/intro-about-us.png"
              alt="Global Pharmaceuticals Building"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Facility Location Section */}
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
            <SectionTitle title="Facility " subtitle="And Size" />
            <p className="text-gray-600 leading-relaxed text-[18px] max-w-4xl ">
              Our state-of-the-art pharmaceutical manufacturing facility spans approximately 60,000 square feet and is equipped with advanced production, quality control, and warehousing infrastructure designed to meet international pharmaceutical manufacturing standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionTitle title="MANUFACTURING CAPABILITIES" subtitle="Global Pharmaceuticals’ manufacturing facility comprises:" />

          </motion.div>


          <div className="flex flex-col gap-6">
            {[
              "Dedicated non-sterile manufacturing sections for tablets, capsules, syrups, suspensions, creams, and ointments.",
              "A dedicated sterile liquid injectable manufacturing section.",
              "A dedicated cephalosporin manufacturing facility.",
              "A dedicated penicillin manufacturing facility.",
              "A dedicated carbapenem manufacturing facility.",
              "A state-of-the-art QC laboratory featuring separate chemical and microbiological divisions. It is fully equipped with advanced analytical instrumentation—including HPLC, GC, and stability chambers—from world-class manufacturers",
              "A Quality Assurance Department responsible for establishing, implementing, and maintaining a robust Quality Management System across all operations. The department ensures compliance with regulatory requirements and international quality standards throughout the manufacturing process.",
              "Our dedicated Validation Department ensures that all processes, equipment, and systems consistently produce safe, effective, and high-quality pharmaceutical products in full compliance with cGMP and international regulatory guidelines.",
              "Our R&D Department utilizes advanced technologies and scientific expertise to develop new pharmaceutical formulations and enhance existing ones, ensuring the highest standards of safety, quality, and efficacy.",
              "Separate warehouses for raw materials, packaging materials, and finished products to ensure proper storage, handling, and inventory management. "
            ].map((item, index) => (
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

      {/* Vision & Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Vision */}
          <div className="bg-[#f8f9fa] p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#9D0B0F] mb-6 uppercase">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-[18px]">
                To be a globally recognized pharmaceutical company, delivering innovative, high-quality, and affordable healthcare solutions that improve lives and create lasting value for patients, healthcare professionals, and communities worldwide.
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

          {/* Mission */}
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
          <div className="bg-white p-12 flex flex-col justify-center border-y lg:border-y-0 lg:border-l border-gray-100">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#9D0B0F] mb-6 uppercase">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-[18px]">
                Our mission is to enhance the quality of life by providing safe, effective, and affordable pharmaceutical products through innovation, operational excellence, and an unwavering commitment to patient well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}

      {/* Footer Branding */}

      <Footer></Footer>
    </div>
  );
}
