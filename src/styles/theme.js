import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "League Spartan, sans-serif",
    body1: {
      fontSize: "2.25rem",
      fontWeight: 300,
    },
    body2: {
      fontSize: "1.2rem",
    },
    h1: {
      fontSize: "4rem",
      fontWeight: 400,
    },
    cardTitle: {
      fontSize: "2.5rem",
    },
  },
});

export default theme;
