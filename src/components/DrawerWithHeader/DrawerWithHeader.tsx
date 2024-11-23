import * as React from "react";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "../IconButton/IconButton";
import { CloseIcon } from "../Icons";

interface Props extends DrawerProps {
  width?: number;
  header: string;
  subheader?: string;
  icon?: React.JSX.Element;
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DrawerWithHeader: React.FC<Props> = ({
  width = 350,
  icon,
  header,
  subheader,
  children,
  anchor,
  open,
  onClose,
}) => {
  return (
    <div>
      <MuiDrawer
        anchor={anchor}
        open={open}
        onClose={onClose}
        PaperProps={{
          style: {
            width: anchor === "left" || anchor === "right" ? width : "100%",
          },
        }}
      >
        <Stack direction={"row"} justifyContent='space-between' alignItems='center' px={3} py={2}>
          <Stack direction='column' justifyContent={"center"} spacing={1}>
            <Typography
              variant='subtitle1'
              color='text.primary'
              sx={{ fontWeight: 500, display: "inline-flex", gap: "8px" }}
            >
              {icon && icon} {header}
            </Typography>
            {subheader && (
              <Typography variant='body2' color='text.secondary'>
                {subheader}
              </Typography>
            )}
          </Stack>

          <IconButton variant={"roundedBorder"} onClick={onClose} sx={{ padding: 0.25 }}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider light />
        {children}
      </MuiDrawer>
    </div>
  );
};
export default DrawerWithHeader;
