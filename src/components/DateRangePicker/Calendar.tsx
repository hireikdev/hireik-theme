import React from "react";
import { Box, Typography } from "@mui/material";
import { DPCalendar, useContextCalendars, useContextDaysPropGetters } from "@rehookify/datepicker";

import IconButton from "../IconButton";
import { DaysButton, DaysWrapper, WeekDays } from "./DateRangePickerStyles";

interface CalendarProps {
  calendar: DPCalendar;
}

export const Calendar = ({ calendar }: CalendarProps) => {
  const { weekDays } = useContextCalendars();
  const { dayButton } = useContextDaysPropGetters();
  const { days, month } = calendar;
  return (
    <Box>
      <Typography variant={"body2"} textAlign={"center"}>
        {month}
      </Typography>
      <WeekDays>
        {weekDays.map((d, i) => (
          <Typography variant={"caption"} color={"text.secondary"} key={i}>
            {d}
          </Typography>
        ))}
      </WeekDays>
      <DaysWrapper>
        {days.map((d) => (
          <DaysButton key={d.$date.toString()} {...d} className={d.range}>
            <IconButton variant={"roundedBorder"} color={"primary"} {...dayButton(d)}>
              {d.day}
            </IconButton>
          </DaysButton>
        ))}
      </DaysWrapper>
    </Box>
  );
};
