import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import { theme } from "./default";

export const DefaultThemeProvider = ({ children }: PropsWithChildren<{}>) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
