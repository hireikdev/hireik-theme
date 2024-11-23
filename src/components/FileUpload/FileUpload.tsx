import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React, { useCallback, useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormHelperText from "@mui/material/FormHelperText";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import { Accept, ErrorCode, FileRejection, useDropzone } from "react-dropzone";
import { CloseIcon, UploadFileFilledIcon, UploadIcon } from "../Icons";

const FileSize = styled(Box)(() => ({
  marginRight: 8,
  paddingRight: 8,
  position: "relative",
  "&:before": {
    content: '""',
    width: 3,
    height: 3,
    borderRadius: 2,
    position: "absolute",
    right: 0,
    top: "50%",
  },
}));

const CustomFileUpload = styled(Stack)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(3),
  border: `1.5px dashed ${theme.palette.other.outlinedBorder}`,
  borderRadius: 4,
  alignItems: "center",
  flex: 1,
  position: "relative",
  "& input": {
    display: "none",
  },
}));

interface FileUploadProps {
  accept?: Accept;
  variant?: "circular" | "linear";
  status?: "success" | "error" | "loading";
  error?: string;
  maxSizeMessage?: string;
  onChange: (file: File[]) => void;
  multiple?: boolean;
  maxSize?: number;
  onError?: (error: Error) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  maxSizeMessage = "Only Allow PDF, DOC, PPT, XLSX, PNG, JPG  (max. 2MB)",
  variant = "circular",
  error = "",
  status,
  onChange,
  multiple,
  maxSize,
  onError,
}) => {
  const [files, setFiles] = useState<File[]>();

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length) {
        const { file, errors } = fileRejections[0];
        const { name } = file;
        if (errors[0].code === ErrorCode.FileTooLarge) {
          onError && onError(new Error(`File ${name} is too large`));
        }
        return;
      }
      setFiles((files) => {
        const newFiles = files ? [...files, ...acceptedFiles] : acceptedFiles;
        return newFiles;
      });
      onChange(acceptedFiles);
    },
    [files]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: accept ?? {
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "image/jpeg": [".jpg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
      "text/plain": [".txt"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "application/vnd.ms-powerpoint": [".ppt"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": [".pptx"],
    },
    multiple,
    onDrop,
    maxSize: maxSize ? 1000 * maxSize : 1000 * 2000,
    onError
  });

  const removeFile = (fileIndex: number) => {
    setFiles((files) => {
      if (files) {
        const filteredFiles = files.filter((_, index) => fileIndex !== index);
        onChange(filteredFiles);
        return filteredFiles;
      }
      return files;
    });
  };

  return (
    <Stack spacing={2} flex={1} sx={{ bgcolor: "#fafafa" }}>
      <CustomFileUpload {...getRootProps()}>
        <input {...getInputProps()} />
        <UploadIcon color={"primary"} />
        <Typography variant={"body2"}>
          <Button variant={"noPadding"}>Click to upload</Button>
          &nbsp;or drag and drop
        </Typography>
        <FormHelperText sx={{ color: "text.tertiary", m: 0 }}>{maxSizeMessage}</FormHelperText>
      </CustomFileUpload>

      {files && files.length > 0 ? (
        <List>
          {files.map((file, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <IconButton
                    size={"small"}
                    edge='end'
                    onClick={() => {
                      removeFile(index);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  {variant === "circular" && status === "loading" && <CircularProgress size={24} />}
                </Stack>
              }
              sx={{ pr: 10 }}
            >
              <ListItemIcon>
                <UploadFileFilledIcon color={"primary"} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography noWrap sx={{ display: "block", width: "100%" }}>
                    {file.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant={"caption"}>
                      <FileSize
                        component={"span"}
                        sx={{
                          "&:before": {
                            bgcolor: error ? "error.main" : "text.secondary",
                          },
                        }}
                      >
                        {Math.ceil(file.size / 1024)} KB
                      </FileSize>
                      {status
                        ? status === "success"
                          ? "Completed"
                          : status === "error"
                          ? "Failed"
                          : status === "loading" && "Uploading"
                        : "Draft"}
                    </Typography>
                    {variant === "linear" && status === "loading" && <LinearProgress />}
                  </>
                }
                sx={{ flex: "unset" }}
              />
            </ListItem>
          ))}
        </List>
      ) : null}
    </Stack>
  );
};

export default FileUpload;
