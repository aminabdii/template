import { ThemeProvider } from "@emotion/react";
import App from "../App";
import { theme } from "../theme";
import Test from "./test-page/Test";

const root = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <App />
      <Test />
    </ThemeProvider>
  );
};

export default root;
