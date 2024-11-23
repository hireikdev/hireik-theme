import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { CalenderIcon } from "../Icons";

interface DatePickerProps {
  label?: string;
  value?: string;
  width?: number | string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, fullWidth, label, width, onChange, error, helperText }) => {
  const [date, setDate] = useState(value);
  return (
    <TextField
      type='date'
      fullWidth={fullWidth}
      label={label}
      value={date}
      error={error}
      helperText={helperText}
      onChange={(event) => {
        setDate(event.target.value);
        if (onChange) onChange(event.target.value);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <CalenderIcon fontSize={"small"} />
          </InputAdornment>
        ),
      }}
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

export default DatePicker;
