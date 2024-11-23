import React from "react";
import { ModalProps, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import LoadingButton from "../LoadingButton/LoadingButton";
import Modal from "../Modal/Modal";

const IconAvatar = styled(Avatar)(({ theme }) => ({
  width: "100px",
  height: "90px",
  backgroundColor: theme.palette.error.light,
}));

type EditedModalProps = Omit<ModalProps, "children">;

interface WarningModalProps extends EditedModalProps {
  title?: string;
  warningContent?: string;
  buttonText?: string;
  cancelButtonText?: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onConfirm?: () => void;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const WarningModal: React.FC<WarningModalProps> = ({
  open = false,
  onClose,
  title = "Delete",
  warningContent = "This operation cannot be undone.",
  buttonText = "Yes, Delete",
  cancelButtonText = "Cancel",
  onConfirm,
  isLoading,
  ...props
}) => {
  return (
    <Modal minWidth={200} open={open} onClose={onClose} {...props}>
      <>
        <Stack
          direction={"column"}
          alignItems='center'
          spacing={1}
          p={3}
          sx={{ width: 350, textAlign: "center", marginInline: "auto" }}
        >
          <IconAvatar>
            <Typography variant={"h1"} sx={{ fontSize: "70px" }} color='warning.main'>
              !
            </Typography>
          </IconAvatar>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='body2' color='text.tertiary'>
            {warningContent}
          </Typography>
        </Stack>
        <Divider light />
        <Stack direction={"row"} alignItems={"center"} spacing={2} p={3}>
          <Button variant={"tonal"} color={"inherit"} onClick={onClose} fullWidth>
            {cancelButtonText}
          </Button>
          <LoadingButton loading={isLoading} variant={"contained"} color={"warning"} onClick={onConfirm} fullWidth>
            {buttonText}
          </LoadingButton>
        </Stack>
      </>
    </Modal>
  );
};

export default WarningModal;
