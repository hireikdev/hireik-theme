import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { ClockIcon } from "../Icons";

interface TimePickerProps {
  label?: string;
  time?: string;
  width?: number | string;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
}

const TimePicker: React.FC<TimePickerProps> = ({ label, time, width, fullWidth, error, helperText }) => {
  const [value, setValue] = useState(time);

  return (
    <TextField
      label={label}
      type={"time"}
      value={value}
      fullWidth={fullWidth}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <ClockIcon />
          </InputAdornment>
        ),
      }}
      onChange={(e) => setValue(e.target.value)}
      sx={{
        width: width,
        "& input::-webkit-calendar-picker-indicator": {
          width: "82%",
          position: "absolute",
          cursor: "pointer",
          opacity: 0,
          zIndex: 99,
        },
      }}
    />
  );
};

export default TimePicker;
