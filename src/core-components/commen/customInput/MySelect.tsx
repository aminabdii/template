import { CacheProvider } from "@emotion/react";
import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { cacheRtl } from "../../../theme/rtl";
import { ReactNode } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type objectArray = { label: string; value: string | number };

interface FilterArray {
  array: objectArray[];
  onSelectedChange: (e: unknown, item: { props: objectArray }) => void;
}
type mySelectProps = SelectProps & FormControlProps & FilterArray;

const MySelect = (props: mySelectProps) => {
  return (
    <CacheProvider value={cacheRtl}>
      <FormControl fullWidth>
        <InputLabel {...(props?.label ? { id: props.label as string } : {})}>
          {props?.label}
        </InputLabel>
        <Select
          sx={
            props?.variant == "filled"
              ? {
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }
              : props?.variant == "outlined"
              ? {
                  "& .MuiOutlinedInput-notchedOutline": {
                    backgroundColor: "white",
                  },
                }
              : {}
          }
          labelId={props?.label as string}
          {...props}
          onChange={
            props.onSelectedChange as (
              event: SelectChangeEvent<unknown>,
              child: ReactNode,
            ) => void
          }
          variant="outlined"
          IconComponent={() => (
            <KeyboardArrowDownIcon
              htmlColor="#B22A78"
              sx={{
                position: "absolute",
                right: "10px",
                zIndex: 10,
              }}
            />
          )}
        >
          {props?.array?.map((e) => {
            if (e?.label) {
              return (
                <MenuItem sx={{ zIndex: 40 }} key={e.value} value={e.value}>
                  {e.label}
                </MenuItem>
              );
            } else return null;
          })}
        </Select>
      </FormControl>
    </CacheProvider>
  );
};

export default MySelect;
