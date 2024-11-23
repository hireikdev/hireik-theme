import React from "react";
import { ModalProps } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import LoadingButton from "../LoadingButton/LoadingButton";
import Modal from "../Modal/Modal";
import { DeleteModalIcon } from "../Icons";

type EditedModalProps = Omit<ModalProps, "children">;

interface DeleteModalProps extends EditedModalProps {
  title?: string;
  warningContent?: string;
  buttonText?: string;
  cancelButtonText?: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onConfirm?: () => void;
  isLoading?: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  open = false,
  onClose,
  title = "Are you sure, you want to delete this?",
  warningContent = "This operation cannot be undone.",
  buttonText = "Yes, Delete",
  cancelButtonText = "Cancel",
  onConfirm,
  isLoading,
  ...props
}) => {
  return (
    <Modal width={280} minWidth={200} open={open} onClose={onClose} {...props}>
      <>
        <Stack
          direction={"column"}
          alignItems='center'
          spacing={1}
          p={3}
          sx={{ textAlign: "center", marginInline: "auto" }}
        >
          <DeleteModalIcon sx={{ fontSize: "80px" }} color='error' />
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
          <LoadingButton loading={isLoading} variant={"contained"} color={"error"} onClick={onConfirm} fullWidth>
            {buttonText}
          </LoadingButton>
        </Stack>
      </>
    </Modal>
  );
};

export default DeleteModal;
