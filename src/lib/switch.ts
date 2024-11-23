import {} from "@mui/material/Switch";

declare module "@mui/material/Switch" {
  interface SwitchProps {
    variant: "filled" | "withIcon" | "onOff";
  }
  interface SwitchClasses {
    filled: true;
    withIcon: true;
    onOff: true;
  }
}
