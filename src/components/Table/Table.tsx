import React from "react";
import { styled } from "@mui/material";
import MuiTable, { TableProps } from "@mui/material/Table";

interface Props extends TableProps {
  variant: "bordered" | "normal";
}

const Table = styled(MuiTable)<Props>(({ theme, variant }) => {
  if (variant === "bordered") {
    return {
      "& .MuiTableCell-root": {
        border: `1px solid ${theme.palette.other.outlinedBorder}`,
      },
    };
  }
  return {};
});

export default Table;
