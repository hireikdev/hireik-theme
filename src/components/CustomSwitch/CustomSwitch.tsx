import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

const CustomSwitchTrack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  borderRadius: "50px",
  width: "max-content",
  minWidth: "45px",
  minHeight: 23,
  maxHeight: 23,
  position: "relative",
  cursor: "pointer",
  fontWeight: 500,
  fontSize: "12px",
  transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  "&.sw_size_small":{
    minWidth: "26px",
    minHeight: 17,
    maxHeight: 17,
    "& .sw_thumb": {
      height: "13px",
      width: "13px",
    },
    "& .sw_active": {
      width: "13px",
    },
    "&.sw_checked": {
      "& .sw_active": {
        width: "100%",
      },
      "& .sw_inactive": {
        width: "13px",
      },
    },
  },
  "& .sw_thumb": {
    height: "19px",
    width: "19px",
    borderRadius: "50%",
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    top: 2,
    left: 2,
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: theme.shadows[1],
  },
  "& .sw_active": {
    opacity: 0,
    width: "18px",
    pointerEvents: "none",
    color: theme.palette.common.white,
  },
  "& .sw_inactive": {
    opacity: 1,
    width: "100%",
    pointerEvents: "all",
  },
  "&.sw_checked": {
    "& .sw_thumb": {
      left: "unset",
      right: 2,
      boxShadow: theme.shadows[0],
    },
    "& .sw_active": {
      opacity: 1,
      width: "100%",
      pointerEvents: "all",
    },
    "& .sw_inactive": {
      opacity: 0,
      width: "18px",
      pointerEvents: "none",
    },
  },
  "&.sw_disabled": {
    pointerEvents: "none",
    opacity: 0.6,
    "& .sw_active": {
      pointerEvents: "none",
    },
    "& > *": {
      pointerEvents: "none",
    },
  },
}));


interface CustomSwitchProps {
  activeText?: string;
  inactiveText?: string;
  checked?: boolean;
  disabled?: boolean;
  size?: "medium" | "small";
  color?: string;
  onChange?: () => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  activeText = "Active",
  inactiveText = "Paused",
  size = "medium",
  checked,
  disabled,
  color,
  onChange,
}) => {
  return (
    <Box>
      <CustomSwitchTrack
        direction={"row"}
        alignItems={"center"}
        className={`${checked ? "sw_checked" : ""} ${size === "small" ? "sw_size_small" : ""} ${
          disabled ? "sw_disabled" : ""
        }`}
        bgcolor={checked ? color : grey[300]}
        onClick={onChange}
      >
        <Box className={"sw_thumb"}></Box>
        <Typography variant={"caption"} className={"sw_active"}>{activeText}</Typography>
        <Typography variant={"caption"} className={"sw_inactive"}>{inactiveText}</Typography>
      </CustomSwitchTrack>
    </Box>
  );
};

export default CustomSwitch;
