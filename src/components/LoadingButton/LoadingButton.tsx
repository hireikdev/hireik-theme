import React from "react";
import { Button, ButtonProps } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

type Props = ButtonProps & {
  loading?: boolean;
  position?: "start" | "end";
};

const LoadingButton: React.FC<Props> = ({ loading, position, children, startIcon, endIcon, disabled, ...props }) => {
  if (position && position === "end") {
    return (
      <Button
        disableElevation
        disabled={loading || disabled}
        startIcon={!loading && startIcon}
        endIcon={loading ? <CircularProgress color='inherit' size={20} /> : endIcon}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      disableElevation
      startIcon={loading ? <CircularProgress color='inherit' size={20} /> : startIcon}
      disabled={loading || disabled}
      endIcon={!loading && endIcon}
      {...props}
    >
      {children}
    </Button>
  );
};

export default LoadingButton;
