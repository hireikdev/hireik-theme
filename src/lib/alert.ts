import {} from "@mui/material/Alert";

declare module "@mui/material/Alert" {
  interface AlertClasses {
    standardPrimary: true
    standardSecondary: true
    outlinedPrimary: true
    outlinedSecondary: true
  }
}