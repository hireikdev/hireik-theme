import {} from "@mui/material/Chip";

declare module "@mui/material/Chip" {
  interface ChipPropsSizeOverrides {
    xSmall: true;
  }

  interface ChipPropsVariantOverrides {
    tonal: true;
  }

  interface ChipClasses {
    tonalDefault: true;
    tonalPrimary: true;
    tonalSecondary: true;
    tonalError: true;
    tonalWarning: true;
    tonalInfo: true;
    tonalSuccess: true;
    deleteIconTonalColorPrimary: true;
    deleteIconTonalColorSecondary: true;
    deleteIconTonalColorError: true;
    deleteIconTonalColorWarning: true;
    deleteIconTonalColorInfo: true;
    deleteIconTonalColorSuccess: true;
    avatarColorDefault: true;
    avatarColorError: true;
    avatarColorWarning: true;
    avatarColorInfo: true;
    avatarColorSuccess: true;
    filledDefault: true;
    colorDefault: true;
    avatarXSmall: true;
    deleteIconXSmall: true;
  }
}
