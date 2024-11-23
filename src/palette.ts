import { darken, lighten, PaletteOptions } from "@mui/material";

const primaryColor = "#346FEF";
const secondaryColor = "#924CFF";
const errorColor = "#EC131F";
const warningColor = "#F79009";
const infoColor = "#00BEC5";
const successColor = "#008951";
const opacityFocus = 0.12;
const opacityHover = 0.05;
const lightenValue = 0.8;

export const lightModePalette: PaletteOptions = {
  mode: "light",
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  background: {
    paper: "#FFFFFF",
    default: "#F9FAFB",
    paperElevation0: "#F5F5F6",
  },
  text: {
    primary: "#1D2939",
    secondary: "#475467",
    tertiary: "#757F8E",
    light: "#F2F4F7",
    contrastText: "#FFFFFF",
  },
  primary: {
    main: primaryColor,
    dark: darken(primaryColor, opacityFocus),
    light: lighten(primaryColor, lightenValue),
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: secondaryColor,
    dark: darken(secondaryColor, opacityFocus),
    light: lighten(secondaryColor, lightenValue),
    contrastText: "#FFFFFF",
  },
  error: {
    main: errorColor,
    dark: darken(errorColor, opacityFocus),
    light: lighten(errorColor, lightenValue),
    contrastText: "#FFFFFF",
  },
  warning: {
    main: warningColor,
    dark: darken(warningColor, opacityFocus),
    light: lighten(warningColor, lightenValue),
    contrastText: "#FFFFFF",
  },
  info: {
    main: infoColor,
    dark: darken(infoColor, opacityFocus),
    light: lighten(infoColor, lightenValue),
    contrastText: "#FFFFFF",
  },
  success: {
    main: successColor,
    dark: darken(successColor, opacityFocus),
    light: lighten(successColor, lightenValue),
    contrastText: "#FFFFFF",
  },
  inheritWhite: {
    main: "#ffffff",
  },
  grey: {
    50: "#FAFAFA",
  },
  tonalOffset: 0.5,
  other: {
    outlinedBorder: "rgba(148, 157, 178, 0.12)",
    outlinedBorderDarker: "rgba(148, 157, 178, 0.24)",
    dividerFillColor: "rgba(148, 157, 178, 0.12)",
    inputOutlinedHoverBorder: "#757F8E",
    inputOutlinedEnabledBorder: "rgba(29, 41, 57, 0.12)",
    ratingActiveFill: "#FFB400",
    graySolid: "rgb(249 249 249)",
    divider: "rgba(29, 41, 57, 0.10)"
  },
  action: {
    active: "#949DB2",
    actionHover: "rgba(52, 111, 239, 0.05)",
    hover: "rgba(29, 41, 57, 0.04)",
    hoverOpacity: opacityHover,
    selected: "rgba(29, 41, 57, 0.08)",
    selectedOpacity: 0.08,
    disabled: "#1D29391F",
    disabledBackground: "rgba(3, 6, 11, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(28, 15, 19, 0.12)",
    focusOpacity: opacityFocus,
    activatedOpacity: 0.12,
  },
};

export default lightModePalette;
