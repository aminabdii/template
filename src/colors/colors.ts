import { SimplePaletteColorOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

type paletteColorOptions = SimplePaletteColorOptions & ColorPartial;

export const blue: paletteColorOptions = {
  main: "#007AFF",
  "100": "#CCE4FF",
  "200": "#99CAFF",
  "300": "#66AFFF",
  "400": "#3395FF",
  "500": "#007AFF",
  "600": "#0062CC",
  "700": "#004999",
  "800": "#003166",
  "900": "#001833",
};

export const secondary: paletteColorOptions = {
  main: "#FBCE50",
  "100": "#FEF5DC",
  "200": "#FDEBB9",
  "300": "#FDE296",
  "400": "#FCD873",
  "500": "#FBCE50",
  "600": "#FABC0F",
  "700": "#C29004",
  "800": "#816003",
  "900": "#413001",
};

export const gray: paletteColorOptions = {
  main: "#8E8E8E",
  "50": "#F6F6F6",
  "100": "#F6F6F6",
  "200": "#C6C6C6",
  "300": "#AAAAAA",
  "400": "#8E8E8E",
  "500": "#717171",
  "600": "#555555",
  "700": "#393939",
  "800": "#1C1C1C",
  "900": "#000000",
};

export const primary: paletteColorOptions = {
  main: "#B22A78",
  "50": "#F6D8E9",
  "100": "#EDB1D3",
  "200": "#E38ABD",
  "300": "#DA63A7",
  "400": "#D13B91",
  "500": "#B22A78",
  "600": "#942364",
  "700": "#942364",
  "800": "#1C1C1C",
  "900": "#000000",
};

export const text: paletteColorOptions = {
  main: "#929292",
  "100": "#DBDBDB",
  "200": "#B6B6B6",
  "300": "#929292",
  "400": "#6D6D6D",
  "500": "#494949",
  "600": "#242424",
};

export const error: paletteColorOptions = {
  main: "#FB4E4E",
};

export const warning: paletteColorOptions = {
  main: "#FFB82E",
};

export const info: paletteColorOptions = {
  main: "#2F80ED",
};

export const success: paletteColorOptions = {
  main: "#2AC769",
};
