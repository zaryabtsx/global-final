import React from "react";

export const ADR_YELLOW = "#FFFF00";

// PDF-matched typography (Times New Roman)
export const FONT = {
  base: 17,
  small: 15,
  tableHeader: 14,
  tableCell: 15,
  title: 30,
  subtitle: 16,
  section: 19,
};

export const adrPageStyle = {
  background: ADR_YELLOW,
  fontFamily: "'Times New Roman', Times, serif",
  fontSize: `${FONT.base}px`,
  color: "#000",
  padding: "24px 28px",
  maxWidth: "1100px",
  margin: "0 auto",
  border: "1.5px solid #000",
  lineHeight: 1.3,
  boxSizing: "border-box",
};

export const adrTableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: `${FONT.tableHeader}px`,
  marginBottom: "12px",
};

export const adrThStyle = {
  border: "1.5px solid #000",
  background: ADR_YELLOW,
  padding: "4px 4px",
  fontWeight: 700,
  textAlign: "center",
  verticalAlign: "middle",
  lineHeight: 1.15,
};

export const adrTdStyle = {
  border: "1.5px solid #000",
  padding: "2px 4px",
  height: "32px",
  verticalAlign: "middle",
  background: "transparent",
};

export const adrInputStyle = {
  border: "none",
  borderBottom: "1.5px solid #000",
  outline: "none",
  background: "transparent",
  fontSize: `${FONT.base}px`,
  fontFamily: "inherit",
  padding: "0 2px",
  height: "26px",
};

export const adrTdInputStyle = {
  border: "none",
  outline: "none",
  width: "100%",
  fontSize: `${FONT.tableCell}px`,
  background: "transparent",
  fontFamily: "inherit",
  padding: 0,
  height: "28px",
};

export const adrTextareaStyle = {
  border: "1.5px solid #000",
  outline: "none",
  width: "100%",
  resize: "vertical",
  fontSize: `${FONT.base}px`,
  fontFamily: "inherit",
  background: "transparent",
  padding: "4px 6px",
  minHeight: "64px",
  boxSizing: "border-box",
};

export function SectionTitle({ children, regular }) {
  return (
    <div
      style={{
        fontSize: `${FONT.section}px`,
        fontWeight: 700,
        marginTop: 14,
        marginBottom: 8,
        lineHeight: 1.25,
        borderBottom: "1.5px solid #000",
        paddingBottom: 2,
        textTransform: "uppercase",
      }}
    >
      {children}
      {regular && (
        <span style={{ fontWeight: 400, fontStyle: "italic", textTransform: "none" }}>{regular}</span>
      )}
    </div>
  );
}

export function ItemLabel({ children, regular, style = {} }) {
  return (
    <div
      style={{
        fontSize: `${FONT.base}px`,
        fontWeight: 700,
        marginBottom: 4,
        lineHeight: 1.25,
        ...style,
      }}
    >
      {children}
      {regular && <span style={{ fontWeight: 400, fontStyle: "italic" }}>{regular}</span>}
    </div>
  );
}

export function PlainText({ children, style = {} }) {
  return (
    <span style={{ fontSize: `${FONT.base}px`, fontWeight: 400, ...style }}>
      {children}
    </span>
  );
}

export function LineField({ label, name, width = "100%", style = {}, labelBold = true }) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 4,
        flexWrap: "wrap",
        marginBottom: 4,
        fontSize: `${FONT.base}px`,
        fontWeight: labelBold ? 700 : 400,
        ...style,
      }}
    >
      <span>{label}</span>
      <input name={name} style={{ ...adrInputStyle, width, flex: width === "100%" ? 1 : undefined, minWidth: 60 }} />
    </label>
  );
}

export function TableInput({ name }) {
  return <input name={name} style={adrTdInputStyle} />;
}

