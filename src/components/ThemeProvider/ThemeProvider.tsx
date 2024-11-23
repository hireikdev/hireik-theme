import React from "react";
import { Theme } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { typography } from "../../typography";
import lightModePalette from "../../palette";
import { components } from "../../component";

const defaultTheme = createTheme({
  palette: lightModePalette,
  components: components,
  typography,
});

interface Props {
  children: React.ReactNode;
  theme?: Theme;
}

const ConvertUpLeadsTheme: React.FC<Props> = ({ children, theme }) => (
  <ThemeProvider theme={theme ? theme : defaultTheme}>{children}</ThemeProvider>
);

export default ConvertUpLeadsTheme;
