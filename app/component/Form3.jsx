"use client";

import React from "react";
import {
  adrPageStyle,
  adrTextareaStyle,
  SectionTitle,
  ItemLabel,
  DrugTable,
  DeviceTable,
  DrapLogo,
  ADR_YELLOW,
  FONT,
} from "./adrFormShared";

export default function ADRFormPage3() {
  return (
    <div style={{ ...adrPageStyle, marginTop: 16 }}>
      {/* Header matching PDF page 3 */}
      <div style={{ position: "relative", marginBottom: 12, paddingBottom: 10, borderBottom: "1.5px solid #000" }}>
        {/* DRAP Logo in the top-left square */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 62,
            height: 62,
            border: "1.5px solid #000",
            background: ADR_YELLOW,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <DrapLogo />
        </div>

        <div style={{ textAlign: "center", padding: "0 80px" }}>
          <div
            style={{
              fontSize: `${FONT.title}px`,
              fontWeight: 700,
              letterSpacing: 0.2,
              textTransform: "uppercase",
              lineHeight: 1.08,
            }}
          >
            SUSPECTED ADVERSE DRUG REACTION REPORTING FORM
          </div>
          <div style={{ fontSize: `${FONT.subtitle}px`, marginTop: 6, fontWeight: 400 }}>
            This form is for voluntary reporting of adverse drug reactions caused by therapeutic goods marketed in Pakistan.
          </div>
          <div style={{ fontSize: `${FONT.base}px`, fontStyle: "italic", fontWeight: 700, marginTop: 6 }}>
            For Health Care Professionals (Additional page)
          </div>
        </div>
      </div>

      {/* B (continued) */}
      <SectionTitle regular=" (continued):">
        B. SUSPECTED DRUG(S)/VACCINE(S)/ALTERNATIVE MEDICINE(S)
      </SectionTitle>
      <DrugTable prefix="suspectedDrugCont" rows={4} />

      {/* C (continued) */}
      <SectionTitle regular=" (continued):">C. SUSPECTED REACTION(S)</SectionTitle>

      <div style={{ marginBottom: 8 }}>
        <ItemLabel>3. Describe the reaction(s) (continued):</ItemLabel>
        <textarea name="reactionDescriptionCont" style={adrTextareaStyle} rows={4} />
      </div>

      <div style={{ marginBottom: 8 }}>
        <ItemLabel>
          4. Other relevant history of the patient (Allergies, Smoking, Alcohol Use, Hepatic/Renal Problems, and
          Pre-Existing Medical Problems etc. (continued) :
        </ItemLabel>
        <textarea name="medicalHistoryCont" style={adrTextareaStyle} rows={4} />
      </div>

      <div style={{ marginBottom: 8 }}>
        <ItemLabel>5. Relevant Tests/Laboratory Data with Dates (continued):</ItemLabel>
        <textarea name="labDataCont" style={adrTextareaStyle} rows={4} />
      </div>

      {/* D (continued) */}
      <SectionTitle regular=" (continued):">
        D. OTHER CONCOMITANT DRUG(S)/VACCINE(S)/ALTERNATIVE MEDICINE(S)
      </SectionTitle>
      <DrugTable prefix="concomitantDrugCont" rows={4} />

      {/* E (continued) */}
      <SectionTitle regular=" (continued):">E. SUSPECTED MEDICAL DEVICE(S)</SectionTitle>
      <DeviceTable prefix="suspectedDeviceCont" rows={2} />
    </div>
  );
}