export function CheckOption({ label, name, value, block = false }) {
  return (
    <label
      style={{
        display: block ? "flex" : "inline-flex",
        alignItems: "flex-start",
        gap: 6,
        marginRight: block ? 0 : 16,
        marginBottom: 4,
        fontSize: `${FONT.base}px`,
        fontWeight: 400,
        lineHeight: 1.25,
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        style={{
          width: 14,
          height: 14,
          border: "1.5px solid #000",
          backgroundColor: "#fff",
          accentColor: "#000",
          marginTop: 2,
          flexShrink: 0,
          cursor: "pointer",
        }}
      />
      <span>{label}</span>
    </label>
  );
}

export function RadioOption({ label, name, value }) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginRight: 16,
        fontSize: `${FONT.base}px`,
        fontWeight: 400,
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        style={{
          width: 14,
          height: 14,
          border: "1.5px solid #000",
          backgroundColor: "#fff",
          accentColor: "#000",
          flexShrink: 0,
          cursor: "pointer",
        }}
      />
      <span>{label}</span>
    </label>
  );
}

export const DRUG_TABLE_HEADERS = [
  <>
    Drug/Vaccine/Alternative
    <br />
    Medicine
  </>,
  <>Batch No:</>,
  <>
    Manufacturer
    <br />
    /importer
  </>,
  <>
    Route of
    <br />
    Administration &amp;
    <br />
    Daily Doses
  </>,
  <>
    Dosage
    <br />
    &amp;
    <br />
    Strength
  </>,
  <>Start Date</>,
  <>Stop Date</>,
  <>Prescribed For</>,
];

export const DRUG_COL_KEYS = [
  "drugName",
  "batchNo",
  "manufacturer",
  "route",
  "dosage",
  "startDate",
  "stopDate",
  "prescribedFor",
];

export const DEVICE_TABLE_HEADERS = [
  <>
    Medical Device
    <br />
    Common Name / Brand Name
  </>,
  <>
    Lot No/
    <br />
    Batch No:
  </>,
  <>
    Manufacturer
    <br />
    /importer
  </>,
  <>Model No:</>,
  <>Unique Identifier No:</>,
  <>Serial No:</>,
  <>
    If Implanted
    <br />
    enter date
  </> ,
  <>
    If Explanted
    <br />
    enter date
  </>,
];

export const DEVICE_COL_KEYS = [
  "deviceName",
  "batchNo",
  "manufacturer",
  "modelNo",
  "uniqueId",
  "serialNo",
  "implantedDate",
  "explantedDate",
];

export function DrugTable({ prefix, rows = 2 }) {
  return (
    <table style={adrTableStyle}>
      <thead>
        <tr>
          {DRUG_TABLE_HEADERS.map((header, i) => (
            <th key={i} style={adrThStyle}>
              {header}
              {i === 0 && (
                <span style={{ fontWeight: 400 }}>
                  <br />
                  (Brand Name &amp; Generic Name)
                </span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }, (_, r) => (
          <tr key={r}>
            {DRUG_COL_KEYS.map((col) => (
              <td key={col} style={adrTdStyle}>
                <TableInput name={`${prefix}_${col}_${r + 1}`} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function DeviceTable({ prefix, rows = 2 }) {
  return (
    <table style={adrTableStyle}>
      <thead>
        <tr>
          {DEVICE_TABLE_HEADERS.map((header, i) => (
            <th key={i} style={adrThStyle}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }, (_, r) => (
          <tr key={r}>
            {DEVICE_COL_KEYS.map((col) => (
              <td key={col} style={adrTdStyle}>
                <TableInput name={`${prefix}_${col}_${r + 1}`} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function DrapLogo() {
  return (
    <svg width="56" height="56" viewBox="0 0 100 100" style={{ display: "block" }}>
      {/* Outer green circle */}
      <circle cx="50" cy="50" r="48" fill="#fff" stroke="#008000" strokeWidth="4" />
      {/* Inner green circle */}
      <circle cx="50" cy="50" r="38" fill="#008000" />
      {/* Star and Crescent */}
      <path
        d="M 52,28 A 15,15 0 1,0 67,53 A 12,12 0 1,1 52,28 Z"
        fill="#fff"
      />
      <polygon
        points="65,34 68,39 74,39 69,42 71,47 65,44 59,47 61,42 56,39 62,39"
        fill="#fff"
      />
      {/* Text ring */}
      <path
        id="textPath"
        d="M 50,10 A 40,40 0 1,1 49.9,10"
        fill="none"
      />
      <text fill="#008000" fontSize="8" fontWeight="bold" fontFamily="Arial, sans-serif">
        <textPath href="#textPath" startOffset="50%" textAnchor="middle">
          DRUG REGULATORY AUTHORITY OF PAKISTAN
        </textPath>
      </text>
    </svg>
  );
}
