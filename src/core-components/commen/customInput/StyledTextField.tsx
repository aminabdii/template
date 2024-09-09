import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import { gray, primary } from "../../../colors/colors";

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-input": {
    padding: "12px, 8px, 12px, 16px",
    height: "20px",
  },

  "& .MuiOutlinedInput-root": {
    padding: "12px, 8px, 12px, 16px",
    backgroundColor: gray["100"],
    "& fieldset": {
      borderRadius: "16px",
      border: "none",
    },
    "&:hover fieldset": {
      borderRadius: "16px",
      border: `1px solid`,
      borderColor: "none",
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${primary["500"]}`,
    },
  },
}));
