import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDropzone } from "react-dropzone";
import Typography from "@mui/material/Typography";

import { AddIcon } from "../Icons";
import LoadingButton from "../LoadingButton";

interface StyledBoxProps {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
}

interface Props extends StyledBoxProps {
  maxFileInfoMessage?: string;
  textWidth?: number | string;
  accept?: string;
  isLoading?: boolean;
  onChange?: (file: File) => void;
  onSubmit?: () => void;
  onError?: (error: Error) => void;
}

const StyledBox = styled(Box)<StyledBoxProps>(({ theme, width, height, radius }) => ({
  width: width ? width : 230,
  minWidth: width ? width : 230,
  height: height ? height : 120,
  borderRadius: radius ? radius : theme.spacing(1),
  border: `1px dashed ${theme.palette.other.outlinedBorder}`,
  display: "grid",
  placeItems: "center",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

interface CustomFile extends File {
  preview: string;
}

const FilUploadWithButton: React.FC<Props> = ({
  maxFileInfoMessage = "Allowed PNG or JPEG or SVG. Max size of 2 MB.\n" + "We recommend use SVG for Best Results",
  width = 230,
  height = 120,
  radius = "8px",
  textWidth,
  isLoading,
  onChange,
  onSubmit,
  onError,
}) => {
  const [file, setFile] = useState<CustomFile>();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles) {
        const file = acceptedFiles[0] as CustomFile;
        setFile(
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        if (onChange) onChange(acceptedFiles[0]);
      }
    },
    multiple: false,
    onError,
  });

  return (
    <Stack direction={"row"} alignItems={"center"} flexWrap={"wrap"} py={2} gap={2}>
      <StyledBox width={width} height={height} radius={radius} {...getRootProps()}>
        <input {...getInputProps()} />
        {file ? (
          <img
            src={file.preview}
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        ) : (
          <AddIcon color={"action"} />
        )}
      </StyledBox>
      <Stack spacing={2}>
        <Stack spacing={2} direction={"row"}>
          <LoadingButton loading={isLoading} onClick={onSubmit}>
            Submit
          </LoadingButton>
          <Button
            variant={"tonal"}
            color={"inherit"}
            size={"small"}
            onClick={() => {
              setFile(undefined);
            }}
          >
            Remove
          </Button>
        </Stack>
        <Typography variant={"caption"} color={"text.tertiary"} width={textWidth}>
          {maxFileInfoMessage}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FilUploadWithButton;
