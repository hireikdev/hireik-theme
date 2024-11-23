import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { styled, SxProps, Theme } from "@mui/material/styles";
import { DatePickerStateProvider } from "@rehookify/datepicker";

import { CalenderIcon } from "../Icons";
import DateRangePickerChildren from "./DateRangePickerChildren";

export interface DateRangeValue {
  to?: Date;
  from?: Date;
}

interface DateRangePickerPropsI {
  locale?: string;
  className?: string;
  sx?: SxProps<Theme>;
  placeholder?: string;
  dualMonth?: boolean;
  value?: DateRangeValue;
  onChange?: (value: DateRangeValue) => void;
  dateFormat?: (from?: Date, to?: Date) => string;
}

const DateRangePickerWrapper = styled(Box)(() => ({}));

const DateRangePicker = ({
  value,
  onChange,
  dualMonth,
  locale = "en-US",
  placeholder,
  className,
  sx,
  dateFormat,
}: DateRangePickerPropsI) => {
  const now = new Date();
  const [dateInputValue, setDateInputValue] = useState("");
  const [selectedDates, onDatesChange] = useState<Date[]>(value?.from && value.to ? [value?.from, value.to] : []);
  const [offsetDate, onOffsetChange] = useState<Date>(now);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    let dateInputValue = "";
    if (value) {
      if (value.from) dateInputValue = value.from.toLocaleDateString(locale);
      if (value.to) dateInputValue += ` - ${value.to.toLocaleDateString(locale)}`;
      if (!value.from && !value.to) {
        dateInputValue = "";
        onDatesChange([]);
      }
      setDateInputValue(dateInputValue);
    }
  }, [value]);

  const open = Boolean(anchorEl);

  return (
    <DateRangePickerWrapper className={className} sx={sx}>
      <TextField
        placeholder={placeholder}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position='end'>
              <CalenderIcon fontSize={"small"} />
            </InputAdornment>
          ),
        }}
        value={dateFormat ? dateFormat(selectedDates[0], selectedDates[1]) : dateInputValue}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            style: {
              borderRadius: 12,
              boxShadow: "#bbbbbb45 1px 4px 8px 1px",
              overflowX: "auto",
            },
          },
        }}
      >
        <DatePickerStateProvider
          config={{
            selectedDates,
            onDatesChange: (date) => {
              onDatesChange(date);
              if (onChange)
                onChange({
                  from: date[0],
                  to: date[1],
                });
            },
            offsetDate,
            onOffsetChange,
            dates: {
              mode: "range",
            },
            years: {
              mode: 'exact',
              numberOfYears: 25
            },
            calendar: {
              offsets: [-1, 1],
            },
          }}
        >
          <DateRangePickerChildren dualMonth={dualMonth} />
        </DatePickerStateProvider>
      </Popover>
    </DateRangePickerWrapper>
  );
};

export default DateRangePicker;
