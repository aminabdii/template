import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";
import { gray, text } from "../../../colors/colors";

interface MuiSelectOptions {
  defaultProps?: ComponentsProps["MuiSelect"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiSelect"];
  variants?: ComponentsVariants<Theme>["MuiSelect"];
}

export const MuiSelect: MuiSelectOptions = {
  styleOverrides: {
    root: {
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${gray["200"]}`,
        borderRadius: "16px",
        Padding: "12px, 8px, 12px, 16px",
        backgroundColor: "#F6F6F6",
        zIndex: -1,
      },

      "& .MuiOutlinedInput-input": {
        padding: "12px 18px",
      },
      "& .MuiSelect-outlined": {
        fontSize: "16px",
        fontWeight: 400,
        color: text["600"],
      },
    },
  },
};
