import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#33658a",
    },
    secondary: {
      main: "#f6ae2d",
    },
  },
  typography: {
    allVariants: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 10,
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
