import {} from "@mui/material/SvgIcon";

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    [color: string]: true;
  }
}
