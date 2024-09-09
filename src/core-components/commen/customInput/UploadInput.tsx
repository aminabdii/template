import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState, useRef, Fragment } from "react";
import { gray } from "../../../colors/colors";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { UploadInputProps } from "../../../interfaces/core-components/common/uploadInputProps";

const UploadInput = ({ setValue, field, type, label }: UploadInputProps) => {
  const [file, setFile] = useState<File | null>();
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const inPutHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const fileUploaded =URL.createObjectURL(event.target.files && (event.target.files[0] as any))
    const fileUploaded = event.target.files && event.target.files[0];
    const formData = new FormData();
    fileUploaded && formData.append("photo", fileUploaded);
    fileUploaded && setFile(fileUploaded);
    fileUploaded && setValue(field, fileUploaded);
  };
  return (
    <Fragment>
      <Box sx={{ ml: 3, mb: 0.5 }}>
        <Typography variant="button2" color={gray["500"]}>
          {label}
        </Typography>
      </Box>
      <Box
        sx={{
          p: 2,
          borderRadius: "12px",
          border: `1px dashed ${gray["200"]} `,
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{ gap: 3, display: `${!file ? "flex" : "none"}` }}
            onClick={handleClick}
            size="small"
            variant="text"
          >
            <input
              type="file"
              accept={`${type}`}
              onChange={(e) => inPutHandler(e)}
              ref={hiddenFileInput}
              style={{ display: "none" }}
            />
            <Typography variant="button1">بارگذاری فایل</Typography>
            <CloudUploadIcon />
          </Button>
        </Box>
        {file && (
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                p: 1,
              }}
            >
              <img
                style={{ borderRadius: 4 }}
                height={95}
                width={95}
                src={URL.createObjectURL(file)}
              />
              <Typography variant="caption1" color={gray["300"]}>
                {file.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: 5,
                bottom: 5,
              }}
            >
              <IconButton
                onClick={() => {
                  setValue(field, null);
                  setFile(null);
                }}
              >
                <DeleteOutlineIcon color="error" />
              </IconButton>
            </Box>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};
export default UploadInput;
