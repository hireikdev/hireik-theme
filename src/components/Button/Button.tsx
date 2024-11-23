import React from "react";
import { styled } from "@mui/material";
import MuiButton, { ButtonProps } from "@mui/material/Button";

interface Props extends ButtonProps {
  rounded?: boolean;
}

const Button = styled(MuiButton)<Props>(({ rounded }) => {
  if (rounded) {
    return {
      borderRadius: "50px",
    };
  }
  return {};
});

export default Button;
