'use client';

import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { useResponsive } from './useResponsive';
import { useTranslation } from '../i18n/LanguageProvider';

const NUMS = ["01", "02", "03", "04"];

const QFA = () => {
  const { tRaw } = useTranslation();
  const screenSize = useResponsive();
  const [activeAccordion, setActiveAccordion] = useState(0);
  const items = tRaw("accordion.items");

  return (
    <div className="flex justify-center px-4 -mt-24 py-12">
      <section
        className="w-full max-w-[1080px] bg-[#9d0b0f] rounded-xl overflow-hidden shadow-xl"
        style={{
          margin: screenSize.isMobile ? '60px 0 100px' : '80px 0 120px',
        }}
      >
        {NUMS.map((num, index) => (
          <div
            key={num}
            onClick={() => setActiveAccordion(index)}
            className={`
              border-b border-[#e03b44] last:border-none cursor-pointer 
              transition-all duration-300 hover:bg-[#a51419]
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-5 sm:py-6 gap-4">
              <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                {/* Number */}
                <span 
                  className={`font-bold text-[#ffc9c9] transition-all duration-300
                    ${screenSize.isMobile ? 'text-2xl' : 'text-3xl sm:text-4xl'}`}
                >
                  {num}
                </span>

                {/* Title */}
                <h3 
                  className={`font-semibold text-white leading-tight transition-all duration-300
                    ${screenSize.isMobile 
                      ? 'text-base' 
                      : 'text-xl sm:text-2xl'}`}
                >
                  {items[index].title}
                </h3>
              </div>

              {/* Arrow */}
              <div 
                className={`
                  text-white text-2xl sm:text-3xl transition-transform duration-300 flex-shrink-0
                  ${activeAccordion === index ? 'rotate-180' : 'rotate-0'}
                `}
              >
                <IoIosArrowUp />
              </div>
            </div>

            {/* Content */}
            <div 
              className={`
                overflow-hidden transition-all duration-300 px-5 sm:px-8
                ${activeAccordion === index 
                  ? 'max-h-96 opacity-100 pb-6 sm:pb-8' 
                  : 'max-h-0 opacity-0'
                }
              `}
            >
              <div 
                className={`
                  text-[#f8f8f8] leading-relaxed
                  ${screenSize.isMobile ? 'text-sm ps-9' : 'text-base ps-14 sm:ps-16'}
                `}
              >
                {items[index].desc}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default QFA;