import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";

interface MuiButtonOptions {
  defaultProps?: ComponentsProps["MuiButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
  variants?: ComponentsVariants<Theme>["MuiButton"];
}

export const MuiButton: MuiButtonOptions = {
  defaultProps: {
    variant: "contained",
    size: "medium",
  },
  styleOverrides: {
    root: {
      borderRadius: "8px",
      whiteSpace: "nowrap",
    },
    sizeLarge: {
      padding: "11px 86px",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24.8px",
    },
    sizeMedium: {},
    sizeSmall: {},
  },
};
