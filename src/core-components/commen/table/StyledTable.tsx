import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableRowProps } from "../../../interfaces/core-components/common/tableProps";
import { Button, Typography } from "@mui/material";
import StatusBox from "../statusBox/StatusBox";

const rows: tableRowProps[] = [
  { title: "ردیف" },
  { title: "عنوان" },
  { title: "تاریخ ثبت" },
  { title: "نام فروشگاه" },
  { title: "وضعیت" },
];

const fake_Data: {
  id: number;
  label: string;
  date: string;
  store: string;
  status: string;
}[] = [
  {
    label: "درخواست1",
    date: "1403/02/05",
    status: "accept",
    store: "تهران تور",
    id: 1,
  },
  {
    label: "درخواست2",
    date: "1403/02/05",
    status: "accept",
    store: "تهران تور",
    id: 2,
  },
  {
    label: "درخواست3",
    date: "1403/02/05",
    status: "accept",
    store: "تهران تور",
    id: 3,
  },
  {
    label: "درخواست4",
    date: "1403/02/05",
    status: "accept",
    store: "تهران تور",
    id: 4,
  },
];

export default function StyledTable() {
  return (
    <TableContainer
      component={Paper}
      //   sx={{ width: "100%", mx: "auto", backgroundColor: "grey" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {rows.map((row, index) => (
              <TableCell align="center" key={index}>
                <Typography variant="button1">{row?.title}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* map data  */}
          {fake_Data.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                <Typography variant="body4">{item?.id}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body4">{item?.label}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body4">{item?.date}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body4">{item.store}</Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button variant="contained">نمایش جزییات</Button>
                <StatusBox status={item?.status} text="تایید شده" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
