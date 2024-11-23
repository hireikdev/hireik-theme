import {} from "@mui/material/InputAdornment";
import {} from "@mui/material/OutlinedInput";
import {} from "@mui/material/Input";

declare module "@mui/material/InputAdornment" {
  interface InputAdornmentClasses {}
}

declare module "@mui/material/Input" {
  interface InputClasses {
    adornedStart: true;
    adornedEnd: true;
    colorError: true;
  }
}

declare module "@mui/material/OutlinedInput" {
  interface OutlinedInputClasses {
    colorError: true;
    colorWarning: true;
    colorInfo: true;
    colorSuccess: true;
  }
}
