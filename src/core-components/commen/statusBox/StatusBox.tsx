import { Box, Typography } from "@mui/material";
import statusBoxProps from "../../../interfaces/core-components/common/statusBoxProps";
import { error, info, success } from "../../../colors/colors";

const StatusBox = ({ status, text }: statusBoxProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "",
        width: 100,

        borderRadius: 2,
        paddingY: 0.5,
        paddingX: 2,
        border: `1px solid ${
          status === "reject"
            ? error.main
            : status === "accept"
            ? success.main
            : status === "pending"
            ? info.main
            : ""
        } `,
      }}
    >
      <Typography
        color={
          status === "reject"
            ? error.main
            : status === "accept"
            ? success.main
            : status === "pending"
            ? info.main
            : ""
        }
        variant="h6"
        sx={{ textAlign: "center" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default StatusBox;
