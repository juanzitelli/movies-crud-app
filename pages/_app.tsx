import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultThemeProvider } from "./../themes";
import { CssBaseline } from "@mui/material";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultThemeProvider>
      <Component {...pageProps} />
      <CssBaseline />
    </DefaultThemeProvider>
  );
};

export default App;
