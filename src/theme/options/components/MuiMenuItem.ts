import { Theme } from "@emotion/react";
import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

interface MuiMenuItemOptions {
  defaultProps?: ComponentsProps["MuiMenuItem"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiMenuItem"];
  variants?: ComponentsVariants<Theme>["MuiMenuItem"];
}

export const MuiMenuItem: MuiMenuItemOptions = {
  styleOverrides: {
    root: {
      minWidth: 200,
      fontSize: "16px",
    },
  },
};
