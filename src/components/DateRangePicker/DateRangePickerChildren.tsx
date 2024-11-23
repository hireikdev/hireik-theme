import React, { useEffect, useState } from "react";
import { Box, Button, MenuItem, Stack } from "@mui/material";
import {
  useContextCalendars,
  useContextDatePickerOffsetPropGetters,
  useContextDays,
  useContextMonths,
  useContextMonthsPropGetters,
  useContextYears,
  useContextYearsPropGetters,
} from "@rehookify/datepicker";

import Select from "../Select";
import { Calendar } from "./Calendar";
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";

const DateRangePickerChildren = ({ dualMonth = false }: { dualMonth?: boolean }) => {
  const { calendars } = useContextCalendars();
  const { months } = useContextMonths();
  const { years } = useContextYears();

  const { monthButton } = useContextMonthsPropGetters();
  const { yearButton } = useContextYearsPropGetters();
  const { addOffset, subtractOffset } = useContextDatePickerOffsetPropGetters();

  const selectedMonthIndex = months.reduce((prev, cur, index) => {
    if (prev > 0) return prev;
    if (cur.active) return index;
    return 0;
  }, 0);
  const selectedYearIndex = years.reduce((prev, cur, index) => {
    if (prev > 0) return prev;
    if (cur.active) return index;
    return 0;
  }, 0);

  const [monthIndex, setMonthIndex] = useState<number>(selectedMonthIndex);
  const [yearIndex, setYearIndex] = useState<number>(selectedYearIndex);

  return (
    <Box p={2} sx={{ width: "max-content" }}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} mb={1}>
        <Button variant={"tonal"} color={"primary"} {...subtractOffset({ months: 1 })} sx={{ padding: 0.5 }}>
          <ChevronLeftIcon />
        </Button>
        <Stack direction={"row"} spacing={1} alignItems={"center"} px={1}>
          <Select
            value={monthIndex}
            size='small'
            onChange={(event) => {
              if (typeof event.target.value === "number") {
                setMonthIndex(event.target.value);
                const monthIndex = +event.target.value;
                const button = monthButton(months[monthIndex]);
                if (button.onClick) {
                  button.onClick(event as unknown as React.MouseEvent<HTMLElement, MouseEvent>);
                }
              }
            }}
          >
            {months.map((month, index) => {
              return (
                <MenuItem key={index} value={index}>
                  {month.month}
                </MenuItem>
              );
            })}
          </Select>
          <Select
            size='small'
            value={yearIndex}
            onChange={(event) => {
              if (typeof event.target.value === "number") {
                setYearIndex(event.target.value);
                const yearIndex = +event.target.value;
                const button = yearButton(years[yearIndex]);
                if (button.onClick) {
                  button.onClick(event as unknown as React.MouseEvent<HTMLElement, MouseEvent>);
                }
              }
            }}
          >
            {years.map((year, index) => {
              return (
                <MenuItem key={index} value={index}>
                  {year.year}
                </MenuItem>
              );
            })}
          </Select>
        </Stack>
        <Button variant={"tonal"} color={"primary"} {...addOffset({ months: 1 })} sx={{ padding: 0.5 }}>
          <ChevronRightIcon />
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Calendar calendar={calendars[0]} />
        {dualMonth && <Calendar calendar={calendars[2]} />}
      </Stack>
    </Box>
  );
};

export default DateRangePickerChildren;
