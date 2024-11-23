import React from "react";
import Box from "@mui/material/Box";
import { Grow, styled } from "@mui/material";
import Paper, { PaperProps } from "@mui/material/Paper";
import MuiModal, { ModalProps } from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import { CloseIcon } from "../Icons";
import IconButton from "../IconButton/IconButton";

interface Props extends ModalProps {
  minWidth?: number | string;
  width?: string | number;
  maxWidth?: string | number;
  disableOutSideClick?: boolean;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showCloseIcon?: boolean;
  autoScroll?: boolean;
}

interface PaperStyleProps extends PaperProps {
  minWidth?: number | string;
  width?: string | number;
  maxWidth?: string | number;
}

const PaperStyle = styled(Paper)<PaperStyleProps>(({ theme, minWidth, width, maxWidth }) => ({
  width: width ? width : 500,
  minWidth: minWidth ? minWidth : 500,
  maxWidth: maxWidth ? maxWidth : "none",
  minHeight: 100,
  maxHeight: "100vh",
  pointerEvents: "all",
  boxShadow: "none",
  border: 0,
  outline: 0,
  borderRadius: 12,
}));

const Modal: React.FC<Props> = ({ width, maxWidth, open, onClose,autoScroll = false, minWidth, children, showCloseIcon, ...props }) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      {...props}
    >
      <Grow in={open}>
        <Stack alignItems={"center"} justifyContent={"center"} sx={{ height: "100%", pointerEvents: "none" }}>
          <PaperStyle minWidth={minWidth} width={width} maxWidth={maxWidth}>
            {showCloseIcon && (
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
            )}
            <Box
                sx={{
                  overflowY: autoScroll ? "auto" : "unset",
                  height: "100%",
                }}
            >{children}</Box>
          </PaperStyle>
        </Stack>
      </Grow>
    </MuiModal>
  );
};

export default Modal;
