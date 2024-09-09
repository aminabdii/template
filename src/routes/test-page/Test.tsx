import { cacheRtl } from "../../theme/rtl";
import { CacheProvider } from "@emotion/react";

// import MySelect from "../../core-components/commen/customInput/MySelect";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { StyledTextField } from "../../core-components/commen/customInput/StyledTextField";
import MySelect from "../../core-components/commen/customInput/MySelect";
import StatusBox from "../../core-components/commen/statusBox/StatusBox";
import StyledTable from "../../core-components/commen/table/StyledTable";
import CustomPopup from "../../core-components/commen/customPopup/CustomPopup";
import { useState } from "react";
import UploadInput from "../../core-components/commen/customInput/UploadInput";

const Test = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  // const [phoneNumber,setPhoneNumber] =

  return (
    <CacheProvider value={cacheRtl}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", gap: 4 }}>
          <StyledTextField label="نام مدیر" />
          <TextField label="نام موسسه" />

          <MySelect
            label="گروه تدارکات"
            onSelectedChange={() => {}}
            array={[
              { label: "vip", value: "1" },
              { label: "vip2", value: "2" },
              { label: "vip3", value: "3" },
            ]}
            variant="filled"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            marginTop: 4,
            marginBottom: 4,
            // gridAutoFlow:""
          }}
        >
          <Button variant="contained">تایید</Button>
          <Button variant="contained">لغو</Button>
          <Button variant="contained">ادامه</Button>
          <StatusBox status="accept" text="تایید شده" />
          <StatusBox status="pending" text=" درحال بررسی" />
          <StatusBox status="reject" text="رد شده" />
        </Box>
        <Box>
          <StyledTable />
        </Box>
        <CustomPopup
          handleClose={() => setOpenModal(false)}
          handleOpen={() => setOpenModal(true)}
          openModal={openModal}
          text="ثبت درخواست شما با موفقیت انجام شد"
        />

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <UploadInput
              label="بارگذاری روزنامه رسمی آخرین تغییرات"
              field=""
              setValue={() => {}}
              type="file"
            />
          </Grid>
          <Grid item xs={6}>
            <UploadInput
              label="بارگذاری مجوز فعالیت"
              field=""
              setValue={() => {}}
              type="file"
            />
          </Grid>
        </Grid>

        {/* ..  */}
      </Container>
    </CacheProvider>
  );
};

export default Test;
