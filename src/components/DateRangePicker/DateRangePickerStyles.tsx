import { DPDay } from "@rehookify/datepicker";
import { alpha, Box, styled } from "@mui/material";

export const DaysWrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  rowGap: "8px",
});
export const WeekDays = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  placeItems: "center",
  marginTop: 8,
  marginBottom: 8,
});

export const DaysButton = styled(Box, {
  shouldForwardProp: (prop: string) => {
    return !["$date", "inCurrentMonth", "now", "active"].includes(prop);
  },
})<DPDay>(({ theme, selected, disabled, inCurrentMonth, now }) => ({
  paddingInline: 4,
  color: theme.palette.text.primary,
  "& button": {
    fontSize: 12,
    color: "inherit",
    ...(selected && {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      opacity: "1",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    }),
  },
  overflow: "hidden",
  "&.range-start,&.in-range,&.range-end": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  "&.range-start,&.will-be-range-start": {
    borderRadius: "8px 0 0 8px !important",
    paddingLeft: 0,
    marginLeft: 4,
  },
  "&.range-end,&.will-be-range-end": {
    borderRadius: "0 8px 8px 0 !important",
    paddingRight: 0,
    marginRight: 4,
  },
  "&.will-be-in-range,&.will-be-range-start,&.will-be-range-end": {
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
  },
  "&:hover": { borderColor: theme.palette.primary.main },
  ...(disabled && { cursor: "not-allowed", opacity: "0.25" }),
  ...(!inCurrentMonth && { display: "none" }),
  ...(now && { borderWidth: "1px", borderColor: "#3B82F6" }),
}));
