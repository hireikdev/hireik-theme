import React from "react";
import { styled } from "@mui/material";
import MuiAvatar, { AvatarProps } from "@mui/material/Avatar";

type Props = AvatarProps & {
  size: "small" | "medium" | "large";
};

const Avatar = styled(MuiAvatar)<Props>(({ size }) => {
  if (size === "large") {
    return { height: 40, width: 40, fontSize: 20 };
  }
  if (size === "small") {
    return { height: 24, width: 24, fontSize: 12 };
  }

  return { height: 32, width: 32, fontSize: 20 };
});

export default Avatar;
