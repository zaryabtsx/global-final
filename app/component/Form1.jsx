"use client";

import React from "react";
import {
  FONT,
  ADR_YELLOW,
  adrPageStyle,
  adrTextareaStyle,
  adrInputStyle,
  LineField,
  CheckOption,
  RadioOption,
  DrugTable,
  DeviceTable,
  SectionTitle,
  ItemLabel,
  PlainText,
} from "./adrFormShared";

export default function ADRForm() {
  return (
    <div style={adrPageStyle}>
      {/* Header matching PDF: title stack, then email left + logo square left + large office box right */}
      <div style={{ position: "relative", marginBottom: 12 }}>
        {/* Yellow square with black border in the top-left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 62,
            height: 62,
            border: "1.5px solid #000",
            background: ADR_YELLOW,
            boxSizing: "border-box",
          }}
        />

        <div style={{ textAlign: "center", padding: "0 80px" }}>
          <div
            style={{
              fontSize: `${FONT.title}px`,
              fontWeight: 700,
              letterSpacing: 0.5,
              lineHeight: 1.08,
              textTransform: "uppercase",
            }}
          >
            SUSPECTED ADVERSE DRUG REACTION REPORTING FORM
          </div>
          <div
            style={{
              fontSize: `${FONT.subtitle}px`,
              marginTop: 6,
              lineHeight: 1.3,
              fontWeight: 400,
            }}
          >
            This form is for voluntary reporting of adverse drug reactions caused by therapeutic goods marketed in
            Pakistan.
          </div>
          <div
            style={{
              fontSize: `${FONT.base}px`,
              fontStyle: "italic",
              fontWeight: 700,
              marginTop: 6,
            }}
          >
            For Healthcare Professionals
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: 14,
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: `${FONT.base}px`,
              fontWeight: 700,
              paddingBottom: 4,
              alignSelf: "flex-end",
            }}
          >
            Email: <span style={{ fontWeight: 700 }}>regulatory@globalpharmaceuticalspk.com</span>
          </div>

          <div
            style={{
              border: "1.5px solid #000",
              padding: "10px 14px 12px",
              width: 260,
              minHeight: 74,
              flexShrink: 0,
              fontSize: `${FONT.base}px`,
              background: ADR_YELLOW,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: 1.25,
                fontSize: `${FONT.base}px`,
              }}
            >
              For Office Use Only
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 8,
                marginTop: 10,
              }}
            >
              <span style={{ whiteSpace: "nowrap", fontWeight: 700 }}>Report No.</span>
              <span
                style={{
                  flex: 1,
                  borderBottom: "1.5px solid #000",
                  minHeight: 18,
                  display: "inline-block",
                }}
              >
                <input
                  name="reportNo"
                  readOnly
                  style={{
                    ...adrInputStyle,
                    width: "100%",
                    borderBottom: "none",
                    background: "transparent",
                    height: 18,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* A. PATIENT DETAILS */}
      <SectionTitle>A. PATIENT DETAILS</SectionTitle>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: "4px 8px",
          marginBottom: 6,
          fontSize: `${FONT.base}px`,
        }}
      >
        <span style={{ fontWeight: 700 }}>Patient’s Initials or Name:</span>
        <input name="patientName" style={{ ...adrInputStyle, width: 220, flex: "1 1 180px" }} />
        <span style={{ fontWeight: 700 }}>Identification Number (Medical/Hospital Ref):</span>
        <input name="patientId" style={{ ...adrInputStyle, width: 220, flex: "1 1 180px" }} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: "4px 8px",
          marginBottom: 8,
          fontSize: `${FONT.base}px`,
        }}
      >
        <span style={{ fontWeight: 700 }}>Sex: Male / Female:</span>
        <input name="patientSex" style={{ ...adrInputStyle, width: 80 }} />
        <span style={{ fontWeight: 700 }}>If Female, pregnant or not:</span>
        <input name="femalePregnant" style={{ ...adrInputStyle, width: 90 }} />
        <span style={{ fontWeight: 700 }}>Age (at the time of reaction):</span>
        <input name="patientAge" style={{ ...adrInputStyle, width: 70 }} />
        <span style={{ fontWeight: 700 }}>Weight (kg)</span>
        <input name="patientWeight" style={{ ...adrInputStyle, width: 60 }} />
      </div>

      {/* B. SUSPECTED DRUG(S)/VACCINE(S) */}
      <SectionTitle regular=" (use additional pages if necessary):">
        B. SUSPECTED DRUG(S)/VACCINE(S)/ALTERNATIVE MEDICINE(S)
      </SectionTitle>
      <DrugTable prefix="suspectedDrug" rows={2} />

      {/* C. SUSPECTED REACTION(S) */}
      <SectionTitle regular=" (use additional pages if necessary):">
        C. SUSPECTED REACTION(S)
      </SectionTitle>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: "4px 16px",
          marginBottom: 8,
          fontSize: `${FONT.base}px`,
        }}
      >
        <span style={{ fontWeight: 700 }}>1. When reaction started (DD/MM/YY):</span>
        <input name="reactionStartedDate" style={{ ...adrInputStyle, width: 100 }} />
        <span style={{ fontWeight: 700 }}>2. When recovery started (DD/MM/YY):</span>
        <input name="reactionRecoveryDate" style={{ ...adrInputStyle, width: 110 }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 12 }}>
        {/* Left Column - Textareas */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div>
            <ItemLabel regular=" (use additional pages if necessary):">
              3. Describe the reaction(s):
            </ItemLabel>
            <textarea name="reactionDescription" style={adrTextareaStyle} rows={4} />
          </div>

          <div>
            <ItemLabel style={{ marginTop: 4 }}>
              4. Other relevant history of the patient (Allergies, Smoking, Alcohol Use,
              Hepatic/Renal Problems, and Pre-Existing Medical Problems etc.:
            </ItemLabel>
            <textarea name="medicalHistory" style={adrTextareaStyle} rows={3} />
          </div>

          <div>
            <ItemLabel regular=" (use additional pages if necessary):" style={{ marginTop: 4 }}>
              5. Relevant tests/Laboratory data with dates:
            </ItemLabel>
            <textarea name="labData" style={adrTextareaStyle} rows={3} />
          </div>
        </div>

        {/* Right Column - Consolidate items 6 to 10 in a single white box matching the PDF */}
        <div
          style={{
            border: "1.5px solid #000",
            background: "transparent",
            padding: "8px 12px",
            fontSize: `${FONT.base}px`,
            display: "flex",
            flexDirection: "column",
            gap: 6,
            boxSizing: "border-box",
          }}
        >
          {/* Item 6 */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, marginBottom: 2 }}>
              <span>6. Do you consider the reaction(s) to be serious?</span>
              <span>Yes/No</span>
            </div>
            <div style={{ fontSize: `${FONT.small}px`, fontWeight: 700, marginBottom: 4 }}>
              If yes, please tick all that apply of the following:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, paddingLeft: 4 }}>
              <CheckOption block label="Patient died due to reaction:" name="seriousCriteria" value="Patient died due to reaction" />
              <CheckOption block label="Life Threatening:" name="seriousCriteria" value="Life Threatening" />
              <CheckOption block label="Involved or prolonged inpatient hospitalization:" name="seriousCriteria" value="Involved or prolonged inpatient hospitalization" />
              <CheckOption block label="Involved persistent or significant disability or incapacity:" name="seriousCriteria" value="Involved persistent or significant disability or incapacity" />
              <CheckOption block label="Congenital anomaly/Birth Defects:" name="seriousCriteria" value="Congenital anomaly/Birth Defects" />
              <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 4 }}>
                <CheckOption label="Other Serious (Medically Important Condition): please give details:" name="seriousCriteria" value="Other Serious" />
                <input name="seriousOtherDetails" style={{ ...adrInputStyle, flex: 1, borderBottom: "1px solid #000", height: 18 }} />
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #000", margin: "2px 0" }} />

          {/* Item 7 */}
          <div>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>
              7. Reaction abated after use stopped or dose reduced?
            </div>
            <div style={{ paddingLeft: 4 }}>
              <RadioOption label="Yes" name="dechallenge" value="Yes" />
              <RadioOption label="No" name="dechallenge" value="No" />
              <RadioOption label="Doesn't apply" name="dechallenge" value="Doesn't apply" />
            </div>
          </div>

          <div style={{ borderTop: "1px solid #000", margin: "2px 0" }} />

          {/* Item 8 */}
          <div>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>
              8. Reaction reappeared after reintroduction?
            </div>
            <div style={{ paddingLeft: 4 }}>
              <RadioOption label="Yes" name="rechallenge" value="Yes" />
              <RadioOption label="No" name="rechallenge" value="No" />
              <RadioOption label="Doesn't apply" name="rechallenge" value="Doesn't apply" />
            </div>
          </div>

          <div style={{ borderTop: "1px solid #000", margin: "2px 0" }} />

          {/* Item 9 */}
          <div>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>
              9. Outcomes:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3, paddingLeft: 4 }}>
              <div style={{ display: "flex", gap: 12 }}>
                <CheckOption label="Fatal" name="outcomes" value="Fatal" />
                <CheckOption label="Recovering" name="outcomes" value="Recovering" />
                <CheckOption label="Unknown" name="outcomes" value="Unknown" />
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <CheckOption label="Continuing" name="outcomes" value="Continuing" />
                <CheckOption label="Recovered" name="outcomes" value="Recovered" />
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontSize: `${FONT.base}px` }}>Other</span>
                <input name="outcomeOther" style={{ ...adrInputStyle, flex: 1, borderBottom: "1px solid #000", height: 18 }} />
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #000", margin: "2px 0" }} />

          {/* Item 10 */}
          <div>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>
              10. You consider the problem related to which of the following:
            </div>
            <div style={{ paddingLeft: 4 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2px 8px" }}>
                <CheckOption label="Quality Problem" name="problemRelated" value="Quality Problem" />
                <CheckOption label="Medication Error" name="problemRelated" value="Medication Error" />
                <CheckOption label="Adverse Event/Reaction" name="problemRelated" value="Adverse Event/Reaction" />
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 4 }}>
                <span>If other, please specify</span>
                <input name="problemOther" style={{ ...adrInputStyle, flex: 1, borderBottom: "1px solid #000", height: 18 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* D. OTHER CONCOMITANT DRUG(S) */}
      <SectionTitle regular=" (use additional pages if necessary):">
        D. OTHER CONCOMITANT DRUG(S)/VACCINE(S)/ALTERNATIVE MEDICINE(S)
      </SectionTitle>
      <DrugTable prefix="concomitantDrug" rows={2} />

      {/* E. SUSPECTED MEDICAL DEVICE(S) */}
      <SectionTitle regular=" fill this area for suspected Device only (use additional pages if necessary):">
        E. SUSPECTED MEDICAL DEVICE(S)
      </SectionTitle>
      <DeviceTable prefix="suspectedDevice" rows={1} />

      {/* F. REPORTER DETAILS */}
      <SectionTitle>F. REPORTER DETAILS</SectionTitle>
      <p style={{ fontSize: `${FONT.base}px`, fontStyle: "italic", fontWeight: 700, textAlign: "center", margin: "6px 0 10px" }}>
        &ldquo;This form neither has any legal value nor can be presented before any Court of Law as an Evidence.&rdquo;
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "4px 12px" }}>
          <LineField label="Name:" name="reporterName" width={220} />
          <LineField label="Professional Address:" name="reporterAddress" width={320} style={{ flex: 1 }} />
        </div>
        <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "4px 12px" }}>
          <LineField label="Specialty:" name="reporterSpecialty" width={220} />
          <LineField label="Tel No:" name="reporterTel" width={140} />
          <span style={{ fontSize: `${FONT.base}px`, fontWeight: 700 }}>, Email Address:</span>
          <input name="reporterEmail" style={{ ...adrInputStyle, width: 220, flex: 1 }} />
        </div>
        <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "4px 12px" }}>
          <LineField label="Date of this report:" name="reportDate" width={140} />
          <LineField label="Signature" name="reporterSignature" width={240} style={{ flex: 1 }} />
        </div>
        <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 8, fontSize: `${FONT.base}px` }}>
          <span style={{ fontWeight: 700 }}>
            Have you reported this problem to Provincial Pharmacovigilance Centre or Manufacturer? If yes, please specify:
          </span>
          <input name="reportedToCentre" style={{ ...adrInputStyle, width: 200, flex: 1 }} />
        </div>
      </div>
    </div>
  );
}
