import {} from "@mui/material/Slider";

declare module "@mui/material/Slider" {
  interface SliderPropsColorOverrides {
    info: true;
    success: true;
    warning: true;
    error: true;
    inherit: true;
  }
}
