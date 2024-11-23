import {} from "@mui/material/Avatar";
import {} from "@mui/material/AvatarGroup";

declare module "@mui/material/Avatar" {}

declare module "@mui/material/AvatarGroup" {
  interface AvatarGroupProps {
    size: "large" | "medium" | "small";
  }
}
