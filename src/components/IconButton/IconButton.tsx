import React from "react";
import { IconButton as IcButton, IconButtonProps, alpha, styled } from "@mui/material";

type Props = IconButtonProps & {
  variant?: "rounded" | "outlined" | "roundedBorder";
};

const IconButton = styled(IcButton)<Props>(({ theme, variant, color }) => {
  let styleObject = {};
  if ((variant === "outlined" || variant === "roundedBorder") && color === "primary") {
    styleObject = {
      border: `1px solid ${alpha(
        theme.palette.primary.main,
        theme.palette.action.focusOpacity,
      )}`,
      "&:hover,&:focus": {
        border: `1px solid ${alpha(
          theme.palette.primary.main,
          theme.palette.action.focusOpacity,
        )}`,
      },
    };
  } else if ((variant === "outlined" || variant === "roundedBorder") && color === "secondary") {
    styleObject = {
      border: `1px solid ${alpha(
        theme.palette.secondary.main,
        theme.palette.action.focusOpacity,
      )}`,
      "&:hover,&:focus": {
        border: `1px solid ${alpha(
          theme.palette.secondary.main,
          theme.palette.action.focusOpacity,
        )}`,
      },
    };
  } else if ((variant === "outlined" || variant === "roundedBorder") && color === "error") {
    styleObject = {
      border: `1px solid ${alpha(
        theme.palette.error.main,
        theme.palette.action.focusOpacity,
      )}`,
      "&:hover,&:focus": {
        border: `1px solid ${alpha(
          theme.palette.error.main,
          theme.palette.action.focusOpacity,
        )}`,
      },
    };
  } else if ((variant === "outlined" || variant === "roundedBorder") && color === "warning") {
    styleObject = {
      border: `1px solid ${alpha(
        theme.palette.warning.main,
        theme.palette.action.focusOpacity,
      )}`,
      "&:hover,&:focus": {
        border: `1px solid ${alpha(
          theme.palette.warning.main,
          theme.palette.action.focusOpacity,
        )}`,
      },
    };
  } else if ((variant === "outlined" || variant === "roundedBorder") && color === "info") {
    styleObject = {
      border: `1px solid ${alpha(
        theme.palette.info.main,
        theme.palette.action.focusOpacity,
      )}`,
      "&:hover,&:focus": {
        border: `1px solid ${alpha(
          theme.palette.info.main,
          theme.palette.action.focusOpacity,
        )}`,
      },
    };
  } else if ((variant === "outlined" || variant === "roundedBorder") && color === "success") {
    styleObject = {
      border: `1px solid ${alpha(
        theme.palette.success.main,
        theme.palette.action.focusOpacity,
      )}`,
      "&:hover,&:focus": {
        border: `1px solid ${alpha(
          theme.palette.success.main,
          theme.palette.action.focusOpacity,
        )}`,
      },
    };
  } else if ((variant === "outlined" || variant === "roundedBorder") && color === "inherit") {
    styleObject = {
      border: `1px solid ${alpha(
        theme.palette.text.primary,
        theme.palette.action.focusOpacity,
      )}`,
      "&:hover,&:focus": {
        border: `1px solid ${alpha(
          theme.palette.text.primary,
          theme.palette.action.focusOpacity,
        )}`,
      },
    };
  } else if ((variant === "outlined" || variant === "roundedBorder") && color === "inheritWhite") {
    styleObject = {
      border: `1px solid ${alpha(
        theme.palette.inheritWhite.main,
        theme.palette.action.focusOpacity,
      )}`,
      "&:hover,&:focus": {
        border: `1px solid ${alpha(
          theme.palette.inheritWhite.main,
          theme.palette.action.focusOpacity,
        )}`,
      },
    };
  } else if (variant === "outlined" || variant === "roundedBorder") {
    styleObject = {
      border: `1px solid ${theme.palette.action.selected}`,
      "&:hover": {
        border: `1px solid ${theme.palette.action.selected}`,
      },
      "&:focus": {
        border: `1px solid ${theme.palette.action.selected}`,
      },
    };
  }

  if (variant === "rounded" || variant === "roundedBorder") {
    styleObject = { ...styleObject, borderRadius: "8px" };
  }

  return styleObject;
});

export default IconButton;
