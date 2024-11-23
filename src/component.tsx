import React from "react";
import { alpha, Components, darken, outlinedInputClasses, TypeAction } from "@mui/material";
import { PaletteTonalOffset } from "@mui/material/styles/createPalette";
import { lightModePalette } from "./palette";
import { CheckboxCheckedIcon, CheckboxUncheckedIcon, IndeterminateIcon } from "./components/Icons";

const propertyInObj = <T extends object>(color: string | number, obj?: T): string => {
  const key = color as keyof T;
  if (obj) {
    return color in obj ? String(obj[key]) : "";
  }
  return "";
};

const getTonalOffsetValue = (tonal?: PaletteTonalOffset) => {
  if (typeof tonal === "number") {
    return tonal;
  }
  if (tonal) {
    return tonal.light;
  }
  return 0.5;
};

const getOpacity = (action?: Partial<TypeAction>, opacity?: "selected" | "hover") => {
  if (action && action.selectedOpacity && opacity === "selected") {
    return action.selectedOpacity;
  }
  if (action && action.hoverOpacity && opacity === "hover") {
    return action.hoverOpacity;
  }
  return 0.5;
};

export const components: Components = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
    },
    variants: [
      {
        props: { variant: "tonal" },
        style: {},
      },
      {
        props: { variant: "noPadding" },
        style: {
          padding: 0,
        },
      },
    ],
    styleOverrides: {
      root: {
        minWidth: "max-content",
        fontWeight: "600",
        borderRadius: "8px",
      },
      sizeLarge: {
        padding: "8px 16px",
      },
      sizeMedium: {
        padding: "6px 12px",
      },
      sizeSmall: {
        padding: "4px 8px",
      },
      text: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      containedInherit: {
        backgroundColor: propertyInObj("secondary", lightModePalette.text),
        color: propertyInObj("contrastText", lightModePalette.text),
        "&:hover": {
          backgroundColor: propertyInObj("primary", lightModePalette.text),
        },
      },
      containedInheritWhite: {
        backgroundColor: propertyInObj("main", lightModePalette.inheritWhite),
        color: propertyInObj("primary", lightModePalette.text),
        "&:hover": {
          backgroundColor: propertyInObj("contrastText", lightModePalette.text),
        },
      },
      outlinedInherit: {
        borderColor: propertyInObj("secondary", lightModePalette.text),
        color: propertyInObj("secondary", lightModePalette.text),
      },
      tonalPrimary: {
        background: alpha(propertyInObj("light", lightModePalette.primary), 0.5),
        color: propertyInObj("dark", lightModePalette.primary),
        "&:hover": {
          background: propertyInObj("light", lightModePalette.primary),
        },
      },
      tonalSecondary: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.secondary),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("dark", lightModePalette.secondary),
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.secondary),
            getOpacity(lightModePalette.action, "selected")
          ),
        },
      },
      tonalError: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.error),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("dark", lightModePalette.error),
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.error),
            getOpacity(lightModePalette.action, "selected")
          ),
        },
      },
      tonalWarning: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.warning),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("dark", lightModePalette.warning),
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.warning),
            getOpacity(lightModePalette.action, "selected")
          ),
        },
      },
      tonalInfo: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.info),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("dark", lightModePalette.info),
        "&:hover": {
          backgroundColor: propertyInObj("light", lightModePalette.info),
        },
      },
      tonalSuccess: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.success),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("dark", lightModePalette.success),
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.success),
            getOpacity(lightModePalette.action, "selected")
          ),
        },
      },
      tonalInherit: {
        backgroundColor: alpha(
          propertyInObj("light", lightModePalette.text),
          getTonalOffsetValue(lightModePalette.tonalOffset)
        ),
        color: propertyInObj("secondary", lightModePalette.text),
        "&:hover": {
          color: propertyInObj("primary", lightModePalette.text),
          backgroundColor: propertyInObj("light", lightModePalette.text),
        },
      },
      tonalInheritWhite: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.inheritWhite),
          getTonalOffsetValue(lightModePalette.tonalOffset)
        ),
        color: propertyInObj("contrastText", lightModePalette.text),
        "&:hover": {
          backgroundColor: propertyInObj("light", lightModePalette.text),
        },
      },
      tonal: {
        "&.Mui-disabled": {
          backgroundColor: propertyInObj("disabled", lightModePalette.action),
        },
        "& .MuiLoadingButton-loadingIndicator": {
          left: "12px",
        },
      },
      noPadding: {
        "&:hover": { backgroundColor: "transparent" },
        "&.Mui-disabled": {
          color: propertyInObj("disabled", lightModePalette.action),
        },
        "& .MuiLoadingButton-loadingIndicator": {
          left: "2px",
        },
      },
      noPaddingPrimary: {
        color: propertyInObj("main", lightModePalette.primary),
        "&:hover": {
          color: propertyInObj("dark", lightModePalette.primary),
        },
      },
      noPaddingSecondary: {
        color: propertyInObj("main", lightModePalette.secondary),
        "&:hover": {
          color: propertyInObj("dark", lightModePalette.secondary),
        },
      },
      noPaddingError: {
        color: propertyInObj("main", lightModePalette.error),
        "&:hover": {
          color: propertyInObj("dark", lightModePalette.error),
        },
      },
      noPaddingWarning: {
        color: propertyInObj("main", lightModePalette.warning),
        "&:hover": {
          color: propertyInObj("dark", lightModePalette.warning),
        },
      },
      noPaddingInfo: {
        color: propertyInObj("main", lightModePalette.info),
        "&:hover": {
          color: propertyInObj("dark", lightModePalette.info),
        },
      },
      noPaddingSuccess: {
        color: propertyInObj("main", lightModePalette.success),
        "&:hover": {
          color: propertyInObj("dark", lightModePalette.success),
        },
      },
      noPaddingInherit: {
        color: propertyInObj("secondary", lightModePalette.text),
        "&:hover": {
          color: propertyInObj("primary", lightModePalette.text),
        },
      },
      noPaddingInheritWhite: {
        color: propertyInObj("contrastText", lightModePalette.text),
        "&:hover": {
          color: propertyInObj("light", lightModePalette.text),
        },
      },
    },
  },
  MuiChip: {
    variants: [
      {
        props: { size: "xSmall" },
        style: {
          height: 24,
          fontSize: 11,
        },
      },

      {
        props: { variant: "tonal" },
        style: {},
      },
    ],

    styleOverrides: {
      root: {
        "&:active": {
          boxShadow: "unset",
        },
        fontWeight: 500,
      },

      // Tonal
      tonalDefault: {
        backgroundColor: alpha(
          propertyInObj("primary", lightModePalette.text),
          getOpacity(lightModePalette.action, "hover")
        ),
      },
      tonalPrimary: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.primary),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("main", lightModePalette.primary),
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.primary),
            getOpacity(lightModePalette.action, "selected")
          ),
        },
      },
      tonalSecondary: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.secondary),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("main", lightModePalette.secondary),
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.secondary),
            getOpacity(lightModePalette.action, "selected")
          ),
        },
      },
      tonalError: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.error),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("main", lightModePalette.error),
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("light", lightModePalette.error),
            getOpacity(lightModePalette.action, "selected")
          ),
        },
      },
      tonalWarning: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.warning),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("main", lightModePalette.warning),
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.warning),
            getOpacity(lightModePalette.action, "selected")
          ),
        },
      },
      tonalInfo: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.info),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("main", lightModePalette.info),
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.info),
            getOpacity(lightModePalette.action, "selected")
          ),
        },
      },
      tonalSuccess: {
        backgroundColor: alpha(
          propertyInObj("main", lightModePalette.success),
          getOpacity(lightModePalette.action, "hover")
        ),
        color: propertyInObj("main", lightModePalette.success),
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.success),
            getOpacity(lightModePalette.action, "selected")
          ),
        },
      },

      // Tonal Delete Icon
      deleteIconTonalColorPrimary: {
        fill: propertyInObj("dark", lightModePalette.primary),
      },
      deleteIconTonalColorSecondary: {
        fill: propertyInObj("dark", lightModePalette.secondary),
      },
      deleteIconTonalColorError: {
        fill: propertyInObj("dark", lightModePalette.error),
      },
      deleteIconTonalColorWarning: {
        fill: propertyInObj("dark", lightModePalette.warning),
      },
      deleteIconTonalColorInfo: {
        fill: propertyInObj("dark", lightModePalette.info),
      },
      deleteIconTonalColorSuccess: {
        fill: propertyInObj("dark", lightModePalette.success),
      },

      // Avatar Color
      avatarColorDefault: {
        color: propertyInObj("white", lightModePalette.common),
      },
      avatarColorPrimary: {
        backgroundColor: propertyInObj("dark", lightModePalette.primary),
      },
      avatarColorSecondary: {
        backgroundColor: propertyInObj("dark", lightModePalette.primary),
      },
      avatarColorError: {
        backgroundColor: propertyInObj("dark", lightModePalette.error),
        color: propertyInObj("white", lightModePalette.common),
      },
      avatarColorWarning: {
        backgroundColor: propertyInObj("dark", lightModePalette.warning),
        color: propertyInObj("white", lightModePalette.common),
      },
      avatarColorInfo: {
        backgroundColor: propertyInObj("dark", lightModePalette.info),
        color: propertyInObj("white", lightModePalette.common),
      },
      avatarColorSuccess: {
        backgroundColor: propertyInObj("dark", lightModePalette.success),
        color: propertyInObj("white", lightModePalette.common),
      },

      // Code for default chip
      filledDefault: {
        backgroundColor: propertyInObj("selected", lightModePalette.action),
        "&:hover": {
          backgroundColor: propertyInObj("inputOutlinedEnabledBorder", lightModePalette.other),
        },
        "&:active": {
          backgroundColor: "transparent",
        },
      },

      colorDefault: {
        color: propertyInObj("secondary", lightModePalette.text),
      },

      // Global Code for small chip
      sizeSmall: {
        height: 30,
      },
      avatarSmall: {
        height: 22,
        width: 22,
        marginLeft: "5px",
      },

      // Global Code for xSmall chip
      avatarXSmall: {
        height: 20,
        width: 20,
        marginLeft: "4px",
      },
      deleteIconXSmall: {
        width: 16,
      },
    },
  },
  MuiRadio: {
    defaultProps: {
      color: "default",
    },
    variants: [
      {
        props: { size: "large" },
        style: {},
      },
    ],
    styleOverrides: {
      root: {
        "& .MuiSvgIcon-fontSizeLarge": {
          fontSize: "28px",
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        "&:hover": {
          backgroundColor: propertyInObj("hover", lightModePalette.action),
        },
      },
      outlinedPrimary: {
        borderColor: propertyInObj("hover", lightModePalette.primary),
      },
      sizeLarge: {
        "& .MuiSvgIcon-root": {
          fontSize: "36px",
        },
      },
      sizeSmall: {
        "& .MuiSvgIcon-root": {
          fontSize: "20px",
        },
      },
      colorPrimary: {
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.primary),
            lightModePalette.action?.hoverOpacity ?? 0
          ),
        },
      },
      colorSecondary: {
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.secondary),
            lightModePalette.action?.hoverOpacity ?? 0
          ),
        },
      },
      colorError: {
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.error),
            lightModePalette.action?.hoverOpacity ?? 0
          ),
        },
      },
      colorWarning: {
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.warning),
            lightModePalette.action?.hoverOpacity ?? 0
          ),
        },
      },
      colorInfo: {
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.info),
            lightModePalette.action?.hoverOpacity ?? 0
          ),
        },
      },
      colorInherit: {
        "&:hover": {
          backgroundColor: alpha(lightModePalette.text?.primary ?? "", lightModePalette.action?.hoverOpacity ?? 0),
        },
      },
      colorInheritWhite: {
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.inheritWhite),
            lightModePalette.action?.hoverOpacity ?? 0
          ),
        },
      },
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      containedInheritWhite: {
        grouped: {
          "&:not(:last-of-type)": {
            borderColor: propertyInObj("primary", lightModePalette.text),
          },
        },
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      sizeSmall: {
        positionStart: {
          marginRight: "-2px",
        },
      },
      positionStart: {
        marginRight: "-4px",
        "& svg": { margin: "8px -4px 8px 8px" },
        "& p": {
          fontSize: 14,
          height: "unset",
          borderRight: `1px solid ${propertyInObj("inputOutlinedEnabledBorder", lightModePalette.other)}`,
          padding: "8px 10px",
        },
        "&.MuiInputAdornment-sizeSmall": {
          "& p": { padding: "6px 10px" },
        },
      },
      positionEnd: {
        marginLeft: 0,
        "& svg": { margin: "8px 8px 8px -8px" },
        "& p": {
          fontSize: 14,
          height: "unset",
          borderLeft: `1px solid ${propertyInObj("inputOutlinedEnabledBorder", lightModePalette.other)}`,
          padding: "8px 10px",
        },
        "&.MuiInputAdornment-sizeSmall": {
          "& p": { padding: "6px 10px" },
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      hiddenLabel: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
        "& label.Mui-focused": {
          color: propertyInObj("secondary", lightModePalette.text),
        },
        input: {
          padding: "10px 13px",
        },
      },
    },
  },
  MuiInputLabel: {
    defaultProps: {
      shrink: true,
      disableAnimation: true,
      size: "small",
    },
    styleOverrides: {
      root: {
        position: "relative",
        transform: "unset",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "16px",
        letterSpacing: "-0.15px",
        marginBottom: "8px",
        "&.Mui-error": {
          "&.Mui-focused": {
            color: propertyInObj("main", lightModePalette.error),
          },
        },
      },
      sizeSmall: {
        fontSize: "14px",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: propertyInObj("primary", lightModePalette.text),
        borderColor: propertyInObj("inputOutlinedEnabledBorder", lightModePalette.other),
        backgroundColor: propertyInObj(50, lightModePalette.grey),
        borderRadius: "8px",
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: propertyInObj("inputOutlinedHoverBorder", lightModePalette.other),
        },
        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: propertyInObj("main", lightModePalette.primary),
        },
        "& legend": {
          display: "none",
        },
        "&.Mui-error": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.error),
            getOpacity(lightModePalette.action, "hover")
          ),
          input: {
            color: propertyInObj("main", lightModePalette.error),
          },
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: propertyInObj("main", lightModePalette.error),
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: propertyInObj("main", lightModePalette.error),
          },
        },
      },
      input: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        letterSpacing: "-0.25px",
        padding: "10px 13px",
      },
      inputMultiline: {
        padding: 0,
      },
      colorSecondary: {
        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: propertyInObj("main", lightModePalette.secondary),
        },
      },
      colorError: {
        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: propertyInObj("main", lightModePalette.error),
        },
      },
      colorWarning: {
        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: propertyInObj("main", lightModePalette.warning),
        },
      },
      colorInfo: {
        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: propertyInObj("main", lightModePalette.info),
        },
      },
      colorSuccess: {
        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: propertyInObj("main", lightModePalette.success),
        },
      },
      notchedOutline: {
        top: 0,
        borderColor: propertyInObj("inputOutlinedEnabledBorder", lightModePalette.other),
      },
      adornedStart: {
        paddingLeft: 0,
      },
      adornedEnd: {
        paddingRight: 0,
      },
      multiline: {
        padding: "10px 13px",
        [`&.${outlinedInputClasses.sizeSmall}`]: {
          padding: "8px 13px",
        },
      },
      sizeSmall: {
        input: {
          padding: "8px 13px",
        },
      },
    },
  },
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
        background: propertyInObj(50, lightModePalette.grey),
        "&.Mui-error": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.error),
            getOpacity(lightModePalette.action, "hover")
          ),
          input: {
            color: propertyInObj("main", lightModePalette.error),
          },
        },
      },
      input: {
        height: "unset",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        letterSpacing: "-0.25px",
      },
      adornedStart: {
        paddingLeft: 0,
      },
      adornedEnd: {
        paddingRight: 0,
      },
      sizeSmall: {
        input: {
          padding: "8px 13px",
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        "&:before": {
          borderColor: propertyInObj("inputOutlinedEnabledBorder", lightModePalette.other),
        },
        "&:hover:not(.Mui-disabled, .Mui-error):before": {
          borderColor: propertyInObj("inputOutlinedHoverBorder", lightModePalette.other),
        },
        "&.Mui-focused:after": {
          borderColor: propertyInObj("main", lightModePalette.primary),
        },
        "&.Mui-error": {
          input: {
            color: propertyInObj("main", lightModePalette.error),
          },
          "&.Mui-focused:after": {
            borderBottomColor: propertyInObj("main", lightModePalette.error),
          },
        },
      },
      input: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        letterSpacing: "-0.25px",
      },
      underline: {
        marginTop: "0 !important",
      },
      adornedStart: {
        paddingLeft: 0,
      },
      adornedEnd: {
        paddingRight: 0,
      },
      sizeSmall: {
        input: {
          padding: "8px 13px",
        },
      },
    },
  },
  MuiCheckbox: {
    defaultProps: {
      color: "default",
      icon: <CheckboxUncheckedIcon />,
      checkedIcon: <CheckboxCheckedIcon />,
      indeterminateIcon: <IndeterminateIcon />,
    },
    variants: [
      {
        props: { size: "large" },
        style: {
          svg: {
            width: "28px",
            height: "28px",
          },
        },
      },
      {
        props: { size: "medium" },
        style: {
          svg: {
            width: "24px",
            height: "24px",
          },
        },
      },
      {
        props: { size: "small" },
        style: {
          svg: {
            width: "16px",
            height: "16px",
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        "& .MuiSvgIcon-fontSizeLarge": {
          fontSize: "28px",
        },
        "&.Mui-disabled": {
          "& svg path": {
            fill: propertyInObj("disabled", lightModePalette.action),
          },
        },
      },
      colorPrimary: {
        "&.Mui-checked": {
          "& svg path": {
            fill: propertyInObj("main", lightModePalette.primary),
          },
        },
      },
      colorSecondary: {
        "&.Mui-checked": {
          "& svg path": {
            fill: propertyInObj("main", lightModePalette.secondary),
          },
        },
      },
      colorError: {
        "&.Mui-checked": {
          "& svg path": {
            fill: propertyInObj("main", lightModePalette.error),
          },
        },
      },
      colorInfo: {
        "&.Mui-checked": {
          "& svg path": {
            fill: propertyInObj("main", lightModePalette.info),
          },
        },
      },
      colorWarning: {
        "&.Mui-checked": {
          "& svg path": {
            fill: propertyInObj("main", lightModePalette.warning),
          },
        },
      },
      colorSuccess: {
        "&.Mui-checked": {
          "& svg path": {
            fill: propertyInObj("main", lightModePalette.success),
          },
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: propertyInObj("secondary", lightModePalette.text),
        margin: "6px 14px 0 0",
        fontSize: "12px",
        fontWeight: 400,
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        "& label.Mui-focused": {
          color: propertyInObj("secondary", lightModePalette.text),
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        "&.MuiInputBase-inputSizeSmall": {
          padding: "8px 13px",
          paddingRight: "36px",
        },
      },
      standard: {
        "&:before": { content: "none" },
      },
    },
  },
  MuiSwitch: {
    defaultProps: {
      color: "default",
    },
    variants: [
      {
        props: { variant: "filled", size: "medium" },
        style: {
          padding: 8,
          "& .MuiSwitch-track": {
            borderRadius: 22 / 2,
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "none",
            width: 16,
            height: 16,
            margin: 2,
          },
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              // "& + .MuiSwitch-track": { opacity: 1 },
              "& .MuiSwitch-thumb": {
                backgroundColor: propertyInObj("white", lightModePalette.common),
              },
            },
          },
        },
      },
      {
        props: { variant: "filled", size: "small" },
        style: {
          padding: 4,
          "& .MuiSwitch-track": {
            borderRadius: 16 / 2,
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "none",
            width: 12,
            height: 12,
            margin: 2,
          },
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              "& + .MuiSwitch-track": { opacity: 1 },
              "& .MuiSwitch-thumb": {
                backgroundColor: propertyInObj("white", lightModePalette.common),
              },
            },
          },
        },
      },
      {
        props: { variant: "withIcon", size: "medium" },
        style: {
          padding: 8,
          "& .MuiSwitch-track": {
            borderRadius: 22 / 2,
            "&:before, &:after": {
              content: '""',
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: 16,
              height: 16,
            },
            "&:before": {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
              left: 12,
            },
            "&:after": {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"><path d="M7.19354 6.49937L10.7092 2.30875C10.7681 2.2391 10.7185 2.1333 10.6275 2.1333H9.55872C9.49578 2.1333 9.43551 2.16143 9.39399 2.20964L6.49444 5.66634L3.59488 2.20964C3.5547 2.16143 3.49444 2.1333 3.43015 2.1333H2.3614C2.27033 2.1333 2.22078 2.2391 2.2797 2.30875L5.79533 6.49937L2.2797 10.69C2.2665 10.7055 2.25803 10.7245 2.2553 10.7447C2.25257 10.7649 2.25569 10.7854 2.26429 10.8039C2.2729 10.8224 2.28662 10.838 2.30383 10.8489C2.32104 10.8598 2.34102 10.8656 2.3614 10.8654H3.43015C3.4931 10.8654 3.55336 10.8373 3.59488 10.7891L6.49444 7.33241L9.39399 10.7891C9.43417 10.8373 9.49444 10.8654 9.55872 10.8654H10.6275C10.7185 10.8654 10.7681 10.7596 10.7092 10.69L7.19354 6.49937Z" fill="white"/></svg>')`,
              right: 12,
              width: 13,
              height: 13,
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "none",
            width: 16,
            height: 16,
            margin: 2,
          },
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              "& + .MuiSwitch-track": { opacity: 1 },
              "& .MuiSwitch-thumb": {
                backgroundColor: propertyInObj("white", lightModePalette.common),
              },
            },
          },
        },
      },
      {
        props: { variant: "withIcon", size: "small" },
        style: {
          padding: 4,
          "& .MuiSwitch-track": {
            borderRadius: 16 / 2,
            "&:before, &:after": {
              content: '""',
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: 12,
              height: 12,
            },
            "&:before": {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 24 24"><path fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
              left: 7,
            },
            "&:after": {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16"><path d="M7.19354 6.49937L10.7092 2.30875C10.7681 2.2391 10.7185 2.1333 10.6275 2.1333H9.55872C9.49578 2.1333 9.43551 2.16143 9.39399 2.20964L6.49444 5.66634L3.59488 2.20964C3.5547 2.16143 3.49444 2.1333 3.43015 2.1333H2.3614C2.27033 2.1333 2.22078 2.2391 2.2797 2.30875L5.79533 6.49937L2.2797 10.69C2.2665 10.7055 2.25803 10.7245 2.2553 10.7447C2.25257 10.7649 2.25569 10.7854 2.26429 10.8039C2.2729 10.8224 2.28662 10.838 2.30383 10.8489C2.32104 10.8598 2.34102 10.8656 2.3614 10.8654H3.43015C3.4931 10.8654 3.55336 10.8373 3.59488 10.7891L6.49444 7.33241L9.39399 10.7891C9.43417 10.8373 9.49444 10.8654 9.55872 10.8654H10.6275C10.7185 10.8654 10.7681 10.7596 10.7092 10.69L7.19354 6.49937Z" fill="white"/></svg>')`,
              right: 9,
              width: 10,
              height: 10,
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "none",
            width: 12,
            height: 12,
            margin: 2,
          },
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              "& + .MuiSwitch-track": { opacity: 1 },
              "& .MuiSwitch-thumb": {
                backgroundColor: propertyInObj("white", lightModePalette.common),
              },
            },
          },
        },
      },
      {
        props: { variant: "onOff", size: "medium" },
        style: {
          padding: 8,
          width: 65,
          "& .MuiSwitch-track": {
            borderRadius: 22 / 2,
            "&:before, &:after": {
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 12,
              color: propertyInObj("light", lightModePalette.text),
            },
            "&:after": {
              content: '"OFF"',
              right: 13,
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "none",
            width: 16,
            height: 16,
            margin: 2,
          },
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              transform: "translateX(27px)",
              "& + .MuiSwitch-track": {
                opacity: 1,
                "&:before": {
                  content: '"ON"',
                  left: 14,
                },
                "&:after": {
                  content: "none",
                },
              },
              "& .MuiSwitch-thumb": {
                backgroundColor: propertyInObj("white", lightModePalette.common),
              },
            },
          },
        },
      },
      {
        props: { variant: "onOff", size: "small" },
        style: {
          padding: 4,
          width: 43,
          "& .MuiSwitch-track": {
            borderRadius: 16 / 2,
            "&:before, &:after": {
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 9,
              color: propertyInObj("light", lightModePalette.text),
            },
            "&:after": {
              content: '"OFF"',
              right: 7,
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "none",
            width: 12,
            height: 12,
            margin: 2,
          },
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              transform: "translateX(19px)",
              "& + .MuiSwitch-track": {
                opacity: 1,
                "&:before": {
                  content: '"ON"',
                  left: 8,
                },
                "&:after": {
                  content: "none",
                },
              },
              "& .MuiSwitch-thumb": {
                backgroundColor: propertyInObj("white", lightModePalette.common),
              },
            },
          },
        },
      },
    ],
    styleOverrides: {
      track: {
        backgroundColor: propertyInObj("primary", lightModePalette.text),
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        lineHeight: "24px",
        letterSpacing: "-0.25px",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        "&:hover": {
          backgroundColor: alpha(
            propertyInObj("main", lightModePalette.primary),
            lightModePalette.action?.selectedOpacity ?? 0
          ),
        },
        paddingInline: 12,
        fontSize: 14,
        "& .MuiListItemIcon-root": {
          minWidth: "unset",
        },
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        "& .MuiListItemText-primary": {
          fontWeight: 500,
          fontSize: 15,
          lineHeight: "18px",
          letterSpacing: "-0.35px",
        },
        "&.MuiListItemText-dense": {
          "& .MuiListItemText-primary": {
            fontWeight: 400,
            fontSize: 14,
          },
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      padding: {
        padding: "8px",
      },
      dense: {
        "& .MuiMenuItem-root": {
          paddingInline: 16,
        },
        "& .MuiListItemIcon-root": {
          marginRight: 8,
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: "unset",
        marginRight: 16,
        color: propertyInObj("secondary", lightModePalette.text),
      },
    },
  },
  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
    styleOverrides: {
      tooltip: {
        backgroundColor: propertyInObj("secondary", lightModePalette.text),
      },
      arrow: {
        "&:before": {
          backgroundColor: propertyInObj("secondary", lightModePalette.text),
        },
      },
      popper: {
        "&[data-popper-placement*='right']": {
          "& .MuiTooltip-arrow": {
            "&:before": {
              borderBottomLeftRadius: 2,
            },
          },
        },
        "&[data-popper-placement*='left']": {
          "& .MuiTooltip-arrow": {
            "&:before": {
              borderTopRightRadius: 2,
            },
          },
        },
        "&[data-popper-placement*='top']": {
          "& .MuiTooltip-arrow": {
            "&:before": {
              borderBottomRightRadius: 2,
            },
          },
        },
        "&[data-popper-placement*='bottom']": {
          "& .MuiTooltip-arrow": {
            "&:before": {
              borderTopLeftRadius: 2,
            },
          },
        },
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        "&.Mui-selected": {
          "& .MuiListItemText-primary,& .MuiListItemIcon-root": {
            color: propertyInObj("main", lightModePalette.primary),
          },
        },
      },
    },
  },
  MuiAvatarGroup: {
    defaultProps: {
      size: "medium",
    },
    variants: [
      {
        props: { size: "large" },
        style: {
          "& .MuiAvatar-root": {
            height: "36px",
            width: "36px",
            fontSize: 20,
          },
        },
      },
      {
        props: { size: "medium" },
        style: {
          "& .MuiAvatar-root": {
            height: "28px",
            width: "28px",
            fontSize: 20,
          },
        },
      },
      {
        props: { size: "small" },
        style: {
          "& .MuiAvatar-root": {
            height: "20px",
            width: "20px",
            fontSize: 12,
          },
        },
      },
    ],
  },
  MuiRating: {
    styleOverrides: {
      root: {
        color: propertyInObj("ratingActiveFill", lightModePalette.other),
      },
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      rounded: {
        "&.MuiPaginationItem-previousNext": {
          backgroundColor: propertyInObj("paperElevation0", lightModePalette.background),
        },
        "&.MuiPaginationItem-firstLast": {
          backgroundColor: propertyInObj("paperElevation0", lightModePalette.background),
        },
      },
    },
  },
  MuiTableCell: {
    variants: [
      {
        props: { variant: "bordered" },
        style: {
          border: `1px solid ${propertyInObj("outlinedBorder", lightModePalette.other)}`,
        },
      },
    ],
    styleOverrides: {
      head: {
        backgroundColor: propertyInObj("graySolid", lightModePalette.other),
        borderTop: `1px solid ${propertyInObj("outlinedBorder", lightModePalette.other)}`,
        borderBottom: `1px solid ${propertyInObj("outlinedBorder", lightModePalette.other)}`,
        textTransform: "uppercase",
        color: propertyInObj("tertiary", lightModePalette.text),
        fontSize: "12px",
        "&:first-of-type": {
          borderLeft: `1px solid ${propertyInObj("outlinedBorder", lightModePalette.other)}`,
        },
        "&:last-of-type": {
          borderRight: `1px solid ${propertyInObj("outlinedBorder", lightModePalette.other)}`,
        },
      },
      root: {
        borderBottom: `1px solid ${propertyInObj("outlinedBorder", lightModePalette.other)}`,
        padding: "12px 16px",
      },
    },
  },
  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
      elevation: 0,
    },
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${alpha(propertyInObj("primary", lightModePalette.text), 0.06)}`,
        "&:before": {
          content: "none",
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        gap: 8,
        padding: "0 8px",
      },
      content: {
        margin: "8px 0",
        alignItems: "center",
        gap: 8,
      },
    },
  },
  MuiSlider: {
    styleOverrides: {
      thumb: {
        display: "none",
      },
    },
  },
  MuiBadge: {
    variants: [
      {
        props: { color: "default" },
        style: {
          "& .MuiBadge-badge": {
            backgroundColor: propertyInObj("tertiary", lightModePalette.text),
            color: propertyInObj("contrastText", lightModePalette.text),
          },
        },
      },
    ],
  },
  MuiAlert: {
    styleOverrides: {
      standardPrimary: {
        backgroundColor: propertyInObj("light", lightModePalette.primary),
        color: darken(propertyInObj("main", lightModePalette.primary), 1),
      },
      standardSecondary: {
        backgroundColor: propertyInObj("light", lightModePalette.secondary),
        color: propertyInObj("dark", lightModePalette.secondary),
      },
      standardError: {
        backgroundColor: propertyInObj("light", lightModePalette.error),
        color: propertyInObj("dark", lightModePalette.error),
      },
      standardWarning: {
        backgroundColor: propertyInObj("light", lightModePalette.warning),
        color: propertyInObj("dark", lightModePalette.warning),
      },
      standardInfo: {
        backgroundColor: propertyInObj("light", lightModePalette.info),
        color: propertyInObj("dark", lightModePalette.info),
      },
      standardSuccess: {
        backgroundColor: propertyInObj("light", lightModePalette.success),
        color: propertyInObj("dark", lightModePalette.success),
      },

      outlinedPrimary: {
        borderColor: propertyInObj("main", lightModePalette.primary),
        color: darken(propertyInObj("main", lightModePalette.primary), 1),
      },
      outlinedSecondary: {
        borderColor: propertyInObj("main", lightModePalette.secondary),
        color: propertyInObj("dark", lightModePalette.secondary),
      },
      outlinedError: {
        borderColor: propertyInObj("main", lightModePalette.error),
        color: propertyInObj("dark", lightModePalette.error),
      },
      outlinedWarning: {
        borderColor: propertyInObj("main", lightModePalette.warning),
        color: propertyInObj("dark", lightModePalette.warning),
      },
      outlinedInfo: {
        borderColor: propertyInObj("main", lightModePalette.info),
        color: propertyInObj("dark", lightModePalette.info),
      },
      outlinedSuccess: {
        borderColor: propertyInObj("main", lightModePalette.success),
        color: propertyInObj("dark", lightModePalette.success),
      },

      filledWarning: {
        color: propertyInObj("contrastText", lightModePalette.warning),
      },
      filledInfo: {
        color: propertyInObj("contrastText", lightModePalette.info),
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: propertyInObj("tertiary", lightModePalette.text),
      },
    },
  },
};
