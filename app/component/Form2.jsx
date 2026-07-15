import React from "react";
import { adrPageStyle, FONT } from "./adrFormShared";

export default function ADRGuidelinesPage() {
  return (
    <div style={{ ...adrPageStyle, marginTop: 16 }}>
      {/* SECOND FOLD HERE label */}
      <div style={{ fontStyle: "italic", fontWeight: 700, fontSize: `${FONT.base}px`, marginBottom: 6 }}>
        SECOND FOLD HERE
      </div>

      {/* Top thick horizontal line */}
      <div style={{ borderTop: "3px solid #000", marginBottom: 16 }} />

      <div
        style={{
          textAlign: "center",
          fontSize: `${FONT.title - 4}px`, // 22px
          fontWeight: 700,
          letterSpacing: 0.3,
          lineHeight: 1.15,
          marginBottom: 10,
        }}
      >
        GUIDELINES FOR ADVERSE DRUG REACTION (ADR) REPORTING
      </div>

      <div
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: `${FONT.base}px`,
          marginBottom: 16,
          lineHeight: 1.3,
        }}
      >
        &ldquo;ADVERSE DRUG REACTION (ADR) REPORTING IS ETHICAL AND MORAL DUTY OF HEALTH CARE PROFESSIONALS&rdquo;
      </div>

      <p style={{ marginBottom: 8, fontSize: `${FONT.base}px` }}>Please use this form for reporting:</p>

      <ul style={{ margin: "0 0 16px 24px", padding: 0, lineHeight: 1.6, fontSize: `${FONT.base}px`, listStyleType: "disc" }}>
        <li style={{ marginBottom: 4 }}>
          Suspected Adverse Drug Reactions with <strong>THERAPEUTIC GOODS</strong>
        </li>
        <li style={{ marginBottom: 4 }}>
          Suspected Adverse Drug Reactions with <strong>NEW THERAPEUTIC GOODS</strong>
        </li>
        <li style={{ marginBottom: 4 }}>
          Suspected Adverse Drug Reactions for <strong>ALL VACCINES</strong>
        </li>
        <li style={{ marginBottom: 4 }}>
          <strong>LACK OF EFFICACY</strong> in the case of vaccines, contraceptives, antibiotics, and lifesaving medicines.
        </li>
        <li style={{ marginBottom: 4 }}>
          Adverse outcome due to suspected <strong>QUALITY PROBLEM</strong> in therapeutic good.
        </li>
        <li style={{ marginBottom: 4 }}>
          Adverse outcomes as a result of an overdose, abuse, misuse, off-label use or medication errors.
        </li>
      </ul>

      {/* Paragraphs with green checkmarks */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "flex-start", fontSize: `${FONT.base}px`, lineHeight: 1.45 }}>
          <span style={{ color: "#008000", fontWeight: "bold", fontSize: "18px", marginRight: 8, lineHeight: 1 }}>✔</span>
          <span>
            <strong>THERAPEUTIC GOODS</strong> include the following: Drugs, Vaccine, Biological or alternative medicine or medical devices or biologicals or other related product as may be notified by DRAP
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", fontSize: `${FONT.base}px`, lineHeight: 1.45 }}>
          <span style={{ color: "#008000", fontWeight: "bold", fontSize: "18px", marginRight: 8, lineHeight: 1 }}>✔</span>
          <span>
            Fatal reactions, life-threatening, disabling or incapacitating, result in or prolong hospitalization, congenital anomaly or birth defect and other serious medically important conditions are considered serious.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", fontSize: `${FONT.base}px`, lineHeight: 1.45 }}>
          <span style={{ color: "#008000", fontWeight: "bold", fontSize: "18px", marginRight: 8, lineHeight: 1 }}>✔</span>
          <span>
            Health care professionals shall comment on the causal relationship of each suspected drug/vaccine/alternative medicine with each reaction as per the World Health Organization (WHO) causality assessment scale which comprises of the following six categories, namely:
          </span>
        </div>
      </div>

      {/* Causality Assessment Scale list on one line */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px 24px",
          marginBottom: 20,
          paddingLeft: 6,
          fontSize: `${FONT.base}px`,
        }}
      >
        {["i. Certain", "ii. Probable", "iii. Possible", "iv. Unlikely", "v. Unclassified", "vi. Unclassifiable"].map(
          (cat) => (
            <span key={cat} style={{ fontWeight: 400 }}>{cat}</span>
          )
        )}
      </div>

      <div style={{ textAlign: "center", fontWeight: 700, fontSize: `${FONT.base}px`, marginBottom: 16 }}>
        For the Greater Good &amp; in Public Interest, Please Report ADRs to DRAP even if you are unsure.
      </div>

      <div style={{ textAlign: "center", fontSize: `${FONT.base}px`, marginBottom: 4 }}>
        For More Information/Queries, please contact:
      </div>
      <div style={{ textAlign: "center", fontSize: `${FONT.base}px`, fontWeight: 700, marginBottom: 20 }}>
        Email: regulatory@globalpharmaceuticalspk.com
      </div>

      {/* FIRST FOLD HERE label */}
      <div
        style={{
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: `${FONT.base}px`,
          marginBottom: 6,
        }}
      >
        FIRST FOLD HERE
      </div>

      {/* Bottom thick horizontal line */}
      <div style={{ borderTop: "3px solid #000", marginTop: 4 }} />
    </div>
  );
}
