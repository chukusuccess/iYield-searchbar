"use client";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { FC, ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#979BB8",
      contrastText: "#35374C",
    },
    secondary: {
      main: "#35374C",
      contrastText: "#979BB8",
    },
    background: {
      default: "#35374C",
    },
  },
});

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
