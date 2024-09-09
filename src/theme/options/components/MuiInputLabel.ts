import { Theme } from "@emotion/react";
import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

interface MuiInputLabelOptions {
  defaultProps?: ComponentsProps["MuiInputLabel"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiInputLabel"];
  variants?: ComponentsVariants<Theme>["MuiInputLabel"];
}

export const MuiInputLabel: MuiInputLabelOptions = {
  styleOverrides: {
    root: {
      fontSize: "16px",
    },
  },
};
