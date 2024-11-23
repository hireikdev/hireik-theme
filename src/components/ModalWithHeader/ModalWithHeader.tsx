import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { ModalProps } from "@mui/material/Modal";
import IconButton from "../IconButton/IconButton";
import { CloseIcon } from "../Icons";
import Modal from "../Modal";

interface Props extends ModalProps {
  minWidth?: number | string;
  width?: string | number;
  maxWidth?: string | number;
  disableOutSideClick?: boolean;
  headerCloseIcon?: boolean;
  icon?: React.JSX.Element;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  subtitle?: string;
  autoScroll?: boolean;
}
const ModalWithHeader: React.FC<Props> = ({
  open,
  onClose,
  disableOutSideClick,
  children,
  icon,
  title,
  subtitle,
  minWidth,
  width = "max-content",
  maxWidth = "",
  headerCloseIcon = true,
  autoScroll = false,
  ...props
}) => {
  return (
    <Modal width={width} minWidth={minWidth} maxWidth={maxWidth} open={open} onClose={!disableOutSideClick ? onClose : () => false} showCloseIcon={false} {...props}>
      <>
        <Stack direction='row' justifyContent='space-between' alignItems='center' px={3} py={2}>
          <Stack justifyContent='center' spacing={1}>
            <Typography
              variant='subtitle1'
              color='text.primary'
              sx={{ fontWeight: 500, display: "inline-flex", gap: "8px" }}
            >
              {icon && icon} {title}
            </Typography>
            {subtitle && (
              <Typography variant='body2' color='text.secondary'>
                {subtitle}
              </Typography>
            )}
          </Stack>

          {headerCloseIcon && (
            <IconButton variant='roundedBorder' onClick={onClose} sx={{ padding: 0.25 }}>
              <CloseIcon />
            </IconButton>
          )}
        </Stack>
        <Divider />
        <Box
            sx={{
              maxHeight: 'calc(95vh - 62px)',
              overflowY: autoScroll ? 'auto' : 'unset',
              height: '100%',
            }}
        >{children}</Box>
      </>
    </Modal>
  );
};

export default ModalWithHeader;
