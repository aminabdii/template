import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { popupProps } from "../../../interfaces/core-components/common/customPopupProps";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 360,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 8,
};

export default function CustomPopup({
  openModal,
  handleClose,
  handleOpen,
  text,
}: popupProps) {
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
            }}
          >
            <CheckCircleIcon color={"success"} sx={{ width: 40, height: 40 }} />
            <Typography variant="buton3">{text}</Typography>
          </Box>
          <Button
            onClick={handleClose}
            size="large"
            variant="contained"
            fullWidth
            sx={{ mt: 10 }}
          >
            تایید
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
