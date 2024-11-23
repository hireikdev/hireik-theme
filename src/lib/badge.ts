import {} from "@mui/material/Badge";

declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    large: true;
    medium: true;
    small: true;
  }
}