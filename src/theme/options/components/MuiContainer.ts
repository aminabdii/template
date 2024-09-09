import { Theme } from "@emotion/react";
import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

interface MuiContainerOptions {
  defaultProps?: ComponentsProps["MuiContainer"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiContainer"];
  variants?: ComponentsVariants<Theme>["MuiContainer"];
}

export const MuiContainer: MuiContainerOptions = {
  styleOverrides: {
    maxWidthLg: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },
  },
};
