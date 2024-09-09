import { Theme } from "@emotion/react";
import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";
import { text } from "../../../colors/colors";

interface MuiTextFieldOptions {
  defaultProps?: ComponentsProps["MuiTextField"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTextField"];
  variants?: ComponentsVariants<Theme>["MuiTextField"];
}

export const MuiTextField: MuiTextFieldOptions = {
  styleOverrides: {
    root: {
      width: "100%",

      borderRadius: "16px",
      "& .MuiOutlinedInput-input": {
        fontSize: "16px",
        fontWeight: 400,
        color: text["600"],
        padding: "12px, 8px, 12px, 16px",
      },

      "& .MuiOutlinedInput-root": {
        borderRadius: "16px",
        padding: "12px, 8px, 12px, 16px",
      },
    },
  },
};
