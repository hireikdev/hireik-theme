import * as React from "react";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "../IconButton/IconButton";
import { CloseIcon } from "../Icons";

interface Props extends DrawerProps {
  width?: number;
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Drawer: React.FC<Props> = ({ width = 350, children, anchor, open, onClose, ...props }) => {
  return (
    <MuiDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          width: anchor === "left" || anchor === "right" ? width : "100%",
        },
      }}
      {...props}
    >
      <Box sx={{ position: "relative" }}>
        <IconButton
          variant={"roundedBorder"}
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",
            padding: 0.25,
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      {children}
    </MuiDrawer>
  );
};
export default Drawer;
