import React from "react";
import { styled, alpha } from "@mui/material";
import ReactSelect, { Props } from "react-select";

export type ReactSelectProps<T = unknown, Multi extends boolean = false> = Omit<Props<T, Multi>, "isMulti"> & {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  OptionsMaxHeight?: number;
};

const StyledSelect = styled(ReactSelect)<ReactSelectProps>(
  ({ theme, OptionsMaxHeight = 200, classNamePrefix, width, minWidth, maxWidth }) => {
    return {
      [`& .${classNamePrefix}__control`]: {
        minWidth: minWidth ? minWidth : "100px",
        width: width ? width : "100%",
        maxWidth: maxWidth ? maxWidth : "none",
        minHeight: 40,
        borderRadius: "8px",
        backgroundColor: theme.palette.grey[50],
        borderColor: theme.palette.other.inputOutlinedEnabledBorder,
        "&:hover": {
          borderColor: theme.palette.other.inputOutlinedHoverBorder,
        },
        [`&.${classNamePrefix}__control--is-focused`]: {
          borderColor: theme.palette.primary.main,
        },
        [`& .${classNamePrefix}__multi-value`]: {
          ...theme.typography.body1,
          fontSize: "14px",
          [`& .${classNamePrefix}__multi-value__remove`]: {
            cursor: "pointer",
          },
        },
        [`& .${classNamePrefix}__placeholder`]: {
          ...theme.typography.body1,
          fontSize: "14px",
        },
      },
      [`& .${classNamePrefix}__menu`]: {
        zIndex: 9,
        minWidth: minWidth ? minWidth : "100px",
        width: width ? width : "100%",
        maxWidth: maxWidth ? maxWidth : "none",
        marginTop: 0,
        boxShadow: theme.shadows[5],
        [`& .${classNamePrefix}__menu-list`]: {
          padding: theme.spacing(1),
          maxHeight: OptionsMaxHeight,
          ...theme.typography.body1,
          fontSize: "14px",
          [`& .${classNamePrefix}__option`]: {
            borderRadius: 6,
            cursor: "pointer",
            [`&.${classNamePrefix}__option--is-focused`]: {
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
            },
            [`&.${classNamePrefix}__option--is-selected`]: {
              color: "initial",
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
            },
          },
        },
      },
      "&.rounded": {
        [`& .${classNamePrefix}__control`]: {
          [`& .${classNamePrefix}__multi-value`]: {
            borderRadius: "15px",
            overflow: "hidden",
            lineHeight: "unset",
          },
        },
      },
    };
  }
) as ReactSelect;

export default StyledSelect;
