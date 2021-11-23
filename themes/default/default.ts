import { createTheme, responsiveFontSizes } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f6ae2d",
    },
    secondary: {
      main: "#33658a",
    },
  },
  typography: {
    allVariants: {
      textTransform: "none",
      fontFamily: "Inter",
    },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
        disableRipple: true,
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
