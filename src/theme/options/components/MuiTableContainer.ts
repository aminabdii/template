import { Theme } from "@emotion/react";
import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";
import { text } from "../../../colors/colors";

interface MuiTableContainerOptions {
  defaultProps?: ComponentsProps["MuiTableContainer"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTableContainer"];
  variants?: ComponentsVariants<Theme>["MuiTableContainer"];
}

export const MuiTableContainer: MuiTableContainerOptions = {
  styleOverrides: {
    root: {
      boxShadow: "none",
      border: `1px solid ${text["100"]}`,
      borderRadius: 4,
    },
  },
};
