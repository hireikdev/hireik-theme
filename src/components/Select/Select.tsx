import React from "react";
import MuiSelect, { SelectProps } from "@mui/material/Select";

type Props = SelectProps & {
  minWidth?: number | string;
  width?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
};

const Select: React.FC<Props> = ({ width, maxHeight, maxWidth, minWidth, fullWidth, children, ...props }) => {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: maxHeight ?? "220px",
      },
    },
  };

  const selectWidth = width ? width : fullWidth ? "100%" : "100px";

  return (
    <MuiSelect sx={{ width: selectWidth, minWidth, maxWidth }} MenuProps={MenuProps} {...props}>
      {children}
    </MuiSelect>
  );
};

export default Select;
