import { TypographyOptions } from "@mui/material/styles/createTypography";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyOptions {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    body5: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    button1: React.CSSProperties;
    button2: React.CSSProperties;
    button3: React.CSSProperties;
    overline1: React.CSSProperties;
    overline2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    body5?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
    button3: React.CSSProperties;
    overline1?: React.CSSProperties;
    overline2?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1?: true;
    display2?: true;
    body3?: true;
    body4?: true;
    body5?: true;
    caption1?: true;
    caption2?: true;
    button1?: true;
    button2?: true;
    buton3: true;
    overline1?: true;
    overline2?: true;
    button?: false;
    caption?: false;
  }
}

export const typography = (): TypographyOptions => ({
  fontFamily: "Vazirmatn",

  allVariants: {
    margin: "0",
    fontFamily: "Vazirmatn",
    lineHeight: "normal",
  },
  display1: {
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "90px",
  },
  display2: {
    fontSize: "56px",
    fontWeight: 700,
    lineHeight: "80px",
  },

  h1: {
    fontSize: "44px",
    fontWeight: 700,
    lineHeight: "70px",
  },
  h2: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "60px",
  },
  h3: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "50px",
  },
  h4: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "33.6px",
  },
  h5: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "40px",
  },
  h6: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "32px",
  },
  body1: {
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "32px",
  },
  body2: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
  },
  body3: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
  },
  body4: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
  },
  body5: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "20px",
  },
  caption1: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "16.8px",
  },
  caption2: {
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "14px",
  },
  button1: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "21px",
  },
  button2: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "19.6px",
  },
  button3: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "19.6px",
  },
  overline1: {
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "15px",
  },
  overline2: {
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "15px",
  },
});
