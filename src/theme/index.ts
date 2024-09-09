import { createTheme } from "@mui/material";
import { customFont } from "./customFont";
import { typography } from "./options/typography";
import {
  error,
  gray,
  primary,
  secondary,
  success,
  warning,
  blue,
} from "../colors/colors";

import { MuiButton } from "./options/components/MuiButton";
import { MuiSelect } from "./options/components/MuiSelect";
import { MuiTextField } from "./options/components/MuiTextField";
import { MuiInputLabel } from "./options/components/MuiInputLabel";
import { MuiMenuItem } from "./options/components/MuiMenuItem";
import { MuiContainer } from "./options/components/MuiContainer";
import { MuiTableContainer } from "./options/components/MuiTableContainer";

export const theme = createTheme({
  spacing: (factor: number) => `${4 * factor}px`,

  breakpoints: {
    values: {
      xs: 360,
      sm: 728,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: primary,
    secondary: secondary,
    grey: gray,
    info: blue,
    success: success,
    warning: warning,
    error: error,
  },

  typography: typography,
  components: {
    MuiButton,
    MuiCssBaseline: {
      styleOverrides: customFont,
    },
    MuiSelect,
    MuiTextField: MuiTextField,
    MuiInputLabel: MuiInputLabel,
    MuiMenuItem: MuiMenuItem,
    MuiContainer: MuiContainer,
    MuiTableContainer: MuiTableContainer,
  },
});
